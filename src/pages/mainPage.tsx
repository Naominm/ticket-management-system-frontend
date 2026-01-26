import { Box, Toolbar, Typography } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";

export default function CollapsibleSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarComponent />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4">Main content</Typography>
      </Box>
    </Box>
  );
}
