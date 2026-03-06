import { Button, Box } from "@mui/material";

type ShowAllProps = {
  text: string;
  onClick: () => void;
};

export default function ShowAll({ text, onClick }: ShowAllProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={onClick}
        size="small"
        sx={{
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "var(--primary-font)",
          bgcolor: "var(--dark-background)",
          color: "#fff",
          m: 2,
          width: "80%",
          p: 1,
        }}
      >
        {text}
      </Button>
    </Box>
  );
}
