import { Box, CardContent, Typography, Avatar } from "@mui/material";

interface ActiveEmployeeProp {
  name: string;
  number: number;
  percentage: string;
  color: string;
  avatar: string | null;
}
export default function MostActiveEmployeeCard({
  name,
  number,
  percentage,
  color,
  avatar,
}: ActiveEmployeeProp) {
  return (
    <CardContent sx={{ display: "flex", width: "100%", gap: 5 }}>
      <Box sx={{ display: "flex", gap: 4 }}>
        <Avatar
          src={avatar || undefined}
          alt={name}
          sx={{ width: 40, height: 40 }}
        >
          {!avatar && name?.charAt(0).toUpperCase()}
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            fontSize: "1rem",
            fontFamily: "var(--primary-font)",
            color: "#000",
            fontWeight: 400,
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 8 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--primary-font)",
            color: "gray",
            fontSize: "1rem",
            fontWeight: 400,
          }}
        >
          {number}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--primary-font)",
            fontSize: "1rem",
            color: { color },
            fontWeight: 400,
          }}
        >
          {percentage}
        </Typography>
      </Box>
    </CardContent>
  );
}
