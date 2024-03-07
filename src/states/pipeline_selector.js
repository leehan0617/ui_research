import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { pipeline9Price, pipeline6Price, pipeline4Price, pipeline2Price } from "@/constants/price";

const pipelineState = selector({
    key: "pipelineState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { pipeline } = currentScale;
        const { unitCount, p175, p150, p100 } = pipeline;
        const { p175x9, p175x6, p175x4, p175x2 } = pipeline;
        const { p150x9, p150x6, p150x4, p150x2 } = pipeline;
        const { p100x9, p100x6, p100x4, p100x2 } = pipeline;
        return {
            area, unitCount, p175, p150, p100,
            p175x9, p175x6, p175x4, p175x2,
            p150x9, p150x6, p150x4, p150x2,
            p100x9, p100x6, p100x4, p100x2
        }
    }
});

export const p175State = selector({
    key: "p175State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { area, unitCount, p175, p175x9, p175x6, p175x4, p175x2 } = pipeline;
        const scale = Math.round(unitCount * p175 * 1000) / 1000;
        const count9 = Math.round(scale * p175x9 * area / 1000 * 100) / 100;
        const count6 = Math.round(scale * p175x6 * area / 1000 * 100) / 100;
        const count4 = Math.round(scale * p175x4 * area / 1000 * 100) / 100;
        const count2 = Math.round(scale * p175x2 * area / 1000 * 100) / 100;
        return { scale, count9, count6, count4, count2 }
    }
});

export const p150State = selector({
    key: "p150State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { area, unitCount, p150, p150x9, p150x6, p150x4, p150x2 } = pipeline;
        const scale = Math.round(unitCount * p150 * 1000) / 1000;
        const count9 = Math.round(scale * p150x9 * area / 1000 * 100) / 100;
        const count6 = Math.round(scale * p150x6 * area / 1000 * 100) / 100;
        const count4 = Math.round(scale * p150x4 * area / 1000 * 100) / 100;
        const count2 = Math.round(scale * p150x2 * area / 1000 * 100) / 100;
        return { scale, count9, count6, count4, count2 }
    }
});

export const p100State = selector({
    key: "p100State",
    get: ({ get }) => {
        const pipeline = get(pipelineState);
        const { area, unitCount, p100, p100x9, p100x6, p100x4, p100x2 } = pipeline;
        const scale = Math.round(unitCount * p100 * 1000) / 1000;
        const count9 = Math.round(scale * p100x9 * area / 1000 * 100) / 100;
        const count6 = Math.round(scale * p100x6 * area / 1000 * 100) / 100;
        const count4 = Math.round(scale * p100x4 * area / 1000 * 100) / 100;
        const count2 = Math.round(scale * p100x2 * area / 1000 * 100) / 100;
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
        const count9 = Math.round((p175?.count9 + p150?.count9 + p100?.count9) / 9 * 100 / 100);
        const count6 = Math.round((p175?.count6 + p150?.count6 + p100?.count6) / 6 * 100 / 100);
        const count4 = Math.round((p175?.count4 + p150?.count4 + p100?.count4) / 4 * 100 / 100);
        const count2 = Math.round((p175?.count2 + p150?.count2 + p100?.count2) / 2 * 100 / 100); 
        const companyPrice = p9Price?.companyPrice + p6Price?.companyPrice + p4Price?.companyPrice + p2Price?.companyPrice;
        const customerPrice = p9Price?.customerPrice + p6Price?.customerPrice + p4Price?.customerPrice + p2Price?.customerPrice;
        const price = p9Price?.price + p6Price?.price + p4Price?.price + p2Price?.price;
        return { scale, count9, count6, count4, count2, companyPrice: Math.round(companyPrice), customerPrice: Math.round(customerPrice), price: Math.round(price) }
    }
});
