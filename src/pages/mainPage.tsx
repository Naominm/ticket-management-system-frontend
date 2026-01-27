import { Box, IconButton, Typography, ListItem, List } from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchIcon from "@mui/icons-material/Search";
import CreateTicketComponent from "../components/createTicketComponent";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
              }}
            >
              <List disablePadding>
                <ListItem
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    bgcolor: "#f5f5f5",
                    mb: 1,
                    borderRadius: 1,
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography fontWeight={600}>
                      product <span style={{ color: "red" }}>*</span>
                    </Typography>
                    <ArrowDropDownIcon />
                  </Box>
                  <Typography>E-invoice</Typography>
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
