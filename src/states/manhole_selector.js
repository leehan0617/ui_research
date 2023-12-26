import { selector } from "recoil";
import { structureState } from "./structure_selector";
import { buildingTypeState } from "./atom";
import { RESIDENT } from "@/constants/constant";

export const manholeState = selector({
    key: "manholeState",
    get: ({ get }) => {
        const structure = get(structureState);
        const buildingType = get(buildingTypeState);
        const { manhole: unitCounts } = structure;
        let ma4 = [];
        let ma6 = [];
        let me6 = [];
        let total = [];

        unitCounts.forEach((value) => {
            if (!isNaN(value)) {
                const weights = buildingType === RESIDENT ? [0.194, 0.278, 0.37] : [0.417, 0.297, 0.192];
                const weight_sum = weights.reduce((prev, curr) => (prev + curr), 0);
                const ma4_value = value * weights[0] / weight_sum;
                const ma6_value = value * weights[1] / weight_sum;
                const me6_value = value * weights[2] / weight_sum;
                ma4.push(ma4_value);
                ma6.push(ma6_value);
                me6.push(me6_value);
                total.push(ma4_value + ma6_value + me6_value);
            } else {
                ma4.push("-");
                ma6.push("-");
                me6.push("-");
                total.push("-");
            }
        });

        return {
            "unitCounts": unitCounts,
            "ma4": ma4.map(value => (isNaN(value) ? value : value.toFixed(2))),
            "ma6": ma6.map(value => (isNaN(value) ? value : value.toFixed(2))),
            "me6": me6.map(value => (isNaN(value) ? value : value.toFixed(2))),
            "total": total.map(value => (isNaN(value) ? value : value.toFixed(2)))
        }
    }
});

export const ma4State = selector({
    key: "ma4State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { ma4 } = manhole;
        const result = ma4.find(e => !isNaN(e)) || 0;
        return {
            result,
            "companyBeforeCost": 5701,
            "companyCost": 9486,
            "companyResult": 5701 * result,
            "contractCost": 3785,
            "contractResult": 3785 * result,
            "totalResult": 9486 * result
        }
    }
});

export const ma6State = selector({
    key: "ma6State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { ma6 } = manhole;
        const result = ma6.find(e => !isNaN(e)) || 0;
        return {
            result,
            "companyBeforeCost": 6072,
            "companyCost": 10050,
            "companyResult": 6072 * result,
            "contractCost": 3978,
            "contractResult": 3978 * result,
            "totalResult": 10050 * result
        }
    }
});

export const me6State = selector({
    key: "me6State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { me6 } = manhole;
        const result = me6.find(e => !isNaN(e)) || 0;
        return {
            result,
            "companyBeforeCost": 11187,
            "companyCost": 17444,
            "companyResult": 11187 * result,
            "contractCost": 6257,
            "contractResult": 6257 * result,
            "totalResult": 17444 * result
        }
    }
});
