"use client";

import { ArrowBackRounded } from "@mui/icons-material";
import { Button, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

type Props = { resource?: string };

export default function WrongResource({ resource = "item" }: Props) {
  const router = useRouter();

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{ my: 5, height: "80vh" }}
      spacing={2}
    >
      <Typography variant="h5">This {resource} does not exist</Typography>
      <Button startIcon={<ArrowBackRounded />} onClick={() => router.push("/")}>
        Back to Home
      </Button>
    </Stack>
  );
}
