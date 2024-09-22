"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { cardItem, textContainer } from "@/utilities/framer";
import {
  Box,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";
import SocialsSection from "./socials-section";
import { useEffect, useState } from "react";

const { name, tagline, description, gravatarUrl } = profile;

export default function ProfileSection() {
  const [isClient, setIsClient] = useState(false);

  const below600 = useMediaQuery("(max-width: 600px)");
  const imageSize = below600 ? 180 : 240;

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <Paper square component={motion.div}>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="md">
          <Box sx={{ height: appBarHeight }} />
          <Stack spacing={2} alignItems="center">
            <Image
              priority
              src={gravatarUrl}
              alt="Gravatar Image"
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
              <Chip
                label={tagline}
                component={motion.div}
                variants={cardItem}
              />
              <Typography
                variant="h4"
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={cardItem}
              >
                {name}
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
    </Paper>
  );
}
