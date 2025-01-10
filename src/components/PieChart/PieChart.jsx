import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./PieChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ data }) {
  const chartColors = ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50", "#9C27B0"];

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Score Breakdown",
        data: Object.values(data),
        backgroundColor: chartColors,
        borderWidth: 2,
        borderColor: "#fff",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Disables the default legend
      },
    },
  };

  return (
    <article className="chart">
      <div className="chart__container">
        <Pie data={chartData} options={options} />
      </div>
      <div className="chart__legend">
        {Object.keys(data).map((label, index) => (
          <div key={index} className="chart__item">
            <div
              className="chart__color"
              style={{ backgroundColor: chartColors[index] }}
            ></div>
            <span className="chart__label">{label}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

export default PieChart;
