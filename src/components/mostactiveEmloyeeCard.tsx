import { Box, CardContent, Typography } from "@mui/material";

import manAvatar from "../assets/man.png";
interface ActiveEmployeeProp {
  name: string;
  number: number;
  percentage: string;
}
export default function MostActiveEmployeeCard({
  name,
  number,
  percentage,
}: ActiveEmployeeProp) {
  return (
    <CardContent sx={{ display: "flex", width: "100%", gap: 5 }}>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Box component={"img"} sx={{ width: "40px" }} src={manAvatar} />
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
      <Box sx={{ display: "flex", gap: 4 }}>
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
            color: "green",
            fontWeight: 400,
          }}
        >
          {percentage}
        </Typography>
      </Box>
    </CardContent>
  );
}
