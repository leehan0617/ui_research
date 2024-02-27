"use client"

import { useRecoilState, useRecoilValue } from "recoil";
import { Card, CardBody } from "@nextui-org/react";
import { powerState, areaState, buildingTypeState } from "@/states/atom";
import { densityState, scaleState } from "@/states/input_selector";

export default function InputTab() {
    const [power, setPower] = useRecoilState(powerState);
    const [area, setArea] = useRecoilState(areaState);
    const [buildingType, setBuildingType] = useRecoilState(buildingTypeState);
    const density = useRecoilValue(densityState);
    const scale = useRecoilValue(scaleState);

    const changePower = (event) => {
        setPower(event.target.value);
    };

    const changeArea = (event) => {
        setArea(event.target.value);
    };

    const changeBuildingType = (event) => {
        setBuildingType(event.target.value)
    };

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8 mt-3">
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr className="bg-sky-50">
                                        <th className="p-4 border border-slate-400">순번</th>
                                        <th className="p-4 border border-slate-400">항목</th>
                                        <th className="p-4 border border-slate-400">입력값</th>
                                        <th className="p-4 border border-slate-400">단위</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-slate-400">1</td>
                                        <td className="p-4 border border-slate-400">단지유형</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">
                                            <input type="radio" name="building_type" value="resident" checked={buildingType === "resident"} onChange={changeBuildingType} />
                                            <span className="mr-2 ml-2">주택단지</span>
                                            <input type="radio" name="building_type" value="industry" checked={buildingType === "industry"} onChange={changeBuildingType} />
                                            <span className="mr-2 ml-2">산업단지</span>
                                        </td>
                                        <td className="p-4 border border-slate-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">2</td>
                                        <td className="p-4 border border-slate-400">수요전력(비동시부하)</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">
                                            <input
                                                type="number"
                                                name="power"
                                                value={power}
                                                onChange={changePower}
                                                placeholder="수요전력을 입력해 주세요."
                                                className="text-right rounded-md border border-slate-600"
                                            />
                                        </td>
                                        <td className="p-4 border border-slate-400">kW</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">대지면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">
                                            <input
                                                type="number"
                                                name="area"
                                                value={area}
                                                onChange={changeArea}
                                                placeholder="대지면적을 입력해 주세요."
                                                className="text-right rounded-md border border-slate-600"
                                            />
                                        </td>
                                        <td className="p-4 border border-slate-400">m2</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">4</td>
                                        <td className="p-4 border border-slate-400">부하밀도</td>
                                        <td className="p-4 border border-slate-400">{ density != 0 ? density.toFixed(3) : 0 }</td>
                                        <td className="p-4 border border-slate-400">kW/m2</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">5</td>
                                        <td className="p-4 border border-slate-400">규모선정</td>
                                        <td className="p-4 border border-slate-400">규모{scale}</td>
                                        <td className="p-4 border border-slate-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-8 col-start-1 mt-3">
                            <p className="p-4 font-bold text-rose-600 bg-lime-100 border border-slate-200">
                                (조건) 개발단지내에 전체 신설의 경우에 한함(기설설비 활용시 적용불가)
                            </p>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}