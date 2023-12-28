import { selector } from "recoil";
import { areaState } from "./atom";
import { scale1State } from "./input_selector";
import { GROUNDMACHINEUNITCOUNTS } from "@/constants/constant";

export const groundSwitchState = selector({
    key: "groundSwitchState",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCount = GROUNDMACHINEUNITCOUNTS[scale];
        const weights = [0.638, 0.518, 0.471, 0.68];
        const weight = weights[scale];
        const materialCalculation = unitCount * area / 1000 * weight;
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation).toFixed(2);

        return {
            "result": result,
            "materialCalculation": materialCalculation,
            "scale": scale
        }
    }
});

export const ground4w4sState = selector({
    key: "4w4s",
    get: ({ get }) => {
        const groundSwitch = get(groundSwitchState);
        const materialCalculation = groundSwitch.materialCalculation;
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation).toFixed(2);

        return {
            "result": result,
            "companyBeforeCost": 23479,
            "companyCost": 24709,
            "companyResult": 23479 * materialCalculation,
            "contractCost": 1230,
            "contractResult": 1230 * materialCalculation,
            "totalResult": materialCalculation * 24709
        }
    }
});

export const groundsw4State = selector({
    key: "sw4",
    get: ({ get }) => {
        const { materialCalculation, result } = get(groundSwitchState);
        
        return {
            "result": result,
            "companyBeforeCost": 360,
            "companyCost": 1442,
            "companyResult": 360 * materialCalculation,
            "contractCost": 1082,
            "contractResult": 1082 * materialCalculation,
            "totalResult": materialCalculation * 1442
        }
    }
});

export const groundTotalState = selector({
    key: "groundTotalState",
    get: ({ get }) => {
        const ground4w4s = get(ground4w4sState);
        const groundsw4 = get(groundsw4State);

        return {
            "companySum": Number(ground4w4s.companyResult) + Number(groundsw4.companyResult),
            "contractSum": Number(ground4w4s.contractResult) + Number(groundsw4.contractResult),
            "totalSum": Number(ground4w4s.totalResult) + Number(groundsw4.totalResult)
        }
    }
});

export const groundTransformerState = selector({
    key: "groundTransFormerState",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCount = GROUNDMACHINEUNITCOUNTS[scale];
        const weights = [0.362, 0.482, 0.529, 0.32];
        const weight = weights[scale];
        const materialCalculation = (unitCount * area / 1000 * weight).toFixed(2);

        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
        }
    }
});

export const totalState = selector({
    key: "groundMachineTotalState",
    get: ({ get }) => {
        const scale = get(scale1State);
        const transformer = get(groundTransformerState);
        const groundSwitch = get(groundSwitchState);

        return {
            "scale": scale,
            "sum": (Number(transformer.result) + Number(groundSwitch.result)).toFixed(2)
        }
    }
});
