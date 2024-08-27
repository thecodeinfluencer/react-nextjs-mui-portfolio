import FeedCard from "@/components/feed-card";
import MotionItem from "@/components/motion-item";
import MotionMasonry from "@/components/motion-masonry";
import CTASection from "@/sections/cta-section";
import FooterSection from "@/sections/footer-section";
import { appURL } from "@/utilities/constants";
import { feed, profile } from "@/utilities/content";
import { ArrowBackRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  metadataBase: new URL(appURL),
  title: `Talks | ${profile.name}`,
  description: `A list of talks given by ${profile.name} including downloadable slides.`,
  openGraph: { images: [{ url: `${appURL}/images/talks.png`, alt: "blogs" }] },
};

export default function TalksPage() {
  return (
    <main>
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
          <MotionMasonry>
            {feed
              .filter((feed) => feed.type == "talk")
              .map((feed) => (
                <MotionItem key={feed.id}>
                  <FeedCard feed={feed} />
                </MotionItem>
              ))}
          </MotionMasonry>
        </Container>
      </Paper>
      <FooterSection />
      <CTASection />
    </main>
  );
}
