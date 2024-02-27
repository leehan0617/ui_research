import { jblPrice, jbsPrice } from "@/constants/price";
export default function ResultLowConnector({ props }) {
    const { lowConnector, area } = props;
    const { unitCount, jbl } = lowConnector;
    const jblScale = Math.round(unitCount * jbl * 1000) / 1000;
    const jblCount = Math.round(jblScale * area / 1000);
    
    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">저압접속함</th>
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
                        <td className="border border-slate-600">JBL</td>
                        <td className="border border-slate-600">{jblScale}</td>
                        <td className="border border-slate-600">{jblCount.toLocaleString()}</td>
                        <td className="border border-slate-600">{jblPrice?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{jblPrice?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">JBS</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">0</td>
                        <td className="border border-slate-600">{jbsPrice?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{jbsPrice?.customer.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{jblScale}</td>
                        <td className="border border-slate-600">{jblCount.toLocaleString()}</td>
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
                        <th rowSpan={2} className="w-1/4 border border-slate-600">저압접속함</th>
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
                        <td className="border border-slate-600">JBL</td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * jblPrice?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * jblPrice?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * (jblPrice?.company + jblPrice?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">JBS</td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                        <td className="border border-slate-600"></td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * jblPrice?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * jblPrice?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(jblCount * (jblPrice?.company + jblPrice?.customer)).toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
