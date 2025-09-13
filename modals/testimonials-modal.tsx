import { Testimonial } from "@/utilities/definitions";
import { CloseRounded } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Container,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

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
        sx={{ border: "none", padding: 4, height: "100vh" }}
        component={Paper}
      >
        <Stack direction="row" justifyContent="end">
          <IconButton onClick={handleClose}>
            <CloseRounded />
          </IconButton>
        </Stack>
        <Container maxWidth="lg">
          <ListItem sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar src={image} alt={image} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={role} />
          </ListItem>
          <Typography>{comment}</Typography>
        </Container>
      </Box>
    </Modal>
  );
}
