import React from "react";
import Card from "react-bootstrap/Card";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart = () => {
  const data = [
    {
      subject: "Sql & Python",
      A: 80,
      fullMark: 100,
    },
    {
      subject: "Team Player",
      A: 100,
      fullMark: 100,
    },
    {
      subject: "Cypress Automated Testing",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "Communication",
      A: 90,
      fullMark: 100,
    },
    {
      subject: "Leadership",
      A: 85,
      fullMark: 100,
    },
    {
      subject: "Javascript",
      A: 100,
      fullMark: 100,
    },
  ];
  return (
    <Card style={{ width: "80%", height: "50%", margin: "10%" }}>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart outerRadius={90} data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <div></div>
          <Radar
            name="Aaron"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
            fontSize={"50px"}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </Card>
  );
};
