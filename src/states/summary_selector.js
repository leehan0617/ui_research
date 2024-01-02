import { selector } from "recoil";
import { groundTotalState } from "./ground_machine_selector";
import { highCableTotalState } from "./high_cable_selector";
import { totalState } from "./low_cable_selector";
import { highPipelineTotalState, lowPipelineTotalState } from "./pipeline_selector";
import { highStructureTotalState, lowStructureTotalState } from "./structure_selector";
import { transformerTotalState } from "./transformer_selector";

export const reportSummaryState = selector({
    key: "reporySummaryState",
    get: ({ get }) => {
        const highCable = get(highCableTotalState);
        const lowCable = get(totalState);
        const groundMachine = get(groundTotalState);
        const transformer = get(transformerTotalState);
        const highPipeline = get(highPipelineTotalState);
        const lowPipeline = get(lowPipelineTotalState);
        const highStructure = get(highStructureTotalState);
        const lowStructure = get(lowStructureTotalState);

        return {
            "companySum": (highCable.companySum + lowCable.companySum + groundMachine.companySum + transformer.companySum + highPipeline.companySum + lowPipeline.companySum + highStructure.companySum + lowStructure.companySum) || 0,
            "contractSum": (highCable.contractSum + lowCable.contractSum + groundMachine.contractSum + transformer.contractSum + highPipeline.contractSum + lowPipeline.contractSum + highStructure.contractSum + lowStructure.contractSum) || 0,
            "totalSum": (highCable.totalSum + lowCable.totalSum + groundMachine.totalSum + transformer.totalSum + highPipeline.totalSum + lowPipeline.totalSum + highStructure.totalSum + lowStructure.totalSum) || 0
        }
    }
});
