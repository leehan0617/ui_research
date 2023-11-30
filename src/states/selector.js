import { selector } from "recoil";
import { powerState, areaState, buildingTypeState } from "./atom";


export const densityState = selector({
    key: "densityState",
    get: ({ get }) => {
        const area = get(areaState);
        const power = get(powerState);
        return area > 0 ? power/area : 0;
    }
});

export const scale1State = selector({
    key: "scale1State",
    get: ({ get }) => {
        const density = get(densityState);
        if (density != 0) {
            if (density < 0.023) {
                return "하";
            } else if (density < 0.044) {
                return "중";
            } else {
                return "상";
            }
        }
        return "";
    }
});

export const scale2State = selector({
    key: "scale2State",
    get: ({ get }) => {
        const area = get(areaState);
        if (area != 0) {
            if (area < 500000) {
                return "소규모";
            } else if (area < 1000000) {
                return "중규모";
            } else {
                return "대규모";
            }
        }
        return "";
    }
});
