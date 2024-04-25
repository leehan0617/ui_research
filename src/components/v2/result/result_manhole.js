import { useRecoilValue } from "recoil";
import { ma4State, ma6State, me6State, manholeSumState } from "@/states/manhole_selector";

export default function ResultManhole() {
    const ma4 = useRecoilValue(ma4State);
    const ma6 = useRecoilValue(ma6State);
    const me6 = useRecoilValue(me6State);
    const total = useRecoilValue(manholeSumState);

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">맨홀</th>
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
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">{ma4?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma4?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma4?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma4?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma4?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">{me6?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{me6?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(me6?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(me6?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(me6?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">{ma6?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{ma6?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma6?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma6?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(ma6?.price)?.toLocaleString()}</td>
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