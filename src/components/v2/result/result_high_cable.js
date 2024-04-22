import { useRecoilValue } from "recoil";
import { cable95State, cable325State, cable400State, highCableSumState } from "@/states/high_cable_selector";

export default function ResultHighCable() {
    const cable95 = useRecoilValue(cable95State);
    const cable325 = useRecoilValue(cable325State);
    const cable400 = useRecoilValue(cable400State);
    const total = useRecoilValue(highCableSumState);

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                    <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">고압케이블</th>
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
                        <td className="border border-slate-600">325mm</td>
                        <td className="border border-slate-600">{cable325?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable325?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable325?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable325?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable325?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable325?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">400mm</td>
                        <td className="border border-slate-600">{cable400?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable400?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable400?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable400?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable400?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable400?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">95mm</td>
                        <td className="border border-slate-600">{cable95?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable95?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{cable95?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable95?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable95?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(cable95?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600">{total?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(total?.price)?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}