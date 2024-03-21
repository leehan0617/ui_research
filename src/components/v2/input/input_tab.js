import { useRecoilState, useRecoilValue } from "recoil";
import { Card, CardBody } from "@nextui-org/react";
import { powerState, areaState, buildingTypeState } from "@/states/atom";
import { densityState, scaleState, buildingKr, singleResidentAreaState, commonResidentAreaState, greenAreaState } from "@/states/input_selector";

export default function InputTab() {
    const power = useRecoilValue(powerState);
    const area = useRecoilValue(areaState);
    const buildingType = useRecoilValue(buildingKr);
    const density = useRecoilValue(densityState);
    const scale = useRecoilValue(scaleState);
    const greenArea = useRecoilValue(greenAreaState);
    const singleResidentArea = useRecoilValue(singleResidentAreaState);
    const commonResidentArea = useRecoilValue(commonResidentAreaState);

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
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{buildingType}</td>
                                        <td className="p-4 border border-slate-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">2</td>
                                        <td className="p-4 border border-slate-400">수요전력(비동시부하)</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{power.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">kW</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">대지면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{area.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">공원, 녹지 면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{greenArea.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">단독주택 비중</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{(Math.round(singleResidentArea / area * 100 * 100) / 100)}</td>
                                        <td className="p-4 border border-slate-400">%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">공공주택 비중</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{(Math.round(commonResidentArea / area * 100 * 100) / 100)}</td>
                                        <td className="p-4 border border-slate-400">%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">대지면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{area.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">4</td>
                                        <td className="p-4 border border-slate-400">부하밀도</td>
                                        <td className="p-4 border border-slate-400">{ density != 0 ? density.toFixed(3) : 0 }</td>
                                        <td className="p-4 border border-slate-400">kW/㎡</td>
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
