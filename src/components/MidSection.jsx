import { AiCard } from "./AiCard";
import { ProcessFlowCard } from "./ProcessFlowCard";

export function MidSection() {
    return(
        <div className="mid-section">
        <ProcessFlowCard />
        <AiCard />
        </div>

    )
}