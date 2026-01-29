import { Box, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchComponent() {
  return (
    <Box sx={{ display: "flex", gap: 4, backgroundColor: "#ffff" }}>
      <IconButton
        sx={{
          color: "gray",
          display: "flex",
          alignItems: "center",
          gap: 4,
        }}
      >
        <SearchIcon />
        <Typography
          variant="body2"
          sx={{
            color: "gray",
            fontSize: "1.2rem",
            fontFamily: "var(--primary-font)",
          }}
        >
          search...
        </Typography>
      </IconButton>
    </Box>
  );
}
