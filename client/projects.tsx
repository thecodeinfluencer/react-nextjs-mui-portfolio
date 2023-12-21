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
import { motion } from "framer-motion";
import { cardContainer, cardItem } from "@/utilities/framer";

export default function ProjectsPageClient() {
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
              Projects
            </Typography>
            <Box />
          </Stack>
          <Masonry
            component={motion.div}
            variants={cardContainer}
            initial="hidden"
            animate="visible"
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3 }}
          >
            {feed
              .filter((feed) => feed.type == "project")
              .map((feed) => (
                <motion.div key={feed.title} variants={cardItem}>
                  <FeedCard key={feed.title} feed={feed} />
                </motion.div>
              ))}
          </Masonry>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}
