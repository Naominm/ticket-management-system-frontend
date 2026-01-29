import { Box, Paper } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";

export default function DashboardPage() {
  return (
    <Box sx={{ bgcolor: "#f4f4f4", pb: 5 }}>
      <SidebarComponent />
      <Box sx={{ display: "flex", flexDirection: "column", ml: 20 }}>
        <SearchComponent />

        <Box
          sx={{
            bgcolor: "#f4f4f4",
            width: "100%",
            height: "auto",
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", width: "100%", mt: 4, gap: 2, px: 2 }}>
            <Box
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                width: "35%",
                height: "auto",
                minHeight: "100vh",
              }}
            >
              Last Tickets
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, height: "50vh" }}>
                <Box
                  component={Paper}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "50%",
                  }}
                >
                  Most Active employee
                </Box>
                <Box
                  component={Paper}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "50%",
                  }}
                >
                  Most Active client
                </Box>
              </Box>
              <Box component={Paper} sx={{ width: "100%", height: "50vh" }}>
                component 2
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
