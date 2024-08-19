import { selector } from "recoil";
import { powerState, areaState, buildingTypeState } from "./atom";
import { INDUSTRY } from "@/constants/constant";
import { scaleConstant } from "@/constants/scale";
import * as inputAtom from "@/states/input_atom";

export const densityState = selector({
    key: "densityState",
    get: ({ get }) => {
        const area = get(areaState);
        const power = get(powerState);
        const density = area > 0 ? Math.round(power/area * 1000) / 1000 : 0;
        return density;
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
        const density = get(densityState);
        const buildingType = get(buildingTypeState);
        const devArea = get(devAreaState);
        let scale = 0;
        if (buildingType === INDUSTRY) {
            if (density > 0.085) {
                scale = devArea <= 750000 ? 5 : 4;
            } else if (density <= 0.049) {
                scale = devArea <= 750000 ? 1 : 2;
            } else {
                scale = devArea <= 750000 ? 3 : 4;
            }
        } else {
            if (density > 0.081) {
                if (devArea <= 500000) {
                    scale = 7;
                } else if (devArea > 1000000) {
                    scale = 6;
                } else {
                    scale = 8;
                }
            } else if (density <= 0.035) {
                if (devArea <= 500000) {
                    scale = 1;
                } else if (devArea > 1000000) {
                    scale = 3;
                } else {
                    scale = 2;
                }
            } else {
                if (devArea <= 500000) {
                    scale = 4;
                } else if (devArea > 1000000) {
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

export const singleResidentAreaState = selector({
    key: "singleResidentArea",
    get: ({ get }) => {
        const area = get(inputAtom.row1col1State);
        return Number(area);
    }
});

export const commonResidentAreaState = selector({
    key: "commonResidentArea",
    get: ({ get }) => {
        const area = get(inputAtom.row2col1State);
        return Number(area);
    }
});

export const greenAreaState = selector({
    key: "greenArea",
    get: ({ get }) => {
        const parkArea = get(inputAtom.row13col1State);
        const green = get(inputAtom.row14col1State);
        return Number(parkArea) + Number(green);
    }
});

// 개발면적조정
export const devAreaState = selector({
    key: "devArea",
    get: ({ get }) => {
        const area = get(areaState);
        const greenArea = get(greenAreaState);
        const buildingType = get(buildingTypeState);
        const avgGreenArea = buildingType === INDUSTRY ? 0.125 : 0.156;
        return area === 0 ? 0 : area * (1 - (greenArea / area ) - avgGreenArea);
    }
});

// 공동주택조정
export const commonAdjState = selector({
    key: "commonAdj",
    get: ({ get }) => {
        const area = get(areaState);
        const commonResidentArea = get(commonResidentAreaState);
        const buildingType = get(buildingTypeState);
        const commonBuildingAvg = buildingType === INDUSTRY ? 0.005 : 0.296;
        // const buildingAvg = commonResidentArea / area;
        // return buildingAvg > commonBuildingAvg ? 1 - buildingAvg * 0.1 : 1;
        return commonBuildingAvg;
    }
});

// 단독주택조정
export const singleAdjState = selector({
    key: "singleAdj",
    get: ({ get }) => {
        const area = get(areaState);
        const singleResidentArea = get(singleResidentAreaState);
        const buildingType = get(buildingTypeState);
        const singleBuildingAvg = buildingType === INDUSTRY ? 0.001 : 0.041;
        // const buildingAvg = singleResidentArea / area;
        // return buildingAvg > singleBuildingAvg ? 1 + buildingAvg * 0.3 : 1;
        return singleBuildingAvg;
    }
});
