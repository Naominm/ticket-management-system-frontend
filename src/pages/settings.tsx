import {
  Box,
  Paper,
  Avatar,
  Typography,
  IconButton,
  FormLabel,
  FormControl,
  TextField,
} from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AvatarImage from "../assets/boy.png";
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
            <Paper
              sx={{
                bgcolor: "#EDEDED",
                px: 2,
                py: 4,
                fontFamily: "var(--primary-font)",
              }}
            >
              Your Description
              <Box
                component={Paper}
                sx={{ minHeight: "60vh", color: "#fff", mt: 2 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "0.8rem",
                    color: "gray",
                    p: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime mollitia, | Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Maxime mollitia, Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia,
                </Typography>
              </Box>
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
              <Box sx={{ minHeight: "60vh" }}>
                <Box sx={{ display: "flex", gap: 4, px: 2, py: 2 }}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "var(--primary-font)",
                      fontWeight: 400,
                      fontSize: "1rem",
                      color: "gray",
                    }}
                  >
                    Personal Details
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      fontFamily: "var(--primary-font)",
                      fontSize: "1rem",
                      fontWeight: 400,
                      color: "gray",
                    }}
                  >
                    Job Details
                  </Typography>
                </Box>
                <hr />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                    padding: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      gap: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <FormControl
                      sx={{
                        display: "flex",
                        gap: 1,
                        width: "50%",
                      }}
                    >
                      <FormLabel>First Name</FormLabel>
                      <TextField
                        size="small"
                        sx={{ maxWidth: "200px", bgcolor: "#DEDEDE" }}
                      />
                    </FormControl>
                    <FormControl sx={{ display: "flex", gap: 1, width: "50%" }}>
                      <FormLabel>Last Name</FormLabel>
                      <TextField
                        size="small"
                        sx={{
                          maxWidth: "200px",
                          bgcolor: "#DEDEDE",
                          border: "none",
                        }}
                      />
                    </FormControl>
                  </Box>
                </Box>
              </Box>
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
        src={AvatarImage}
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
          textAlign: "center",
        }}
      >
        Your Name
      </Typography>
      <Typography
        variant="body2"
        color="gray"
        sx={{
          fontFamily: "var(--primary-font)",
          fontSize: "0.6rem",
          textAlign: "center",
        }}
      >
        Your Job Title
      </Typography>
    </Box>
  );
}
