"use client"

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Card, CardBody } from "@nextui-org/react";
import { powerState, areaState, buildingTypeState } from "@/states/atom";
import { densityState, scale1State, scale2State } from "@/states/input_selector";

export default function InputTab() {
    const [power, setPower] = useRecoilState(powerState);
    const [area, setArea] = useRecoilState(areaState);
    const [buildingType, setBuildingType] = useRecoilState(buildingTypeState);
    const density = useRecoilValue(densityState);
    const scale1 = useRecoilValue(scale1State);
    const scale2 = useRecoilValue(scale2State);
    const [scale1Letter, setScale1Letter] = useState("");
    const [scale2Letter, setScale2Letter] = useState("");

    const changePower = (event) => {
        setPower(event.target.value);
    };

    const changeArea = (event) => {
        setArea(event.target.value);
    };

    const changeBuildingType = (event) => {
        setBuildingType(event.target.value)
    };

    useEffect(() => {
        if (scale1 === 0) {
            setScale1Letter("상");
        } else if (scale1 === 1) {
            setScale1Letter("중");
        } else if (scale1 === 2) {
            setScale1Letter("하");
        } else {
            setScale1Letter("");
        }
    }, [scale1]);

    useEffect(() => {
        if (scale2 === 0) {
            setScale2Letter("대규모");
        } else if (scale2 === 1) {
            setScale2Letter("중규모");
        } else if (scale2 === 2) {
            setScale2Letter("소규모");
        } else {
            setScale2Letter("");
        }
    }, [scale2])
    
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
                                        <td className="p-4 border border-slate-400">규모선정1</td>
                                        <td className="p-4 border border-slate-400">{scale1Letter}</td>
                                        <td className="p-4 border border-slate-400">부하밀도</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">6</td>
                                        <td className="p-4 border border-slate-400">규모선정2</td>
                                        <td className="p-4 border border-slate-400">{scale2Letter}</td>
                                        <td className="p-4 border border-slate-400">대지면적</td>
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