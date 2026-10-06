import { useEffect, useState } from "react";
import reactLogo from '../assets/react.svg'
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
        <img src={reactLogo} alt="Site logo" />
        <div>
          <p className="primary-text">Ahafo Processing Plant</p>
          <p className="secondary-text">Mineral Operation Plant Dashboard</p>
        </div>
      </div>
      <div className="time-area">
        <button>O{/* put refresh logo here */}</button>
        <p>
          <span className="time">{`${time}`} </span>
          <span className="muted-text">Time in GMT</span>
        </p>
      </div>
    </div>
  );
}
