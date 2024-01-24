import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";

function CustomListItem({ Icon, text, SwitchProp }) {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          {(text && <ListItemText primary={text} />) || <SwitchProp />}
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default CustomListItem;
