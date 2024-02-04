import { Fab, Tooltip } from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";

export default function Add() {
  return (
    <>
      <Tooltip
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
    </>
  );
}
