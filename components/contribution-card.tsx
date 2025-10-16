import { Contribution } from "@/utilities/definitions";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  CardActionArea,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

type Props = { contribution: Contribution };

export default function ContributionCard({ contribution }: Props) {
  const { project, image, link } = contribution;

  return (
    <CardActionArea LinkComponent={Link} href={link} target="_blank">
      <ListItem
        key={project}
        sx={{ borderWidth: 1, borderColor: "divider", borderRadius: 1 }}
        secondaryAction={
          <IconButton edge="end" aria-label="open">
            <OpenInNewRounded />
          </IconButton>
        }
      >
        <ListItemAvatar>
          <Avatar src={image} alt={project?.toUpperCase()}></Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={project}
          secondary={link?.slice(0, link?.search("/commits"))}
        />
      </ListItem>
    </CardActionArea>
  );
}
