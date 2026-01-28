import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { green, orange, red } from "@mui/material/colors";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function EditModalStatus({ open, onClose }: Props) {
  const [selectedColor, setSelectedColor] = useState<string>("");
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontFamily: "var(--primary-font)" }}>
        Edit Task Status
        <IconButton
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", gap: 5 }}>
          <Typography sx={{ mb: 2 }}>
            Choose any color and click save
          </Typography>
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            {[green[500], orange[500], red[500]].map((color) => (
              <Box
                key={color}
                onClick={() => setSelectedColor(color)}
                sx={{
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  bgcolor: color,
                  cursor: "pointer",
                  outline: selectedColor === color ? "2px solid black" : "none",
                }}
              />
            ))}
          </Box>
        </Box>
        <hr />
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            mt: 4,
            p: 2,
            borderRadius: 2,
            fontSize: "0.85rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
            }}
          >
            🟢 Green: You can press the green button only when the task is
            completed and resolved successfully
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
            }}
          >
            🟠 The yellow button means that the task is still in progress. When
            a task is created, the default status of this task is yellow
          </Typography>
          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
            }}
          >
            🔴 If the problem is not resolved for any reason, you can press the
            red button ,If the remaining days field is greater than the Task End
            Date field, the status automatically changes to red
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="inherit"
          sx={{
            bgcolor: "var(--background-color)",
            color: "#fff",
            fontWeight: 600,
            fontFamily: "var(--primary-font)",
          }}
        >
          close
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#f99417",
            color: "#fff",
            fontWeight: 600,
            fontFamily: "var(--primary-font)",
          }}
        >
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
