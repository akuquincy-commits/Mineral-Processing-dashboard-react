import { Header } from "./components/header";
import { MetricsCard } from "./components/MetricsCards";
import './App.css'
import { MidSection } from "./components/MidSection";
import { ChartSection } from "./components/Chart";


function App() {
  return (
    <>
      <Header />
      <MetricsCard />
      <MidSection />
      <ChartSection />
    </>
  );
}

export default App;
