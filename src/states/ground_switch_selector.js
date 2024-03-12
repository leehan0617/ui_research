import { selector } from "recoil";
import { areaState } from "./atom";
import { scaleConstantState } from "./input_selector";
import { groundSwitchPrice } from "@/constants/price";

export const groundSwitchState = selector({
    key: "groundSwitchState",
    get: ({ get }) => {
        const area = get(areaState);
        const currentScale = get(scaleConstantState);
        const { groundSwitch } = currentScale;
        const { unitCount } = groundSwitch;
        const scale = Math.round(unitCount * 1000) / 1000;
        const count = Math.round(scale * area / 1000);
        const companyUnitPrice = groundSwitchPrice?.company;
        const customerUnitPrice = groundSwitchPrice?.customer;
        const companyPrice = count * companyUnitPrice;
        const customerPrice = count * customerUnitPrice;
        const price = companyPrice + customerPrice;
        return { unitCount, scale, count, companyUnitPrice, customerUnitPrice, companyPrice, customerPrice, price };
    }
});

export const groundSwitchTotalState = selector({ 
    key: "groundSwitchTotalState",
    get: ({ get }) => {
        const groundSwitch = get(groundSwitchState);
        const { scale, unitCount, count, companyPrice, customerPrice, price } = groundSwitch;
        return { scale, unitCount, count, companyPrice, customerPrice, price };
    }
});
