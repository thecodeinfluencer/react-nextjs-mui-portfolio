import { Container, Paper, Typography } from "@mui/material";
import SocialsSection from "./socials-section";

export default function CTASection() {
  return (
    <Paper
      square
      sx={{
        py: 10,
        borderTopColor: "divider",
        borderTopStyle: "solid",
        borderTopWidth: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography sx={{ textAlign: "center", mb: 2 }} variant="h6">
          Wanna do coffee and chat?
        </Typography>
        <SocialsSection />
      </Container>
    </Paper>
  );
}
