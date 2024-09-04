import { useRecoilValue, useSetRecoilState } from "recoil";
import { powerState, areaState } from "@/states/atom";
import { buildingKr } from "@/states/input_selector";
import { densityState, scaleState } from "@/states/input_selector";
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
import { directMa4State, directMa6State, directMe6State } from "@/states/manhole_selector";
import { directHb4hb2State, directHscState } from "@/states/handhole_selector";
import { directCable325State, directCable400State, directCable95State } from "@/states/high_cable_selector";
import { directCable120State, directCable240State } from "@/states/low_cable_selector";
import { directJblState, directJbsState } from "@/states/low_connector_selector";
import { directGroundSwitchState } from "@/states/ground_switch_selector";
import { directKva150State, directKva300State, directKva75State } from "@/states/transformer_selector";
import { direct100x2State, direct100x4State, direct100x6State, direct100x9State, direct150x2State, direct150x4State, direct150x6State, direct150x9State, direct175x2State, direct175x4State, direct175x6State, direct175x9State } from "@/states/pipeline_selector";

// 개략공사비 산출 탭
export default function ResultTab() {
    const power = useRecoilValue(powerState);
    const area = useRecoilValue(areaState);
    const buildingType = useRecoilValue(buildingKr);
    const density = useRecoilValue(densityState);
    const scale = useRecoilValue(scaleState);

    // 입력(면적,부하)정보가 바뀌면 확정수량 초기화
    const setDirectMa4 = useSetRecoilState(directMa4State);
    const setDirectMe6 = useSetRecoilState(directMe6State);
    const setDirectMa6 = useSetRecoilState(directMa6State);
    const setDirectHb4hb2 = useSetRecoilState(directHb4hb2State);
    const setDirectHsc = useSetRecoilState(directHscState);
    const setDirectCable95 = useSetRecoilState(directCable95State);
    const setDirectCable325 = useSetRecoilState(directCable325State);
    const setDirectCable400 = useSetRecoilState(directCable400State);
    const setDirectCable240 = useSetRecoilState(directCable240State);
    const setDirectCable120 = useSetRecoilState(directCable120State);
    const setDirectJbl = useSetRecoilState(directJblState);
    const setDirectJbs = useSetRecoilState(directJbsState);
    const setDirectGroundSwitch = useSetRecoilState(directGroundSwitchState);
    const setDirectKva75 = useSetRecoilState(directKva75State);
    const setDirectKva150 = useSetRecoilState(directKva150State);
    const setDirectKva300 = useSetRecoilState(directKva300State);
    const setDirect175x9 = useSetRecoilState(direct175x9State);
    const setDirect175x6 = useSetRecoilState(direct175x6State);
    const setDirect175x4 = useSetRecoilState(direct175x4State);
    const setDirect175x2 = useSetRecoilState(direct175x2State);
    const setDirect150x9 = useSetRecoilState(direct150x9State);
    const setDirect150x6 = useSetRecoilState(direct150x6State);
    const setDirect150x4 = useSetRecoilState(direct150x4State);
    const setDirect150x2 = useSetRecoilState(direct150x2State);
    const setDirect100x9 = useSetRecoilState(direct100x9State);
    const setDirect100x6 = useSetRecoilState(direct100x6State);
    const setDirect100x4 = useSetRecoilState(direct100x4State);
    const setDirect100x2 = useSetRecoilState(direct100x2State);

    const resetCount = e => {
        setDirectMa4('');
        setDirectMe6('');
        setDirectMa6('');
        setDirectHb4hb2('');
        setDirectHsc('');
        setDirectCable95('');
        setDirectCable325('');
        setDirectCable400('');
        setDirectCable240('');
        setDirectCable120('');
        setDirectJbl('');
        setDirectJbs('');
        setDirectGroundSwitch('');
        setDirectKva75('');
        setDirectKva150('');
        setDirectKva300('');
        setDirect175x9('');
        setDirect175x6('');
        setDirect175x4('');
        setDirect175x2('');
        setDirect150x9('');
        setDirect150x6('');
        setDirect150x4('');
        setDirect150x2('');
        setDirect100x9('');
        setDirect100x6('');
        setDirect100x4('');
        setDirect100x2('');
    }

    return <>
        <Card className="border-none">
            <CardBody>
                <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-10 mt-3">
                        <InputViewer props={{ power, area, buildingType, density, scale }} />
                    </div>
                    <div className="col-span-2 mt-3 bg-rose-600 text-slate-100 align-middle text-center cursor-pointer hover:bg-cyan-600 rounded-lg" onClick={resetCount}>
                        <div className="mt-4">
                            <b>확정수량 초기화</b>
                        </div>
                    </div>
                    <ResultManhole />
                    <ResultHandhole />
                    <ResultHighCable />
                    <ResultLowCable />
                    <ResultLowConnector />
                    <ResultGroundSwitch />
                    <ResultTransformer />
                    <ResultPipeline />
                </div>
            </CardBody>
        </Card>
    </>
};
