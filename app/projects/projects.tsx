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

export default function Projects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <>
      <Paper square sx={{ py: 10 }}>
        <Container maxWidth="lg">
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
              Projects
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
            {[...feed]
              .filter(feed => feed.type === "project")
              .sort((a, b) => {
                const monthMap = {
                  Jan: 0,
                  Feb: 1,
                  Mar: 2,
                  Apr: 3,
                  May: 4,
                  Jun: 5,
                  Jul: 6,
                  Aug: 7,
                  Sep: 8,
                  Oct: 9,
                  Nov: 10,
                  Dec: 11,
                };
                function parseStartDate(dateStr: string) {
                  if (!dateStr) return 0;
                  const [month, year] = dateStr.split(" ");
                  return new Date(
                    Number(year),
                    monthMap[month as keyof typeof monthMap],
                    1
                  ).getTime();
                }
                const aDate = parseStartDate(a.details?.startDate);
                const bDate = parseStartDate(b.details?.startDate);
                return bDate - aDate;
              })
              .map(feed => (
                <motion.div key={feed.title} variants={cardItem}>
                  <FeedCard key={feed.title} feed={feed} />
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
