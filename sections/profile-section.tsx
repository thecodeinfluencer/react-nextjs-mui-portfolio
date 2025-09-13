"use client";

import { appBarHeight } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { cardItem, textContainer } from "@/utilities/framer";
import {
  Box,
  Container,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import HeaderAvatar from "./header-avatar";
import SocialsSection from "./socials-section";

const { name, tagline, description } = profile;

export default function ProfileSection() {
  const below600 = useMediaQuery("(max-width: 600px)");
  const imageSize = below600 ? 180 : 240;

  return (
    <Paper square component={motion.div}>
      <Box sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Box sx={{ height: appBarHeight }} />
          <Stack spacing={2} alignItems="center">
            <HeaderAvatar imageSize={imageSize} />
            <Stack
              component={motion.div}
              variants={textContainer}
              initial="hidden"
              animate="visible"
              spacing={0.5}
              alignItems="center"
            >
              {/* <Chip
                label={tagline}
                component={motion.div}
                variants={cardItem}
              /> */}
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
                color="textSecondary"
                sx={{ textAlign: "center" }}
                component={motion.div}
                variants={cardItem}
              >
                {tagline}
              </Typography>
              <Typography
                color="textSecondary"
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
