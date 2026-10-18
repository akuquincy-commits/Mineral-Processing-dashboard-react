import crushingImage from "../assets/process-crushing.svg";
import grindingImage from "../assets/process-grinding.svg";
import flotationImage from "../assets/process-flotation.svg";
import concentrateImage from "../assets/process-concentrate.svg";

export function ProcessFlowCard() {
  return (
    <div className="process-flow">
      <h2>Process Flow</h2>
      <div className="process-flow-cards">
        <div className="process-flow-card">
          <img src={crushingImage} alt="Illustration of an ore crusher and conveyor" />
          <h4>Crushing</h4>
          <p>Primary Crusher</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={grindingImage} alt="Illustration of a grinding mill and cyclone" />
          <h4>Grinding</h4>
          <p>Ball & Mill Cyclones</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={flotationImage} alt="Illustration of flotation tanks and aeration" />
          <h4>Flotation</h4>
          <p>Rougher & Cleaner Cells </p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
        <div className="process-flow-card">
          <img src={concentrateImage} alt="Illustration of a filter press producing concentrate" />
          <h4>Concentrate</h4>
          <p>Thickner & Filter Press</p>
          <p className="status">good{/* current status goes here */}</p>
        </div>
      </div>
    </div>
  );
}
