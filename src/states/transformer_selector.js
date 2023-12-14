import { selector } from "recoil";
import { groundTransformerState } from "./ground_machine_selector";

export const transformerState = selector({
    key: "transformerState",
    get: ({ get }) => {
        const groundTransformer = get(groundTransformerState);
        const { scale, result } = groundTransformer;
        const unitCounts = [0,0,0,0];
        unitCounts[scale] = result;
        
        const weight_75 = [0.3, 0.3, 0.3, 0.7];
        const weight_150 = [0.1, 0.1, 0.1, 0.1];
        const weight_300 = [0.6, 0.6, 0.6, 0.2];
        
        const kva75 = unitCounts.map((value, index) => (scale === index ? (value * weight_75[index]).toFixed(2) : "-"));
        const kva150 = unitCounts.map((value, index) => (scale === index ? (value * weight_150[index]).toFixed(2) : "-"));
        const kva300 = unitCounts.map((value, index) => (scale === index ? (value * weight_300[index]).toFixed(2) : "-"));

        const kvaTotal = kva75.map((value, index) => {
            if (isNaN(value)) return "-";
            return (Number(value) + Number(kva150[index]) + Number(kva300[index])).toFixed(2);
        })

        return {
            "unitCounts": unitCounts,
            "kva75": kva75,
            "kva150": kva150,
            "kva300": kva300,
            "kvaTotal": kvaTotal
        }
    }
});