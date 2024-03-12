import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { lowCablePrice } from "@/constants/price";

const lowCableState = selector({
    key: "lowCableState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { lowCable } = currentScale;
        const { unitCount, cable240, cable120, cable70 } = lowCable;
        return { area, unitCount, cable240, cable120, cable70 };
    }
});

export const cable240State = selector({
    key: "cable240State",
    get: ({ get }) => {
        const lowCable = get(lowCableState);
        const { area, unitCount, cable240 } = lowCable;
        const scale = Math.round(unitCount * cable240 * 1000) / 1000;
        const count = Math.round(scale * area / 1000 * 100) / 100;
        const companyPrice = lowCablePrice?.company;
        const customerPrice = lowCablePrice?.customer;
        return { scale, count, companyPrice, customerPrice };
    }
});

export const cable120State = selector({
    key: "cable120State",
    get: ({ get }) => {
        const lowCable = get(lowCableState);
        const { area, unitCount, cable120 } = lowCable;
        const scale = Math.round(unitCount * cable120 * 1000) / 1000;
        const count = Math.round(scale * area / 1000 * 100) / 100;
        return { scale, count };
    }
});

export const cable70State = selector({
    key: "cable70State",
    get: ({ get }) => {
        const lowCable = get(lowCableState);
        const { area, unitCount, cable70 } = lowCable;
        const scale = Math.round(unitCount * cable70 * 1000) / 1000;
        const count = Math.round(scale * area / 1000 * 100) / 100;
        return { scale, count };
    }
});

export const lowCableTotalState = selector({
    key: "lowCableTotalState",
    get: ({ get }) => {
        const cable240 = get(cable240State);
        const cable120 = get(cable120State);
        const cable70 = get(cable70State);
        const count = cable240?.count + cable120?.count + cable70?.count;
        const scale = cable240?.scale + cable120?.scale + cable70?.scale;
        const companyPrice = count * lowCablePrice?.company;
        const customerPrice = count * lowCablePrice?.customer;
        const price = companyPrice + customerPrice;
        return { count, scale, companyPrice, customerPrice, price };
    }
});
