import {
  Box,
  Typography,
  FormControl,
  FormLabel,
  TextField,
  Button,
  Alert,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo.png";

export default function ChangePasswordPage() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!newPassword || !confirmPassword) {
      setError("All fields are required.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    try {
      setLoading(true);
      await axios.post(
        `${API_URL}/api/auth/change-password`,
        { newPassword, confirmPassword },
        { withCredentials: true },
      );

      // After password change, go to home
      navigate("/home");
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to change password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "var(--background-color)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: { xs: "90%", sm: 460 },
          p: 5,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        {/* Logo */}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            component="img"
            src={logo}
            alt="Tenakata logo"
            sx={{ height: 60, objectFit: "contain" }}
          />
        </Box>

        {/* Heading */}
        <Box>
          <Typography
            variant="h5"
            fontWeight={700}
            sx={{ fontFamily: "var(--secondary-font)", textAlign: "center" }}
          >
            Set New Password
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "var(--primary-font)",
              color: "gray",
              textAlign: "center",
              mt: 0.5,
            }}
          >
            Your account was created with a temporary password. Please set a new
            one to continue.
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl fullWidth>
            <FormLabel
              sx={{
                fontFamily: "var(--primary-font)",
                fontWeight: 500,
                mb: 0.5,
              }}
            >
              New Password
            </FormLabel>
            <TextField
              type="password"
              size="small"
              placeholder="Min. 8 characters"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              sx={{ bgcolor: "#f9f9f9" }}
              required
              fullWidth
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel
              sx={{
                fontFamily: "var(--primary-font)",
                fontWeight: 500,
                mb: 0.5,
              }}
            >
              Confirm Password
            </FormLabel>
            <TextField
              type="password"
              size="small"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ bgcolor: "#f9f9f9" }}
              required
              fullWidth
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            disabled={loading}
            sx={{
              bgcolor: "var(--dark-background)",
              fontFamily: "var(--primary-font)",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              py: 1.2,
              mt: 1,
            }}
          >
            {loading ? "Saving..." : "Set New Password"}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
