
import { Cell, Legend, Pie, PieChart as RechartsPieChart, ResponsiveContainer, Tooltip } from "recharts";

// Sample data for the pie chart
const data = [
  { name: "VMS", value: 33 },
  { name: "ATS", value: 42 },
  { name: "Job Boards", value: 25 },
];

// Colors for the chart segments
const COLORS = ["hsl(var(--primary))", "#4f86f7", "#f59e0b"];

export const PieChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RechartsPieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ 
            backgroundColor: "hsl(var(--card))",
            borderColor: "hsl(var(--border))",
            borderRadius: 8,
            fontSize: 12,
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          }} 
          formatter={(value) => [`${value}%`, 'Percentage']}
        />
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};
