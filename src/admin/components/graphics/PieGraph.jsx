import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from "chart.js";

ChartJS.register(Tooltip, Legend, ArcElement);

export const PieGraph = ({ cantAlumnosEgresados }) => {
  const lineChartData = {
    labels: ["Alumno", "Egresado"],
    datasets: [
      {
        label: "Cantidad de Alumnos y Egresados",
        data: cantAlumnosEgresados,
        backgroundColor: ["rgb(136, 67, 238, 0.3)", "rgb(244, 49, 160, 0.3)"],
        borderColor: ["rgb(136, 67, 238, 1)", "rgb(244, 49, 160, 1)"],
        borderWidth: 2,
        hoverOffset: 3,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };
  return (
    <Pie options={options} data={lineChartData}>
      BarGraph
    </Pie>
  );
};
