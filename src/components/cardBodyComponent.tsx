import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ManAvatar from "../assets/man.png";

export default function CardBodyComponent() {
  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 0.5,
          }}
        >
          <Button
            size="small"
            variant="contained"
            sx={{
              fontFamily: "var(--primary-font)",
              bgcolor: "var(--yellow-color)",
              fontSize: "0.5rem",
            }}
          >
            in process
          </Button>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.6rem",
              fontFamily: "var(--primary-font)",
              color: "gray",
            }}
          >
            #47AD6
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 2,
            gap: 2,
          }}
        >
          <Box component={"img"} sx={{ width: "40px" }} src={ManAvatar} />
          <Box
            component={"div"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0.4,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--primary-font)",
                color: "#000",
                fontSize: "0.5rem",
                textTransform: "capitalize",
              }}
            >
              Ahmed Mohamoud
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--primary-font)",
                color: "#000",
                fontSize: "0.4rem",
                textTransform: "capitalize",
              }}
            >
              Invalid Status in McDonalds Company
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <AccessTimeIcon sx={{ fontSize: "small" }} />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "var(--primary-font)",
                fontSize: "0.5rem",
                color: "gray",
              }}
            >
              Feb 11.2024
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <CalendarTodayIcon sx={{ fontSize: "small" }} />
            </IconButton>
            <Typography
              variant="body2"
              sx={{
                fontFamily: "var(--primary-font)",
                fontSize: "0.5rem",
                color: "gray",
              }}
            >
              4.30 hrs ago
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
