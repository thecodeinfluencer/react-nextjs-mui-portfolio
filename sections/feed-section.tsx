"use client";

import FeedCard from "@/components/feed-card";
import { feed } from "@/utilities/content";
import { Masonry } from "@mui/lab";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function FeedSection() {
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor:
          resolvedTheme == "light" ? "#f8f8f8" : palette.background.paper,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Featured (<SectionLink href="/projects">Projects</SectionLink>,{" "}
          <SectionLink href="/blogs">Blogs</SectionLink>,{" "}
          <SectionLink href="/talks">Talks</SectionLink>,)
        </Typography>
        <Masonry spacing={2} columns={{ xs: 1, sm: 2, md: 3 }}>
          {feed
            .filter(({ featured }) => featured)
            .map((feed) => (
              <FeedCard key={feed.title} feed={feed} />
            ))}
        </Masonry>
      </Container>
    </Box>
  );
}

type Props = { href: string; children: React.ReactNode };

const SectionLink = ({ href, children }: Props) => {
  const router = useRouter();
  const { palette } = useTheme();

  return (
    <span
      style={{
        textDecoration: "underline",
        color: palette.primary.main,
        cursor: "pointer",
      }}
      onClick={() => router.replace(href)}
    >
      {children}
    </span>
  );
};
