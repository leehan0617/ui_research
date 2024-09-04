import { useRecoilValue, useSetRecoilState } from "recoil";
import { cable240State, cable120State, lowCableTotalState, directCable240State, directCable120State } from "@/states/low_cable_selector";
import { useState } from "react";

export default function ResultLowCable() {
    const cable240 = useRecoilValue(cable240State);
    const cable120 = useRecoilValue(cable120State);
    const total = useRecoilValue(lowCableTotalState);

    const [tempCable240, setTempCable240] = useState("");
    const [tempCable120, setTempCable120] = useState("");
    const setDirectCable240 = useSetRecoilState(directCable240State);
    const setDirectCable120 = useSetRecoilState(directCable120State);

    const changeCable240 = e => {
        if (tempCable240 !== "") {
            setDirectCable240(Number(tempCable240));
        }
    }

    const changeCable120 = e => {
        if (tempCable120 !== "") {
            setDirectCable120(Number(tempCable120));
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">저압케이블</th>
                        <th colSpan={2} className="w-1/5 bg-green-100 border border-slate-600">공사비 단가</th>
                        <th colSpan={2} className="w-1/5 bg-blue-500 text-white border border-slate-600">설계수량</th>
                        <th colSpan={2} className="w-1/5 bg-green-100 border border-slate-600">공사비</th>
                        <th rowSpan={2} className="w-1/5 bg-blue-500 text-white border border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                        <th style={{width: 10 + '%' }} className="bg-green-100 border border-slate-600">산출수량</th>
                        <th style={{width: 10 + '%' }} className="bg-green-100 border border-slate-600">확정수량</th>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">240mm x 3</td>
                        <td rowSpan={3} className="border border-slate-600">{cable240?.companyPrice.toLocaleString()}</td>
                        <td rowSpan={3} className="border border-slate-600">{cable240?.customerPrice.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable240?.count.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={cable240?.count}
                                min={0}
                                onChange={(e) => setTempCable240(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeCable240}>적용</button>
                        </td>
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.companyPrice).toLocaleString()}</td>
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.customerPrice).toLocaleString()}</td>
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.price).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">120mm x 1</td>
                        <td className="border border-slate-600">{cable120?.count.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={cable120?.count}
                                min={0}
                                onChange={(e) => setTempCable120(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeCable120}>적용</button>
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{(Math.round(total?.count * 1000) / 1000).toLocaleString()}</td>
                        <td className="border border-slate-600">{(Math.round(total?.count * 1000) / 1000).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}