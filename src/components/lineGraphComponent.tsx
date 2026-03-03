import { useEffect, useState } from "react";
import axios from "axios";
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

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export default function EmployeeGrowthGraph() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchGrowth = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/employee-growth`,
        );
        const apiData = res.data;

        const fullData = months.map((month, index) => {
          const found = apiData.find((d: any) => d.month === month);
          let value = found ? found.newEmployees : 0;

          if (month === "Jan") value = 0;

          return { month, newEmployees: value };
        });

        setData(fullData);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGrowth();
  }, []);

  return (
    <Box sx={{ width: "100%", height: "50vh" }}>
      <Typography
        sx={{ fontFamily: "var(--primary-font)", fontWeight: 600, mb: 2 }}
      >
        Employee Growth Rate (Monthly)
      </Typography>

      <ResponsiveContainer width="90%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis
            domain={[0, Math.max(...data.map((d) => d.newEmployees), 50)]}
          />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="newEmployees"
            stroke="#A84279"
            strokeWidth={3}
            dot={{ r: 4 }}
            name="New Employees"
          />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  );
}
