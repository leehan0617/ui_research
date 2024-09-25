import { atom, selector } from "recoil";
import { areaState } from "./atom";
import { commonAdjState, densityState, devAreaState, scaleConstantState, commonRateState, singleRateState } from "./input_selector";
import { highCable325Price, highCable400Price, highCable95Price } from "@/constants/price";

const highCableState = selector({
    key: "highCableState",
    get: ({ get }) => {
        const area = get(areaState);
        const density = get(densityState);
        const devArea = get(devAreaState);
        const commonAdj = get(commonAdjState);
        const currentScale = get(scaleConstantState);
        const commonRate = get(commonRateState);
        const singleRate = get(singleRateState);
        const { highCable, densityAvg } = currentScale;
        const { cable325, cable400, cable95, unitCount } = highCable;
        const densityConstant = densityAvg > density ? 1 - (densityAvg - density) / densityAvg : 1; 
        return { densityConstant, devArea, commonAdj, area, unitCount, cable325, cable400, cable95, commonRate, singleRate };
    }
});

export const directCable95State = atom({
    key: "directCable95State",
    default: '',
});

export const directCable325State = atom({
    key: "directCable325State",
    default: "",
});

export const directCable400State = atom({
    key: "directCable400State",
    default: "",
});


export const cable95State = selector({
    key: "cable95State",
    get: ({ get }) => {
        const highCable = get(highCableState);
        const directCable95 = get(directCable95State);
        const { area, unitCount, cable95, devArea, commonAdj, densityConstant, commonRate } = highCable;
        // 수요전력규모
        const scale = Math.round(unitCount * cable95 * 1000) / 1000;
        // 설계수량
        const beforeCount = Math.round(scale * devArea / 1000 / 3 * 100 ) / 100;
        // 조정수량
        const afterCount = commonRate > commonAdj ? Math.round(beforeCount * (1-0.1*commonAdj) * densityConstant * 10) / 10 : beforeCount;
        const count = directCable95 || afterCount;
        const companyUnitPrice = highCable95Price?.company;
        const customerUnitPrice = highCable95Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const cable325State = selector({
    key: "cable325State",
    get: ({ get }) => {
        const highCable = get(highCableState);
        const directCable325 = get(directCable325State);
        const { area, unitCount, cable325, devArea, commonAdj, densityConstant, commonRate } = highCable;
        // 수요전력규모
        const scale = Math.round(unitCount * cable325 * 1000) / 1000;
        // 설계수량
        const beforeCount = Math.round(scale * devArea / 1000 / 3 * 100) / 100;
        const afterCount = commonRate > commonAdj ? Math.round(beforeCount * (1-0.1*commonAdj) * densityConstant * 10) / 10 : beforeCount;
        const count = directCable325 || afterCount;
        const companyUnitPrice = highCable325Price?.company;
        const customerUnitPrice = highCable325Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const cable400State = selector({
    key: "cable400State",
    get: ({ get }) => {
        const highCable = get(highCableState);
        const directCable400 = get(directCable400State);
        const { area, unitCount, cable400, devArea, commonAdj, densityConstant, commonRate} = highCable;
        const scale = Math.round(unitCount * cable400 * 1000) / 1000;
        const beforeCount = Math.round(scale * devArea / 1000 / 3 * 100) / 100;
        const afterCount = commonRate > commonAdj ? Math.round(beforeCount * (1-0.1*commonAdj) * densityConstant * 10) / 10 : beforeCount;
        const count = directCable400 || afterCount;
        // const count = Math.round(devArea * unitCount * cable400 * commonAdj * densityConstant / 1000 / 3 * 1000) / 1000;
        const companyUnitPrice = highCable400Price?.company;
        const customerUnitPrice = highCable400Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const highCableSumState = selector({
    key: "highCableSumState",
    get: ({ get }) => {
        const cable95 = get(cable95State);
        const cable325 = get(cable325State);
        const cable400 = get(cable400State);
        const { scale: cable95Scale, count: cable95Count, companyPrice: cable95CompanyPrice, customerPrice: cable95CustomerPrice, price: cable95Price } = cable95;
        const { scale: cable325Scale, count: cable325Count, companyPrice: cable325CompanyPrice, customerPrice: cable325CustomerPrice, price: cable325Price } = cable325;
        const { scale: cable400Scale, count: cable400Count, companyPrice: cable400CompanyPrice, customerPrice: cable400CustomerPrice, price: cable400Price } = cable400;
        return {
            scale: Math.round((cable95Scale + cable325Scale + cable400Scale) * 1000) / 1000,
            count: cable95Count + cable325Count + cable400Count,
            companyPrice: cable95CompanyPrice + cable325CompanyPrice + cable400CompanyPrice,
            customerPrice: cable95CustomerPrice + cable325CustomerPrice + cable400CustomerPrice,
            price: cable95Price + cable325Price + cable400Price
        }
    }
});
