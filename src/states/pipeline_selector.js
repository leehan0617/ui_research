import { atom, selector } from "recoil";
import { areaState } from "./atom";
import { commonAdjState, densityState, devAreaState, scaleConstantState, singleAdjState } from "./input_selector";
import { pipeline9Price, pipeline6Price, pipeline4Price, pipeline2Price } from "@/constants/price";

const pipelineState = selector({
    key: "pipelineState",
    get: ({ get }) => {
        const area = get(areaState);
        const density = get(densityState);
        const devArea = get(devAreaState);
        const commonAdj = get(commonAdjState);
        const currentScale = get(scaleConstantState);
        const singleAdj = get(singleAdjState);
        const { pipeline, densityAvg } = currentScale;
        const { unitCount, p175, p150, p100 } = pipeline;
        const { p175x9, p175x6, p175x4, p175x2 } = pipeline;
        const { p150x9, p150x6, p150x4, p150x2 } = pipeline;
        const { p100x9, p100x6, p100x4, p100x2 } = pipeline;
        let densityConstant = densityAvg > density ? Math.round((1 - (densityAvg - density) / densityAvg) * 10) / 10 : 1; 
        return {
            area, unitCount, p175, p150, p100,
            p175x9, p175x6, p175x4, p175x2,
            p150x9, p150x6, p150x4, p150x2,
            p100x9, p100x6, p100x4, p100x2,
            devArea, commonAdj, singleAdj,
            densityConstant: Math.round(densityConstant * (1-0.1*commonAdj) * 100) / 100,
            lowDensityConstant: densityConstant
        }
    }
});

export const direct175x9State = atom({
    key: "direct175x9State",
    default: "",
});

export const direct175x6State = atom({
    key: "direct175x6State",
    default: "",
});

export const direct175x4State = atom({
    key: "direct175x4State",
    default: "",
});

export const direct175x2State = atom({
    key: "direct175x2State",
    default: "",
});

export const direct150x9State = atom({
    key: "direct150x9State",
    default: "",
});

export const direct150x6State = atom({
    key: "direct150x6State",
    default: "",
});

export const direct150x4State = atom({
    key: "direct150x4State",
    default: "",
});

export const direct150x2State = atom({
    key: "direct150x2State",
    default: "",
});

export const direct100x9State = atom({
    key: "direct100x9State",
    default: "",
});

export const direct100x6State = atom({
    key: "direct100x6State",
    default: "",
});

export const direct100x4State = atom({
    key: "direct100x4State",
    default: "",
});

export const direct100x2State = atom({
    key: "direct100x2State",
    default: "",
});

export const p175State = selector({
    key: "p175State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const direct175x9 = get(direct175x9State);
        const direct175x6 = get(direct175x6State);
        const direct175x4 = get(direct175x4State);
        const direct175x2 = get(direct175x2State);
        const { area, unitCount, p175, p175x9, p175x6, p175x4, p175x2, devArea, commonAdj, densityConstant } = pipeline;
        // const scale = Math.round(unitCount * p175 * 1000) / 1000;
        const scale = Math.round(unitCount * p175 * densityConstant * 1000) / 1000;
        const count9 = direct175x9 || Math.round(scale * p175x9 * devArea / 1000 * 100) / 100;
        const count6 = direct175x6 || Math.round(scale * p175x6 * devArea / 1000 * 100) / 100;
        const count4 = direct175x4 || Math.round(scale * p175x4 * devArea / 1000 * 100) / 100;
        const count2 = direct175x2 || 0;
        return { scale, count9, count6, count4, count2 }
    }
});

export const p150State = selector({
    key: "p150State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const direct150x9 = get(direct150x9State);
        const direct150x6 = get(direct150x6State);
        const direct150x4 = get(direct150x4State);
        const direct150x2 = get(direct150x2State);
        const { area, unitCount, p150, p150x9, p150x6, p150x4, p150x2, devArea, commonAdj, densityConstant } = pipeline;
        const scale = Math.round(unitCount * p150 * densityConstant * 1000) / 1000;
        const count9 = direct150x9 || Math.round(scale * p150x9 * devArea / 1000 * 100) / 100;
        const count6 = direct150x6 ||Math.round(scale * p150x6 * devArea / 1000 * 100) / 100;
        const count4 = direct150x4 ||Math.round(scale * p150x4 * devArea / 1000 * 100) / 100;
        const count2 = direct150x2 ||0
        return { scale, count9, count6, count4, count2 }
    }
});

