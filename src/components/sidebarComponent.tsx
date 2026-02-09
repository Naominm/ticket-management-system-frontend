import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Drawer,
  IconButton,
  Box,
  List,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DashBoardIcon from "@mui/icons-material/Dashboard";
import SettingsIcon from "@mui/icons-material/Settings";
import FacebookIcon from "@mui/icons-material/Facebook";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import tenakataLogo from "../assets/logo.png";

const drawerWidth = 165;
export default function SidebarComponent() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <Drawer
      variant="permanent"
      elevation={8}
      sx={{
        width: open ? drawerWidth : 72,
        border: "2px solid red",
        flexShrink: 0,
        whiteSpace: "nowrap",
        transition: "width 0.3s",
        "& .MuiDrawer-paper": {
          width: open ? drawerWidth : 72,
          transition: "width 0.3s",
          overflowX: "hidden",
          backgroundColor: "#fff",
          color: "var(--primary-deep-color)",
          boxShadow: "2px 2px 4px 2px rgba(146, 143, 143, 0.65)",
        },
      }}
    >
      <Box
        sx={{
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: open ? "flex-start" : "center",
          px: open ? 0 : 0,
          mt: 0,
        }}
      >
        <IconButton
          onClick={() => setOpen(!open)}
          sx={{ color: "gray", mb: 10 }}
        >
          <MenuIcon />
        </IconButton>

        {open && (
          <>
            <Box
              sx={{
                mt: 10,
                width: 120,
                height: 120,
                borderRadius: "50%",
                backgroundColor: "#f1f1f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={tenakataLogo}
                alt="Tenakata logo"
                sx={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  objectFit: "contain",
                  px: 1,
                }}
              />
            </Box>
          </>
        )}
      </Box>

      <List sx={{ mt: 8 }}>
        <SidebarItem open={open} icon={<DashBoardIcon />} label="Dashboard" />
        <SidebarItem
          open={open}
          icon={<MapsHomeWorkIcon />}
          label="Tickets"
          onClick={() => navigate("/ticket")}
        />
        <SidebarItem open={open} icon={<SettingsIcon />} label="Settings" />
      </List>
      {open && (
        <Box
          sx={{
            display: "flex",
            gap: 2,
            mt: 10,
          }}
        >
          <FacebookIcon sx={{ color: "#1877F2" }} />
          <XIcon sx={{ color: "gray" }} />
          <YouTubeIcon sx={{ color: "#FF0000" }} />
          <InstagramIcon sx={{ color: "#E4405F" }} />
        </Box>
      )}
      {open && (
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor: "var(--red-color)",
            color: "#fff",
            minHeight: "30px",
            my: 4,
            mx: 2,
            fontFamily: "var(--primary-font)",
            fontWeight: 800,
          }}
        >
          Log out
        </Button>
      )}
    </Drawer>
  );
}

function SidebarItem({
  open,
  icon,
  label,
  onClick,
}: {
  open: boolean;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
}) {
  return (
    <ListItemButton
      onClick={onClick}
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
      {open && (
        <ListItemText
          primary={label}
          slotProps={{
            primary: {
              sx: {
                fontFamily: "var(--primary-font)",
                fontSize: "1rem",
                fontWeight: 500,
              },
            },
          }}
        />
      )}
    </ListItemButton>
  );
}
