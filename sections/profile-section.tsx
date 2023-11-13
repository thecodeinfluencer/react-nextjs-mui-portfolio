"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialsSection from "./socials-section";

const { name, tagline, description, gravatarUrl } = profile;

export default function ProfileSection() {
  const [isClient, setIsClient] = useState(false);

  const { palette } = useTheme();
  const { resolvedTheme } = useNextTheme();

  const imageSize = 280;

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 10,
        borderRadius: 0,
        backgroundColor:
          resolvedTheme == "dark"
            ? palette.grey[900]
            : palette.background.default,
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ height: appBarHeight }} />
        <Stack spacing={2} alignItems="center">
          <Image
            src={gravatarUrl}
            alt="Vercel Logo"
            width={imageSize}
            height={imageSize}
            style={{ borderRadius: "50%" }}
          />
          <Stack spacing={0.5} alignItems="center">
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h6">{tagline}</Typography>
            <Typography sx={{ maxWidth: 500, textAlign: "center" }}>
              {description}
            </Typography>
          </Stack>
          <SocialsSection />
        </Stack>
      </Container>
    </Box>
  );
}
