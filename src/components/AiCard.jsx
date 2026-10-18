import {  ArrowRight } from "lucide-react";

export function AiCard() {
  return (
    <div className="ai-card">
      <h2>AI Recommendation</h2>
      <p className="ai-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste vitae
        ducimus, mollitia id unde corporis modi soluta enim eos nostrum.
      </p>
      <h4>Potential Impact</h4>
      <p>
        <span>Lorem.</span>
        <span>Lorem.</span>
      </p>
      <button>
        <span>View Full Analysis</span>   <ArrowRight id="right-arrow"/>
      </button>
    </div>
  );
}
