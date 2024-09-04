import { useRecoilValue, useSetRecoilState } from "recoil";
import { directGroundSwitchState, groundSwitchState } from "@/states/ground_switch_selector";
import { useState } from "react";

export default function ResultGroundSwitch() {
    const groundSwitch = useRecoilValue(groundSwitchState);

    const [tempGroundSwitch, setTempGroundSwitch] = useState("");
    const setDirectGroundSwitch = useSetRecoilState(directGroundSwitchState);

    const changeGroundSwitch = e => {
        if (tempGroundSwitch !== "") {
            setDirectGroundSwitch(Number(tempGroundSwitch));
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">개폐기</th>
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
                        <td className="border border-slate-600">개폐기</td>
                        <td className="border border-slate-600">{groundSwitch?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{groundSwitch?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{groundSwitch?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={groundSwitch?.count}
                                min={0}
                                onChange={(e) => setTempGroundSwitch(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeGroundSwitch}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">{groundSwitch?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{groundSwitch?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(groundSwitch?.price)?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}