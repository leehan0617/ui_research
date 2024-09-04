import { atom, selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState, densityState, devAreaState, singleAdjState, commonAdjState } from "./input_selector";
import { jblPrice, jbsPrice } from "@/constants/price";

const lowConnectorState = selector({
    key: "lowConnectorState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const density = get(densityState);
        const devArea = get(devAreaState);
        const singleAdj = get(singleAdjState);
        const commonAdj = get(commonAdjState);
        const { lowConnector, densityAvg } = currentScale;
        const { unitCount, jbl, jbs } = lowConnector;
        const densityConstant = densityAvg > density ? 1 - (densityAvg - density) / densityAvg : 1;
        return { area, unitCount, jbl, jbs, devArea, singleAdj, densityConstant, commonAdj };
    }
});

export const directJblState = atom({
    key: "directJblState",
    default: "",
});

export const directJbsState = atom({
    key: "directJbsState",
    default: "",
});

export const jblState = selector({
    key: "jblState",
    get: ({ get }) => {
        const { area, unitCount, jbl, devArea, singleAdj, densityConstant, commonAdj } = get(lowConnectorState);
        const directJbl = get(directJblState);
        const scale = Math.round(unitCount * jbl * 1000) / 1000;
        // const count = Math.round(scale * area / 1000);
        const adj = (1+(singleAdj*commonAdj)) * densityConstant;
        const count = directJbl || Math.round(devArea * scale / 1000 * adj)
        // const count = Math.round(devArea * unitCount * jbl * singleAdj * densityConstant / 1000 * 1000) / 1000;
        const companyUnitPrice = jblPrice?.company;
        const customerUnitPrice = jblPrice?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const jbsState = selector({
    key: "jbsState",
    get: ({ get }) => {
        const { area, unitCount, jbs, devArea, singleAdj, densityConstant, commonAdj } = get(lowConnectorState);
        const directJbs = get(directJbsState);
        const scale = Math.round(unitCount * jbs * 1000) / 1000;
        const adj = (1+(singleAdj*commonAdj)) * densityConstant;
        // const count = Math.round(scale * area / 1000);
        // const count = Math.round(devArea * unitCount * jbs * singleAdj * densityConstant / 1000 * 1000) / 1000;
        const count = directJbs || Math.round(devArea * scale / 1000 * adj);
        const companyUnitPrice = jbsPrice?.company;
        const customerUnitPrice = jbsPrice?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const lowConnectorTotalState = selector({
    key: "lowConnectorTotalState",
    get: ({ get }) => {
        const jbl = get(jblState);
        const jbs = get(jbsState);
        const { scale: jblScale, count: jblCount, companyPrice: jblCompanyPrice, customerPrice: jblCustomerPrice, price: jblPrice } = jbl;
        const { scale: jbsScale, count: jbsCount, companyPrice: jbsCompanyPrice, customerPrice: jbsCustomerPrice, price: jbsPrice } = jbs;
        return {
            scale: jblScale + jbsScale,
            count: jblCount + jbsCount,
            companyPrice: jblCompanyPrice + jbsCompanyPrice,
            customerPrice: jblCustomerPrice + jbsCustomerPrice,
            price: jblPrice + jbsPrice 
        };
    }
});
