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
        <Typography sx={{ mb: 2 }}>Choose any color and click save</Typography>
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
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            p: 2,
            borderRadius: 2,
            fontSize: "0.85rem",
          }}
        >
          <Typography>🟢 Green: Task completed</Typography>
          <Typography>🟠 Orange: Task in progress</Typography>
          <Typography>🔴 Red: Task blocked or delayed</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="inherit">
          close
        </Button>
        <Button variant="contained" sx={{ bgcolor: "#f99417" }}>
          save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
