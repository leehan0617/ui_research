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
        const materialCalculation = (unitCount * area / 1000 * weight);
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation.toFixed(2));

        return {
            "result": result,
            "scale": scale,
            "weights": weights,
            "companyBeforeCost": 176164,
            "companyCost": 234974,
            "companyResult": 176164 * materialCalculation,
            "contractCost": 58810,
            "contractResult": 58810 * materialCalculation,
            "totalResult": materialCalculation * 234974
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
        const materialCalculation = unitCount * area / 1000 * weight;
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation.toFixed(2));

        return {
            "result": result,
            "scale": scale,
            "weights": weights,
            "companyBeforeCost": 73669,
            "companyCost": 132329,
            "companyResult": 73669 * materialCalculation,
            "contractCost": 58660,
            "contractResult": 58660 * materialCalculation,
            "totalResult": materialCalculation * 132329
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
        const materialCalculation = unitCount * area / 1000 * weight;
        const result = isNaN(materialCalculation) ? 0 : Number(materialCalculation).toFixed(2);
        
        return {
            "result": result,
            "scale": scale,
            "weights": weights,
            "companyBeforeCost": 24758,
            "companyCost": 45560,
            "companyResult": 24758 * materialCalculation,
            "contractCost": 20802,
            "contractResult": 20802 * materialCalculation,
            "totalResult": materialCalculation * 45560
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
            "sum": Number(cu325.result) + Number(al400.result) + Number(al95.result),
            "companySum": Number(cu325.companyResult) + Number(al400.companyResult) + Number(al95.companyResult),
            "contractSum": Number(cu325.contractResult) + Number(al400.contractResult) + Number(al95.contractResult),
            "totalSum": Number(cu325.totalResult) + Number(al400.totalResult) + Number(al95.totalResult),
        }
    }
});
