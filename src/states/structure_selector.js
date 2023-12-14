import { selector } from "recoil";
import { areaState } from "./atom";
import { scale2State } from "./input_selector";

export const structureState = selector({
    key: "structureState",
    get: ({ get }) => {
        const scale = get(scale2State);
        const area = get(areaState);
        const unitCounts = [0.092, 0.146, 0.154, 0.158];
        const manholeWeights = [0.464, 0.364, 0.285, 0.562];
        const handholeWeights = [0.388, 0.387, 0.437, 0.213];
        const connectholeWeights = [0.148, 0.249, 0.278, 0.225];

        const manhole = unitCounts.map((value, index) => {
            if (index === scale) {
                const weight = manholeWeights[index];
                const result = (value * area / 1000 * weight).toFixed(2); 
                return Number(result);
            }
            return "-";
        });
        const handhole = unitCounts.map((value, index) => {
            if (index === scale) {
                const weight = handholeWeights[index];
                const result = (value * area / 1000 * weight).toFixed(2); 
                return Number(result);
            }
            return "-";
        });
        const connecthole = unitCounts.map((value, index) => {
            if (index === scale) {
                const weight = connectholeWeights[index];
                const result = (value * area / 1000 * weight).toFixed(2); 
                return Number(result);
            }
            return "-";
        });
        const totalhole = manhole.map((value, index) => {
            if (isNaN(value)) return "-";
            const result = value + handhole[index] + connecthole[index];
            return result;
        });

        return {
            "unitCounts": unitCounts,
            "manhole": manhole,
            "handhole": handhole,
            "connecthole": connecthole,
            "totalhole": totalhole
        }
    }
});
