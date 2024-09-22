"use client";

import ContributionCard from "@/components/contribution-card";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { contributing } from "@/utilities/content";
import { ArrowBackRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  List,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContributingPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <>
      <Paper square sx={{ py: 10 }}>
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
              LinkComponent={Link}
              href="/"
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
          <Card sx={{ mt: 2 }} variant="outlined">
            <CardContent>
              <List component={motion.div}>
                {contributing.map((cbn) => (
                  <ContributionCard key={cbn.project} contribution={cbn} />
                ))}
              </List>
            </CardContent>
          </Card>
        </Container>
      </Paper>
      <FooterSection />
      <CTASection />
    </>
  );
}
