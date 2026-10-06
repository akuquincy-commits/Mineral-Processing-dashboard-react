import { Header } from "./components/header";
import { MetricsCard } from "./components/MetricsCards";
import './App.css'
import { MidSection } from "./components/MidSection";

function App() {
  return (
    <>
      <Header />
      <MetricsCard />
      <MidSection />
    </>
  );
}

export default App;
