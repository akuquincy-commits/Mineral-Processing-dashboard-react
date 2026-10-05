import axios from "axios";
import { useEffect, useState } from "react";

export function MetricsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/plant/current");
      setData(response.data)
    };
    fetchData();
  }, [data]);

  return (
    <div className="metrics-cards">
        <div>
            <div>
                <img src="../assets/react.svg" alt="throughput logo" />
                <p>Throughput</p>
            </div>
            <div>

            </div>
            <div></div>
        </div>
    </div>
  )
}
