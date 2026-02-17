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
import DashboardGraph from "../components/graphDashboard";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getStatusBg = (status: string) => {
  switch (status) {
    case "OPEN":
      return "var(--yellow-color)";
    case "IN_PROGRESS":
      return "orange";
    case "RESOLVED":
      return "green";
    case "CLOSED":
      return "green";
    default:
      return "gray";
  }
};

const formatTimeAgo = (date: string) => {
  const diff = Date.now() - new Date(date).getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));

  if (hours < 1) return "Just now";
  if (hours === 1) return "1 hour ago";
  return `${hours} hours ago`;
};

export default function DashboardPage() {
  const API_URL = import.meta.env.VITE_API_URL;

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: ["lastTickets"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/ticket`, {
        withCredentials: true,
      });
      return res.data.tickets;
    },
  });

  const lastTickets = [...tickets]
    .sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 4);
  const { data: mostActive = [], isLoading: isLoadingActive } = useQuery({
    queryKey: ["mostActiveEmployees"],
    queryFn: async () => {
      const res = await axios.get(
        `${API_URL}/api/assign/most-active-employees`,
        { withCredentials: true },
      );
      return res.data.data;
    },
  });

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
          }}
        >
          <Box sx={{ display: "flex", width: "100%", mt: 4, gap: 2, px: 2 }}>
            <Box
              component={Paper}
              elevation={0}
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
                {isLoading && (
                  <Typography sx={{ p: 2 }}>Loading tickets...</Typography>
                )}

                {!isLoading &&
                  lastTickets.map((ticket: any) => (
                    <CardBodyComponent
                      key={ticket.id}
                      title={ticket.status.toLowerCase()}
                      id={`#${ticket.id}`}
                      name={
                        ticket.user
                          ? `${ticket.user.firstName} ${ticket.user.lastName}`
                          : "Unknown"
                      }
                      status={ticket.title}
                      date={new Date(ticket.createdAt).toLocaleDateString()}
                      time={formatTimeAgo(ticket.createdAt)}
                      bg={getStatusBg(ticket.status)}
                    />
                  ))}
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
                      color="green"
                    />
                    <MostActiveEmployeeCard
                      name="Ahmed Mohhamed"
                      percentage="80%"
                      number={1320}
                      color="var(--yellow-color)"
                    />
                    <MostActiveEmployeeCard
                      name="Ahmed Mohhamed"
                      percentage="50%"
                      number={930}
                      color="red"
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

              <Box component={Paper} sx={{ width: "100%", minHeight: "50vh" }}>
                <DashboardGraph />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
