"use client";

import FeedCard from "@/components/feed-card";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed } from "@/utilities/content";
import { ArrowBackRounded } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useTheme as useNextTheme } from "next-themes";
import { appURL } from "@/utilities/constants";

export default function GetPage() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <>
      <Box
        sx={{
          py: 10,
          backgroundColor:
            resolvedTheme == "light" ? "#f8f8f8" : palette.background.paper,
        }}
      >
        <Container maxWidth="md">
          <Stack
            sx={{ mb: 8 }}
            direction="row"
            alignItems="center"
            spacing={2}
            justifyContent="space-between"
          >
            <Button
              startIcon={<ArrowBackRounded />}
              onClick={() => router.replace("/")}
            >
              Home
            </Button>
            <Typography sx={{ textAlign: "center" }} variant="h5">
              Get Template
            </Typography>
            <Box />
          </Stack>
          <Box
            sx={{
              mt: 2,
              borderRadius: 1,
              width: "100%",
              height: { xs: 200, sm: 300, md: 400 },
              backgroundColor: palette.background.paper,
              backgroundImage: `url(${appURL}/images/hero.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Typography sx={{ mt: 2 }}>
            This template is available to fork and/or downloadfor free! I only
            ask that you star it and/or contribute to it. You can also buy this
            template on Gumroad to support me. Thanks!
          </Typography>
          {/* <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
            {feed
              .filter((feed) => feed.type == "project")
              .map((feed) => (
                <FeedCard key={feed.title} feed={feed} />
              ))}
          </Masonry> */}
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}
