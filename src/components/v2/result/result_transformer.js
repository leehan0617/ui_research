import { useRecoilValue, useSetRecoilState } from "recoil";
import { kva75State, kva150State, kva300State, transformerTotalState, directKva75State, directKva150State, directKva300State } from "@/states/transformer_selector";
import { useState } from "react";

export default function ResultTransformer() {
    const kva75 = useRecoilValue(kva75State);
    const kva150 = useRecoilValue(kva150State);
    const kva300 = useRecoilValue(kva300State);
    const total = useRecoilValue(transformerTotalState);

    const [tempKva75, setTempKva75] = useState("");
    const [tempKva150, setTempKva150] = useState("");
    const [tempKva300, setTempKva300] = useState("");

    const setDirectKva75 = useSetRecoilState(directKva75State);
    const setDirectKva150 = useSetRecoilState(directKva150State);
    const setDirectKva300 = useSetRecoilState(directKva300State);

    const changeKva75 = e => {
        if (tempKva75 !== "") {
            setDirectKva75(Number(tempKva75));
        }
    }

    const changeKva150 = e => {
        if (tempKva150 !== "") {
            setDirectKva150(Number(tempKva150));
        }
    }

    const changeKva300 = e => {
        if (tempKva300 !== "") {
            setDirectKva300(Number(tempKva300));
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">변압기</th>
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
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">{kva75?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={kva75?.count}
                                min={0}
                                onChange={(e) => setTempKva75(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeKva75}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(kva75?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">{kva150?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={kva150?.count}
                                min={0}
                                onChange={(e) => setTempKva150(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeKva150}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(kva150?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva150?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva150?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">{kva300?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={kva300?.count}
                                min={0}
                                onChange={(e) => setTempKva300(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeKva300}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(kva300?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva300?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva300?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">{total?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{total?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.price)?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
