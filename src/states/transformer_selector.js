import { selector } from "recoil";
import { groundTransformerState } from "./ground_machine_selector";

export const transformerState = selector({
    key: "transformerState",
    get: ({ get }) => {
        const groundTransformer = get(groundTransformerState);
        const { scale, result } = groundTransformer;
        const unitCounts = [0,0,0,0];
        unitCounts[scale] = result;
        
        const weight_75 = [0.3, 0.3, 0.3, 0.7];
        const weight_150 = [0.1, 0.1, 0.1, 0.1];
        const weight_300 = [0.6, 0.6, 0.6, 0.2];
        
        const kva75 = unitCounts.map((value, index) => (scale === index ? (value * weight_75[index]).toFixed(2) : "-"));
        const kva150 = unitCounts.map((value, index) => (scale === index ? (value * weight_150[index]).toFixed(2) : "-"));
        const kva300 = unitCounts.map((value, index) => (scale === index ? (value * weight_300[index]).toFixed(2) : "-"));

        const kvaTotal = kva75.map((value, index) => {
            if (isNaN(value)) return "-";
            return (Number(value) + Number(kva150[index]) + Number(kva300[index])).toFixed(2);
        })

        return {
            "unitCounts": unitCounts,
            "scale": scale,
            "kva75": kva75,
            "kva150": kva150,
            "kva300": kva300,
            "kvaTotal": kvaTotal
        }
    }
});

export const kva75State = selector({
    key: "kva75State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const { scale, kva75 } = transformer;
        const result = kva75[scale] || 0;
        return {
            result,
            "companyBeforeCost": 7573,
            "companyCost": 8742,
            "companyResult": 7573 * result,
            "contractCost": 1169,
            "contractResult": 1169 * result,
            "totalResult": 8742 * result
        }
    }
});

export const kva150State = selector({
    key: "kva150State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const { scale, kva150 } = transformer;
        const result = kva150[scale] || 0;
        return {
            result,
            "companyBeforeCost": 8755,
            "companyCost": 10091,
            "companyResult": 8755 * result,
            "contractCost": 1336,
            "contractResult": 1336 * result,
            "totalResult": 10091 * result
        }
    }
});

export const kva300State = selector({
    key: "kva300State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const { scale, kva300 } = transformer;
        const result = kva300[scale] || 0;
        return {
            result,
            "companyBeforeCost": 10635,
            "companyCost": 11995,
            "companyResult": 10635 * result,
            "contractCost": 1360,
            "contractResult": 1360 * result,
            "totalResult": 11995 * result
        }
    }
});

export const kvaTotalState = selector({
    key: "kvaTotalState",
    get: ({ get }) => {
        const kva75 = get(kva75State);
        const kva150 = get(kva150State);
        const kva300 = get(kva300State);
        const { result: kva75Result } = kva75;
        const { result: kva150Result } = kva150;
        const { result: kva300Result } = kva300;
        const result = Number(kva75Result) + Number(kva150Result) + Number(kva300Result);
        return {
            result,
            "companyBeforeCost": 439,
            "companyCost": 1535,
            "companyResult": 439 * result,
            "contractCost": 1096,
            "contractResult": 1096 * result,
            "totalResult": 1535 * result
        }
    }
});

export const transformerTotalState = selector({
    key: "transformerTotalState",
    get: ({ get }) => {
        const kva75 = get(kva75State);
        const kva150 = get(kva150State);
        const kva300 = get(kva300State);
        const tcl = get(kvaTotalState);

        return {
            "companySum": Number(kva75.companyResult) + Number(kva150.companyResult) + Number(kva300.companyResult) + Number(tcl.companyResult),
            "contractSum": Number(kva75.contractResult) + Number(kva150.contractResult) + Number(kva300.contractResult) + Number(tcl.contractResult),
            "totalSum": Number(kva75.totalResult) + Number(kva150.totalResult) + Number(kva300.totalResult) + Number(tcl.totalResult),
        }
    }
});
