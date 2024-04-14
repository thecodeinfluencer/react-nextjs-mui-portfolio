"use client";

import FeedCard from "@/components/feed-card";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { feed } from "@/utilities/content";
import { cardContainer, cardItem } from "@/utilities/framer";
import { ArrowBackRounded } from "@mui/icons-material";
import { Masonry } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Talks() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <>
      <Paper sx={{ py: 10 }}>
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
              Talks
            </Typography>
            <Box />
          </Stack>
          <Masonry
            component={motion.div}
            variants={cardContainer}
            initial="hidden"
            animate="visible"
            spacing={2}
            columns={{ xs: 1, sm: 2, md: 3 }}
          >
            {feed
              .filter((feed) => feed.type == "talk")
              .map((feed) => (
                <motion.div key={feed.title} variants={cardItem}>
                  <FeedCard feed={feed} />
                </motion.div>
              ))}
          </Masonry>
        </Container>
      </Paper>
      <FooterSection />
      <CTASection />
    </>
  );
}
