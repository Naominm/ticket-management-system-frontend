import { Box, Paper, CardContent, Typography } from "@mui/material";

interface mostClientActiveProps {
  name: string;
  number: number;
  avatar: string;
}

export default function MostClientActive({
  name,
  number,
  avatar,
}: mostClientActiveProps) {
  return (
    <CardContent component={Paper}>
      <Box
        component={Paper}
        elevation={0}
        sx={{
          display: "flex",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "50%",
          }}
        >
          <Box
            component={"img"}
            sx={{
              width: "40px",
              bgcolor: "#f4f4f4",
              borderRadius: "50%",
            }}
            src={avatar}
          />
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.8rem",
              fontFamily: "var(--primary-font)",
            }}
          >
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "0.8rem",
              fontFamily: "var(--primary-font)",
            }}
          >
            {number}
          </Typography>
        </Box>
      </Box>
    </CardContent>
  );
}
