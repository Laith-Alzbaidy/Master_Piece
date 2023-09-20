import React, { useEffect } from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto"; // Importing chart.js for utility functions
import { AdminContext } from "../../../context";
import { useContext } from "react";

const PipeChart = () => {
  const { exercises, training, users } = useContext(AdminContext);

  const data = {
    labels: ["Femail", "Mail"],
    datasets: [
      {
        label: ["Femail", "Mail"],
        data: [300, 50],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        borderColor: ["red", "blue"],
        hoverOffset: 4,
      },
    ],
  };

  const option = {
    indexAxis: "y",
    elements: {
      pie: {
        borderWidth: 2,
      },
    },
    // height: "100%", // Set the height of the chart
    // responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
    },
  };
  return (
    <div
      style={
        {
          // height: "100%",
          // width: "341px",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          // padding: "10px",
        }
      }
    >
      <Pie data={data} option={option} />
    </div>
  );
};

export default PipeChart;
