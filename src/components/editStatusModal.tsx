import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  TextField,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { green, orange, red } from "@mui/material/colors";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  open: boolean;
  onClose: () => void;
  ticket: any;
}

export default function EditModalStatus({ open, onClose, ticket }: Props) {
  const API_URL = import.meta.env.VITE_API_URL;
  const queryClient = useQueryClient();

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { data: currentUser } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/profile`, {
        withCredentials: true,
      });
      return res.data.user;
    },
  });

  const updateTicketMutation = useMutation({
    mutationFn: async () => {
      console.log("--- STARTING MUTATION ---");
      console.log("Current User Role:", currentUser?.role);

      const payload: any = {};

      if (currentUser?.role === "USER") {
        payload.title = title;
        payload.description = description;
      } else {
        let status = "OPEN";
        if (selectedColor === green[500]) status = "CLOSED";
        else if (selectedColor === red[500]) status = "NOT_RESOLVED";
        payload.status = status;
      }

      const finalUrl = `${API_URL}/api/ticket/${ticket.id}`;
      console.log("Request URL:", finalUrl);
      console.log("Request Payload:", payload);

      return axios.put(finalUrl, payload, { withCredentials: true });
    },
    onSuccess: (response) => {
      console.log("✅ SUCCESS:", response.data);
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      onClose();
    },
    onError: (error: any) => {
      console.error("❌ ERROR OBJECT:", error);
      if (error.response) {
        console.error("Server Response Data:", error.response.data);
        console.error("Server Response Status:", error.response.status);
      }
      alert(
        error.response?.data?.message || "Something went wrong while saving.",
      );
    },
  });

  useEffect(() => {
    if (ticket) {
      console.log("Modal opened with ticket:", ticket);
      setTitle(ticket.title || "");
      setDescription(ticket.description || "");
      if (ticket.status === "CLOSED") setSelectedColor(green[500]);
      else if (ticket.status === "OPEN") setSelectedColor(orange[500]);
      else setSelectedColor(red[500]);
    }
  }, [ticket]);

  const handleSave = () => {
    console.log("Save button clicked");

    if (!ticket) {
      console.warn("Save aborted: No ticket data found.");
      return;
    }

    if (!currentUser) {
      console.warn("Save aborted: User data not loaded yet.");
      alert("Still loading user data, please wait.");
      return;
    }

    updateTicketMutation.mutate();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontFamily: "var(--primary-font)" }}>
        Edit Task
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
          disabled={updateTicketMutation.isPending}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        {currentUser?.role === "USER" ? (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Title"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={updateTicketMutation.isPending}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={updateTicketMutation.isPending}
            />
          </Box>
        ) : (
          <>
            <Box sx={{ display: "flex", gap: 5, mt: 1 }}>
              <Typography sx={{ mb: 2 }}>Choose status color:</Typography>
              <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                {[green[500], orange[500], red[500]].map((color) => (
                  <Box
                    key={color}
                    onClick={() =>
                      !updateTicketMutation.isPending && setSelectedColor(color)
                    }
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      bgcolor: color,
                      cursor: updateTicketMutation.isPending
                        ? "default"
                        : "pointer",
                      outline:
                        selectedColor === color ? "3px solid #333" : "none",
                      outlineOffset: "2px",
                      transition: "0.2s",
                      opacity: updateTicketMutation.isPending ? 0.6 : 1,
                    }}
                  />
                ))}
              </Box>
            </Box>
            <hr />
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                variant="contained"
                size="small"
                sx={{
                  maxWidth: "160px",
                  bgcolor: "var(--background-color)",
                  mt: 2,
                  textTransform: "capitalize",
                }}
              >
                show more <ArrowDropDownIcon />
              </Button>
              {/* Status guides... */}
              <Typography
                sx={{
                  color: "gray",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mt: 2,
                  fontSize: "0.85rem",
                }}
              >
                <CircleIcon sx={{ color: "green", fontSize: "0.9rem" }} />
                Green: Task completed
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "0.85rem",
                }}
              >
                <CircleIcon sx={{ color: "orange", fontSize: "0.9rem" }} />
                Yellow: In progress
              </Typography>
              <Typography
                sx={{
                  color: "gray",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 2,
                  fontSize: "0.85rem",
                }}
              >
                <CircleIcon sx={{ color: "red", fontSize: "0.9rem" }} />
                Red: Not resolved
              </Typography>
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button onClick={onClose} disabled={updateTicketMutation.isPending}>
          cancel
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={updateTicketMutation.isPending}
          sx={{ bgcolor: "#f99417", minWidth: "100px" }}
        >
          {updateTicketMutation.isPending ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            "save"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
