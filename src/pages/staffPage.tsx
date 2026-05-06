import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Modal,
  TextField,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  Alert,
  Chip,
  CircularProgress,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SidebarComponent from "../components/sidebarComponent";
import SearchComponent from "../components/searchComponent";
import axios from "axios";

// --- Types ---

type Department = {
  id: number;
  name: string;
};

type Staff = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: "ADMIN" | "AGENT" | "USER";
  jobTitle: string | null;
  department: { id: number; name: string } | null;
  createdAt: string;
};

// --- Helpers ---

const roleColor = (role: string): "error" | "primary" | "default" => {
  switch (role) {
    case "ADMIN":
      return "error";
    case "AGENT":
      return "primary";
    default:
      return "default";
  }
};

const authHeaders = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

export default function StaffPage() {
  const [staff, setStaff] = useState<Staff[]>([]);
  const [loadingStaff, setLoadingStaff] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL;

  const fetchStaff = async () => {
    try {
      setLoadingStaff(true);
      const res = await axios.get(`${API_URL}/api/auth/users`, {
        withCredentials: true,
        headers: authHeaders(),
      });
      setStaff(res.data.users);
    } catch (err) {
      console.error("Failed to fetch staff", err);
    } finally {
      setLoadingStaff(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <Box sx={{ display: "flex", bgcolor: "#f4f4f4", minHeight: "100vh" }}>
      <SidebarComponent />

      <Box component="main" sx={{ flexGrow: 1, pb: 5 }}>
        <SearchComponent />

        <Box sx={{ px: 4, mt: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              sx={{
                fontFamily: "var(--primary-font)",
                fontWeight: 700,
                fontSize: "1.4rem",
                color: "var(--dark-background)",
              }}
            >
              Staff Management
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setModalOpen(true)}
              sx={{
                bgcolor: "var(--dark-background)",
                fontFamily: "var(--primary-font)",
                textTransform: "none",
                fontWeight: 600,
                "&:hover": { bgcolor: "#333" },
              }}
            >
              Add Staff
            </Button>
          </Box>
          <TableContainer component={Paper} elevation={0}>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: "#f4f4f4" }}>
                  {[
                    "Name",
                    "Email",
                    "Role",
                    "Department",
                    "Job Title",
                    "Joined",
                  ].map((h) => (
                    <TableCell
                      key={h}
                      sx={{
                        fontFamily: "var(--primary-font)",
                        fontWeight: 700,
                        color: "var(--dark-background)",
                      }}
                    >
                      {h}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {loadingStaff ? (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                      <CircularProgress size={28} />
                    </TableCell>
                  </TableRow>
                ) : staff.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      align="center"
                      sx={{
                        py: 6,
                        fontFamily: "var(--primary-font)",
                        color: "gray",
                      }}
                    >
                      No staff found. Add your first staff member.
                    </TableCell>
                  </TableRow>
                ) : (
                  staff.map((member) => (
                    <TableRow
                      key={member.id}
                      sx={{ "&:hover": { bgcolor: "#fafafa" } }}
                    >
                      <TableCell
                        sx={{
                          fontFamily: "var(--primary-font)",
                          fontWeight: 600,
                        }}
                      >
                        {member.firstName} {member.lastName}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "var(--primary-font)" }}>
                        {member.email}
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={member.role}
                          color={roleColor(member.role)}
                          size="small"
                          sx={{
                            fontFamily: "var(--primary-font)",
                            fontWeight: 600,
                          }}
                        />
                      </TableCell>
                      <TableCell sx={{ fontFamily: "var(--primary-font)" }}>
                        {member.department?.name ?? (
                          <Typography
                            component="span"
                            sx={{ color: "gray", fontSize: "0.85rem" }}
                          >
                            Unassigned
                          </Typography>
                        )}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "var(--primary-font)" }}>
                        {member.jobTitle ?? "—"}
                      </TableCell>
                      <TableCell sx={{ fontFamily: "var(--primary-font)" }}>
                        {new Date(member.createdAt).toLocaleDateString()}
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>

      <CreateStaffModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSuccess={() => {
          setModalOpen(false);
          fetchStaff();
        }}
        API_URL={API_URL}
      />
    </Box>
  );
}

type CreateStaffModalProps = {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  API_URL: string;
};

function CreateStaffModal({
  open,
  onClose,
  onSuccess,
  API_URL,
}: CreateStaffModalProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "AGENT",
    department: "",
  });

  const [departments, setDepartments] = useState<Department[]>([]);
  const [newDeptName, setNewDeptName] = useState("");
  const [addingDept, setAddingDept] = useState(false);
  const [deptLoading, setDeptLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    axios
      .get(`${API_URL}/api/departments`, {
        withCredentials: true,
        headers: authHeaders(),
      })
      .then((res) => setDepartments(res.data))
      .catch(() => setError("Failed to load departments."));
  }, [open, API_URL]);

  const resetForm = () => {
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      role: "AGENT",
      department: "",
    });
    setNewDeptName("");
    setAddingDept(false);
    setError(null);
    setSuccess(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleAddDepartment = async () => {
    if (!newDeptName.trim()) return;
    try {
      setDeptLoading(true);
      const res = await axios.post(
        `${API_URL}/api/departments`,
        { name: newDeptName.trim() },
        { withCredentials: true, headers: authHeaders() },
      );
      const created: Department = res.data.department;
      setDepartments((prev) => [...prev, created]);
      setForm((prev) => ({ ...prev, department: created.name }));
      setNewDeptName("");
      setAddingDept(false);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create department.");
    } finally {
      setDeptLoading(false);
    }
  };

  const handleSubmit = async () => {
    setError(null);
    if (!form.firstName || !form.lastName || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }

    try {
      setSubmitLoading(true);
      await axios.post(`${API_URL}/api/auth/users`, form, {
        withCredentials: true,
        headers: authHeaders(),
      });
      setSuccess("Staff member created successfully.");
      setTimeout(() => {
        onSuccess();
        resetForm();
      }, 1000);
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to create staff.");
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: 520 },
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontWeight: 700,
              fontSize: "1.2rem",
            }}
          >
            Add New Staff
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>

        {error && (
          <Alert severity="error" onClose={() => setError(null)} sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 2 }}>
            <FormControl fullWidth>
              <FormLabel sx={{ fontFamily: "var(--primary-font)", mb: 0.5 }}>
                First Name <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                size="small"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                sx={{ bgcolor: "#f9f9f9" }}
              />
            </FormControl>
            <FormControl fullWidth>
              <FormLabel sx={{ fontFamily: "var(--primary-font)", mb: 0.5 }}>
                Last Name <span style={{ color: "red" }}>*</span>
              </FormLabel>
              <TextField
                size="small"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                sx={{ bgcolor: "#f9f9f9" }}
              />
            </FormControl>
          </Box>

          <FormControl fullWidth>
            <FormLabel sx={{ fontFamily: "var(--primary-font)", mb: 0.5 }}>
              Email <span style={{ color: "red" }}>*</span>
            </FormLabel>
            <TextField
              size="small"
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              sx={{ bgcolor: "#f9f9f9" }}
            />
          </FormControl>

          <FormControl fullWidth>
            <FormLabel sx={{ fontFamily: "var(--primary-font)", mb: 0.5 }}>
              Role
            </FormLabel>
            <Select
              size="small"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
              sx={{ bgcolor: "#f9f9f9", fontFamily: "var(--primary-font)" }}
            >
              <MenuItem value="AGENT">Agent</MenuItem>
              <MenuItem value="ADMIN">Admin</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <FormLabel sx={{ fontFamily: "var(--primary-font)", mb: 0.5 }}>
              Department
            </FormLabel>
            <Select
              size="small"
              value={form.department}
              onChange={(e) => setForm({ ...form, department: e.target.value })}
              displayEmpty
              sx={{ bgcolor: "#f9f9f9", fontFamily: "var(--primary-font)" }}
            >
              <MenuItem value="">
                <em>Select department</em>
              </MenuItem>
              {departments.map((d) => (
                <MenuItem key={d.id} value={d.name}>
                  {d.name}
                </MenuItem>
              ))}
            </Select>

            {!addingDept ? (
              <Button
                size="small"
                onClick={() => setAddingDept(true)}
                sx={{
                  mt: 1,
                  alignSelf: "flex-start",
                  textTransform: "none",
                  fontFamily: "var(--primary-font)",
                  color: "var(--dark-background)",
                  p: 0,
                }}
              >
                + New Department
              </Button>
            ) : (
              <Box
                sx={{ display: "flex", gap: 1, mt: 1, alignItems: "center" }}
              >
                <TextField
                  size="small"
                  placeholder="Department name"
                  value={newDeptName}
                  onChange={(e) => setNewDeptName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddDepartment()}
                  sx={{ bgcolor: "#f9f9f9", flex: 1 }}
                  autoFocus
                />
                <Button
                  size="small"
                  variant="contained"
                  onClick={handleAddDepartment}
                  disabled={deptLoading || !newDeptName.trim()}
                  sx={{
                    bgcolor: "var(--dark-background)",
                    textTransform: "none",
                  }}
                >
                  {deptLoading ? <CircularProgress size={16} /> : "Add"}
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    setAddingDept(false);
                    setNewDeptName("");
                  }}
                  sx={{ textTransform: "none", color: "gray" }}
                >
                  Cancel
                </Button>
              </Box>
            )}
          </FormControl>

          <Button
            variant="contained"
            fullWidth
            onClick={handleSubmit}
            disabled={submitLoading}
            sx={{
              mt: 1,
              bgcolor: "var(--dark-background)",
              fontFamily: "var(--primary-font)",
              fontWeight: 600,
              textTransform: "none",
              py: 1.2,
            }}
          >
            {submitLoading ? (
              <CircularProgress size={20} sx={{ color: "#fff" }} />
            ) : (
              "Create Staff Member"
            )}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
