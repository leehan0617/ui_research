import { selector } from "recoil";
import { powerState } from "./atom";
import { scale1State } from "./input_selector";
import { LOWCABLEUNITCOUNTS } from "@/constants/constant";

export const cv240State = selector({
    key: "cv240State",
    get: ({ get }) => {
        const scale = get(scale1State);
        const unitCount = LOWCABLEUNITCOUNTS[scale];
        // 저압케이블은 weight가 모두 동일하다.
        const weight = 0.5;
        const materialCalculation = (unitCount * weight).toFixed(2);

        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "companyCost": 97088,
            "contractCost": 42740
        }
    }
});

export const cv120State = selector({
    key: "cv120State",
    get: ({ get }) => {
        const weight = 0.5;
        const power = get(powerState);
        const scale = get(scale1State);
        const unitCount = LOWCABLEUNITCOUNTS[scale]
        const materialCalculation = power < 400000 && scale == 2 ? 0 : (unitCount * weight).toFixed(2);

        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "companyCost": 50781,
            "contractCost": 27799
        }
    }
});

export const totalState = selector({
    key: "lowCableTotalState",
    get: ({ get }) => {
        const scale = get(scale1State);
        const cv240 = get(cv240State);
        const cv120 = get(cv120State);

        return {
            "scale": scale,
            "sum": cv240.result + cv120.result
        }
    }
});
