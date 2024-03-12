import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { jblPrice, jbsPrice } from "@/constants/price";

const lowConnectorState = selector({
    key: "lowConnectorState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { lowConnector } = currentScale
        const { unitCount, jbl, jbs } = lowConnector;
        return { area, unitCount, jbl, jbs };
    }
});

export const jblState = selector({
    key: "jblState",
    get: ({ get }) => {
        const { area, unitCount, jbl } = get(lowConnectorState);
        const scale = Math.round(unitCount * jbl * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
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
        const { area, unitCount, jbs } = get(lowConnectorState);
        const scale = Math.round(unitCount * jbs * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
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
        const { scale: jbsScale, count: jbsCount, companyPrice: jbsCompanyPrice, customerPrice: jbsCustomerPrice, price: jbsPrice } = jbl;
        return {
            scale: jblScale + jbsScale,
            count: jblCount + jbsCount,
            companyPrice: jblCompanyPrice + jbsCompanyPrice,
            customerPrice: jblCustomerPrice + jbsCustomerPrice,
            price: jblPrice + jbsPrice 
        };
    }
});
