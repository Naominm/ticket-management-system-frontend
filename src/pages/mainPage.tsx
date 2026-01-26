import { Box, IconButton, Typography } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchIcon from "@mui/icons-material/Search";

export default function CollapsibleSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarComponent />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", gap: 4, backgroundColor: "#ffff" }}>
          <IconButton sx={{ color: "gray", display: "flex", gap: 4 }}>
            <SearchIcon />
            <Typography
              variant="body2"
              sx={{
                color: "gray",
                fontSize: "1.2rem",
                fontFamily: "var(--primary-font)",
              }}
            >
              search...
            </Typography>
          </IconButton>
        </Box>
        <Box sx={{ bgcolor: "#f4f4f4", minHeight: "400px", mt: 2 }}> hello</Box>
      </Box>
    </Box>
  );
}
