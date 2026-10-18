import { useEffect, useState } from "react";
import plantLogo from "../assets/plant-logo.svg";
import axios from "axios";


export function Header() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const getTime = async () => {
      try {
        const response = await axios.get("/api/plant/live");
        setTime(response.data.timestamp);
      } catch (err) {
        console.err(err);
      }
    };

    getTime();
  }, []);

  return (
    <div className="head">
      <div className="first-section">
        <img src={plantLogo} alt="Ahafo processing plant" />
        <div className="text-area">
          <h1 className="primary-text">Ahafo Processing Plant</h1>
          <p className="secondary-text">Mineral Operation Plant Dashboard</p>
        </div>
      </div>
      <div className="time-area">
        <button type="button" aria-label="Refresh plant data" title="Refresh plant data">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 7v5h-5M4 17v-5h5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5.6 9A7 7 0 0 1 17.3 6.7L20 12M4 12l2.7 5.3A7 7 0 0 0 18.4 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <p>
          <span className="time">{`${time}`} </span>
          <span className="muted-text">Time in GMT</span>
        </p>
      </div>
    </div>
  );
}
