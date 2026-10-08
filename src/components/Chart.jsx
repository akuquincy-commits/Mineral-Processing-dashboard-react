import {
  LineElement,
  PointElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
  defaults,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

defaults.maintainAspectRatio = false;
defaults.responsive = true;

// // defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";


export function ChartSection() {
  const chartData = {
    labels: ["A", "B", "C"],
    datasets: [
      {
        label: "revenue",
        data: [200, 150, 400],
        backgroundColor: ["red", "blue", "green"],
        borderColor: "blue",
        borderWidth: 1,
        borderRadius: 5,
        Color: ["blue", "green", "red"],
      },
      {
        label: "cost",
        data: [320, 120, 390],
        backgroundColor: ["red", "blue", "green"],
        borderRadius: 5,
        Color: ["blue", "green", "red"], 
      },
    ],
  };

  return (
    <div className="chart-section">
      <div className="chart-head">
        <h3>RECOVERY AND THROUGHPUT TRENDS</h3>
        <select name="period" className="chart-period">
          <option value="24hrs">Last 24 Hours</option>
          <option value="week">A Week</option>
        </select>
      </div>

      <Line id="mineral-recovery-chart" data={chartData} />
    </div>
  );
}
