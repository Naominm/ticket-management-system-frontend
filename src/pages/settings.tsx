import { Box, Paper } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
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
              {" "}
              Avatar goes here
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
