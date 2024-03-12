import { useRecoilValue } from "recoil";
import { cable240State, cable120State, cable70State, lowCableTotalState } from "@/states/low_cable_selector";

export default function ResultLowCable() {
    const cable240 = useRecoilValue(cable240State);
    const cable120 = useRecoilValue(cable120State);
    const cable70 = useRecoilValue(cable70State);
    const total = useRecoilValue(lowCableTotalState);

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
                        <td className="border border-slate-600">{cable240?.scale}</td>
                        <td className="border border-slate-600">{cable240?.count}</td>
                        <td className="border border-slate-600">{cable240?.companyPrice.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable240?.customerPrice.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">120mm</td>
                        <td className="border border-slate-600">{cable120?.scale}</td>
                        <td className="border border-slate-600">{cable120?.count}</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">70mm</td>
                        <td className="border border-slate-600">{cable70?.scale}</td>
                        <td className="border border-slate-600">{cable70?.count}</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{(Math.round(total?.scale * 1000) / 1000).toLocaleString()}</td>
                        <td className="border border-slate-600">{(Math.round(total?.count * 1000) / 1000).toLocaleString()}</td>
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
                        <td className="border border-slate-600">{Math.round(total?.companyPrice).toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.customerPrice).toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.price).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{Math.round(total?.companyPrice).toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.customerPrice).toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.price).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}