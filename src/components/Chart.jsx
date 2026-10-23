import axios from "axios";
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
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
);

defaults.aspectRatio = false;
defaults.maintainAspectRatio = false;
defaults.responsive = true;

// // defaults.plugins.title.display = true;
// defaults.plugins.title.align = "start";
// defaults.plugins.title.font.size = 20;
// defaults.plugins.title.color = "black";

export function ChartSection() {
  const [chartDataState, setChartDataState] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/plant/history");
        setChartDataState(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const chartDataThroughput = {
    labels: chartDataState.map((item) => item.time),
    datasets: [
      {
        label: "Throughput",
        data: chartDataState.map((item) => item.throughput),
        backgroundColor: ["red", "blue", "green"],
        borderRadius: 5,
        Color: ["blue", "green", "red"],
      },
    ],
  };
  const chartDataRecovery = {
    labels: chartDataState.map((item) => item.time),
    datasets: [
      {
        label: "recovery",
        data: chartDataState.map((item) => item.recovery),
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
      <div className="charts">
        <div className="chart-card">
          <Line
            id="mineral-recovery-chart-throughput"
            data={chartDataThroughput}
          />
        </div>
        <div className="chart-card">
          <Line id="mineral-recovery-chart-recovery" data={chartDataRecovery} />
        </div>
      </div>
    </div>
  );
}
