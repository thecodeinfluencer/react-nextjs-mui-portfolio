"use client";

import { Contribution } from "@/utilities/definitions";
import { arrow } from "@/utilities/framer";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  CardActionArea,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";

type Props = { contribution: Contribution };

export default function ContributionCard({ contribution }: Props) {
  const { project, image, link } = contribution;

  return (
    <CardActionArea onClick={() => window.open(link, "_blank")}>
      <ListItem
        key={project}
        component={motion.div}
        sx={{
          borderWidth: 1,
          borderColor: ({ palette }) => palette.divider,
          borderRadius: 1,
        }}
        secondaryAction={
          <motion.div variants={arrow}>
            <IconButton edge="end" aria-label="delete">
              <OpenInNewRounded />
            </IconButton>
          </motion.div>
        }
      >
        <ListItemAvatar>
          <Avatar src={image} alt={image}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={project}
          secondary={link?.slice(0, link?.search("/commits"))}
        />
      </ListItem>
    </CardActionArea>
  );
}
