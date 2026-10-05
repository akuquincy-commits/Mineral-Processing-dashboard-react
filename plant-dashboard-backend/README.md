# Mineral Processing Plant Dashboard - Backend

Simple Node.js + Express backend that provides mock data for a Mineral Processing Plant Dashboard.

This backend is made for learning purposes. It serves realistic plant data that your React frontend can consume.

---

## Features

- Current plant metrics (Throughput, Recovery, Head Grade, Tailings Grade, etc.)
- Historical data for charts
- Process stages status (Crushing, Grinding, Flotation, Concentrate)
- Live endpoint that slightly changes values on every request (simulates a real plant)

---

## How to Run

1. Make sure you have **Node.js** installed on your computer.
2. Open this folder in your terminal.
3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm start
```

5. The backend will run at:

```
http://localhost:5000
```

---

## Available Endpoints

| Method | Endpoint                  | Description                                      |
|--------|---------------------------|--------------------------------------------------|
| GET    | `/api/plant`              | Returns full data (current + history + stages)   |
| GET    | `/api/plant/current`      | Returns only the current metrics                 |
| GET    | `/api/plant/history`      | Returns historical data (for charts)             |
| GET    | `/api/plant/stages`       | Returns status of each process stage             |
| GET    | `/api/plant/live`         | Returns live simulated data (values change)      |

---

## Recommended Endpoint for Frontend

Use this one if you want the dashboard to feel alive:

```
GET http://localhost:5000/api/plant/live
```

Example in React:

```js
const response = await fetch("http://localhost:5000/api/plant/live");
const data = await response.json();
console.log(data);
```

---

## Project Structure

```
plant-dashboard-backend/
├── plantData.json      → Mock plant data
├── server.js           → Express server
├── package.json
└── README.md
```

---

## Notes

- This is mock data only. It does not connect to any real plant.
- The `/api/plant/live` endpoint adds small random variations so the numbers keep changing.
- You can edit `plantData.json` if you want to change the base values.

---

Created for learning React + real-world engineering dashboards.
