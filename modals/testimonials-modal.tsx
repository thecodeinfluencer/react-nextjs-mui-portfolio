import { Testimonial } from "@/utilities/definitions";
import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  open: boolean;
  testimonial: Testimonial;
  handleClose: () => void;
};

export default function TestimonialsModal({
  open,
  testimonial,
  handleClose,
}: Props) {
  const { comment, name, role, image } = testimonial;

  return (
    <Modal sx={{ border: "none" }} open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          boxShadow: 24,
          padding: 4,
          width: { xs: "70%", sm: "70%", md: "55%", lg: "45%" },
          maxWidth: 580,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        component={Paper}
      >
        <ListItem sx={{ px: 0 }}>
          <ListItemAvatar>
            <Avatar src={image} />
          </ListItemAvatar>
          <ListItemText primary={name} secondary={role} />
        </ListItem>
        <Typography>{comment}</Typography>
      </Box>
    </Modal>
  );
}
