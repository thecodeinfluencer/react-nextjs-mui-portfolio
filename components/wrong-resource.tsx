import { ArrowBackRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import Link from "next/link";

type Props = { resource?: string };

export default function WrongResource({ resource = "item" }: Props) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ my: 5, height: "80vh" }}
      spacing={2}
    >
      <Typography variant="h5">This {resource} does not exist</Typography>
      <Button startIcon={<ArrowBackRounded />} LinkComponent={Link} href="/">
        Back to Home
      </Button>
    </Stack>
  );
}
