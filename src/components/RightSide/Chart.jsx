import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["January", "February", "March"];

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 200 })),
      backgroundColor: [
        'rgb(212, 214, 219)',
      ],
      borderColor: [
        'rgba(17, 24, 39)',
      ],
      borderWidth: 1
    },
  ],
};

function Chart() {
  return (
    <Line
      data={data}
      options={options}
      height="50px"
      width="200px"
      style={{ marginTop: "50px", marginBottom: "20px" }}
    />
  );
}

export default Chart;
