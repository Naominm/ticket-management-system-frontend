import { Box } from "@mui/material";

export default function FormComponent() {
  return (
    <Box component="div" sx={{ backgroundColor: "var(--primary-color)" }}>
      <FormSection />
      <FormImageSection />
    </Box>
  );
}

function FormSection() {
  return (
    <Box component="div">
      <Box>This is the form section</Box>
    </Box>
  );
}

function FormImageSection() {
  return (
    <Box component="div">
      <Box>This is the image section for the form component</Box>
    </Box>
  );
}
