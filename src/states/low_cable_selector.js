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
        const materialCalculation = (unitCount * weight);
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation).toFixed(2) 
        return {
            "result": result,
            "scale": scale,
            "companyBeforeCost": 97088,
            "companyCost": 139828,
            "companyResult": 97088 * materialCalculation,
            "contractCost": 42740,
            "contractResult": 42740 * materialCalculation,
            "totalResult": materialCalculation * 139828
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
        const materialCalculation = power < 400000 && scale == 2 ? 0 : (unitCount * weight);
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation).toFixed(2) 
        return {
            "result": result,
            "scale": scale,
            "companyBeforeCost": 50781,
            "companyCost": 78580,
            "companyResult": 50781 * materialCalculation,
            "contractCost": 27799,
            "contractResult": 27799 * materialCalculation,
            "totalResult": materialCalculation * 78580
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
            "sum": Number(cv240.result) + Number(cv120.result)
        }
    }
});
