import { profile } from "@/utilities/content";
import { LinkedIn, Telegram, Twitter } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import Link from "next/link";

export default function SocialsSection() {
  return (
    <Stack direction="row" sx={{ mt: 2 }} justifyContent="center">
      <IconButton
        LinkComponent={Link}
        aria-label={profile.socials.telegram}
        href={profile.socials.telegram}
        target="_blank"
      >
        <Telegram />
      </IconButton>
      <IconButton
        LinkComponent={Link}
        aria-label={profile.socials.twitter}
        href={profile.socials.twitter}
        target="_blank"
      >
        <Twitter />
      </IconButton>
      <IconButton
        LinkComponent={Link}
        aria-label={profile.socials.linkedIn}
        href={profile.socials.linkedIn}
        target="_blank"
      >
        <LinkedIn />
      </IconButton>
    </Stack>
  );
}
