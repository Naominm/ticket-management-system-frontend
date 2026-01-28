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
} from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CreateTicketComponent from "../components/createTicketComponent";
import EditModalStatus from "../components/editStatusModal";

import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";
import { green, red, orange } from "@mui/material/colors";

const rows = [
  {
    code: 6,
    employee: "Othaim",
    startDate: "20/11/23",
    status: "green",
    daysLeft: 0,
    issue: "Invalid Invoices",
  },
  {
    code: 5,
    employee: "Burger King",
    startDate: "20/11/22",
    status: "orange",
    daysLeft: 0,
    issue: "Implementation",
  },
  {
    code: 4,
    employee: "McDonalds",
    startDate: "20/11/21",
    status: "red",
    daysLeft: 7,
    issue: "Install Program",
  },
  {
    code: 3,
    employee: "Othaim",
    startDate: "20/11/20",
    status: "green",
    daysLeft: 0,
    issue: "Invalid Invoices",
  },
  {
    code: 2,
    employee: "McDonalds",
    startDate: "20/11/19",
    status: "green",
    daysLeft: 0,
    issue: "Install Program",
  },
  {
    code: 1,
    employee: "Burger King",
    startDate: "20/11/18",
    status: "orange",
    daysLeft: 2,
    issue: "Invalid Invoices",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "green":
      return green[500];
    case "red":
      return red[500];
    case "orange":
      return orange[500];
    default:
      return "grey";
  }
};

export default function TicketPage() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <SidebarComponent />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <SearchComponent />
          <EditModalStatus
            open={openModal}
            selectedRow={selectedRow}
            onClose={() => setOpenModal(false)}
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
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Code</TableCell>
                    <TableCell>Employee</TableCell>
                    <TableCell>Start Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Days Left</TableCell>
                    <TableCell>Issue</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Refresh">
                        <IconButton sx={{ color: "var(--background-color)" }}>
                          <RefreshIcon />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.code}>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.employee}</TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>
                        <span
                          style={{
                            display: "inline-block",
                            width: 16,
                            height: 16,
                            borderRadius: "50%",
                            backgroundColor: getStatusColor(row.status),
                          }}
                        ></span>
                      </TableCell>
                      <TableCell>{row.daysLeft}</TableCell>
                      <TableCell>{row.issue}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          sx={{ color: "var(--background-color)" }}
                          onClick={() => {
                            setSelectedRow(row.code);
                            setOpenModal(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
