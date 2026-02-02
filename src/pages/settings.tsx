import { useState } from "react";
import {
  Box,
  Paper,
  Avatar,
  Typography,
  IconButton,
  FormLabel,
  FormControl,
  TextField,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AvatarImage from "../assets/boy.png";
import EmployeeGrowthGraph from "../components/lineGraphComponent";
export default function SettingsPage() {
  const [tab, setTab] = useState(0);
  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      <SidebarComponent />

      <Box component="main" sx={{ flexGrow: 1, pb: 5 }}>
        <SearchComponent />

        <Box
          sx={{
            bgcolor: "#f4f4f4",
            width: "100%",
            height: "auto",
            minHeight: "200vh",
            display: "flex",
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "35%",
              height: "auto",
              gap: 2,
              mt: 2,
            }}
          >
            <Paper
              sx={{
                minHeight: "40vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AvatarSec />
            </Paper>
            <Paper
              sx={{
                bgcolor: "#EDEDED",
                px: 2,
                py: 4,
                fontFamily: "var(--primary-font)",
              }}
            >
              Your Description
              <Box
                component={Paper}
                sx={{ minHeight: "60vh", color: "#fff", mt: 2 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    fontSize: "0.8rem",
                    color: "gray",
                    p: 2,
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime mollitia, Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Maxime mollitia, | Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Maxime mollitia, Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Maxime
                  mollitia,
                </Typography>
              </Box>
            </Paper>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "75%",
              height: "auto",
              gap: 2,
              mt: 2,
            }}
          >
            <Paper sx={{ minHeight: "40vh" }}>
              {" "}
              <EmployeeGrowthGraph />
            </Paper>
            <Tabs
              value={tab}
              onChange={(_, newValue) => setTab(newValue)}
              indicatorColor="primary"
              textColor="primary"
              sx={{
                px: 2,
                borderBottom: "1px solid gray",
                "& .MuiTab-root": {
                  fontFamily: "var(--primary-font)",
                  textTransform: "none",
                  fontSize: "1rem",
                  fontWeight: 500,
                },
              }}
            >
              <Tab label="Personal Details" />
              <Tab label="Job Details" />
            </Tabs>

            <Box sx={{ minHeight: "60vh" }}>
              {tab === 0 && <PersonalDetailsForm />}
              {tab === 1 && <JobDetailsForm />}
              <Box
                sx={{ display: "flex", justifyContent: "right", pr: 2, mt: 4 }}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "var(--dark-background)",
                    color: "#fff",
                    fontFamily: "var(--primary-font)",
                    fontWeight: 600,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
function AvatarSec() {
  return (
    <Box sx={{ position: "relative" }}>
      <Avatar
        src={AvatarImage}
        alt="user avater"
        sx={{
          width: 100,
          height: 100,
          bgcolor: "#f1f1f1",
        }}
      />
      <IconButton
        size="small"
        sx={{
          position: "absolute",
          bottom: 65,
          right: 10,
          bgcolor: "#6A1B9A",
          color: "#fff",
          "&:hover": {
            bgcolor: "#4a148c",
          },
          width: 28,
          height: 28,
        }}
      >
        <CameraAltIcon sx={{ fontSize: 16 }} />
      </IconButton>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "var(--primary-font)",
          fontSize: "1rem",
          fontWeight: 600,
          mt: 1,
          textAlign: "center",
        }}
      >
        Your Name
      </Typography>
      <Typography
        variant="body2"
        color="gray"
        sx={{
          fontFamily: "var(--primary-font)",
          fontSize: "0.6rem",
          textAlign: "center",
        }}
      >
        Your Job Title
      </Typography>
    </Box>
  );
}

function PersonalDetailsForm() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            gap: 1,
            width: "50%",
          }}
        >
          <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
            First Name
          </FormLabel>
          <TextField
            size="small"
            sx={{
              maxWidth: "100%",
              bgcolor: "#DEDEDE",
              fontFamily: "var(--primary-font)",
            }}
          />
        </FormControl>
        <FormControl sx={{ display: "flex", gap: 1, width: "50%" }}>
          <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
            Last Name
          </FormLabel>
          <TextField
            size="small"
            sx={{
              maxWidth: "100%",
              bgcolor: "#DEDEDE",
              border: "none",
              fontFamily: "var(--primary-font)",
            }}
          />
        </FormControl>
      </Box>
      <FormControl
        sx={{
          display: "flex",
          gap: 1,
          width: "100%",
        }}
      >
        <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>Email</FormLabel>
        <TextField
          size="small"
          sx={{
            width: "100%",
            bgcolor: "#DEDEDE",
            fontFamily: "var(--primary-font)",
          }}
        />
      </FormControl>
      <Box
        sx={{
          display: "flex",
          gap: 10,
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <FormControl
          sx={{
            display: "flex",
            gap: 1,
            width: "50%",
          }}
        >
          <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
            password
          </FormLabel>
          <TextField
            size="small"
            type="password"
            sx={{
              maxWidth: "100%",
              bgcolor: "#DEDEDE",
              fontFamily: "var(--primary-font)",
            }}
          />
        </FormControl>
        <FormControl sx={{ display: "flex", gap: 1, width: "50%" }}>
          <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
            Confirm Password
          </FormLabel>
          <TextField
            size="small"
            type="password"
            sx={{
              maxWidth: "100%",
              bgcolor: "#DEDEDE",
              border: "none",
              fontFamily: "var(--primary-font)",
            }}
          />
        </FormControl>
      </Box>
    </Box>
  );
}

function JobDetailsForm() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <FormControl fullWidth>
        <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
          Job Title
        </FormLabel>
        <TextField
          size="small"
          placeholder="Net Developer"
          sx={{
            bgcolor: "#DEDEDE",
            "& .MuiInputBase-input": {
              fontFamily: "var(--primary-font)",
            },
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
          Department
        </FormLabel>
        <TextField
          size="small"
          placeholder="Development"
          sx={{
            bgcolor: "#DEDEDE",
            "& .MuiInputBase-input": {
              fontFamily: "var(--primary-font)",
            },
          }}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel sx={{ fontFamily: "var(--primary-font)" }}>
          Placing Positions
        </FormLabel>
        <TextField
          size="small"
          placeholder="senior"
          sx={{
            bgcolor: "#DEDEDE",
            fontFamily: "var(--primary-font)",
            "& .MuiInputBase-input": {
              fontFamily: "var(--primary-font)",
            },
          }}
        />
      </FormControl>
    </Box>
  );
}
