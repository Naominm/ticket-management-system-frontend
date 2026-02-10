import { Box, Button, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router";
import AddIcon from "@mui/icons-material/Add";

export default function CreateTicketComponent() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        mt: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        px: 2,
        minHeight: "15vh",
        backgroundColor: "#fff",
        boxShadow: "2px 2px 4px 2px rgba(146, 143, 143, 0.2)",
      }}
    >
      <IconButton sx={{ color: "var(--background-color)" }}>
        <Box sx={{ display: "flex", gap: 2 }}>
          <AddIcon fontSize="small" />
          <Typography
            sx={{ fontSize: "1rem", fontFamily: "var(--primary-font)" }}
          >
            {" "}
            Tickets
          </Typography>
        </Box>
      </IconButton>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "var(--background-color)",
          fontFamily: "Var(--primary-font)",
          textTransform: "capitalize",
        }}
        onClick={() => navigate("/home")}
      >
        Create a task
      </Button>
    </Box>
  );
}
