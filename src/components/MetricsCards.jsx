import axios from "axios";
import { useEffect, useState } from "react";
import reactLogo from "../assets/react.svg"

export function MetricsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/plant/live");
        setData(response.data);
        console.log(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  

  return (
    <div className="metrics-cards">
      <div className="card">
        <div className="card-head">
          <img src={reactLogo} alt="throughput logo" />
          <p>Throughput</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.throughput} `: 'loading...'} <span>tph</span>
          </div>
          <div className="percentage-change">
            <span>
                3%
                {/* percentage change goes here */}  
            </span>
            <span>
                vs last 24h
            </span>
          </div>
        </div>
        <div className="current-state">
            critical
            {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={reactLogo} alt="recovery logo" />
          <p>Recovery</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.recovery}` : 'loading...'} <span>%</span>
          </div>
          <div className="percentage-change">
            <span>
                -2%
                {/* percentage change goes here */}
            </span>
            <span>
                vs last 24h
            </span>
          </div>
        </div>
        <div className="current-state">
            warning
            {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={reactLogo} alt="headGrade logo" />
          <p>Head Grade</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.headGrade}`: 'loading...'} <span>g/t</span>
          </div>
          <div className="percentage-change">
            <span>
                4%
                {/* percentage change goes here */}
            </span>
            <span>
                vs last 24h
            </span>
          </div>
        </div>
        <div className="current-state">
            good
            {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={reactLogo} alt="tailings logo" />
          <p>Tailings</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.tailingsGrade}` : 'loading...'} <span>g/t</span>
          </div>
          <div className="percentage-change">
            <span>
                2%
                {/* percentage change goes here */}
            </span>
            <span>
                vs last 24h
            </span>
          </div>
        </div>
        <div className="current-state">
            off
            {/* current state goes here */}
        </div>
      </div>
      <div className="card">
        <div className="card-head">
          <img src={reactLogo} alt="powerUseage logo" />
          <p>Power</p>
        </div>
        <div>
          <div className="quantity">
            {data ? `${data.powerUsage}`  : 'loading...'} <span>Mwh</span>
          </div>
          <div className="percentage-change">
            <span>
                5%
                {/* percentage change goes here */}
            </span>
            <span>
                vs last 24h
            </span>
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
