import {
  Box,
  Typography,
  FormControl,
  TextField,
  FormLabel,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
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
    <Box
      component={"div"}
      sx={{
        height: { xs: "auto", md: "85vh" },
        minHeight: "20vh",
        backgroundColor: "var(--primary-color)",
        width: { xs: "100%", md: "50%" },
      }}
    >
      <Box
        component="div"
        sx={{
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
            fontFamily={"var(--primary-font)"}
          >
            login with email
          </Typography>
        </Box>
      </Box>
      <Box
        component={"div"}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <FormControl
          sx={{
            px: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
              fontSize: "1 rem",
            }}
          >
            Email
          </FormLabel>
          <TextField
            placeholder="example@tenakata.com"
            sx={{ backgroundColor: "#fff" }}
            size="small"
            required
            fullWidth
          />
        </FormControl>
        <FormControl
          sx={{
            px: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "100%",
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
              fontSize: "1 rem",
            }}
          >
            password
          </FormLabel>
          <TextField
            placeholder="@B123"
            sx={{ backgroundColor: "#fff" }}
            size="small"
            required
            fullWidth
          />
        </FormControl>
      </Box>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 1,
          px: { xs: 2, md: 10 },
        }}
      >
        <FormControlLabel
          control={<Checkbox size="small" />}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontFamily: "var(--primary-font)",
              fontSize: "0.875rem",
            },
          }}
          label="Keep me logged in"
        />
        <Link
          href="/forgot password"
          sx={{
            color: "crimson",
            textDecoration: "none",
            fontFamily: "var(--primary-font)",
          }}
        >
          {" "}
          Forgot password?
        </Link>
      </Box>
      <Box
        component={"div"}
        sx={{ width: "100%", minHeight: "10vh", px: { xs: 2, md: 10 }, mt: 4 }}
      >
        <Button
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "var(--dark-background)",
            textTransform: "lowercase",
            fontFamily: "var(--primary-font)",
            fontSize: "1.2rem",
          }}
        >
          Submit
        </Button>
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
