import axios from "axios";
import { useEffect, useState, useRef } from "react";
import throughputIcon from "../assets/metric-throughput.svg";
import recoveryIcon from "../assets/metric-recovery.svg";
import gradeIcon from "../assets/metric-grade.svg";
import tailingsIcon from "../assets/metric-tailings.svg";
import powerIcon from "../assets/metric-power.svg";

export function MetricsCard() {
  const [data, setData] = useState(null);
  const [change, setChange] = useState(null);
  const previousRef = useRef(null);

  useEffect(() => {
    const fetchAndCompare = async () => {
      try {
        const response = await axios.get("/api/plant/live");
        const currentData = response.data;
        setData(currentData);

        const previousThroughput = previousRef.current?.throughput;
        if (
          Number.isFinite(currentData.throughput) &&
          Number.isFinite(previousThroughput) &&
          previousThroughput !== 0
        ) {
          const percentChange =
            ((currentData.throughput - previousThroughput) /
              previousThroughput) *
            100;
          setChange(percentChange);
        } else {
          setChange(null);
        }

        previousRef.current = currentData;
      } catch (err) {
        console.error(err);
      }
    };
    fetchAndCompare();
    const interval = setInterval(fetchAndCompare, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="metrics-cards">
      <div className="card">
        <div className="card-head">
          <img src={throughputIcon} alt="" />
          <p>Throughput</p>
        </div>
        <div>
          <div className="quantity">
            {data ? (
              `${data.throughput} `
            ) : (
              <span className="loading">Loading...</span>
            )}{" "}
            <span>tph</span>
          </div>
          <div className="percentage-change">
            {change === null ? (
              <span>—</span>
            ) : change < 0 ? (
              <span className="percent-red">{change.toFixed(1)}%</span>
            ) : change > 0 ? (
              <span className="percent-green">+{change.toFixed(1)}%</span>
            ) : (
              <span>{change.toFixed(1)}%</span>
            )}
            <span> vs previous reading</span>
          </div>
        </div>
        <div className="current-state">
          critical
          {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={recoveryIcon} alt="" />
          <p>Recovery</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.recovery}` : "loading..."} <span>%</span>
          </div>
          <div className="percentage-change">
            <span>
              -2%
              {/* percentage change goes here */}
            </span>
            <span>vs last 27s</span>
          </div>
        </div>
        <div className="current-state">
          warning
          {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={gradeIcon} alt="" />
          <p>Head Grade</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.headGrade}` : "loading..."} <span>g/t</span>
          </div>
          <div className="percentage-change">
            <span>
              4%
              {/* percentage change goes here */}
            </span>
            <span>vs last 27s</span>
          </div>
        </div>
        <div className="current-state">
          good
          {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={tailingsIcon} alt="" />
          <p>Tailings</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.tailingsGrade}` : "loading..."} <span>g/t</span>
          </div>
          <div className="percentage-change">
            <span>
              2%
              {/* percentage change goes here */}
            </span>
            <span>vs last 27s</span>
          </div>
        </div>
        <div className="current-state">
          off
          {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={powerIcon} alt="" />
          <p>Power</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.powerUsage}` : "loading..."} <span>Mwh</span>
          </div>
          <div className="percentage-change">
            <span>
              5%
              {/* percentage change goes here */}
            </span>
            <span>vs last 27s</span>
          </div>
        </div>
        <div className="current-state">
          on target
          {/* current state goes here */}
        </div>
      </div>
    </div>
  );
}
