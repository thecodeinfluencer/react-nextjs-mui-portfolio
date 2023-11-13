import { profile } from "@/utilities/content";
import { LinkedIn, Telegram, Twitter } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";

export default function SocialsSection() {
  return (
    <Stack direction="row" sx={{ mt: 2 }} justifyContent="center">
      <IconButton
        onClick={() => window.open(profile.socials.telegram, "_blank")}
      >
        <Telegram />
      </IconButton>
      <IconButton
        onClick={() => window.open(profile.socials.twitter, "_blank")}
      >
        <Twitter />
      </IconButton>
      <IconButton
        onClick={() => window.open(profile.socials.linkedIn, "_blank")}
      >
        <LinkedIn />
      </IconButton>
    </Stack>
  );
}
