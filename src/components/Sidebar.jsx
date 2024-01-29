import Box from "@mui/material/Box";
import List from "@mui/material/List";
import HomeIcon from "@mui/icons-material/Home";
import {
  AccountBox,
  Article,
  Brightness6,
  Group,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import { Switch } from "@mui/material";
import CustomListItem from "./CustomListItem";

export default function Sidebar() {
  const listItems = [
    {
      Icon: HomeIcon,
      text: "Home",
    },
    {
      Icon: Article,
      text: "Pages",
    },
    {
      Icon: Group,
      text: "Groups",
    },
    {
      Icon: Storefront,
      text: "Marketplace",
    },
    {
      Icon: Person,
      text: "Friends",
    },
    {
      Icon: Settings,
      text: "Settings",
    },
    {
      Icon: AccountBox,
      text: "Profile",
    },
    {
      Icon: Brightness6,
      SwitchProp: Switch,
    },
  ];
  return (
    <>
      <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
        <Box position="fixed">
          <List>
            {listItems.map((item, index) => (
              <CustomListItem
                key={index}
                Icon={item.Icon}
                text={item.text}
                SwitchProp={item.SwitchProp}
              />
            ))}
          </List>
        </Box>
      </Box>
    </>
  );
}
