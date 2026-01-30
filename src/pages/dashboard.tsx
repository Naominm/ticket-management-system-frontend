import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import CardBodyComponent from "../components/cardBodyComponent";
import PersonIcon from "@mui/icons-material/Person";
import MostActiveEmployeeCard from "../components/mostactiveEmloyeeCard";
import MostClientActive from "../components/mostClientActiveComponent";
import PeopleIcon from "@mui/icons-material/People";
import mcDonaldsAvatar from "../assets/macdonalds.png";
import BurgerKingAvatar from "../assets/burgerking.png";
import othanimAvatar from "../assets/othanim.png";
import ShowAll from "../components/showAllButton";
export default function DashboardPage() {
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
            minHeight: "600px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", width: "100%", mt: 4, gap: 2, px: 2 }}>
            <Box
              component={Paper}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "35%",
                height: "auto",
                minHeight: "120vh",
              }}
            >
              <Card sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "row-reverse",
                    alignItems: "center",
                    justifyContent: "left",
                    gap: 2,
                    bgcolor: "#f4f4f4",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--primary-font)",
                      color: "var(--dark-background)",
                      fontSize: "1rem",
                      fontWeight: "600",
                    }}
                  >
                    {" "}
                    Last Tickets
                  </Typography>
                  <IconButton
                    sx={{ color: "var(--dark-background)", fontSize: "small" }}
                  >
                    <MapsHomeWorkIcon />
                  </IconButton>
                </CardContent>
                <CardBodyComponent
                  title="in process"
                  name="Ahmed Mohamed"
                  status="Invalid Status in McDonalds Company"
                  date="Feb 11 ,2024"
                  time="4.30 Hours ago"
                  id="#4A7d5"
                />
                <CardBodyComponent
                  title="in process"
                  name="Ahmed Mohamed"
                  status="Invalid Status in McDonalds Company"
                  date="Feb 11 ,2024"
                  time="4.30 Hours ago"
                  id="#4A7d5"
                />
                <CardBodyComponent
                  title="in process"
                  name="Ahmed Mohamed"
                  status="Invalid Status in McDonalds Company"
                  date="Feb 11 ,2024"
                  time="4.30 Hours ago"
                  id="#4A7d5"
                />
              </Card>
              <ShowAll />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2,
              }}
            >
              <Box sx={{ display: "flex", gap: 2, minHeight: "50vh" }}>
                <Box
                  component={Paper}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    width: "50%",
                    height: "auto",
                  }}
                >
                  <Card>
                    <CardContent
                      sx={{
                        bgcolor: "#f4f4f4",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "left",
                        flexDirection: "row-reverse",
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "var(--primary-font)",
                          fontSize: "1rem",
                          fontWeight: "600",
                          color: "var( --dark-background)",
                        }}
                      >
                        Most Active Employee
                      </Typography>
                      <IconButton
                        sx={{
                          fontSize: "small",
                          color: "var(--dark-background)",
                        }}
                      >
                        <PersonIcon />
                      </IconButton>
                    </CardContent>
                    <MostActiveEmployeeCard
                      name="Ahmed Mohhamed"
                      percentage="99%"
                      number={1400}
                    />
                  </Card>
                  <ShowAll />
                </Box>
                <Box
                  component={Paper}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    width: "50%",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "row-reverse",
                      alignItems: "center",
                      justifyContent: "left",
                      gap: 2,
                      bgcolor: "#f4f4f4",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "var(--primary-font)",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "var( --dark-background)",
                      }}
                    >
                      Most Client active
                    </Typography>
                    <IconButton sx={{ color: "var(--dark-background)" }}>
                      <PeopleIcon />
                    </IconButton>
                  </CardContent>
                  <MostClientActive
                    name="mcDonalds"
                    number={60}
                    avatar={mcDonaldsAvatar}
                  />
                  <MostClientActive
                    name="BurgerKing"
                    number={60}
                    avatar={BurgerKingAvatar}
                  />
                  <MostClientActive
                    name="Othanim"
                    number={55}
                    avatar={othanimAvatar}
                  />
                  <ShowAll />
                </Box>
              </Box>

              <Box component={Paper} sx={{ width: "100%", height: "50vh" }}>
                component 2
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
