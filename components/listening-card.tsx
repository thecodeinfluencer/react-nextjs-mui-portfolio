"use client";

import { spotifySVG } from "@/utilities/constants";
import { profile } from "@/utilities/content";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  CardActionArea,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function ListeningCard() {
  return (
    <CardActionArea
      onClick={() => window.open(profile.spotify.track, "_blank")}
    >
      <ListItem
        sx={{ borderWidth: 1, borderRadius: 1 }}
        secondaryAction={
          <IconButton disabled aria-label="delete">
            <OpenInNewRounded />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar sx={{ background: "transparent" }}>
            <svg
              width="41"
              height="40"
              viewBox="0 0 41 40"
              fill={profile.primaryColor}
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
      </ListItem>{" "}
    </CardActionArea>
  );
}
