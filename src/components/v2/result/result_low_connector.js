import { useRecoilValue, useSetRecoilState } from "recoil";
import { directJblState, directJbsState, jblState, jbsState, lowConnectorTotalState } from "@/states/low_connector_selector";
import { useState } from "react";

export default function ResultLowConnector() {
    const jbl = useRecoilValue(jblState);
    const jbs = useRecoilValue(jbsState);
    const total = useRecoilValue(lowConnectorTotalState);

    const [tempJbl, setTempJbl] = useState("");
    const [tempJbs, setTempJbs] = useState("");
    const setDirectJbl = useSetRecoilState(directJblState);
    const setDirectJbs = useSetRecoilState(directJbsState);

    const changeJbl = e => {
        if (tempJbl !== "") {
            setDirectJbl(Number(tempJbl));
        }
    };

    const changeJbs = e => {
        if (tempJbs !== "") {
            setDirectJbs(Number(tempJbs));
        }
    };

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">저압접속함</th>
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
                        <td className="border border-slate-600">JBL</td>
                        <td className="border border-slate-600">{jbl?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{jbl?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{jbl?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={jbl?.count}
                                min={0}
                                onChange={(e) => setTempJbl(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeJbl}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(jbl?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(jbl?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(jbl?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">JBS</td>
                        <td className="border border-slate-600">{jbs?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{jbs?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{jbs?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={jbs?.count}
                                min={0}
                                onChange={(e) => setTempJbs(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeJbs}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(jbs?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(jbs?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(jbs?.price)?.toLocaleString()}</td>
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
