"use client";
import { type FC } from "react";
import { Pie, PieChart } from "recharts";

const PieGraph: FC<{ data01: any[]; data02?: any[] }> = ({
  data01,
  data02,
}) => {
  return (
    <PieChart width={730} height={250}>
      <Pie
        id="pie-one"
        data={data01}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={50}
        fill="#8884d8"
      />
      <Pie
        id="pie-two"
        data={data02}
        dataKey="value"
        nameKey="name"
        cx="50%"
        cy="50%"
        innerRadius={60}
        outerRadius={80}
        fill="#82ca9d"
        label
      />
    </PieChart>
  );
};

export default PieGraph;
