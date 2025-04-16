import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const COLORS = [
  "#ff6384",
  "#36a2eb",
  "#ffcd56",
  "#4bc0c0",
  "#8e44ad",
  "#2ecc71",
  "#e67e22",
  "#1abc9c",
];

const StoragePieChart = ({ capacityArr }) => {
  return (
    <>
      <div>
        <h3>Product Distribution by Capacity</h3>
        <PieChart width={400} height={400}>
          <Pie
            data={capacityArr}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            labelLine={false}
          >
            {capacityArr.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index] || "green"} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </>
  );
};

export default StoragePieChart;
