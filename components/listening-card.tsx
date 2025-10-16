"use client";

import { spotifySVG } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  CardActionArea,
  ListItem,
  ListItemAvatar,
  ListItemText,
  useColorScheme,
} from "@mui/material";
import Link from "next/link";

export default function ListeningCard() {
  const { mode } = useColorScheme();
  return (
    <CardActionArea
      LinkComponent={Link}
      href={profile.spotify.track}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ListItem
        component="span"
        sx={{ borderWidth: 1, borderRadius: 1 }}
        secondaryAction={<OpenInNewRounded />}
      >
        <ListItemAvatar>
          <Avatar sx={{ background: "transparent" }}>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill={profile.primaryColor[mode as "dark" | "light"]}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d={spotifySVG}></path>
            </svg>
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={profile.spotify.album}
          secondary={profile.spotify.artist}
        />
      </ListItem>
    </CardActionArea>
  );
}
