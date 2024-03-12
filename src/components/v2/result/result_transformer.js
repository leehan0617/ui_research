import { useRecoilValue } from "recoil";
import { kva75State, kva150State, kva300State, transformerTotalState } from "@/states/transformer_selector";

export default function ResultTransformer() {
    const kva75 = useRecoilValue(kva75State);
    const kva150 = useRecoilValue(kva150State);
    const kva300 = useRecoilValue(kva300State);
    const total = useRecoilValue(transformerTotalState);

    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">변압기</th>
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
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">{kva75?.scale}</td>
                        <td className="border border-slate-600">{kva75?.count}</td>
                        <td className="border border-slate-600">{kva75?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.customerUnitPrice?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">{kva150?.scale}</td>
                        <td className="border border-slate-600">{kva150?.count}</td>
                        <td className="border border-slate-600">{kva150?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.customerUnitPrice?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">{kva300?.scale}</td>
                        <td className="border border-slate-600">{kva300?.count}</td>
                        <td className="border border-slate-600">{kva300?.companyUnitPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.customerUnitPrice?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{total?.scale}</td>
                        <td className="border border-slate-600">{total?.count}</td>
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
                        <th rowSpan={2} className="w-1/4 border border-slate-600">고압케이블</th>
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
                        <td className="border border-slate-600">75kVA</td>
                        <td className="border border-slate-600">{kva75?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva75?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">{kva150?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva150?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">{kva300?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{kva300?.price?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{total?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{total?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{total?.price?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
