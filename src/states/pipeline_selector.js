import { selector } from "recoil";
import { areaState } from "./atom";
import { scale1State } from "./input_selector";
import { buildingTypeState } from "./atom";
import { INDUSTRY, RESIDENT } from "@/constants/constant";

export const pipelineState = selector({
    key: "pipelineState",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const buildingType = get(buildingTypeState);
        const unitCounts = [0.06, 0.052, 0.043, 0.069];
        const weights175 = [0.418, 0.351, 0.315, 0.453];
        const weights150 = [0.248, 0.281, 0.272, 0.325];
        const weights100 = [0.334, 0.368, 0.413, 0.222];

        const result175 = weights175.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const result150 = weights150.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const result100 = weights100.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const total = unitCounts.map((value, index) => {
            if (index === scale) {
                return (result175[index] + result150[index] + result100[index]).toFixed(2);
            } else {
                return "-";
            }
        })
        // 2번째 테이블 로직
        const scaleArray = ["상", "중", "하"];
        const scaleKr = buildingType === INDUSTRY ? "평균" : scaleArray[scale];

        const subWeights175 = buildingType === INDUSTRY ? [0.241, 0.12, 0.08, 0] : [0.185, 0.093, 0.062, 0];
        const subWeights175Sum = subWeights175.reduce((prev, curr) => prev + curr, 0);
        const subWeights150 = buildingType === INDUSTRY ? [0.129, 0.13, 0.065, 0] : [0.106, 0.106, 0.053, 0];
        const subWeights150Sum = subWeights150.reduce((prev, curr) => prev + curr, 0);
        const subWeights100 = buildingType === INDUSTRY ? [0.047, 0.047, 0.047, 0.094] : [0.079, 0.079, 0.079, 0.158];
        const subWeights100Sum = subWeights100.reduce((prev, curr) => prev + curr, 0);
        
        const sub3x3 = [result175[scale] * subWeights175[0] / subWeights175Sum, result150[scale] * subWeights150[0] / subWeights150Sum, result100[scale] * subWeights100[0] / subWeights100Sum];
        sub3x3.push(sub3x3.reduce((prev, curr) => prev + curr, 0) / 9);
        const sub3x2 = [result175[scale] * subWeights175[1] / subWeights175Sum, result150[scale] * subWeights150[1] / subWeights150Sum, result100[scale] * subWeights100[1] / subWeights100Sum];
        sub3x2.push(sub3x2.reduce((prev, curr) => prev + curr, 0) / 6);
        const sub2x2 = [result175[scale] * subWeights175[2] / subWeights175Sum, result150[scale] * subWeights150[2] / subWeights150Sum, result100[scale] * subWeights100[2] / subWeights100Sum];
        sub2x2.push(sub2x2.reduce((prev, curr) => prev + curr, 0) / 4);
        const sub2x1 = [result175[scale] * subWeights175[3] / subWeights175Sum, result150[scale] * subWeights150[3] / subWeights150Sum, result100[scale] * subWeights100[3] / subWeights100Sum];
        sub2x1.push(sub2x1.reduce((prev, curr) => prev + curr, 0) / 2);
        const subTotal = [sub3x3[0] + sub3x2[0] + sub2x2[0] + sub2x1[0], sub3x3[1] + sub3x2[1] + sub2x2[1] + sub2x1[1], sub3x3[2] + sub3x2[2] + sub2x2[2] + sub2x1[2], sub3x3[3] + sub3x2[3] + sub2x2[3] + sub2x1[3]];
        return {
            "unitCounts": unitCounts,
            "buildingType": buildingType === RESIDENT ? "주택단지" : "산업단지",
            "scale": scaleKr,
            "result175": result175.map(value => isNaN(value) ? value : value.toFixed(2)),
            "result150": result150.map(value => isNaN(value) ? value : value.toFixed(2)),
            "result100": result100.map(value => isNaN(value) ? value : value.toFixed(2)),
            "sub3x3": sub3x3.map(value => isNaN(value) ? value : value.toFixed(2)),
            "sub3x2": sub3x2.map(value => isNaN(value) ? value : value.toFixed(2)),
            "sub2x2": sub2x2.map(value => isNaN(value) ? value : value.toFixed(2)),
            "sub2x1": sub2x1.map(value => isNaN(value) ? value : value.toFixed(2)),
            "subTotal": subTotal.map(value => isNaN(value) ? value : value.toFixed(2)),
            "total": total
        }
    }
});

export const pipeline2x1State = selector({
    key: "pipeline2x1State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { sub2x1 } = pipeline;
        const result = sub2x1[sub2x1.length - 1] || 0;

        return {
            result,
            "companyBeforeCost": 6698,
            "companyCost": 40607,
            "companyResult": 6698 * result,
            "contractCost": 33910,
            "contractResult": 33910 * result,
            "totalResult": 40607 * result
        }
    }
});

export const pipeline2x2State = selector({
    key: "pipeline2x2State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { sub2x2 } = pipeline;
        const result = sub2x2[sub2x2.length - 1] || 0;

        return {
            result,
            "companyBeforeCost": 32754,
            "companyCost": 138213,
            "companyResult": 32754 * result,
            "contractCost": 105458,
            "contractResult": 105458 * result,
            "totalResult": 138213 * result
        }
    }
});

export const pipeline3x2State = selector({
    key: "pipeline3x2State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { sub3x2 } = pipeline;
        const result = sub3x2[sub3x2.length - 1] || 0;

        return {
            result,
            "companyBeforeCost": 50295,
            "companyCost": 186948,
            "companyResult": 50295 * result,
            "contractCost": 136653,
            "contractResult": 136653 * result,
            "totalResult": 186948 * result
        }
    }
});

export const pipeline3x3State = selector({
    key: "pipeline3x3State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { sub3x3 } = pipeline;
        const result = sub3x3[sub3x3.length - 1] || 0;

        return {
            result,
            "companyBeforeCost": 79276,
            "companyCost": 270711,
            "companyResult": 79276 * result,
            "contractCost": 191435,
            "contractResult": 191435 * result,
            "totalResult": 270711 * result
        }
    }
});

export const highPipelineTotalState = selector({
    key: "highPipelineTotalState",
    get: ({ get }) => {
        const pipeline2x2 = get(pipeline2x2State);
        const pipeline3x2 = get(pipeline3x2State);
        const pipeline3x3 = get(pipeline3x3State);

        return {
            "companySum": Number(pipeline2x2.companyResult) + Number(pipeline3x2.companyResult) + Number(pipeline3x3.companyResult),
            "contractSum": Number(pipeline2x2.contractResult) + Number(pipeline3x2.contractResult) + Number(pipeline3x3.contractResult),
            "totalSum": Number(pipeline2x2.totalResult) + Number(pipeline3x2.totalResult) + Number(pipeline3x3.totalResult),
        }
    }
});

export const lowPipelineTotalState = selector({
    key: "lowPipelineTotalState",
    get: ({ get }) => {
        const pipeline2x1 = get(pipeline2x1State);

        return {
            "companySum": Number(pipeline2x1.companyResult),
            "contractSum": Number(pipeline2x1.contractResult),
            "totalSum": Number(pipeline2x1.totalResult)
        }
    }
});
