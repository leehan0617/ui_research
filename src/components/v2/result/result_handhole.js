import { useRecoilValue, useSetRecoilState } from "recoil";
import { hb4hb2State, hscState, handholeSumState, directHb4hb2State, directHscState } from "@/states/handhole_selector";
import { useState } from "react";

export default function ResultHandhole() {
    const hb4hb2 = useRecoilValue(hb4hb2State);
    const hsc = useRecoilValue(hscState);
    const total = useRecoilValue(handholeSumState);

    const [tempHb4hb2, setTempHb4hb2] = useState('');
    const [tempHsc, setTempHsc] = useState('');
    const setDirectHb4hb2 = useSetRecoilState(directHb4hb2State);
    const setDirectHsc = useSetRecoilState(directHscState);

    const changeHb4hb2 = (e) => {
        if (tempHb4hb2 !== '') {
            setDirectHb4hb2(Number(tempHb4hb2));
        }
    }

    const changeHsc = (e) => {
        if (tempHsc !== '') {
            setDirectHsc(Number(tempHsc));
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">핸드홀</th>
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
                        <td className="border border-slate-600">HB4 + HB2</td>
                        <td className="border border-slate-600">{hb4hb2?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={hb4hb2?.count}
                                min={0}
                                onChange={(e) => setTempHb4hb2(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeHb4hb2}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">{hsc?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={hsc?.count}
                                min={0}
                                onChange={(e) => setTempHsc(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeHsc}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(hsc?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hsc?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hsc?.price)?.toLocaleString()}</td>
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
