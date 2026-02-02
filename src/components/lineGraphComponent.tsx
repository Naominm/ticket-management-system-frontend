import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";
import { Box, Typography } from "@mui/material";

const data = [
  { month: "Jan", developers: 20, implementation: 40, technical: 50 },
  { month: "Feb", developers: 35, implementation: 30, technical: 45 },
  { month: "Mar", developers: 25, implementation: 50, technical: 40 },
  { month: "Apr", developers: 40, implementation: 35, technical: 55 },
  { month: "May", developers: 30, implementation: 45, technical: 60 },
  { month: "Jun", developers: 50, implementation: 40, technical: 45 },
  { month: "Jul", developers: 45, implementation: 55, technical: 50 },
  { month: "Aug", developers: 60, implementation: 45, technical: 55 },
  { month: "Sep", developers: 40, implementation: 50, technical: 60 },
  { month: "Oct", developers: 55, implementation: 60, technical: 50 },
  { month: "Nov", developers: 35, implementation: 45, technical: 55 },
  { month: "Dec", developers: 65, implementation: 50, technical: 60 },
];

export default function EmployeeGrowthGraph() {
  return (
    <Box sx={{ width: "100%", height: "50vh" }}>
      <Typography
        sx={{
          fontFamily: "var(--primary-font)",
          fontWeight: 600,
          mb: 2,
        }}
      >
        Employee Growth Rate (Monthly)
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} ticks={[0, 25, 50, 75, 100]} />
          <Tooltip />
          <Legend />

          <Line
            type="monotone"
            dataKey="implementation"
            stroke="#ff9800"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="Implementation"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
