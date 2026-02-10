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
  const [isSignup, setIsSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API URL:", import.meta.env.VITE_API_URL);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignup) {
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        setError("please fill in all fields");
        return;
      }
      if (password !== confirmPassword) {
        setError("password do not match");
        return;
      }
      try {
        const res = await axios.post(
          `${API_URL}/api/auth/signup`,
          { firstName, lastName, email, password },
          { withCredentials: true },
        );
        const token = res.data.token;
        localStorage.setItem("token", token);
        console.log("signup successful", res.data);
        setIsSignup(false);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");

        return;
      } catch (err) {
        console.error(err);
      }
    } else {
      if (!password || !email) {
        setError("All fields are required");
        return;
      }
    }
    try {
      const res = await axios.post(
        `${API_URL}/api/auth/login`,
        { identifier: email, password },
        { withCredentials: true },
      );
      console.log(`login successful`, res.data);
      navigate(`/home`);
      setError(null);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Box
      component={"div"}
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
          fontFamily: "var(--primary-font) ",
        }}
      >
        <Box component="div">
          <Typography
            variant="h5"
            textTransform={"uppercase"}
            fontWeight={600}
            sx={{
              fontFamily: "var(--secondary-font)",
              fontSize: { xs: "1.5rem", md: "1.8rem" },
            }}
          >
            {isSignup ? "Create account" : "Welcome Back"}
          </Typography>
          <Typography
            variant="body2"
            textAlign={"center"}
            textTransform={"capitalize"}
            fontFamily={"var(--primary-font)"}
          >
            {isSignup ? "Signup with Email" : "Login with Email"}
          </Typography>
        </Box>
      </Box>
      {error && <Alert severity="error">{error}</Alert>}
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        {isSignup && (
          <FormControl
            sx={{
              px: { xs: 2, md: 10 },
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <FormLabel
              sx={{
                color: "#000",
                fontWeight: 500,
                fontFamily: "var(--primary-font)",
                fontSize: "1rem",
              }}
            >
              First Name
            </FormLabel>
            <TextField
              placeholder="eg. John Doe"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              sx={{ backgroundColor: "#fff" }}
              size="small"
              required
              fullWidth
            />
            <FormLabel
              sx={{
                color: "#000",
                fontWeight: 500,
                fontFamily: "var(--primary-font)",
                fontSize: "1rem",
              }}
            >
              Last Name
            </FormLabel>
            <TextField
              placeholder="eg. John Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              sx={{ backgroundColor: "#fff" }}
              size="small"
              required
              fullWidth
            />
          </FormControl>
        )}
        <FormControl
          sx={{
            px: { xs: 2, md: 10 },
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: "100%",
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
              fontSize: "1rem",
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
            gap: 2,
            width: "100%",
          }}
        >
          <FormLabel
            sx={{
              color: "#000",
              fontWeight: 500,
              fontFamily: "var(--primary-font)",
              fontSize: "1rem",
            }}
          >
            password
          </FormLabel>
          <TextField
            placeholder="@B123"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: "#fff" }}
            size="small"
            required
            fullWidth
          />
        </FormControl>
        {isSignup && (
          <FormControl
            sx={{
              px: { xs: 2, md: 10 },
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
            }}
          >
            <FormLabel
              sx={{
                color: "#000",
                fontWeight: 500,
                fontFamily: "var(--primary-font)",
                fontSize: ".8 rem",
              }}
            >
              confirm Password
            </FormLabel>
            <TextField
              value={confirmPassword}
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="example@tenakata.com"
              sx={{ backgroundColor: "#fff" }}
              size="small"
              required
              fullWidth
            />
          </FormControl>
        )}

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
              color: "var(--red-color)",
              textDecoration: "none",
              fontFamily: "var(--primary-font)",
              fontSize: { xs: "0.8rem", md: "0.8rem" },
            }}
          >
            {" "}
            Forgot password?
          </Link>
        </Box>
        <Box
          component={"div"}
          sx={{
            width: "100%",
            minHeight: "10vh",
            px: { xs: 2, md: 10 },
            mt: 0,
          }}
        >
          <Button
            variant="contained"
            size="small"
            fullWidth
            type="submit"
            sx={{
              backgroundColor: "var(--dark-background)",
              textTransform: "lowercase",
              fontFamily: "var(--primary-font)",
              fontSize: "1.2rem",
            }}
          >
            Submit
          </Button>
          <Link
            component="button"
            onClick={() => setIsSignup((prev) => !prev)}
            sx={{
              color: "blue",
              textDecoration: "none",
              fontFamily: "var(--primary-font)",
              fontSize: { xs: "0.8rem", md: "0.8rem" },
              mb: 0.4,
            }}
          >
            {isSignup
              ? "Already have an account Login"
              : "Do not have an account signup"}
          </Link>
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
        component={"img"}
        src={hero}
        alt="hero image"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          position: "relative",
        }}
      ></Box>
    </Box>
  );
}
