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
import CircleIcon from "@mui/icons-material/Circle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Button
            variant="contained"
            size="small"
            sx={{
              maxWidth: "160px",
              bgcolor: "var(--background-color)",
              display: "flex",
              gap: 2,
              mt: 4,
              textTransform: "capitalize",
              fontFamily: "var(--primary font)",
              fontSize: "0.8rem",
            }}
          >
            {" "}
            show more{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </Button>
          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mt: 2,
            }}
          >
            <Box component="span">
              <CircleIcon sx={{ color: "green", fontSize: "0.9rem" }} />
            </Box>
            Green: You can press the green button only when the task is
            completed and resolved successfully
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box component="span">
              <CircleIcon sx={{ color: "orange", fontSize: "0.9rem" }} />
            </Box>
            Yellow: The task is still in progress. When a task is created, the
            default status is yellow
          </Typography>

          <Typography
            sx={{
              fontFamily: "var(--primary-font)",
              fontSize: "0.8rem",
              color: "gray",
              display: "flex",
              alignItems: "center",
              gap: 1,
              mb: 5,
            }}
          >
            <Box component="span">
              <CircleIcon sx={{ color: "red", fontSize: "0.9rem" }} />
            </Box>
            Red: If the problem is not resolved, the status changes to red when
            the remaining days exceed the task end date
          </Typography>
        </Box>
        <hr />
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
