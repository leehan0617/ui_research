import { useRecoilValue } from "recoil";
import { kva75State, kva150State, kva300State, transformerTotalState } from "@/states/transformer_selector";

export default function ResultTransformer() {
    const kva75 = useRecoilValue(kva75State);
    const kva150 = useRecoilValue(kva150State);
    const kva300 = useRecoilValue(kva300State);
    const total = useRecoilValue(transformerTotalState);

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/5 bg-sky-50 border border-slate-600">변압기</th>
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
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">{kva75?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">{kva150?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva150?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva150?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva150?.price)?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">{kva300?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.customerUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.count?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva300?.companyPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva300?.customerPrice)?.toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva300?.price)?.toLocaleString()}</td>
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
