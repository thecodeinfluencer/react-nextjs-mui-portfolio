"use client";

import FeedCard from "@/components/feed-card";
import { feed } from "@/utilities/content";
import { Masonry } from "@mui/lab";
import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
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
          Feed
        </Typography>
        <Masonry columns={{ xs: 1, sm: 2, md: 3 }}>
          {feed.map((feed) => (
            <FeedCard key={feed.title} feed={feed} />
          ))}
        </Masonry>
      </Container>
    </Box>
  );
}
