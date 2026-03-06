import { useEffect, useState } from "react";
import axios from "axios";
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

export default function DepartmentPerformanceGraph() {
  const [data, setData] = useState([]);

  const departmentsOrder = [
    "IT Support",
    "Network",
    "Hardware",
    "Software",
    "Finance",
    "HR",
  ];

  const colors = [
    "#95efbd",
    "#f3ac43",
    "#04b40d",
    "#d5dc0b",
    "#2f6d32",
    "#ff9800",
  ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/assign/department-monthly-performance", {
        withCredentials: true,
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box sx={{ width: "100%", height: "100vh", p: 2 }}>
      <Typography
        sx={{ fontFamily: "var(--primary-font)", fontWeight: 600, mb: 2 }}
      >
        Departmental Performance (Monthly % Resolved)
      </Typography>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis domain={[0, 100]} tickFormatter={(tick) => `${tick}%`} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />

          {departmentsOrder.map((dep, idx) => (
            <Bar
              key={dep}
              dataKey={dep}
              stackId="a"
              fill={colors[idx % colors.length]}
              barSize={30}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
