import { Box, Paper, Avatar, Typography, IconButton } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
export default function SettingsPage() {
  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      <SidebarComponent />

      <Box component="main" sx={{ flexGrow: 1, pb: 5 }}>
        <SearchComponent />

        <Box
          sx={{
            bgcolor: "#f4f4f4",
            width: "100%",
            height: "auto",
            minHeight: "200vh",
            display: "flex",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "35%",
              height: "auto",
              gap: 2,
              mt: 2,
            }}
          >
            <Paper
              sx={{
                minHeight: "40vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AvatarSec />
            </Paper>
            <Paper>
              <Box sx={{ minHeight: "60vh" }}>Your description</Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
              height: "auto",
              gap: 2,
              mt: 2,
            }}
          >
            <Paper sx={{ minHeight: "40vh" }}> Employee growth</Paper>
            <Paper>
              <Box sx={{ minHeight: "60vh" }}>form</Box>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
function AvatarSec() {
  return (
    <Box sx={{ position: "relative" }}>
      <Avatar
        src=""
        alt="user avater"
        sx={{
          width: 100,
          height: 100,
          bgcolor: "#f1f1f1",
        }}
      />
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          bottom: 65,
          right: 10,
          bgcolor: "#6A1B9A",
          color: "#fff",
          "&:hover": {
            bgcolor: "#4a148c",
          },
          width: 28,
          height: 28,
        }}
      >
        <CameraAltIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "var(--primary-font)",
          fontSize: "1rem",
          fontWeight: 600,
          mt: 1,
        }}
      >
        Your Name
      </Typography>
      <Typography
        variant="body2"
        color="gray"
        sx={{ fontFamily: "var(--primary-font)", fontSize: "0.6rem" }}
      >
        Your Job Title
      </Typography>
    </Box>
  );
}
