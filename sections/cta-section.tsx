"use client";

import { Box, Container, Typography, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";
import SocialsSection from "./socials-section";

export default function CTASection() {
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
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h6">
          Wanna do coffee and chat?
        </Typography>
        <SocialsSection />
      </Container>
    </Box>
  );
}
