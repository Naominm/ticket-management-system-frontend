<Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
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
      <CircleIcon sx={{ color: "green", fontSize: "0.9rem" }} />
    </Box>
    Green: You can press the green button only when the task is completed and
    resolved successfully
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
    Yellow: The task is still in progress. When a task is created, the default
    status is yellow
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
      <CircleIcon sx={{ color: "red", fontSize: "0.9rem" }} />
    </Box>
    Red: If the problem is not resolved, the status changes to red when the
    remaining days exceed the task end date
  </Typography>
</Box>;
