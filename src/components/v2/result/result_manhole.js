import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { ma4State, ma6State, me6State, manholeSumState, directMa4State, directMe6State, directMa6State } from "@/states/manhole_selector";
import { useEffect, useState } from "react";

export default function ResultManhole() {
    const ma4 = useRecoilValue(ma4State);
    const ma6 = useRecoilValue(ma6State);
    const me6 = useRecoilValue(me6State);
    const total = useRecoilValue(manholeSumState);
    const [tempMa4, setTempMa4] = useState('');
    const [tempMe6, setTempMe6] = useState('');
    const [tempMa6, setTempMa6] = useState('');
    const setDirectMa4 = useSetRecoilState(directMa4State);
    const setDirectMe6 = useSetRecoilState(directMe6State);
    const setDirectMa6 = useSetRecoilState(directMa6State);

    const changeMa4 = (e) => {
        if (tempMa4 !== '') {
            setDirectMa4(tempMa4);
        }
    }

    const changeMe6 = (e) => {
        if (tempMe6 !== '') {
            setDirectMe6(tempMe6);
        }
    }

    const changeMa6 = (e) => {
        if (tempMa6 !== '') {
            setDirectMa6(tempMa6);
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">맨홀</th>
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
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">{ma4?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={ma4?.count} 
                                onChange={(e) => setTempMa4(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeMa4}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(ma4?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma4?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma4?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">{me6?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={me6?.count} 
                                onChange={(e) => setTempMe6(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeMe6}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(me6?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(me6?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(me6?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">{ma6?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={ma6?.count} 
                                onChange={(e) => setTempMa6(e.target.value) }/>
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={changeMa6}>적용</button>
                        </td>
                        <td className="border border-slate-600">{Math.round(ma6?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma6?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma6?.price)?.toLocaleString()}</td>
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
        {/* <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-green-100">
                    <tr>
                        <th rowSpan={2} className="w-1/4 border border-slate-600">맨홀</th>
                        <th colSpan={2} className="w-2/4 border border-slate-600">공사비</th>
                        <th rowSpan={2} className="w-1/4 border border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th className="border border-slate-600">회사분</th>
                        <th className="border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">{ma4?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">{me6?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">{ma6?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.price?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {total?.companyPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {total?.customerPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {total?.price?.toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div> */}
    </>
}