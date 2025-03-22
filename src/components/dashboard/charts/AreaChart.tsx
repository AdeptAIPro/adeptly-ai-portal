
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Sample data for the area chart
const data = [
  { name: "Jan", job: 40, candidate: 24 },
  { name: "Feb", job: 30, candidate: 13 },
  { name: "Mar", job: 20, candidate: 38 },
  { name: "Apr", job: 27, candidate: 39 },
  { name: "May", job: 18, candidate: 48 },
  { name: "Jun", job: 23, candidate: 38 },
  { name: "Jul", job: 34, candidate: 43 },
];

export const AreaChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsAreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
        <XAxis 
          dataKey="name" 
          stroke="rgba(100, 116, 139, 0.7)"
          fontSize={12}
          tickLine={false}
          axisLine={{ stroke: "rgba(100, 116, 139, 0.2)" }}
        />
        <YAxis 
          stroke="rgba(100, 116, 139, 0.7)"
          fontSize={12}
          tickLine={false}
          axisLine={{ stroke: "rgba(100, 116, 139, 0.2)" }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: 8,
            fontSize: 12,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }} 
        />
        <Area
          type="monotone"
          dataKey="job"
          stackId="1"
          stroke="hsl(var(--primary))"
          fill="rgba(139, 92, 246, 0.3)"
        />
        <Area
          type="monotone"
          dataKey="candidate"
          stackId="1"
          stroke="#4f86f7"
          fill="rgba(79, 134, 247, 0.3)"
        />
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};
