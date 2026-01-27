import { Box, IconButton, Typography, ListItem, List } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchIcon from "@mui/icons-material/Search";
import CreateTicketComponent from "../components/createTicketComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function CollapsibleSidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <SidebarComponent />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", gap: 4, backgroundColor: "#ffff" }}>
          <IconButton
            sx={{
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 4,
            }}
          >
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
                border: "1px solid blue",
                display: "flex",
                flexDirection: "column",
                bgcolor: "#f8f4f4",
              }}
            >
              <List disablePadding>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#f8f7f7",
                    borderRadius: 1,
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
                border: "1px solid red",
              }}
            ></Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
