import { selector } from "recoil";
import { powerState, areaState, buildingTypeState } from "./atom";
import { INDUSTRY } from "@/constants/constant";

export const densityState = selector({
    key: "densityState",
    get: ({ get }) => {
        const area = get(areaState);
        const power = get(powerState);
        return area > 0 ? power/area : 0;
    }
});

// 부하밀도 상(0) 중(1) 하(2)
export const scale1State = selector({
    key: "scale1State",
    get: ({ get }) => {
        const density = get(densityState);
        const buildingType = get(buildingTypeState);
        if (density != 0) {
            if (buildingType === INDUSTRY) {
                return 3; // 산업
            } else if (density < 0.023) {
                return 2; // 하
            } else if (density < 0.044) {
                return 1; // 중
            } else {
                return 0; // 상
            }
        }
        return "";
    }
});

// 규모선정2 대규모(0) 중규모(1) 소규모(2)
export const scale2State = selector({
    key: "scale2State",
    get: ({ get }) => {
        const area = get(areaState);
        if (area != 0) {
            if (area < 500000) {
                return 2; // 대규모
            } else if (area < 1000000) {
                return 1; // 중규모
            } else {
                return 0; // 소규모
            }
        }
        return "";
    }
});
