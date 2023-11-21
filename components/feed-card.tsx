"use client";

import { Feed } from "@/utilities/definitions";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  ListItem,
  ListItemText,
  Stack,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";

type Props = { feed: Feed };

export default function FeedCard({ feed }: Props) {
  const router = useRouter();
  const {
    palette: { primary },
  } = useTheme();

  const { title, summary, type } = feed;

  return (
    <Card variant="outlined">
      <CardActionArea
        onClick={() => {
          if (type == "project") router.push("/projects/" + feed.id);
          if (type == "talk") router.push("/talks/" + feed.id);
          if (type == "blog") window.open(feed?.blogLink, "_blank");
        }}
      >
        <CardContent>
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 2 }}>
            <Chip
              label={type}
              sx={{ color: primary.main, backgroundColor: primary.main + "22" }}
            />
            <OpenInNewRounded />
          </Stack>

          <ListItem sx={{ px: 0 }}>
            <ListItemText primary={title} secondary={summary} />
          </ListItem>
          <Box
            sx={{
              mt: 2,
              borderRadius: 1,
              width: "100%",
              height: 160,
              backgroundImage: `url(${feed.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "rgba(0,0,0,.4)",
              backgroundBlendMode: "soft-light",
            }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
