import { useRecoilValue } from "recoil";
import { powerState, areaState } from "@/states/atom";
import { buildingKr } from "@/states/input_selector";
import { densityState, scaleState } from "@/states/input_selector";
import { scaleConstantState } from "@/states/input_selector";
import { Card, CardBody } from "@nextui-org/react";
import InputViewer from "./input_viewer";
import ResultManhole from "./result_manhole";
import ResultHandhole from "./result_handhole";
import ResultPipeline from "./result_pipeline";
import ResultHighCable from "./result_high_cable";
import ResultLowCable from "./result_low_cable";
import ResultLowConnector from "./result_low_connector";
import ResultGroundSwitch from "./result_ground_switch";
import ResultTransformer from "./result_transformer";

// 개략공사비 산출 탭
export default function ResultTab() {
    const power = useRecoilValue(powerState);
    const area = useRecoilValue(areaState);
    const buildingType = useRecoilValue(buildingKr);
    const density = useRecoilValue(densityState);
    const scale = useRecoilValue(scaleState);
    const currentScaleValue = useRecoilValue(scaleConstantState);
    const { handhole, pipeline, highCable, lowCable, lowConnector, groundSwitch, transformer } = currentScaleValue;

    return <>
        <Card className="border-none">
            <CardBody>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 mt-3">
                        <InputViewer props={{ power, area, buildingType, density, scale }} />
                    </div>
                    <ResultManhole />
                    <ResultHandhole props={{ handhole, area }}/>
                    <ResultPipeline props={{ pipeline, area }}/>
                    <ResultHighCable props={{ highCable, area }}/>
                    <ResultLowCable props={{ lowCable, area }} />
                    <ResultLowConnector props={{ lowConnector, area }} />
                    <ResultGroundSwitch props={{ groundSwitch, area }} />
                    <ResultTransformer props={{ transformer, area }} />
                </div>
            </CardBody>
        </Card>
    </>
};
