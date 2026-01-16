import { Box } from "@mui/material";
import FormComponent from "../components/formComponent";
import logo from "../assets/logo.png";

export default function AuthPage() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--background-color)",
        position: "relative",
        Height: { xs: "auto", md: "auto" },
        gap: 5,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: { xs: "20%", md: "40%" },
          zIndex: 5174,
          height: { xs: "5vh", md: "8vh" },
          transform: "translateX(-50)",
          boxShadow: "2px 2px 4px 2px rgba(146, 143, 143, 0.65)",
        }}
      >
        <Box
          component={"img"}
          src={logo}
          sx={{
            width: "100%",
            height: "100%",
          }}
        ></Box>
      </Box>
      <FormComponent />
    </Box>
  );
}
