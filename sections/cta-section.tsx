"use client";

import { Container, Paper, Typography } from "@mui/material";
import SocialsSection from "./socials-section";
import { useEffect, useState } from "react";

export default function CTASection() {
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
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h6">
          Wanna do coffee and chat?
        </Typography>
        <SocialsSection />
      </Container>
    </Paper>
  );
}
