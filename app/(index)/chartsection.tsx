"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Chartsection() {
  const data = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="container-screen py-4">
      <h4 className="font-medium mb-1">Overview</h4>
      <Card>
        <CardHeader></CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-2/3 lg:w-1/3">
            <Pie data={data} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
