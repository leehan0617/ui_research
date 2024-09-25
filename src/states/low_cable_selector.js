import { atom, selector } from "recoil";
import { areaState } from "./atom";
import { densityState, devAreaState, scaleConstantState, singleAdjState, commonAdjState, commonRateState, singleRateState } from "./input_selector";
import { lowCablePrice } from "@/constants/price";

const lowCableState = selector({
    key: "lowCableState",
    get: ({ get }) => {
        const area = get(areaState);
        const density = get(densityState);
        const devArea = get(devAreaState);
        const singleAdj = get(singleAdjState);
        const commonAdj = get(commonAdjState);
        const currentScale = get(scaleConstantState);
        const commonRate = get(commonRateState);
        const singleRate = get(singleRateState);
        const { lowCable, densityAvg } = currentScale;
        const { unitCount, cable240, cable120, cable70 } = lowCable;
        const densityConstant = densityAvg > density ? 1 - (densityAvg - density) / densityAvg : 1;
        return { area, unitCount, cable240, cable120, cable70, devArea, singleAdj, densityConstant, commonAdj, commonRate, singleRate };
    }
});

export const directCable240State = atom({
    key: "directCable240State",
    default: ""
});

export const directCable120State = atom({
    key: "directCable120",
    default: "",
});

export const cable240State = selector({
    key: "cable240State",
    get: ({ get }) => {
        const lowCable = get(lowCableState);
        const directCable240 = get(directCable240State);
        const { area, unitCount, cable240, devArea, singleAdj, densityConstant, commonAdj, singleRate } = lowCable;
        // 수요전력규모
        const scale = Math.round(unitCount * cable240 * 1000) / 1000;
        // 설계수량
        const beforeCount = Math.round(scale * devArea / 1000 * 100) / 100;
        // 조정수량
        const afterCount = singleRate > singleAdj ? Math.round(beforeCount * (1+(singleAdj*0.3)* densityConstant) * 100) / 100 : beforeCount;
        // const adj = (1+(singleAdj*commonAdj)) * densityConstant;
        const count = directCable240 || afterCount;
        const companyPrice = lowCablePrice?.company;
        const customerPrice = lowCablePrice?.customer;
        return { scale, count, companyPrice, customerPrice };
    }
});

export const cable120State = selector({
    key: "cable120State",
    get: ({ get }) => {
        const lowCable = get(lowCableState);
        const directCable120 = get(directCable120State);
        const { area, unitCount, cable120, devArea, singleAdj, densityConstant, commonAdj, singleRate } = lowCable;
        const scale = Math.round(unitCount * cable120 * 1000) / 1000;
        // 설계수량
        const beforeCount = Math.round(scale * devArea / 1000 / 3 * 100) / 100;
        // 조정수량
        const afterCount = singleRate > singleAdj ? Math.round(beforeCount * (1+(singleAdj*0.3)* densityConstant) * 100) / 100 : beforeCount;
        // const count = Math.round(scale * area / 1000 * 100) / 100;
        // const count = Math.round(devArea * unitCount * cable120 * singleAdj * densityConstant / 1000 / 3 * 1000) / 1000;
        // const adj = (1+(singleAdj*commonAdj)) * densityConstant;
        const count = directCable120 || afterCount;
        return { scale, count };
    }
});

// export const cable70State = selector({
//     key: "cable70State",
//     get: ({ get }) => {
//         const lowCable = get(lowCableState);
//         const { area, unitCount, cable70, devArea, singleAdj, densityConstant } = lowCable;
//         const scale = Math.round(unitCount * cable70 * 1000) / 1000;
//         // const count = Math.round(scale * area / 1000 * 100) / 100;
//         const count = Math.round(devArea * unitCount * cable70 * singleAdj * densityConstant / 1000 / 3 * 1000) / 1000;
//         return { scale, count };
//     }
// });

export const lowCableTotalState = selector({
    key: "lowCableTotalState",
    get: ({ get }) => {
        const cable240 = get(cable240State);
        const cable120 = get(cable120State);
        // const cable70 = get(cable70State);
        const count = cable240?.count + cable120?.count;
        const scale = cable240?.scale + cable120?.scale;
        const companyPrice = count * lowCablePrice?.company;
        const customerPrice = count * lowCablePrice?.customer;
        const price = companyPrice + customerPrice;
        return { count, scale, companyPrice, customerPrice, price };
    }
});
