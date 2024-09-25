import { atom, selector } from "recoil";
import { areaState } from "./atom";
import { densityState, devAreaState, scaleConstantState, singleAdjState, commonAdjState, singleRateState } from "./input_selector";
import { transformer75Price, transformer150Price, transformer300Price } from "@/constants/price";

const transformerState = selector({
    key: "transformerState",
    get: ({ get }) => {
        const area = get(areaState);
        const density = get(densityState);
        const devArea = get(devAreaState);
        const singleAdj = get(singleAdjState);
        const singleRate = get(singleRateState);
        const commonAdj = get(commonAdjState);
        const currentScale = get(scaleConstantState);
        const { transformer, densityAvg } = currentScale;
        const { unitCount, kva75, kva150, kva300 } = transformer;
        const densityConstant = densityAvg > density ? 1 - (densityAvg - density) / densityAvg : 1;
        return { unitCount, area, kva75, kva150, kva300, devArea, singleAdj, densityConstant, commonAdj, singleRate };
    }
});

export const directKva75State = atom({
    key: "directKva75State",
    default: "",
});

export const directKva150State = atom({
    key: "directKva150State",
    default: "",
});

export const directKva300State = atom({
    key: "directKva300State",
    default: "",
});

export const kva75State = selector({
    key: "kva75State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const directKva75 = get(directKva75State);
        const { area, unitCount, kva75, devArea, singleAdj, commonAdj, densityConstant, singleRate } = transformer;
        const scale = Math.round(unitCount * kva75 * 1000) / 1000;
        const beforeCount = Math.round(scale * devArea / 1000);
        const adj = (1+(singleAdj*0.3)) * densityConstant;
        const afterCount = singleRate > singleAdj ? Math.round(beforeCount * adj) : beforeCount;
        const count = directKva75 || afterCount;
        // const count = Math.round(devArea * unitCount * kva75 * singleAdj * densityConstant / 1000 * 1000) / 1000;
        const companyUnitPrice = transformer75Price?.company;
        const customerUnitPrice = transformer75Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const kva150State = selector({
    key: "kva150State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const directKva150 = get(directKva150State);
        const { area, unitCount, kva150, devArea, singleAdj, commonAdj, densityConstant, singleRate } = transformer;
        const scale = Math.round(unitCount * kva150 * 1000) / 1000;
        const beforeCount = Math.round(scale * devArea / 1000);
        const adj = (1+(singleAdj*0.3)) * densityConstant;
        const afterCount = singleRate > singleAdj ? Math.round(beforeCount * adj) : beforeCount;
        const count = directKva150 || afterCount;
        // const count = Math.round(area * scale / 1000 * adj);
        const companyUnitPrice = transformer150Price?.company;
        const customerUnitPrice = transformer150Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const kva300State = selector({
    key: "kva300State",
    get: ({ get }) => {
        const transformer = get(transformerState);
        const directKva300 = get(directKva300State);
        const { area, unitCount, kva300, devArea, singleAdj, commonAdj, densityConstant, singleRate } = transformer;
        const scale = Math.round(unitCount * kva300 * 1000) / 1000;
        const beforeCount = Math.round(scale * devArea / 1000);
        const adj = (1+(singleAdj*0.3)) * densityConstant;
        const afterCount = singleRate > singleAdj ? Math.round(beforeCount * adj) : beforeCount;
        const count = directKva300 || afterCount;
        // const count = area * scale / 1000 * adj
        const companyUnitPrice = transformer300Price?.company;
        const customerUnitPrice = transformer300Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const transformerTotalState = selector({
    key: "transformerTotalState",
    get: ({ get }) => {
        const kva75 = get(kva75State);
        const kva150 = get(kva150State);
        const kva300 = get(kva300State);
        const { scale: kva75Scale, count: kva75Count, companyPrice: kva75CompanyPrice, customerPrice: kva75CustomerPrice, price: kva75Price } = kva75;
        const { scale: kva150Scale, count: kva150Count, companyPrice: kva150CompanyPrice, customerPrice: kva150CustomerPrice, price: kva150Price } = kva150;
        const { scale: kva300Scale, count: kva300Count, companyPrice: kva300CompanyPrice, customerPrice: kva300CustomerPrice, price: kva300Price } = kva300;
        return {
            scale: Math.round((kva75Scale + kva150Scale + kva300Scale) * 1000) / 1000,
            count: kva75Count + kva150Count + kva300Count,
            companyPrice: kva75CompanyPrice + kva150CompanyPrice + kva300CompanyPrice,
            customerPrice: kva75CustomerPrice + kva150CustomerPrice + kva300CustomerPrice,
            price: kva75Price + kva150Price + kva300Price
        };
    }
});
