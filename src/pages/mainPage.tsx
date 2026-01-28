import { Box, Typography, ListItem, List, Paper, Button } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import CreateTicketComponent from "../components/createTicketComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function CollapsibleSidebar() {
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
                      product <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <Typography sx={{ fontFamily: "var(--primary-font)" }}>
                    E-invoice
                  </Typography>
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
                      Company <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <Typography sx={{ fontFamily: "var(--primary-font)" }}>
                    Burger King
                  </Typography>
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
                      Start Date <span style={{ color: "red" }}>*</span>
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
                      End Date<span style={{ color: "red" }}>*</span>
                    </Typography>
                  </Box>
                  <CalendarMonthIcon />
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
                <Typography
                  variant="body2"
                  sx={{ fontFamily: "var(--primary-font)", color: "gray" }}
                >
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam,
                  ipsa voluptatibus debitis officia non, in placeat excepturi
                  recusandae id minus possimus culpa dolore. Aperiam dolorum
                  aliquid quod facilis assumenda? Dolore enim esse velit tempora
                  ut dolor quia voluptatum itaque, iure asperiores, veritatis
                  maiores nobis facilis officiis repudiandae reiciendis neque
                  ea.
                </Typography>
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
                  sx={{
                    bgcolor: "var(--background-color)",
                    width: "50%",
                    fontFamily: "var(--primary-font)",
                  }}
                >
                  Add task
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
