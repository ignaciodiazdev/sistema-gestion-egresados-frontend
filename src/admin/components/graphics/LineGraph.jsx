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
export const LineGraph = () => {
  const lineChartData = {
    labels: ["Bachillerato", "Maestría", "Doctorado"],
    datasets: [
      { label: "Steps", data: [50, 30, 40], borderColor: "rgb(75,192,192)" },
    ],
  };
  const options = [];
  return <Line options={options} data={lineChartData}></Line>;
};
