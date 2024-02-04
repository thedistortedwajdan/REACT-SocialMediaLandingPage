import {
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";

export default function Add() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    width: 400,
    // bgcolor: "background.paper",
    border: "2px solid #1976D2",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Tooltip
        onClick={handleOpen}
        title="Add a Post?"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: {
            xs: "40%",
            md: "20px",
          },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} bgcolor={"background.default"} color={"text.primary"}>
          <Typography
            textAlign={"center"}
            variant="h6"
            fontWeight={700}
            color="#1976D2"
          >
            Create Post
          </Typography>
          <TextField
            sx={{
              width: "100%",
            }}
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained">
            <Button>Post</Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}
