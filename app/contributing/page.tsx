"use client";

import { contributing } from "@/utilities/content";
import { ArrowBackRounded, OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FooterSection from "@/sections/footer-section";
import CTASection from "@/sections/cta-section";

export default function ContributingPage() {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  const arrow = {
    initial: { scale: 1, rotate: 45, opacity: 0 },
    whileHover: { scale: 1.05, rotate: 0, opacity: 1 },
  };

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
              Contributing
            </Typography>
            <Box />
          </Stack>
          <Typography sx={{ mt: 2 }}>
            What do you know? I also contribute to open source! In this section,
            you&apos;ll find a glimpse into my coding adventures, where
            I&apos;ve collaborated on various open-source repositories. These
            projects reflect my passion for community-driven development!
          </Typography>
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <List component={motion.div}>
                {contributing.map(({ project, image, link }) => (
                  <ListItem
                    button
                    key={project}
                    component={motion.div}
                    onClick={() => window.open(link, "_blank")}
                    sx={{
                      borderWidth: 1,
                      borderColor: palette.divider,
                      borderRadius: 1,
                    }}
                    secondaryAction={
                      <motion.div variants={arrow}>
                        <IconButton edge="end" aria-label="delete">
                          <OpenInNewRounded />
                        </IconButton>
                      </motion.div>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar src={image}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={project}
                      secondary={link?.slice(0, link?.search("/commits"))}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}
