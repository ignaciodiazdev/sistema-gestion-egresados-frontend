import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BarGraph = ({ cantBachiMaesDoc }) => {
  const lineChartData = {
    labels: ["Bachillerato", "Maestría", "Doctorado"],
    datasets: [
      {
        label: "Grados Académicos obtenidos",
        data: cantBachiMaesDoc,
        backgroundColor: [
          "rgb(255, 99, 132, 0.6)",
          "rgb(54, 162, 235, 0.6)",
          "rgb(255, 206, 86, 0.6)",
        ],
        borderColor: [
          "rgb(255, 99, 132, 1)",
          "rgb(54, 162, 235, 1)",
          "rgb(255, 206, 86, 1)",
        ],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false, // Oculta la leyenda
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Ocultar líneas cuadriculadas en el eje X
        },
      },
      y: {
        grid: {
          // display: true, // Ocultar líneas cuadriculadas en el eje Y
          color: "rgba(178, 203, 220, 0.059)",
        },
      },
    },
  };
  return (
    <Bar options={options} data={lineChartData}>
      BarGraph
    </Bar>
  );
};
