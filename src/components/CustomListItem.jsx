import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function CustomListItem({ Icon, text, SwitchProp, mode, setMode }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          {(text && <ListItemText primary={text} />) || (
            <SwitchProp
              onChange={(e) => setMode(mode === "light" ? "dark" : "light")}
            />
          )}
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default CustomListItem;
