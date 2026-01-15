import { Box } from "@mui/material";
import FormComponent from "../components/formComponent";
import logo from "../assets/logoTenakata.svg";

export default function AuthPage() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--background-color)",
        position: "relative",
        height: "100vh",
        gap: 5,
      }}
    >
      <Box
        component={"img"}
        src={logo}
        sx={{
          position: "absolute",
          top: 50,
          left: "40%",
          zIndex: 5174,
          height: "15vh",
        }}
      ></Box>
      <FormComponent />
    </Box>
  );
}
