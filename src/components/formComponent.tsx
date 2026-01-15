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
  return <Box></Box>;
}

function FormImageSection() {
  return <Box></Box>;
}
