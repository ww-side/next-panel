import { type FC } from "react";
import { CartesianGrid, Legend, Line, LineChart } from "recharts";

const LineGraph: FC<{ data: any[] }> = ({ data }) => {
  return (
    <LineChart width={730} height={250} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <Legend />
      <Line type="monotone" dataKey="value1" stroke="#8884d8" />
      <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
    </LineChart>
  );
};

export default LineGraph;
