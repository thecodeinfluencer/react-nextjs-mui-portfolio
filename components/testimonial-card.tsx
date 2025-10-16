"use client";

import TestimonialsModal from "@/modals/testimonials-modal";
import { Testimonial } from "@/utilities/definitions";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

type Props = { testimonial: Testimonial };

export default function TestimonialCard({ testimonial }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const btnColumn = useMediaQuery("(max-width: 320px)");

  const { comment, linkedIn, name, role, image } = testimonial;

  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <List>
            <ListItem sx={{ px: 0 }}>
              <ListItemAvatar>
                <Avatar src={image} alt={image} />
              </ListItemAvatar>
              <ListItemText primary={name} secondary={role} />
            </ListItem>
          </List>
          <Typography>{comment.slice(0, 200)}...</Typography>
          <Stack
            direction={btnColumn ? "column" : "row"}
            sx={{ mt: 2 }}
            spacing={1}
          >
            <Button onClick={() => setModalOpen(true)}>Read More</Button>
            <Button
              LinkComponent={Link}
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on LinkedIn <OpenInNewRounded />
            </Button>
          </Stack>
        </CardContent>
      </Card>
      <TestimonialsModal
        open={modalOpen}
        testimonial={testimonial}
        handleClose={() => setModalOpen(false)}
      />
    </>
  );
}