export const p100State = selector({
    key: "p100State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const direct100x9 = get(direct100x9State);
        const direct100x6 = get(direct100x6State);
        const direct100x4 = get(direct100x4State);
        const direct100x2 = get(direct100x2State);
        const { area, unitCount, p100, p100x9, p100x6, p100x4, p100x2, devArea, commonAdj, densityConstant, singleAdj } = pipeline;
        const scale = Math.round(unitCount * p100 * densityConstant * 1000) / 1000;
        const count9 = direct100x9 || Math.round(scale * p100x9 * devArea / 1000 * 100) / 100;
        const count6 = direct100x6 ||Math.round(scale * p100x6 * devArea / 1000 * 100) / 100;
        const count4 = direct100x4 ||Math.round(scale * p100x4 * devArea / 1000 * 100) / 100;
        let count2 = Math.round(p100 * unitCount * p100x2 * devArea / 1000 * 10) / 10;
        count2 = Math.round(count2 * (1+singleAdj*0.3) * densityConstant * 10) / 10;
        count2 = direct100x2 || count2;
        return { scale, count9, count6, count4, count2 } 
    }
});

export const p9PriceState = selector({
    key: "p9Price",
    get: ({ get }) => {
        const p175 = get(p175State);
        const p150 = get(p150State);
        const p100 = get(p100State);
        const companyPrice = (p175?.count9 + p150?.count9 + p100?.count9) / 9 * pipeline9Price?.company;
        const customerPrice = (p175?.count9 + p150?.count9 + p100?.count9) / 9 * pipeline9Price?.customer;
        const price = companyPrice + customerPrice;
        return {
            companyPrice: Math.round(companyPrice),
            customerPrice: Math.round(customerPrice),
            price: Math.round(price)
        }
    }
});

export const p6PriceState = selector({
    key: "p6Price",
    get: ({ get }) => {
        const p175 = get(p175State);
        const p150 = get(p150State);
        const p100 = get(p100State);
        const companyPrice = (p175?.count6 + p150?.count6 + p100?.count6) / 6 * pipeline6Price?.company;
        const customerPrice = (p175?.count6 + p150?.count6 + p100?.count6) / 6 * pipeline6Price?.customer;
        const price = companyPrice + customerPrice;
        return {
            companyPrice: Math.round(companyPrice),
            customerPrice: Math.round(customerPrice),
            price: Math.round(price)
        }
    }
});

export const p4PriceState = selector({
    key: "p4Price",
    get: ({ get }) => {
        const p175 = get(p175State);
        const p150 = get(p150State);
        const p100 = get(p100State);
        const companyPrice = (p175?.count4 + p150?.count4 + p100?.count4) / 4 * pipeline4Price?.company;
        const customerPrice = (p175?.count4 + p150?.count4 + p100?.count4) / 4 * pipeline4Price?.customer;
        const price = companyPrice + customerPrice;
        return {
            companyPrice: Math.round(companyPrice),
            customerPrice: Math.round(customerPrice),
            price: Math.round(price)
        }
    }
});

export const p2PriceState = selector({
    key: "p2Price",
    get: ({ get }) => {
        const p175 = get(p175State);
        const p150 = get(p150State);
        const p100 = get(p100State);
        const companyPrice = (p175?.count2 + p150?.count2 + p100?.count2) / 2 * pipeline2Price?.company;
        const customerPrice = (p175?.count2 + p150?.count2 + p100?.count2) / 2 * pipeline2Price?.customer;
        const price = companyPrice + customerPrice;
        return {
            companyPrice: Math.round(companyPrice),
            customerPrice: Math.round(customerPrice),
            price: Math.round(price)
        }
    }
});

export const pipelineSumState = selector({
    key: "pipelineSumState",
    get: ({ get }) => {
        const p175 = get(p175State);
        const p150 = get(p150State);
        const p100 = get(p100State);
        const p9Price = get(p9PriceState);
        const p6Price = get(p6PriceState);
        const p4Price = get(p4PriceState);
        const p2Price = get(p2PriceState);
        const scale = Math.round((p175?.scale + p150?.scale + p100?.scale) * 1000) / 1000;
        const count9 = Math.round((p175?.count9 + p150?.count9 + p100?.count9) / 9 * 100) / 100;
        const count6 = Math.round((p175?.count6 + p150?.count6 + p100?.count6) / 6 * 100) / 100;
        const count4 = Math.round((p175?.count4 + p150?.count4 + p100?.count4) / 4 * 100) / 100;
        const count2 = Math.round((p175?.count2 + p150?.count2 + p100?.count2) / 2 * 10) / 10; 
        const companyPrice = p9Price?.companyPrice + p6Price?.companyPrice + p4Price?.companyPrice + p2Price?.companyPrice;
        const customerPrice = p9Price?.customerPrice + p6Price?.customerPrice + p4Price?.customerPrice + p2Price?.customerPrice;
        const price = p9Price?.price + p6Price?.price + p4Price?.price + p2Price?.price;
        return { scale, count9, count6, count4, count2, companyPrice: Math.round(companyPrice), customerPrice: Math.round(customerPrice), price: Math.round(price) }
    }
});
