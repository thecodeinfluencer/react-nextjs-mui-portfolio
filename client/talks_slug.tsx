"use client";

import WrongResource from "@/components/wrong-resource";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed, profile } from "@/utilities/content";
import { SlugPage } from "@/utilities/definitions";
import { cardPopup } from "@/utilities/framer";
import { ArrowBackRounded, OpenInNew, ShareRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  IconButton,
  ListItemText,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import { useTheme as useNextTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ViewTalkPageClient({ params }: SlugPage) {
  const [isClient, setIsClient] = useState(false);

  const router = useRouter();
  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  const thisFeed = feed.find((feed) => `${feed.id}` == params.slug);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;
  if (thisFeed?.type != "talk") return <WrongResource resource="talk" />;

  return (
    <>
      <Box
        sx={{
          py: 10,
          backgroundImage: `url(${thisFeed.image})`,
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
          background: `linear-gradient(to bottom, 
            ${thisFeed.bgTheme || profile.primaryColor}22,
          ${
            resolvedTheme == "light"
              ? "#f8f8f8"
              : palette.background.paper + "dd"
          } )`,
        }}
      >
        <Box
          sx={{
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          <Container maxWidth="md">
            <Stack direction="row" spacing={2} justifyContent="space-between">
              <Button
                startIcon={<ArrowBackRounded />}
                onClick={() => router.replace("/talks")}
              >
                Talks
              </Button>
              <Stack direction="row" spacing={2} alignItems="center">
                <Button
                  variant="outlined"
                  endIcon={<OpenInNew />}
                  onClick={() => window.open(thisFeed.slidesLink, "_blank")}
                >
                  Slides
                </Button>
                <IconButton
                  onClick={() => {
                    const data = {
                      url: window.location.href,
                      title: `${thisFeed.title} | Talks | ${profile.name}`,
                      text: `View ${profile.name}'s talk (${thisFeed.title}) on ${window.location.href}`,
                    };
                    window?.navigator?.share &&
                      window?.navigator?.canShare(data) &&
                      window?.navigator?.share(data);
                  }}
                >
                  <ShareRounded />
                </IconButton>
              </Stack>
            </Stack>
            <Box
              sx={{
                mt: 2,
                borderRadius: 1,
                width: "100%",
                height: { xs: 200, sm: 300, md: 400 },
                backgroundImage: `url(${thisFeed?.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Box sx={{ mt: 2 }}>
              {thisFeed?.tags?.map((tag) => (
                <Chip
                  variant="outlined"
                  key={tag}
                  label={tag}
                  sx={{ mr: 1, mb: 1 }}
                />
              ))}
            </Box>
            <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
              {thisFeed?.title}
            </Typography>
            <Typography sx={{ mt: 2 }}>{thisFeed?.description}</Typography>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <Card
                component={motion.div}
                variants={cardPopup}
                elevation={resolvedTheme == "light" ? 0 : 4}
                sx={{ mt: 2 }}
              >
                <CardContent sx={{ backgroundColor: "transparent" }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <ListItemText
                        primary={thisFeed.details?.event}
                        secondary="Event"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItemText
                        primary={thisFeed.details?.location}
                        secondary="Location"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItemText
                        primary={thisFeed.details?.community}
                        secondary="Community"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <ListItemText
                        primary={thisFeed.details.date}
                        secondary="Date"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </motion.div>
            {thisFeed.links?.length > 0 && (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
              >
                <Card
                  component={motion.div}
                  variants={cardPopup}
                  elevation={resolvedTheme == "light" ? 0 : 4}
                  sx={{ mt: 2 }}
                >
                  <CardContent>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                      Associated Links
                    </Typography>
                    {thisFeed.links?.map((link) => (
                      <Button
                        key={link.label}
                        onClick={() => window.open(link.url)}
                        endIcon={<OpenInNew />}
                        sx={{ mr: 1, mb: 1 }}
                        variant="outlined"
                      >
                        {link.label}
                      </Button>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </Container>
        </Box>
      </Box>
      <FooterSection />
      <CTASection />
    </>
  );
}
