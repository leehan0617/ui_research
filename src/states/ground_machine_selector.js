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
        const materialCalculation = (unitCount * area / 1000 * weight).toFixed(2);

        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "companyCost": 23479 + 360,
            "contractCost": 1230 + 1082
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
            "companyCost": 0,
            "contractCost": 0
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
            "sum": (transformer.result + groundSwitch.result).toFixed(2)
        }
    }
});
