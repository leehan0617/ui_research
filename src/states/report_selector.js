import { selector } from "recoil";
import { highCableSumState } from "./high_cable_selector";
import { lowCableTotalState } from "./low_cable_selector";
import { groundSwitchTotalState } from "./ground_switch_selector";
import { transformerTotalState } from "./transformer_selector";
import { pipelineSumState } from "./pipeline_selector";
import { manholeSumState } from "./manhole_selector";
import { handholeSumState } from "./handhole_selector";
import { lowConnectorTotalState } from "./low_connector_selector";

export const reportState = selector({
    key: "reportState",
    get: ({ get }) => {
        const highCable = get(highCableSumState);
        const lowCable = get(lowCableTotalState);
        const groundSwitch = get(groundSwitchTotalState);
        const transformer = get(transformerTotalState);
        const pipeline = get(pipelineSumState);
        const manhole = get(manholeSumState);
        const handhole = get(handholeSumState);
        const lowConnector = get(lowConnectorTotalState);
        const { companyPrice: highCableCompany, customerPrice: highCableCustomer, price: highCablePrice } = highCable;
        const { companyPrice: lowCableCompany, customerPrice: lowCableCustomer, price: lowCablePrice } = lowCable;
        const { companyPrice: groundSwitchCompany, customerPrice: groundSwitchCustomer, price: groundSwitchPrice } = groundSwitch;
        const { companyPrice: transformerCompany, customerPrice: transformerCustomer, price: transformerPrice } = transformer;
        const { companyPrice: pipelineCompany, customerPrice: pipelineCustomer, price: pipelinePrice } = pipeline;
        const { companyPrice: manholeCompany, customerPrice: manholeCustomer, price: manholePrice } = manhole;
        const { companyPrice: handholeCompany, customerPrice: handholeCustomer, price: handholePrice } = handhole;
        const { companyPrice: lowConnectorCompany, customerPrice: lowConnectorCustomer, price: lowConnectorPrice } = lowConnector;
        const totalCompany = highCableCompany + lowCableCompany + groundSwitchCompany + transformerCompany + pipelineCompany + manholeCompany + handholeCompany + lowConnectorCompany;
        const totalCustomer = highCableCustomer + lowCableCustomer + groundSwitchCustomer + transformerCustomer + pipelineCustomer + manholeCustomer + handholeCustomer + lowConnectorCustomer;
        const totalPrice = highCablePrice + lowCablePrice + groundSwitchPrice + transformerPrice + pipelinePrice + manholePrice + handholePrice + lowConnectorPrice
        return {
            highCableCompany, highCableCustomer, highCablePrice,
            lowCableCompany, lowCableCustomer, lowCablePrice,
            groundSwitchCompany, groundSwitchCustomer, groundSwitchPrice,
            transformerCompany, transformerCustomer, transformerPrice,
            pipelineCompany, pipelineCustomer, pipelinePrice,
            manholeCompany, manholeCustomer, manholePrice,
            handholeCompany, handholeCustomer, handholePrice,
            lowConnectorCompany, lowConnectorCustomer, lowConnectorPrice,
            totalCompany, totalCustomer, totalPrice,
        };
    }
});
