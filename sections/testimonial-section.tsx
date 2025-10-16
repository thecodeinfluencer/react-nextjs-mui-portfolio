import TestimonialCard from "@/components/testimonial-card";
import { testimonials } from "@/utilities/content";
import { Container, Grid, Paper, Typography } from "@mui/material";

export default function TestimonialSection() {
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
        <Typography sx={{ textAlign: "center", mb: 8 }} variant="h5">
          Testimonials
        </Typography>
        <Grid container spacing={1}>
          {testimonials.map(testimonial => (
            <Grid key={testimonial.name} size={{ xs: 12, md: 6 }}>
              <TestimonialCard testimonial={testimonial} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Paper>
  );
}
