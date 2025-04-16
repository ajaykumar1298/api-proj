import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const ProductColorChart = ({ colorArr }) => {
  return (
    <>
      <h3>Product Distribution by Color</h3>
      <ResponsiveContainer width="30%" height={300}>
        <BarChart
          data={colorArr}
          margin={{ top: 20, right: 30, bottom: 30, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={-30} textAnchor="end" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" name="Number of Products" fill="#a0e0e9" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default ProductColorChart;
