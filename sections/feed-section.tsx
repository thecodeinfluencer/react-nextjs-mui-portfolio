"use client";

import FeedCard from "@/components/feed-card";
import { feed } from "@/utilities/content";
import { cardContainer } from "@/utilities/framer";
import { Masonry } from "@mui/lab";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Grid2,
  Paper,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { Book, Element4, Microphone2 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return <div></div>;

  return (
    <Paper
      square
      sx={{
        py: 10,
        borderTop: ({ palette }) => `2px solid ${palette.divider}`,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Featured
        </Typography>
        <Masonry
          spacing={2}
          columns={{ xs: 1, sm: 2, md: 3 }}
          component={motion.div}
          variants={cardContainer}
          initial="hidden"
          animate="visible"
        >
          {feed
            .filter(({ featured }) => featured)
            .map(feed => (
              <FeedCard key={feed.title} feed={feed} />
            ))}
        </Masonry>

        <Grid2 container spacing={2} sx={{ mt: 4 }}>
          {[
            { link: "/projects", label: "All Projects", Icon: Element4 },
            { link: "/blogs", label: "All Blogs", Icon: Book },
            { link: "/talks", label: "All Talks", Icon: Microphone2 },
          ].map(({ link, label, Icon }) => (
            <Grid2 key={link} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card variant="outlined">
                <CardActionArea component={Link} href={link}>
                  <CardContent>
                    <Icon />
                    <Typography sx={{ mt: 1 }}>{label}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Container>
    </Paper>
  );
}
