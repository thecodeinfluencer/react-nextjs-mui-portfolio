"use client";

import FeedCard from "@/components/feed-card";
import { feed } from "@/utilities/content";
import { cardContainer } from "@/utilities/framer";
import { Masonry } from "@mui/lab";
import { Box, Container, Paper, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function FeedSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <Paper
      square
      sx={{
        py: 10,
        borderTop: ({ palette }) => `2px solid ${palette.divider}`,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Featured (<SectionLink href="/projects">Projects</SectionLink>,{" "}
          <SectionLink href="/blogs">Blogs</SectionLink>,{" "}
          <SectionLink href="/talks">Talks</SectionLink>,)
        </Typography>
        <Masonry
          spacing={2}
          columns={{ xs: 1, sm: 2, md: 3 }}
          component={motion.div}
          variants={cardContainer}
          initial="hidden"
          animate="visible"
        >
          {feed
            .filter(({ featured }) => featured)
            .map((feed) => (
              <FeedCard key={feed.title} feed={feed} />
            ))}
        </Masonry>
      </Container>
    </Paper>
  );
}

type Props = { href: string; children: React.ReactNode };

const SectionLink = ({ href, children }: Props) => {
  const { palette } = useTheme();

  return (
    <Box
      sx={{
        textDecoration: "underline",
        color: palette.primary.main,
        cursor: "pointer",
      }}
      component={Link}
      href={href}
    >
      {children}
    </Box>
  );
};
