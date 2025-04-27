import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ExchangeChart({ historicalData, baseCurrency }) {
  if (!historicalData) {
    return null;
  }

  const { currency, data } = historicalData;

  const labels = data.map((item) => {
    const d = new Date(item.date);
    return d.toLocaleDateString(undefined, { day: "2-digit", month: "short" });
  });

  const values = data.map((item) => item.rate);

  const chartData = {
    labels,
    datasets: [
      {
        label: `${baseCurrency} to ${currency} Exchange Rate`,
        data: values,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        align: "start",
        labels: {
          boxWidth: 12,
          font: {
            size: 11,
          },
        },
      },
      title: {
        display: true,
        text: `14-Day Historical Rates: ${baseCurrency} to ${currency}`,
        font: {
          size: 14,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            return `1 ${baseCurrency} = ${value.toFixed(4)} ${currency}`;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value) {
            return value.toFixed(4);
          },
          font: {
            size: 11,
          },
        },
      },
      x: {
        ticks: {
          maxRotation: 45,
          minRotation: 45,
          font: {
            size: 11,
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full min-w-[500px] bg-gradient-to-br from-blue-50 to-white rounded-2xl">
      <div className="w-full h-full p-2">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
