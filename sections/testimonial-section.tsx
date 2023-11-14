"use client";

import TestimonialCard from "@/components/testimonial-card";
import { testimonials } from "@/utilities/content";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function TestimonialSection() {
  const [isClient, setIsClient] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const { palette } = useTheme();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Box
      sx={{
        py: 10,
        backgroundColor:
          resolvedTheme == "light" ? "#f8f8f8" : palette.background.paper,
      }}
    >
      <Container maxWidth="md">
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Testimonials
        </Typography>
        <Grid container spacing={1}>
          {testimonials.map((testimonial) => (
            <Grid key={testimonial.name} item xs={12} md={6}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
