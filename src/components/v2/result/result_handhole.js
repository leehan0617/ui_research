import { useRecoilValue } from "recoil";
import { hb4hb2State, hscState, handholeSumState } from "@/states/handhole_selector";

export default function ResultHandhole() {
    const hb4hb2 = useRecoilValue(hb4hb2State);
    const hsc = useRecoilValue(hscState);
    const total = useRecoilValue(handholeSumState);
    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">핸드홀</th>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">수요전력규모</th>
                        <th rowSpan={2} className="w-2/6 bg-blue-500 text-white border border-slate-600">설계수량</th>
                        <th colSpan={2} className="w-2/6 bg-green-100 border border-slate-600">공사비 단가</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">HB4 + HB2</td>
                        <td className="border border-slate-600">{hb4hb2?.scale}</td>
                        <td className="border border-slate-600">{hb4hb2?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hb4hb2?.customerUnitPrice?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">{hsc?.scale}</td>
                        <td className="border border-slate-600">{hsc?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{hsc?.customerUnitPrice?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {total?.scale}
                        </td>
                        <td className="border border-slate-600">
                            {total?.count?.toLocaleString()}
                        </td>
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
                        <th rowSpan={2} className="w-1/4 border border-slate-600">핸드홀</th>
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
                        <td className="border border-slate-600">HB4 + HB2</td>
                        <td className="border border-slate-600">
                            {hb4hb2?.companyPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {hb4hb2?.customerPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {hb4hb2?.price?.toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">
                            {hsc?.companyPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {hsc?.customerPrice?.toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {hsc?.price?.toLocaleString()}
                        </td>
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
        </div>
    </>
};
