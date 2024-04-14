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
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = { feed: Feed };

export default function FeedCard({ feed, ...other }: Props) {
  const {
    palette: { primary },
  } = useTheme();

  const { title, summary, type, details } = feed;

  const arrow = {
    initial: { scale: 1, rotate: 45, opacity: 0 },
    whileHover: { scale: 1.05, rotate: 0, opacity: 1 },
  };

  const getLink: () => string = () => {
    if (type == "project") return "/projects/" + feed.id;
    if (type == "talk") return "/talks/" + feed.id;
    if (type == "blog") return feed?.blogLink;
    return "";
  };

  const link = getLink();

  return (
    <Card
      component={motion.div}
      variant="outlined"
      whileHover={{ scale: 1.015 }}
      {...other}
    >
      <CardActionArea
        href={link}
        LinkComponent={Link}
        target={type == "blog" ? "_blank" : undefined}
      >
        <CardContent
          component={motion.div}
          initial="initial"
          whileHover="whileHover"
        >
          <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
            <Chip
              label={type}
              sx={{ color: primary.main, backgroundColor: primary.main + "22" }}
            />
            <motion.div variants={arrow}>
              <OpenInNewRounded />
            </motion.div>
          </Stack>
          <ListItem sx={{ px: 0, py: 0 }}>
            <ListItemText primary={title} secondary={`${summary}`} />
          </ListItem>
          <Typography variant="body2" color="GrayText">
            {type != "project"
              ? details.date
              : details.releasedDate || details.endDate}
          </Typography>
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
