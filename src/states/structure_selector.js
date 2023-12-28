import { selector } from "recoil";
import { areaState } from "./atom";
import { scale2State } from "./input_selector";
import { ma4State, ma6State, me6State } from "./manhole_selector";

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

export const hb2State = selector({
    key: "hb2State",
    get: ({ get }) => {
        const { handhole } = get(structureState);
        const scale = get(scale2State);
        const materialCalculation = handhole[scale];
        const result = isNaN(materialCalculation) ? 0 : materialCalculation;
        return {
            "result": result,
            "companyBeforeCost": 3062,
            "companyCost": 5510,
            "companyResult": 3062 * result,
            "contractCost": 2448,
            "contractResult": 2448 * result,
            "totalResult": 5510 * result
        }
    }
});

export const jblState = selector({
    key: "jblState",
    get: ({ get }) => {
        const { connecthole } = get(structureState);
        const scale = get(scale2State);
        const materialCalculation = connecthole[scale];
        const result = isNaN(materialCalculation) ? 0 : materialCalculation;
        return {
            "result": result,
            "companyBeforeCost": 337,
            "companyCost": 1054,
            "companyResult": 337 * result,
            "contractCost": 717,
            "contractResult": 717 * result,
            "totalResult": result * 1054
        }
    }
});

export const highStructureTotalState = selector({
    key: "highStructureTotalState",
    get: ({ get }) => {
        const ma4 = get(ma4State);
        const ma6 = get(ma6State);
        const me6 = get(me6State);
        const hb2 = get(hb2State);

        return {
            "companySum": Number(ma4.companyResult) + Number(ma6.companyResult) + Number(me6.companyResult) + Number(hb2.companyResult),
            "contractSum": Number(ma4.contractResult) + Number(ma6.contractResult) + Number(me6.contractResult) + Number(hb2.contractResult),
            "totalSum": Number(ma4.totalResult) + Number(ma6.totalResult) + Number(me6.totalResult) + Number(hb2.totalResult)
        }
    }
});

export const lowStructureTotalState = selector({
    key: "lowStructureTotalState",
    get: ({ get }) => {
        const jbl = get(jblState);

        return {
            "companySum": Number(jbl.companyResult),
            "contractSum": Number(jbl.contractResult),
            "totalSum": Number(jbl.totalResult)
        }
    }
});