import { transformer75Price, transformer150Price, transformer300Price } from "@/constants/price";

export default function ResultTransformer({ props }) {
    const { transformer, area } = props;
    const { unitCount, kva75, kva150, kva300 } = transformer;
    const kva75Scale = Math.round(unitCount * kva75 * 1000) / 1000;
    const kva150Scale = Math.round(unitCount * kva150 * 1000) / 1000;
    const kva300Scale = Math.round(unitCount * kva300 * 1000) / 1000;
    const kva75Count = Math.round(kva75Scale * area / 1000);
    const kva150Count = Math.round(kva150Scale * area / 1000);
    const kva300Count = Math.round(kva300Scale * area / 1000);

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
                        <td className="border border-slate-600">{kva75Scale}</td>
                        <td className="border border-slate-600">{kva75Count}</td>
                        <td className="border border-slate-600">{transformer75Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{transformer75Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">{kva150Scale}</td>
                        <td className="border border-slate-600">{kva150Count}</td>
                        <td className="border border-slate-600">{transformer150Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{transformer150Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">{kva300Scale}</td>
                        <td className="border border-slate-600">{kva300Count}</td>
                        <td className="border border-slate-600">{transformer300Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{transformer300Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{(Math.round((kva75Scale + kva150Scale + kva300Scale) * 1000) / 1000).toLocaleString()}</td>
                        <td className="border border-slate-600">{Math.round(kva75Count + kva150Count + kva300Count).toLocaleString()}</td>
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
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * transformer75Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * transformer75Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * (transformer75Price?.company + transformer75Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150kVA</td>
                        <td className="border border-slate-600">
                            {Math.round(kva150Count * transformer150Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva150Count * transformer150Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva150Count * (transformer150Price?.company + transformer150Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">300kVA</td>
                        <td className="border border-slate-600">
                            {Math.round(kva300Count * transformer300Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva300Count * transformer300Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva300Count * (transformer300Price?.company + transformer300Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * transformer75Price?.company + kva150Count * transformer150Price?.company + kva300Count * transformer300Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * transformer75Price?.customer + kva150Count * transformer150Price?.customer + kva300Count * transformer300Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(kva75Count * (transformer75Price?.company + transformer75Price?.customer) + kva150Count * (transformer150Price?.company + transformer150Price?.customer) + kva300Count * (transformer300Price?.company + transformer300Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
