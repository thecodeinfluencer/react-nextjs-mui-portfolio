"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import {
  Box,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import SocialsSection from "./socials-section";
import { motion } from "framer-motion";

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
        background: `radial-gradient(circle, ${
          resolvedTheme == "dark"
            ? palette.grey[900]
            : palette.background.default
        }, ${profile.primaryColor})`,
      }}
    >
      <Box
        component={motion.div}
        initial={{
          background: `linear-gradient(0deg, ${
            resolvedTheme == "dark"
              ? palette.grey[900]
              : palette.background.default
          }66, ${profile.primaryColor}66)`,
        }}
        animate={{
          background: `linear-gradient(180deg, ${profile.primaryColor}, ${
            resolvedTheme == "dark"
              ? palette.grey[900]
              : palette.background.default
          })`,
          transition: { duration: 10, repeat: Infinity },
        }}
        sx={{ borderRadius: 0 }}
      >
        <Box
          sx={{
            py: 10,
            background: `${
              resolvedTheme == "dark"
                ? palette.grey[900]
                : palette.background.default
            }EE`,
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
                <Typography
                  variant="h5"
                  sx={{ textAlign: "center" }}
                  component={motion.div}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1, bottom: 200 }}
                >
                  {name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{ textAlign: "center" }}
                  component={motion.div}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1, bottom: 200 }}
                >
                  {tagline}
                </Typography>
                <Typography
                  sx={{ maxWidth: 500, textAlign: "center" }}
                  component={motion.div}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1, bottom: 200 }}
                >
                  {description}
                </Typography>
              </Stack>
              <SocialsSection />
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}
