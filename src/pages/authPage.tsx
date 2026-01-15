import { Box } from "@mui/material";
import FormComponent from "../components/formComponent";

export default function AuthPage() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--background-color)",
        height: "100vh",
        gap: 5,
      }}
    >
      <FormComponent />
    </Box>
  );
}
