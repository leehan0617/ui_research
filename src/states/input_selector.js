import { selector } from "recoil";
import { powerState, areaState, buildingTypeState } from "./atom";
import { INDUSTRY } from "@/constants/constant";
import { scaleConstant } from "@/constants/scale";

export const densityState = selector({
    key: "densityState",
    get: ({ get }) => {
        const area = get(areaState);
        const power = get(powerState);
        return area > 0 ? power/area : 0;
    }
});

export const buildingKr = selector({
    key: "buildingKr",
    get: ({ get }) => {
        const buildingType = get(buildingTypeState);
        return buildingType === INDUSTRY ? "산업단지" : "주택단지";
    }
});

export const scaleState = selector({
    key: "scaleState",
    get: ({ get }) => {
        const area = get(areaState);
        const density = get(densityState);
        const buildingType = get(buildingTypeState);
        let scale = 0;
        if (buildingType === INDUSTRY) {
            if (density > 0.085) {
                scale = area <= 750000 ? 5 : 4;
            } else if (density <= 0.049) {
                scale = area <= 750000 ? 1 : 2;
            } else {
                scale = area <= 750000 ? 3 : 4;
            }
        } else {
            if (density > 0.081) {
                if (area <= 500000) {
                    scale = 7;
                } else if (area > 1000000) {
                    scale = 6;
                } else {
                    scale = 8;
                }
            } else if (density <= 0.035) {
                if (area <= 500000) {
                    scale = 1;
                } else if (area > 1000000) {
                    scale = 3;
                } else {
                    scale = 2;
                }
            } else {
                if (area <= 500000) {
                    scale = 4;
                } else if (area > 1000000) {
                    scale = 6;
                } else {
                    scale = 5;
                }
            }
        }
        return scale;
    }
});

export const scaleConstantState = selector({
    key: "scaleConstantState",
    get: ({ get }) => {
        const scale = get(scaleState);
        const buildingType = get(buildingTypeState);
        const currentScale = scaleConstant[`scale${scale}`][buildingType];
        return currentScale;
    }
});
