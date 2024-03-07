import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { ma4Price, me6Price, ma6Price } from "@/constants/price";

const manholeState = selector({
    key: "manholeState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { manhole } = currentScale;
        const unitCount = manhole?.unitCount;
        const ma4 = manhole?.ma4;
        const me6 = manhole?.me6;
        const ma6 = manhole?.ma6;
        return { area, unitCount, ma4, me6, ma6 }
    }
});

export const ma4State = selector({
    key: "ma4State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { area, unitCount, ma4 } = manhole;
        const scale = Math.round(unitCount * ma4 * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = ma4Price?.company;
        const customerUnitPrice = ma4Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const me6State = selector({
    key: "me6State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { area, unitCount, me6 } = manhole;
        const scale = Math.round(unitCount * me6 * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = me6Price?.company;
        const customerUnitPrice = me6Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const ma6State = selector({
    key: "ma6State",
    get: ({ get }) => {
        const manhole = get(manholeState);
        const { area, unitCount, ma6 } = manhole;
        const scale = Math.round(unitCount * ma6 * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = ma6Price?.company;
        const customerUnitPrice = ma6Price?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price }
    }
});

export const manholeSumState = selector({
    key: "manholeSum",
    get: ({ get }) => {
        const ma4 = get(ma4State);
        const me6 = get(me6State);
        const ma6 = get(ma6State);
        const { scale: ma4Scale, count: ma4Count, companyUnitPrice: ma4CompanyUnitPrice, customerUnitPrice: ma4CustomerUnitPrice, companyPrice: ma4CompanyPrice, customerPrice: ma4CustomerPrice, price: ma4Price } = ma4;
        const { scale: me6Scale, count: me6Count, companyUnitPrice: me6CompanyUnitPrice, customerUnitPrice: me6CustomerUnitPrice, companyPrice: me6CompanyPrice, customerPrice: me6CustomerPrice, price: me6Price } = me6;
        const { scale: ma6Scale, count: ma6Count, companyUnitPrice: ma6CompanyUnitPrice, customerUnitPrice: ma6CustomerUnitPrice, companyPrice: ma6CompanyPrice, customerPrice: ma6CustomerPrice, price: ma6Price } = ma6;
        return {
            scale: Math.round((ma4Scale + me6Scale + ma6Scale) * 1000) / 1000,
            count: ma4Count + me6Count + ma6Count,
            companyUnitPrice: ma4CompanyUnitPrice + me6CompanyUnitPrice + ma6CompanyUnitPrice,
            companyPrice: ma4CompanyPrice + me6CompanyPrice + ma6CompanyPrice,
            customerUnitPrice: ma4CustomerUnitPrice + me6CustomerUnitPrice + ma6CustomerUnitPrice,
            customerPrice: ma4CustomerPrice + me6CustomerPrice + ma6CustomerPrice,
            price: ma4Price + me6Price + ma6Price
        }
    }
});
