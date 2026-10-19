import throughputIcon from "../assets/metric-throughput.svg";
import recoveryIcon from "../assets/metric-recovery.svg";
import gradeIcon from "../assets/metric-grade.svg";
import tailingsIcon from "../assets/metric-tailings.svg";
import powerIcon from "../assets/metric-power.svg";
import { useDifference } from "./getDifference";

function PercentageChange({ value }) {
  return (
    <div className="percentage-change">
      {value === null ? (
        <span>—</span>
      ) : value < 0 ? (
        <span className="percent-red">{value.toFixed(1)}%</span>
      ) : value > 0 ? (
        <span className="percent-green">+{value.toFixed(1)}%</span>
      ) : (
        <span>{value.toFixed(1)}%</span>
      )}
      <span> vs previous reading</span>
    </div>
  );
}

export function MetricsCard() {
  const {
    throughput,
    recovery,
    headgrade,
    tailingsgrade,
    powerUsage,
    throughputchange,
    recoverychange,
    headGradechange,
    tailingschange,
    powerUsagechange,
  } = useDifference();

  return (
    <div className="metrics-cards">
      <div className="card">
        <div className="card-head">
          <img src={throughputIcon} alt="" />
          <p>Throughput</p>
        </div>
        <div>
          <div className="quantity">
            {throughput !== null ? throughput : <span className="loading">Loading...</span>}{" "}
            <span>tph</span>
          </div>
          <PercentageChange value={throughputchange} />
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
            {recovery !== null ? recovery : <span className="loading">Loading...</span>} <span>%</span>
          </div>
          <PercentageChange value={recoverychange} />
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
            {headgrade !== null ? headgrade : <span className="loading">Loading...</span>} <span>g/t</span>
          </div>
          <PercentageChange value={headGradechange} />
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
            {tailingsgrade !== null ? tailingsgrade : <span className="loading">Loading...</span>} <span>g/t</span>
          </div>
          <PercentageChange value={tailingschange} />
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
            {powerUsage !== null ? powerUsage : <span className="loading">Loading...</span>} <span>Mwh</span>
          </div>
          <PercentageChange value={powerUsagechange} />
        </div>
        <div className="current-state">
          on target
          {/* current state goes here */}
        </div>
      </div>
    </div>
  );
}
