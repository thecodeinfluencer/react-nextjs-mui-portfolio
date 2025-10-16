import WorkTimeline from "@/components/work-timeline";
import { ArrowBackRounded } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

export default function Work() {
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
              Work
            </Typography>
            <Box />
          </Stack>
          <WorkTimeline />
        </Container>
      </Paper>
    </>
  );
}
