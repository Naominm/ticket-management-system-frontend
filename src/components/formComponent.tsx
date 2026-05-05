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
  Alert,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import hero from "../assets/hero.svg";

export default function FormComponent() {
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 2, md: 0.5 },
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        { identifier: email, password },
        { withCredentials: true },
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      navigate("/home");
    } catch (err: any) {
      if (err.response?.status === 401) {
        setError("Invalid email or password.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="div"
      sx={{
        height: { xs: "auto", md: "120vh" },
        minHeight: "50vh",
        backgroundColor: "var(--primary-color)",
        width: { xs: "100%", md: "50%" },
        borderRadius: { xs: "5px", md: "5px 0 0 5px" },
      }}
    >
      <Box
        component="div"
        sx={{
          padding: 3.4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight={600}
          sx={{
            fontFamily: "var(--secondary-font)",
            fontSize: { xs: "1.5rem", md: "1.8rem" },
          }}
        >
          Welcome Back
        </Typography>
        <Typography
          variant="body2"
          textAlign="center"
          textTransform="capitalize"
          fontFamily="var(--primary-font)"
        >
          Login with your Tenakata account
        </Typography>
      </Box>

      {error && (
        <Alert severity="error" onClose={() => setError(null)} sx={{ mx: 2 }}>
          {error}
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <FormControl
          sx={{
            px: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
            }}
          >
            Email
          </FormLabel>
          <TextField
            placeholder="example@tenakata.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            gap: 1,
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
            }}
          >
            Password
          </FormLabel>
          <TextField
            placeholder="••••••••"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
            size="small"
            required
            fullWidth
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: { xs: 2, md: 10 },
          }}
        >
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Keep me logged in"
            sx={{
              "& .MuiFormControlLabel-label": {
                fontFamily: "var(--primary-font)",
                fontSize: "0.875rem",
              },
            }}
          />
          <Link
            href="/forgot-password"
            sx={{
              color: "var(--red-color)",
              textDecoration: "none",
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
            }}
          >
            Forgot password?
          </Link>
        </Box>

        <Box sx={{ px: { xs: 2, md: 10 } }}>
          <Button
            variant="contained"
            size="small"
            fullWidth
            type="submit"
            disabled={loading}
            sx={{
              backgroundColor: "var(--dark-background)",
              textTransform: "lowercase",
              fontFamily: "var(--primary-font)",
              fontSize: "1.2rem",
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
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
        height: { xs: "auto", md: "120vh" },
        minHeight: "50vh",
        width: { xs: "100%", md: "50%" },
        borderRadius: { xs: "5px", md: "0px 5px 5px 0" },
      }}
    >
      <Button
        variant="contained"
        size="small"
        sx={{
          backgroundColor: "transparent",
          position: "absolute",
          bottom: { xs: 560, md: 70 },
          left: { xs: "29%", sm: "40%", md: "62%" },
          minHeight: { xs: "40px", sm: "50px", md: "50px" },
          minWidth: { xs: "150px", sm: "175px", md: "250px" },
          zIndex: 5545,
          borderRadius: { xs: "5px", md: "4px" },
          fontFamily: "var(--primary-font)",
          fontSize: "1.2rem",
        }}
      >
        Ticketing System
      </Button>
      <Box
        component="img"
        src={hero}
        alt="hero image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "relative",
        }}
      />
    </Box>
  );
}
