import {
  ResponsiveContainer,
  BarChart,
  Bar,
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

export default function DepartmentPerformanceGraph() {
  return (
    <Box sx={{ width: "100%", height: "100vh", p: 2 }}>
      <Typography
        sx={{
          fontFamily: "var(--primary-font)",
          fontWeight: 600,
          mb: 2,
        }}
      >
        Departmental Performance (Monthly)
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            domain={[0, 100]}
            ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          />

          <Tooltip />
          <Legend />

          <Bar
            dataKey="developers"
            stackId="a"
            fill="#64b5f6"
            name="Developers"
          />
          <Bar
            dataKey="implementation"
            stackId="a"
            fill="#ff9800"
            name="Implementation"
          />
          <Bar
            dataKey="technical"
            stackId="a"
            fill="#fbc02d"
            name="Technical"
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
