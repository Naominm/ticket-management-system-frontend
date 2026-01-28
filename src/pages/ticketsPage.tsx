import { Box } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CreateTicketComponent from "../components/createTicketComponent";

export default function TicketPage() {
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SidebarComponent />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <SearchComponent />
          <Box
            sx={{
              bgcolor: "#f4f4f4",
              height: "auto",
              minHeight: "600px",
              mt: 2,
              pl: 5,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <CreateTicketComponent />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
