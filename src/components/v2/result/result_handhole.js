import { useRecoilValue } from "recoil";
import { hb4hb2State, hscState, handholeSumState } from "@/states/handhole_selector";

export default function ResultHandhole() {
    const hb4hb2 = useRecoilValue(hb4hb2State);
    const hsc = useRecoilValue(hscState);
    const total = useRecoilValue(handholeSumState);
    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">핸드홀</th>
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
                        <td className="border border-slate-600">HB4 + HB2</td>
                        <td className="border border-slate-600">{hb4hb2?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hb4hb2?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">{hsc?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hsc?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hsc?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(hsc?.price)?.toLocaleString()}</td>
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
};
