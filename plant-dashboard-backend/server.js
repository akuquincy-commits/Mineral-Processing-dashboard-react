import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Path to the JSON file
const dataPath = path.join(__dirname, 'plantData.json');

// Helper function to read data
function readData() {
  const raw = fs.readFileSync(dataPath, 'utf-8');
  return JSON.parse(raw);
}

// Helper function to write data
function writeData(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

// GET current plant data
app.get('/api/plant/current', (req, res) => {
  const data = readData();
  res.json(data.current);
});

// GET history data
app.get('/api/plant/history', (req, res) => {
  const data = readData();
  res.json(data.history);
});

// GET full data (current + history + process stages)
app.get('/api/plant', (req, res) => {
  const data = readData();
  res.json(data);
});

// GET process stages
app.get('/api/plant/stages', (req, res) => {
  const data = readData();
  res.json(data.processStages);
});

// Simple endpoint that returns slightly changed data (simulates live plant)
app.get('/api/plant/live', (req, res) => {
  const data = readData();

  // Create small random variations to simulate a real plant
  const variation = () => (Math.random() - 0.5) * 2; // -1 to +1

  const liveData = {
    ...data.current,
    timestamp: new Date().toISOString(),
    throughput: Number((data.current.throughput + variation() * 15).toFixed(1)),
    recovery: Number((data.current.recovery + variation() * 0.4).toFixed(2)),
    headGrade: Number((data.current.headGrade + variation() * 0.05).toFixed(2)),
    tailingsGrade: Number((data.current.tailingsGrade + variation() * 0.02).toFixed(3)),
    reagentConsumption: Number((data.current.reagentConsumption + variation() * 5).toFixed(1)),
    powerUsage: Number((data.current.powerUsage + variation() * 0.3).toFixed(2)),
    pH: Number((data.current.pH + variation() * 0.1).toFixed(2))
  };

  res.json(liveData);
});

app.listen(PORT, () => {
  console.log(`Plant Dashboard Backend running on http://localhost:${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET /api/plant          → Full data`);
  console.log(`  GET /api/plant/current  → Current metrics`);
  console.log(`  GET /api/plant/history  → Historical data`);
  console.log(`  GET /api/plant/stages   → Process stages`);
  console.log(`  GET /api/plant/live     → Simulated live data (changes every request)`);
});
