import {
  Box,
  Paper,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { useState } from "react";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import CardBodyComponent from "../components/cardBodyComponent";
import PersonIcon from "@mui/icons-material/Person";
import MostActiveEmployeeCard from "../components/mostactiveEmloyeeCard";
import MostClientActive from "../components/mostClientActiveComponent";
import PeopleIcon from "@mui/icons-material/People";
import mcDonaldsAvatar from "../assets/macdonalds.png";
// import BurgerKingAvatar from "../assets/burgerking.png";
// import othanimAvatar from "../assets/othanim.png";
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
  const [showAllTickets, setShowAllTickets] = useState(false);
  const [showAllEmployees, setShowAllEmployees] = useState(false);
  const [showAllDepartments, setShowAllDepartments] = useState(false);

  const { data: tickets = [], isLoading } = useQuery({
    queryKey: ["lastTickets"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/ticket`, {
        withCredentials: true,
      });
      console.log(res.data.tickets[0]?.user);
      return res.data.tickets;
    },
  });

  const sortedTickets = [...tickets].sort(
    (a: any, b: any) =>
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  const displayedTickets = showAllTickets
    ? sortedTickets
    : sortedTickets.slice(0, 4);

  const { data: mostActive = [], isLoading: isLoadingActive } = useQuery({
    queryKey: ["mostActiveEmployees"],
    queryFn: async () => {
      const res = await axios.get(
        `${API_URL}/api/assign/most-active-employees`,
        { withCredentials: true },
      );
      console.log(res.data.data[0]);
      return res.data.data;
    },
  });
  const displayedEmployees = showAllEmployees
    ? mostActive
    : mostActive.slice(0, 3);

  const { data: mostActiveDepartments = [], isLoading: isLoadingDepartments } =
    useQuery({
      queryKey: ["mostActiveDepartments"],
      queryFn: async () => {
        const res = await axios.get(
          `${API_URL}/api/assign/most-active-departments`,
          { withCredentials: true },
        );
        return res.data.data;
      },
    });

  const displayedDepartments = showAllDepartments
    ? mostActiveDepartments
    : mostActiveDepartments.slice(0, 3);

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
                  displayedTickets.map((ticket: any) => (
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
                      avatar={ticket.user?.avatarUrl || null}
                    />
                  ))}
              </Card>

              {tickets.length > 4 && (
                <ShowAll
                  text={showAllTickets ? "Show Less" : "Show All"}
                  onClick={() => setShowAllTickets(!showAllTickets)}
                />
              )}
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
                    {isLoadingActive && (
                      <Typography sx={{ p: 2 }}>
                        Loading employees...
                      </Typography>
                    )}

                    {!isLoadingActive &&
                      displayedEmployees.map((employee: any) => (
                        <MostActiveEmployeeCard
                          key={employee.id}
                          name={employee.employeeName}
                          percentage={`${employee.resolutionRate}%`}
                          number={employee.totalTickets}
                          color={
                            employee.percentageResolved >= 80
                              ? "green"
                              : employee.percentageResolved >= 50
                                ? "var(--yellow-color)"
                                : "red"
                          }
                          avatar={employee.avatarUrl || null}
                        />
                      ))}
                  </Card>
                  {mostActive.length > 3 && (
                    <ShowAll
                      text={showAllEmployees ? "Show Less" : "Show All"}
                      onClick={() => setShowAllEmployees(!showAllEmployees)}
                    />
                  )}
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

                  {isLoadingDepartments && (
                    <Typography sx={{ p: 2 }}>
                      Loading departments...
                    </Typography>
                  )}

                  {!isLoadingDepartments &&
                    Array.isArray(mostActiveDepartments) &&
                    mostActiveDepartments.length > 0 &&
                    displayedDepartments.map((dept: any) => (
                      <MostClientActive
                        key={dept.id}
                        name={dept.name}
                        number={dept.resolvedTickets}
                        avatar={`https://ui-avatars.com/api/?name=${encodeURIComponent(dept.name)}&background=random&color=fff&size=40`}
                      />
                    ))}
                  {mostActiveDepartments.length > 3 && (
                    <ShowAll
                      text={showAllDepartments ? "Show Less" : "Show All"}
                      onClick={() => setShowAllDepartments(!showAllDepartments)}
                    />
                  )}
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
