import { lowCablePrice } from "@/constants/price";

export default function ResultLowCable({ props }) {
    const { lowCable, area } = props;
    const { unitCount, cable240, cable120, cable70 } = lowCable;
    const cable240Scale = Math.round(unitCount * cable240 * 1000) / 1000;
    const cable120Scale = Math.round(unitCount * cable120 * 1000) / 1000;
    const cable70Scale = Math.round(unitCount * cable70 * 1000) / 1000;
    const cable240Count = Math.round(cable240Scale * area / 1000 * 100) / 100;
    const cable120Count = Math.round(cable120Scale * area / 1000 * 100) / 100;
    const cable70Count = Math.round(cable70Scale * area / 1000 * 100) / 100;

    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={3} className="w-1/6 bg-sky-50 border border-slate-600">저압케이블</th>
                        <th rowSpan={3} className="w-1/6 bg-sky-50 border border-slate-600">수요전력규모</th>
                        <th rowSpan={3} className="w-2/6 bg-blue-500 text-white border border-slate-600">설계수량</th>
                        <th colSpan={2} className="w-2/6 bg-green-100 border border-slate-600">공사비 단가</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600" colSpan={2}>240mm x 3 / 120mm x 1</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">240mm</td>
                        <td className="border border-slate-600">{cable240Scale}</td>
                        <td className="border border-slate-600">{cable240Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{lowCablePrice?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{lowCablePrice?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">120mm</td>
                        <td className="border border-slate-600">{cable120Scale}</td>
                        <td className="border border-slate-600">{cable120Count.toLocaleString()}</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">70mm</td>
                        <td className="border border-slate-600">{cable70Scale}</td>
                        <td className="border border-slate-600">{cable70Count.toLocaleString()}</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{(Math.round((cable240Scale + cable120Scale + cable70Scale) * 1000) /1000).toLocaleString()}</td>
                        <td className="border border-slate-600">{(Math.round((cable240Count + cable120Count + cable70Count)* 1000) / 1000).toLocaleString()}</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-green-100">
                    <tr>
                        <th rowSpan={3} className="w-1/4 border border-slate-600">저압케이블</th>
                        <th colSpan={2} className="w-2/4 border border-slate-600">공사비</th>
                        <th rowSpan={3} className="w-1/4 border border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th colSpan={2} className="border border-slate-600"><span className="text-green-100">240mm x 3</span></th>
                    </tr>
                    <tr>
                        <th className="border border-slate-600">회사분</th>
                        <th className="border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">240mm x 3<br/>120 x 1</td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.company +
                                (cable240Count + cable120Count + cable70Count) * lowCablePrice?.customer).toLocaleString()
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round((cable240Count + cable120Count + cable70Count) * lowCablePrice?.company +
                                (cable240Count + cable120Count + cable70Count) * lowCablePrice?.customer).toLocaleString()
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}