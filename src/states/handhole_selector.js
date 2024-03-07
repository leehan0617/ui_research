import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { hb4hb2Price, hscPrice } from "@/constants/price";

const handholeState = selector({
    key: "handholeState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { handhole } = currentScale;
        const unitCount = handhole?.unitCount;
        const hb4hb2 = handhole?.hb4hb2;
        const hsc = handhole?.hsc;
        return { area, unitCount, hb4hb2, hsc }
    }
});

export const hb4hb2State = selector({
    key: "hb4hb2State",
    get: ({ get }) => {
        const handhole = get(handholeState);
        const { area, unitCount, hb4hb2 } = handhole;
        const scale = Math.round(unitCount * hb4hb2 * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = hb4hb2Price?.company;
        const customerUnitPrice = hb4hb2Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const hscState = selector({
    key: "hscState",
    get: ({ get }) => {
        const handhole = get(handholeState);
        const { area, unitCount, hsc } = handhole;
        const scale = Math.round(unitCount * hsc * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = hscPrice?.company;
        const customerUnitPrice = hscPrice?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const handholeSumState = selector({
    key: "handholeSumState",
    get: ({ get }) => {
        const hb4hb2 = get(hb4hb2State);
        const hsc = get(hscState);
        const { scale: hb4hb2Scale, count: hb4hb2Count, companyUnitPrice: hb4hb2CompanyUnitPrice, customerUnitPrice: hb4hb2CustomerUnitPrice, companyPrice: hb4hb2CompanyPrice, customerPrice: hb4hb2CustomerPrice, price: hb4hb2Price } = hb4hb2;
        const { scale: hscScale, count: hscCount, companyUnitPrice: hscCompanyUnitPrice, customerUnitPrice: hscCustomerUnitPrice, companyPrice: hscCompanyPrice, customerPrice: hscCustomerPrice, price: hscPrice } = hsc;
        return {
            scale: Math.round((hb4hb2Scale + hscScale) * 1000) / 1000,
            count: hb4hb2Count + hscCount,
            companyUnitPrice: hb4hb2CompanyUnitPrice + hscCompanyUnitPrice,
            companyPrice: hb4hb2CompanyPrice + hscCompanyPrice,
            customerUnitPrice: hb4hb2CustomerUnitPrice + hscCustomerUnitPrice,
            customerPrice: hb4hb2CustomerPrice + hscCustomerPrice,
            price: hb4hb2Price + hscPrice
        }
    }  
});
