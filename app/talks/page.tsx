"use client";

import FeedCard from "@/components/feed-card";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed } from "@/utilities/content";
import { ArrowBackRounded } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <main>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Box sx={{}}>
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
                  Talks
                </Typography>
                <Box />
              </Stack>
              <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
                {feed
                  .filter((feed) => feed.type == "talk")
                  .map((feed) => (
                    <FeedCard key={feed.title} feed={feed} />
                  ))}
              </Masonry>
            </Container>
          </Box>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </main>
  );
}
