import { useRecoilValue } from "recoil";
import { cable240State, cable120State, cable70State, lowCableTotalState } from "@/states/low_cable_selector";

export default function ResultLowCable() {
    const cable240 = useRecoilValue(cable240State);
    const cable120 = useRecoilValue(cable120State);
    const cable70 = useRecoilValue(cable70State);
    const total = useRecoilValue(lowCableTotalState);

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">저압케이블</th>
                        <th colSpan={2} className="w-1/5 bg-green-100 border border-slate-600">공사비 단가</th>
                        <th rowSpan={2} className="w-1/5 bg-blue-500 text-white border border-slate-600">설계수량</th>
                        <th colSpan={2} className="w-1/5 bg-green-100 border border-slate-600">공사비</th>
                        <th rowSpan={2} className="w-1/5 bg-blue-500 text-white border border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
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
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.companyPrice).toLocaleString()}</td>
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.customerPrice).toLocaleString()}</td>
                        <td rowSpan={3} className="border border-slate-600">{Math.round(total?.price).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">120mm x 1</td>
                        <td className="border border-slate-600">{cable120?.count.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{(Math.round(total?.count * 1000) / 1000).toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}