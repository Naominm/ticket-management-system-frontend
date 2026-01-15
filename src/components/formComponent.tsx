import { Box } from "@mui/material";

export default function FormComponent() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        py: 5,
        px: 10,
      }}
    >
      <FormSection />
      <FormImageSection />
    </Box>
  );
}

function FormSection() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--primary-color)",
        height: "80vh",
        width: "50%",
        borderRadius: "5px 0 0 5px",
      }}
    >
      <Box>This is the form section</Box>
    </Box>
  );
}

function FormImageSection() {
  return (
    <Box
      component="div"
      sx={{
        backgroundColor: "var(--primary-deep-color)",
        height: "80vh",
        width: "50%",
        borderRadius: "0px 5px 5px 0",
      }}
    >
      <Box>This is the image section for the form component</Box>
    </Box>
  );
}
