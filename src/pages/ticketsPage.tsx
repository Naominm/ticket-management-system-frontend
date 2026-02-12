import { useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CreateTicketComponent from "../components/createTicketComponent";
import EditModalStatus from "../components/editStatusModal";

import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";
import { green, red, orange } from "@mui/material/colors";

const getStatusColor = (status: string) => {
  switch (status) {
    case "CLOSED":
    case "green":
      return green[500];
    case "NOT_RESOLVED":
    case "red":
      return red[500];
    case "OPEN":
    case "orange":
      return orange[500];
    default:
      return "grey";
  }
};

export default function TicketPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const {
    data: tickets = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/ticket`, {
        withCredentials: true,
      });
      return res.data.tickets;
    },
  });

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SidebarComponent />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <SearchComponent />
          <EditModalStatus
            ticket={selectedTicket}
            open={openModal}
            onClose={() => {
              setOpenModal(false);
              setSelectedTicket(null);
            }}
          />

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
            {isLoading && (
              <Typography sx={{ p: 2 }}>Loading tickets...</Typography>
            )}
            {isError && (
              <Typography color="error" sx={{ p: 2 }}>
                Failed to load tickets
              </Typography>
            )}
            {!isLoading && !isError && (
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Code</TableCell>
                      <TableCell>Employee</TableCell>
                      <TableCell>Start Date</TableCell>
                      <TableCell>Status</TableCell>
                      <TableCell>Priority</TableCell>
                      <TableCell>Issue</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Refresh">
                          <IconButton
                            sx={{ color: "var(--background-color)" }}
                            onClick={() => refetch()}
                          >
                            <RefreshIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tickets.map((ticket: any) => (
                      <TableRow key={ticket.id}>
                        <TableCell>{ticket.id}</TableCell>
                        <TableCell>{ticket.user?.name || "N/A"}</TableCell>
                        <TableCell>
                          {new Date(ticket.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <span
                            style={{
                              display: "inline-block",
                              width: 16,
                              height: 16,
                              borderRadius: "50%",
                              backgroundColor: getStatusColor(ticket.status),
                            }}
                          ></span>
                        </TableCell>
                        <TableCell>{ticket.priority}</TableCell>
                        <TableCell>{ticket.title}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            sx={{ color: "var(--background-color)" }}
                            onClick={() => {
                              setSelectedTicket(ticket);
                              setOpenModal(true);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    {tickets.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={7} align="center">
                          No tickets Found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
