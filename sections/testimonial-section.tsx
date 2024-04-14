"use client";

import TestimonialCard from "@/components/testimonial-card";
import { testimonials } from "@/utilities/content";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export default function TestimonialSection() {
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
    </Paper>
  );
}
