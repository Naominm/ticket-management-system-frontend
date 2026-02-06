import { useState } from "react";
import {
  Box,
  Typography,
  ListItem,
  List,
  Paper,
  Button,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import CreateTicketComponent from "../components/createTicketComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { setLayout } from "recharts/types/state/layoutSlice";

export default function CollapsibleSidebar() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [priority, setPriority] = useState("medium");
  const [loading, setLoading] = useState(false);

  const handleCreateTicket = async () => {
    if (!title || !description || !departmentId) {
      <Alert severity="error">"Please fill in all fields"</Alert>;
    }
    try {
      setLoading(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <SidebarComponent />
      <Box component="main" sx={{ flexGrow: 1 }}>
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
          <Box
            sx={{
              textAlign: "center",
              fontFamily: "var(--primary-font)",
              fontWeight: 600,
              color: "#000",
              py: 2,
              backgroundColor: "#fff",
              textTransform: "capitalize",
            }}
          >
            Create ticket component
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "40vh",
            }}
          >
            <Box
              sx={{
                width: "50%",
                height: "70vh",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#EBEBEB",
              }}
            >
              <List disablePadding sx={{ mt: 5, px: 2 }}>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#f8f7f7",
                    borderRadius: 1,
                    minHeight: "10vh",
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ fontFamily: "var(--primary-font)" }}
                    >
                      Task Title <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    multiple
                    placeholder="Enter task title"
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontFamily: "var(--primary-font)",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#ffff",
                    borderRadius: 1,
                    minHeight: "10vh",
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ fontFamily: "var(--primary-font)" }}
                    >
                      Name <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <Typography sx={{ fontFamily: "var(--primary-font)" }}>
                    Ahmed Mohamoud
                  </Typography>
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#f8f7f7",
                    borderRadius: 1,
                    minHeight: "10vh",
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ fontFamily: "var(--primary-font)" }}
                    >
                      Company/Department <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <input
                    type="text"
                    placeholder="Enter the department ID"
                    value={departmentId}
                    onChange={(e) => setDepartmentId(e.target.value)}
                    style={{
                      border: "none",
                      outline: "none",
                      background: "transparent",
                      fontFamily: "var(--primary-font)",
                    }}
                  />
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#fff",
                    borderRadius: 1,
                    minHeight: "10vh",
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ fontFamily: "var(--primary-font)" }}
                    >
                      Creation Date <span style={{ color: "red" }}>*</span>
                    </Typography>
                  </Box>
                  <CalendarMonthIcon />
                </ListItem>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    borderRadius: 1,
                    minHeight: "10vh",
                    bgcolor: "#f8f7f7",
                    mb: 0.5,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      fontWeight={600}
                      sx={{ fontFamily: "var(--primary-font)" }}
                    >
                      priority<span style={{ color: "red" }}>*</span>
                    </Typography>
                  </Box>
                  <Select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    size="small"
                    sx={{
                      minWidth: 120,
                      backgroundColor: "#fff",
                      fontFamily: "var(--primary-font)",
                    }}
                  >
                    <MenuItem value="LOW">Low</MenuItem>
                    <MenuItem value="MEDIUM">Medium</MenuItem>
                    <MenuItem value="HIGH">High</MenuItem>
                  </Select>
                </ListItem>
              </List>
            </Box>
            <Box
              sx={{
                width: "50%",
                height: "70vh",
                bgcolor: "#EBEBEB",
                px: 2,
                py: 3,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{ fontFamily: "var(--primary-font)", fontWeight: 700 }}
              >
                Task Description <span style={{ color: "red" }}>*</span>
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  backgroundColor: "#fff",
                  width: "100%",
                  minHeight: "35vh",
                  mt: 2,
                  padding: 1,
                }}
              >
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  ipsa voluptatibus debitis officia non, in placeat excepturi
                  recusandae id minus possimus culpa dolore. Aperiam dolorum
                  aliquid quod facilis assumenda? Dolore enim esse velit tempora
                  ut dolor quia voluptatum itaque, iure asperiores, veritatis
                  maiores nobis facilis officiis repudiandae reiciendis neque
                  ea."
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    fontFamily: "var(--primary-font)",
                  }}
                />
              </Paper>
              <Box sx={{ display: "flex", mt: 4, width: "100%", gap: 0.5 }}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: "var(--yellow-color)",
                    width: "50%",
                    fontFamily: "var(--primary-font)",
                  }}
                >
                  Close
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCreateTicket}
                  disabled={loading}
                  sx={{
                    bgcolor: "var(--background-color)",
                    width: "50%",
                    fontFamily: "var(--primary-font)",
                  }}
                >
                  {loading ? "creating a task" : "create task"}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
