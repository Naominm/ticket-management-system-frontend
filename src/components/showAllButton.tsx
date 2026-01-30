import { Box, Button } from "@mui/material";

export default function ShowAll() {
  return (
    <Box sx={{ display: "flex", justifyContent: "right", mr: 2 }}>
      <Button
        variant="contained"
        sx={{
          my: 2,
          backgroundColor: "var(--dark-background)",
          textTransform: "capitalize",
          maxWidth: "120px",
        }}
      >
        Show All
      </Button>
    </Box>
  );
}
