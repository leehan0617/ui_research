import { atom } from "recoil";

export const powerState = atom({
    key: "powerState",
    default: 0
});

export const areaState = atom({
    key: "areaState",
    default: 0
});

export const buildingTypeState = atom({
    key: "buildingTypeState",
    default: "resident"
});
