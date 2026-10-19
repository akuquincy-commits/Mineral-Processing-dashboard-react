
import axios from "axios";
import { useEffect, useState, useRef } from "react";

function getPercentChange(currentValue, previousValue) {
    if (
        !Number.isFinite(currentValue) ||
        !Number.isFinite(previousValue) ||
        previousValue === 0
    ) {
        return null;
    }

    return ((currentValue - previousValue) / previousValue) * 100;
}

export function useDifference() {
    const [throughput, setThroughput] = useState(null);
    const [recovery, setRecovery] = useState(null);
    const [headgrade, setHeadgrade] = useState(null);
    const [tailingsgrade, setTailingsGrade] = useState(null);
    const [powerUsage, setPowerUsage] = useState(null);
    const [throughputchange, setthroughputChange] = useState(null);
    const [recoverychange, setRecoveryChange] = useState(null);
    const [headGradechange, setHeadGradeChange] = useState(null);
    const [tailingschange, setTailingsChange] = useState(null);
    const [powerUsagechange, setPowerUsageChange] = useState(null);
    const previousRef = useRef(null);

    useEffect(() => {
        const fetchAndCompare = async () => {
            try {
                const response = await axios.get("/api/plant/live");
                const currentData = response.data;
                setThroughput(currentData.throughput)
                setRecovery(currentData.recovery)
                setHeadgrade(currentData.headGrade)
                setTailingsGrade(currentData.tailingsGrade)
                setPowerUsage(currentData.powerUsage)

                setthroughputChange(
                    getPercentChange(
                        currentData.throughput,
                        previousRef.current?.throughput
                    )
                );
                setRecoveryChange(
                    getPercentChange(
                        currentData.recovery,
                        previousRef.current?.recovery
                    )
                );
                setHeadGradeChange(
                    getPercentChange(
                        currentData.headGrade,
                        previousRef.current?.headGrade
                    )
                );
                setTailingsChange(
                    getPercentChange(
                        currentData.tailingsGrade,
                        previousRef.current?.tailingsGrade
                    )
                );
                setPowerUsageChange(
                    getPercentChange(
                        currentData.powerUsage,
                        previousRef.current?.powerUsage
                    )
                );

                previousRef.current = currentData;
            } catch (err) {
                console.error(err);
            }
        };
        fetchAndCompare();
        const interval = setInterval(fetchAndCompare, 10000);

        return () => clearInterval(interval);
    }, [])

    return {
        throughput,
        recovery,
        headgrade,
        tailingsgrade,
        powerUsage,
        throughputchange,
        recoverychange,
        headGradechange,
        tailingschange,
        powerUsagechange
    };
}
