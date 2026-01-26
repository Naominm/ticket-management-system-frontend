import { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashBoardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";

const drawerWidth = 240;

export default function CollapsibleSidebar() {
  const [open, setOpen] = useState(true);
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 72,
          flexShrink: 0,
          whiteSpace: "nowrap",
          transition: "width 0.3s",
          "&.MuiDrawer-paper": {
            width: open ? drawerWidth : 72,
            transition: "width 0.3s",
            overflowX: "hidden",
            backgroundColor: "var(--background-color)",
            color: "var(--primary-deep-color)",
          },
        }}
      >
        <Box
          sx={{
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "flex-start" : "center",
            px: open ? 2 : 0,
          }}
        >
          {open && (
            <Box
              sx={{
                mt: 2,
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: "#f1f1f2",
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "flex-start" : "center",
            px: open ? 2 : 0,
            mt: open ? 1 : -12,
          }}
        >
          <IconButton onClick={() => setOpen(!open)} sx={{ color: "gray" }}>
            <MenuIcon />
          </IconButton>
        </Box>

        <List>
          <SidebarItem open={open} icon={<DashBoardIcon />} label="Dashboard" />
          <SidebarItem open={open} icon={<SettingsIcon />} label="Settings" />
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Main content</Typography>
      </Box>
    </Box>
  );
}

function SidebarItem({
  open,
  icon,
  label,
}: {
  open: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <ListItemButton
      sx={{
        minHeight: 48,
        justifyContent: open ? "initial" : "center",
        backgroundColor: "#ffff",
        color: "var(--background-color)",
        px: 2.5,
        "&:hover": {
          backgroundColor: "#f9f9f9",
        },
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: open ? 2 : "auto",
          justifyContent: "center",
          color: "var(--background-color)",
        }}
      >
        {icon}
      </ListItemIcon>
      {open && <ListItemText primary={label} />}
    </ListItemButton>
  );
}
