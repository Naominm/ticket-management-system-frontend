import { Box } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CreateTicketComponent from "../components/createTicketComponent";

export default function TicketPage() {
  return (
    <Box>
      <SidebarComponent />
      <SearchComponent />
      <CreateTicketComponent />
    </Box>
  );
}
