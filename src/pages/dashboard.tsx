import { Box } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";

export default function DashboardPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarComponent />
      <Box sx={{ flexGrow: 1 }}>
        <SearchComponent />
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: "#f4f4f4",
          height: "auto",
          minHeight: "600px",
          pl: 5,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      ></Box>
    </Box>
  );
}
