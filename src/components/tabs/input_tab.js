"use client"

import { useEffect, useState, useRef } from "react"
import { Card, CardBody } from "@nextui-org/react"

export default function InputTab() {
    const [inputs, setInputs] = useState({
        building_type: "resident",
        power: 0,
        area: 0
    });

    const changeInput = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    const { power, area } = inputs
    const density = area > 0 ? power / area : 0
    const [scale1, setScale1] = useState("")
    const [scale2, setScale2] = useState("")

    useEffect(() => {
        if (density != 0) {
            if (density < 0.023) {
                setScale1("하")
            } else if (density < 0.044) {
                setScale1("중")
            } else {
                setScale1("상")
            }
        }
    }, [density])

    useEffect(() => {
        if (area != 0) {
            if (area < 500000) {
                setScale2("소규모")
            } else if (area < 1000000) {
                setScale2("중규모")
            } else {
                setScale2("대규모")
            }
        }
    }, [area])

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
                                            <input type="radio" name="building_type" value="resident" onChange={changeInput} defaultChecked/>
                                            <span className="mr-2 ml-2">주택단지</span>
                                            <input type="radio" name="building_type" value="industry" onChange={changeInput} />
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
                                                onChange={changeInput}
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
                                                onChange={changeInput}
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
                                        <td className="p-4 border border-slate-400">{scale1}</td>
                                        <td className="p-4 border border-slate-400">부하밀도</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">6</td>
                                        <td className="p-4 border border-slate-400">규모선정2</td>
                                        <td className="p-4 border border-slate-400">{scale2}</td>
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