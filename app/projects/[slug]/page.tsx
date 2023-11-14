"use client";

import WrongResource from "@/components/wrong-resource";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed } from "@/utilities/content";
import { SlugPage } from "@/utilities/definitions";
import { ArrowBackRounded, OpenInNew } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

export default function ViewProjectPage({ params }: SlugPage) {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  const thisFeed = feed.find((feed) => `${feed.id}` == params.slug);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;
  if (thisFeed?.type != "project") return <WrongResource resource="project" />;

  return (
    <main>
      <Box
        sx={{
          py: 10,
          backgroundColor:
            resolvedTheme == "light" ? "#f8f8f8" : palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Button
              startIcon={<ArrowBackRounded />}
              onClick={() => router.replace("/projects")}
            >
              Projects
            </Button>
            <Stack direction="row" spacing={2}>
              {thisFeed.githubLink && (
                <Button
                  variant="outlined"
                  endIcon={<OpenInNew />}
                  onClick={() => window.open(thisFeed.githubLink)}
                >
                  Github
                </Button>
              )}
              {thisFeed.productLink && (
                <Button
                  variant="outlined"
                  endIcon={<OpenInNew />}
                  onClick={() => window.open(thisFeed.productLink)}
                >
                  View
                </Button>
              )}
            </Stack>
          </Stack>
          <Box
            sx={{
              mt: 2,
              borderRadius: 1,
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundImage: `url(${thisFeed?.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Box sx={{ mt: 2 }}>
            {thisFeed?.tags?.map((tag) => (
              <Chip
                variant="outlined"
                key={tag}
                label={tag}
                sx={{ mr: 1, mb: 1 }}
              />
            ))}
          </Box>
          <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
            {thisFeed?.title}
          </Typography>
          <Typography sx={{ mt: 2 }}>{thisFeed?.description}</Typography>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </main>
  );
}
