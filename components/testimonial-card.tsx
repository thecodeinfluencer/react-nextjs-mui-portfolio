import TestimonialsModal from "@/modals/testimonials-modal";
import { Testimonial } from "@/utilities/definitions";
import { OpenInNewRounded } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardContent,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { useTheme as useNextTheme } from "next-themes";

type Props = { testimonial: Testimonial };

export default function TestimonialCard({ testimonial }: Props) {
  const [modalOpen, setModalOpen] = useState(false);

  const { resolvedTheme } = useNextTheme();
  const btnColumn = useMediaQuery("(max-width: 320px)");

  const { comment, linkedIn, name, role, image } = testimonial;

  return (
    <>
      <Card elevation={resolvedTheme == "light" ? 0 : 4}>
        <CardContent>
          <ListItem sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar src={image} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={role} />
          </ListItem>
          <Typography>{comment.slice(0, 200)}...</Typography>
          <Stack
            direction={btnColumn ? "column" : "row"}
            sx={{ mt: 2 }}
            spacing={1}
          >
            <Button onClick={() => setModalOpen(true)}>Read More</Button>
            <Button onClick={() => window.open(linkedIn, "_blank")}>
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
