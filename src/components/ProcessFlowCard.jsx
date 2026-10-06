import reactLogo from "../assets/react.svg";

export function ProcessFlowCard() {
  return (
    <div className="process-flow">
      <h2>Process Flow</h2>
      <div className="process-flow-cards">
        <div className="process-flow-card">
          <img src={reactLogo} alt="Crushing image" />
          <h4>Crushing</h4>
          <p>Primary Crusher</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={reactLogo} alt="Grinding image" />
          <h4>Grinding</h4>
          <p>Ball & Mill Cyclones</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={reactLogo} alt="Flotation image" />
          <h4>Flotation</h4>
          <p>Rougher & Cleaner Cells </p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={reactLogo} alt="Concentrate image" />
          <h4>Concentrate</h4>
          <p>Thickner & Filter Press</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
      </div>
    </div>
  );
}
