import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton,
  Button,
  Avatar,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

interface CardProps {
  title: string;
  name: string;
  id: string;
  status: string;
  date: string;
  time: string;
  bg: string;
  avatar: string | null;
}

export default function CardBodyComponent({
  title,
  id,
  name,
  status,
  date,
  time,
  bg,
  avatar,
}: CardProps) {
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
              bgcolor: bg,
              fontSize: "0.5rem",
            }}
          >
            {title}
          </Button>
          <Typography
            variant="body2"
            sx={{
              fontSize: "0.8rem",
              fontFamily: "var(--primary-font)",
              color: "gray",
            }}
          >
            {id}
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
          <Avatar
            src={avatar || undefined}
            alt={name}
            sx={{ width: 40, height: 40 }}
          >
            {!avatar && name?.charAt(0).toUpperCase()}
          </Avatar>
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
                fontSize: "0.8rem",
                textTransform: "capitalize",
              }}
            >
              {name}
            </Typography>
            <Typography
              sx={{
                fontFamily: "var(--primary-font)",
                color: "#000",
                fontSize: "0.5rem",
                textTransform: "capitalize",
              }}
            >
              {status}
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
              {date}
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
              {time}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
