import { Box, Button, IconButton, Typography } from "@mui/material";
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
        <Box
          sx={{
            bgcolor: "#f4f4f4",
            minHeight: "400px",
            mt: 2,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Box
            sx={{
              mt: 5,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
              px: 2,
              minHeight: "15vh",
              backgroundColor: "#fff",
              border: "1px solid red",
            }}
          >
            <IconButton
              sx={{ fontSize: "1rem", fontFamily: "var(--primary-font)" }}
            >
              Tickets
            </IconButton>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "var(--background-color)",
                fontFamily: "Var(--primary-font)",
                textTransform: "capitalize",
              }}
            >
              Create a task
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
