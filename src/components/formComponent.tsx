import {
  Box,
  Typography,
  FormControl,
  TextField,
  Button,
  FormLabel,
} from "@mui/material";

export default function FormComponent() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, md: 5 },
        px: { xs: 4, md: 10 },
        gap: { xs: 4, md: 0 },
      }}
    >
      <FormSection />
      <FormImageSection />
    </Box>
  );
}

function FormSection() {
  return (
    <Box component={"div"}>
      <Box
        component="div"
        sx={{
          backgroundColor: "var(--primary-color)",
          height: { xs: "auto", md: "85vh" },
          minHeight: "20vh",
          width: { xs: "100%", md: "50%" },
          borderRadius: "5px 0 0 5px",
          padding: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          fontFamily: "var(--primary-font) ",
        }}
      >
        <Box component="div">
          <Typography
            variant="h5"
            textTransform={"uppercase"}
            fontWeight={600}
            fontSize={"2rem"}
            sx={{ fontFamily: "var(--secondary-font)" }}
          >
            Welcome Back
          </Typography>
          <Typography
            variant="body2"
            textAlign={"center"}
            textTransform={"capitalize"}
          >
            login with email
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

function FormImageSection() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--primary-deep-color)",
        height: { xs: "auto", md: "85vh" },
        minHeight: "20vh",
        width: { xs: "100%", md: "50%" },
        borderRadius: "0px 5px 5px 0",
      }}
    >
      <Box>This is the image section for the form component</Box>
    </Box>
  );
}
