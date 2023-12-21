"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { cardItem, textContainer } from "@/utilities/framer";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialsSection from "./socials-section";

const { name, tagline, description, gravatarUrl } = profile;

export default function ProfileSection() {
  const [isClient, setIsClient] = useState(false);

  const { palette } = useTheme();
  const { resolvedTheme } = useNextTheme();

  const below600 = useMediaQuery("(max-width: 600px)");
  const imageSize = below600 ? 180 : 280;

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      component={motion.div}
      sx={{
        background:
          resolvedTheme == "dark"
            ? profile.primaryColor
            : `${profile.primaryColor}22`,
      }}
    >
      <Box
        sx={{
          py: 10,
          background:
            resolvedTheme == "dark"
              ? `${palette.grey[900]}EE`
              : `${palette.background.default}22`,
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
            <Stack
              component={motion.div}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              spacing={0.5}
              alignItems="center"
            >
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={cardItem}
              >
                {name}
              </Typography>
              <Typography
                variant="h6"
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={cardItem}
              >
                {tagline}
              </Typography>
              <Typography
                sx={{ maxWidth: 500, textAlign: "center" }}
                component={motion.div}
                variants={cardItem}
              >
                {description}
              </Typography>
            </Stack>
            <SocialsSection />
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
