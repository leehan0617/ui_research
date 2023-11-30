import { selector } from "recoil";
import { areaState } from "./atom";
import { scale1State } from "./input_selector";
import { HIGHCABLEUNITCOUNTS } from "@/constants/constant";

export const cu325State = selector({
    key: "cu325State",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCount = HIGHCABLEUNITCOUNTS[scale];
        const weights = [0.082, 0.066, 0.06, 0.161];
        const weight = weights[scale];
        const materialCalculation = (unitCount * area / 1000 * weight).toFixed(2);
        
        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "weights": weights,
            "companyCost": 234974,
            "contractCost": 58810
        }
    }
});

export const al400State = selector({
    key: "al400State",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCount = HIGHCABLEUNITCOUNTS[scale];
        const weights = [0.343, 0.432, 0.536, 0.449]
        const weight = weights[scale]
        const materialCalculation = (unitCount * area / 1000 * weight).toFixed(2);

        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "weights": weights,
            "companyCost": 45560,
            "contractCost": 20802
        }
    }
});

export const al95State = selector({
    key: "al95State",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCount = HIGHCABLEUNITCOUNTS[scale];
        const weights = [0.575, 0.502, 0.404, 0.39];
        const weight = weights[scale];
        const materialCalculation = (unitCount * area / 1000 * weight).toFixed(2);
        
        return {
            "result": isNaN(materialCalculation) ? 0 : Number(materialCalculation),
            "scale": scale,
            "weights": weights,
            "companyCost": 45560,
            "contractCost": 20802
        }
    }
});

export const highCableTotalState = selector({
    key: "highCableTotalState",
    get: ({ get }) => {
        const scale = get(scale1State);
        const cu325 = get(cu325State);
        const al400 = get(al400State);
        const al95 = get(al95State);

        return {
            "scale": scale,
            "sum": cu325.result + al400.result + al95.result,
        }
    }
});
