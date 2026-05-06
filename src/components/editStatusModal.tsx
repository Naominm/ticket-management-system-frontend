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
  MenuItem,
  Select,
  TextField,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
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
  const [comment, setComment] = useState("");
  const [selectedAgent, setSelectedAgent] = useState<{
    id: number;
    firstName: string;
    lastName: string;
  } | null>(null);
  const [departmentUsers, setDepartmentUsers] = useState<any[]>([]);
  const [loadingUsers, setLoadingUsers] = useState(false);

  const getDraftKey = (id: string | number) => `ticket_comment_draft_${id}`;

  const { data: currentUser } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/profile`, {
        withCredentials: true,
      });
      return res.data.user;
    },
  });

  const { data: comments = [], isLoading: isLoadingComments } = useQuery({
    queryKey: ["ticketComments", ticket?.id],
    queryFn: async () => {
      const res = await axios.get(`${API_URL}/api/ticket/${ticket.id}`, {
        withCredentials: true,
      });
      return res.data.ticket.comments || [];
    },
    enabled: !!ticket?.id && open,
  });

  const updateTicketMutation = useMutation({
    mutationFn: async () => {
      const payload: any = {};

      if (currentUser?.role === "USER") {
        payload.title = title;
        payload.description = description;
      } else {
        let status: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED" =
          ticket.status;
        if (selectedColor) {
          if (selectedColor === green[500]) status = "RESOLVED";
          else if (selectedColor === orange[500]) status = "IN_PROGRESS";
          else if (selectedColor === red[500]) status = "CLOSED";
        }

        payload.status = status;
        if (selectedAgent) {
          payload.assignedAgentId = selectedAgent.id;
        }
        if (comment.trim()) {
          payload.comment = comment.trim();
        }
      }

      return axios.put(`${API_URL}/api/ticket/${ticket.id}`, payload, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
      queryClient.invalidateQueries({
        queryKey: ["ticketComments", ticket?.id],
      });

      if (ticket?.id) {
        localStorage.removeItem(getDraftKey(ticket.id));
      }

      setComment("");
      onClose();
    },
    onError: (error: any) => {
      alert(
        error.response?.data?.message || "Something went wrong while saving.",
      );
    },
  });

  useEffect(() => {
    if (ticket) {
      setTitle(ticket.title || "");
      setDescription(ticket.description || "");

      const savedDraft = localStorage.getItem(getDraftKey(ticket.id));
      setComment(savedDraft || "");

      if (ticket.assignedAgent) {
        setSelectedAgent({
          id: ticket.assignedAgent.id,
          firstName: ticket.assignedAgent.firstName,
          lastName: ticket.assignedAgent.lastName,
        });
      } else if (ticket.user) {
        setSelectedAgent({
          id: ticket.user.id,
          firstName: ticket.user.firstName,
          lastName: ticket.user.lastName,
        });
      } else {
        setSelectedAgent(null);
      }

      switch (ticket.status) {
        case "CLOSED":
          setSelectedColor(red[500]);
          break;
        case "OPEN":
          setSelectedColor(orange[500]);
          break;
        case "IN_PROGRESS":
          setSelectedColor(orange[500]);
          break;
        case "RESOLVED":
          setSelectedColor(green[500]);
          break;
        default:
          setSelectedColor(red[500]);
      }
    }
  }, [ticket]);

  const handleSave = () => {
    if (!ticket || !currentUser) return;
    updateTicketMutation.mutate();
  };

  useEffect(() => {
    if (!ticket?.departmentId) return;
    const fetchUsers = async () => {
      setLoadingUsers(true);
      try {
        const res = await axios.get(
          `${API_URL}/api/departments/${ticket.departmentId}/users`,
          { withCredentials: true },
        );
        setDepartmentUsers(res.data);
      } catch (err) {
        console.error("Failed to fetch department users", err);
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchUsers();
  }, [ticket?.departmentId, API_URL]);

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
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ mb: 1, fontSize: "0.9rem" }}>
                Assign ticket
              </Typography>
              <Select
                fullWidth
                size="small"
                displayEmpty
                value={selectedAgent ? JSON.stringify(selectedAgent) : ""}
                onChange={(e) =>
                  setSelectedAgent(
                    e.target.value ? JSON.parse(e.target.value) : null,
                  )
                }
                disabled={updateTicketMutation.isPending || loadingUsers}
              >
                <MenuItem value="">
                  <em>{loadingUsers ? "Loading..." : "Unassigned"}</em>
                </MenuItem>
                {departmentUsers.map((user) => (
                  <MenuItem
                    key={user.id}
                    value={JSON.stringify({
                      id: user.id,
                      firstName: user.firstName,
                      lastName: user.lastName,
                    })}
                  >
                    {user.firstName} {user.lastName}
                  </MenuItem>
                ))}
              </Select>
            </Box>

            <hr />

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

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ mb: 1, fontSize: "0.9rem" }}>
                Progress note (Auto-saved)
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="Add a progress note or comment..."
                value={comment}
                onChange={(e) => {
                  const val = e.target.value;
                  setComment(val);
                  if (ticket?.id) {
                    localStorage.setItem(getDraftKey(ticket.id), val);
                  }
                }}
                disabled={updateTicketMutation.isPending}
              />
            </Box>
            {isLoadingComments ? (
              <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                <CircularProgress size={20} />
              </Box>
            ) : comments.length > 0 ? (
              <Box sx={{ mt: 2 }}>
                <Typography sx={{ fontSize: "0.9rem", fontWeight: 600, mb: 1 }}>
                  Progress History
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {comments.map((c: any) => (
                    <Box
                      key={c.id}
                      sx={{
                        bgcolor: "#f4f4f4",
                        borderLeft: "3px solid var(--dark-background)",
                        borderRadius: 1,
                        p: 1.5,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: "0.75rem", color: "gray", mb: 0.5 }}
                      >
                        <strong>
                          {c.user
                            ? `${c.user.firstName} ${c.user.lastName}`
                            : "Unknown User"}
                        </strong>{" "}
                        • {new Date(c.createdAt).toLocaleString()}
                      </Typography>
                      <Typography sx={{ fontSize: "0.85rem" }}>
                        {c.content}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ) : null}

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
            </Box>
          </>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 3 }}>
        <Button
          sx={{ backgroundColor: "var(--yellow-color)", color: "#fff" }}
          onClick={onClose}
          disabled={updateTicketMutation.isPending}
        >
          close
        </Button>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={updateTicketMutation.isPending}
          sx={{ bgcolor: "var(--dark-background)", minWidth: "100px" }}
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
