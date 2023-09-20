import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Importing chart.js for utility functions
import * as Utils from "./Utils";
import { AdminContext } from "../../../context";
import { useContext } from "react";

const BarChart = () => {
  const { exercises, training, users } = useContext(AdminContext);
  const numUsers = users.length;
  const numExercises = exercises.length;
  const numTraining = training.length;

  const data = {
    labels: ["User", "Exercises", "Training"],
    datasets: [
      {
        label: "User",
        data: [numUsers, numExercises, numTraining],
        borderColor: [
          Utils.CHART_COLORS.red,
          Utils.CHART_COLORS.blue,
          Utils.CHART_COLORS.green,
        ],
        backgroundColor: [
          Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
          Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        ],
      },
    ],
  };

  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Disable aspect ratio to set custom width
    width: "100%", // Set the width of the chart
    height: "100%", // Set the height of the chart
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%", // Set the width of the canvas container
        height: "340px",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
