import { selector } from "recoil";
import { areaState } from "./atom";
import { scale1State } from "./input_selector";

export const pipelineState = selector({
    key: "pipelineState",
    get: ({ get }) => {
        const area = get(areaState);
        const scale = get(scale1State);
        const unitCounts = [0.06, 0.052, 0.043, 0.069];
        const weights175 = [0.418, 0.351, 0.315, 0.453];
        const weights150 = [0.248, 0.281, 0.272, 0.325];
        const weights100 = [0.334, 0.368, 0.413, 0.222];

        const result175 = weights175.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const result150 = weights150.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const result100 = weights100.map((value, index) => {
            return index === scale ? unitCounts[index] * area / 1000 * value : "-";
        });
        const total = unitCounts.map((value, index) => {
            if (index === scale) {
                return (result175[index] + result150[index] + result100[index]).toFixed(2);
            } else {
                return "-";
            }
        })

        return {
            "unitCounts": unitCounts,
            "result175": result175.map(value => isNaN(value) ? value : value.toFixed(2)),
            "result150": result150.map(value => isNaN(value) ? value : value.toFixed(2)),
            "result100": result100.map(value => isNaN(value) ? value : value.toFixed(2)),
            "total": total
        }
    }
});
