"use client";

import WrongResource from "@/components/wrong-resource";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed, profile } from "@/utilities/content";
import { SlugPage } from "@/utilities/definitions";
import { ArrowBackRounded, OpenInNew, ShareRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  ListItemText,
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
            <Stack direction="row" spacing={0.5} alignItems="center">
              {thisFeed.productLink && (
                <Button
                  variant="outlined"
                  endIcon={<OpenInNew />}
                  onClick={() => window.open(thisFeed.productLink)}
                >
                  View
                </Button>
              )}
              <IconButton
                onClick={() => {
                  const data = {
                    url: window.location.href,
                    title: `${thisFeed.title} | Projects | ${profile.name}`,
                    text: `View ${profile.name}'s project (${thisFeed.title}) on ${window.location.href}`,
                  };
                  window.navigator.canShare(data) &&
                    window.navigator.share(data);
                }}
              >
                <ShareRounded />
              </IconButton>
            </Stack>
          </Stack>
          <Box
            sx={{
              mt: 2,
              borderRadius: 1,
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundColor: palette.background.paper,
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
          <Card elevation={resolvedTheme == "light" ? 0 : 4} sx={{ mt: 2 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={thisFeed.details?.startDate}
                    secondary="Start Date"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={thisFeed.details?.endDate}
                    secondary="End Date"
                  />
                </Grid>
                {thisFeed.details?.releasedDate && (
                  <Grid item xs={12} sm={6}>
                    <ListItemText
                      primary={thisFeed.details?.releasedDate}
                      secondary="Released"
                    />
                  </Grid>
                )}
                <Grid item xs={12} sm={6}>
                  <ListItemText
                    primary={thisFeed.details?.projectType + " Project"}
                    secondary="Type"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          {thisFeed.links?.length > 0 && (
            <Card elevation={resolvedTheme == "light" ? 0 : 4} sx={{ mt: 2 }}>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  Associated Links
                </Typography>
                {thisFeed.githubLink && (
                  <Button
                    onClick={() => window.open(thisFeed.githubLink)}
                    endIcon={<OpenInNew />}
                    sx={{ mr: 1, mb: 1 }}
                    variant="outlined"
                  >
                    Github
                  </Button>
                )}
                {thisFeed.links?.map((link) => (
                  <Button
                    key={link.label}
                    onClick={() => window.open(link.url)}
                    endIcon={<OpenInNew />}
                    sx={{ mr: 1, mb: 1 }}
                    variant="outlined"
                  >
                    {link.label}
                  </Button>
                ))}
              </CardContent>
            </Card>
          )}
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </main>
  );
}
