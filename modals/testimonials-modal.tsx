import { Box, Modal, Paper, Typography } from "@mui/material";
import React from "react";

type Props = { open: boolean; comment: string; handleClose: () => void };

export default function TestimonialsModal({
  open,
  comment,
  handleClose,
}: Props) {
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
          width: { xs: "80%", sm: "70%", md: "55%", lg: "45%" },
          maxWidth: 580,
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        component={Paper}
      >
        <Typography>{comment}</Typography>
      </Box>
    </Modal>
  );
}
