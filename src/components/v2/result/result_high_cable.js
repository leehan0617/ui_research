import { highCable325Price, highCable400Price, highCable95Price } from "@/constants/price";

export default function ResultHighCable({ props }) {
    const { highCable, area } = props;
    const { unitCount, cable325, cable400, cable95 } = highCable;
    const cable325Scale = Math.round(unitCount * cable325 * 1000) / 1000;
    const cable400Scale = Math.round(unitCount * cable400 * 1000) / 1000;
    const cable95Scale = Math.round(unitCount * cable95 * 1000) / 1000;
    const cable325Count = Math.round(cable325Scale * area / 1000 / 3 * 10) / 10;
    const cable400Count = Math.round(cable400Scale * area / 1000 / 3 * 10) / 10;
    const cable95Count = Math.round(cable95Scale * area / 1000 / 3 * 10) / 10;

    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">고압케이블</th>
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
                        <td className="border border-slate-600">325mm</td>
                        <td className="border border-slate-600">{cable325Scale}</td>
                        <td className="border border-slate-600">{cable325Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable325Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable325Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">400mm</td>
                        <td className="border border-slate-600">{cable400Scale}</td>
                        <td className="border border-slate-600">{cable400Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable400Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable400Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">95mm</td>
                        <td className="border border-slate-600">{cable95Scale}</td>
                        <td className="border border-slate-600">{cable95Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable95Price?.company.toLocaleString()}</td>
                        <td className="border border-slate-600">{highCable95Price?.customer.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {
                                (Math.round((cable325Scale + cable400Scale + cable95Scale) * 1000) / 1000).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                (Math.round((cable325Count + cable400Count + cable95Count) * 1000) / 1000).toLocaleString()
                            }
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
                        <td className="border border-slate-600">325mm</td>
                        <td className="border border-slate-600">
                            {Math.round(cable325Count * highCable325Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable325Count * highCable325Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable325Count * (highCable325Price?.company + highCable325Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">400mm</td>
                        <td className="border border-slate-600">
                            {Math.round(cable400Count * highCable400Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable400Count * highCable400Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable400Count * (highCable400Price?.company + highCable400Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">95mm</td>
                        <td className="border border-slate-600">
                            {Math.round(cable95Count * highCable95Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable95Count * highCable95Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable95Count * (highCable95Price?.company + highCable95Price?.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {Math.round(cable325Count * highCable325Price?.company + cable400Count * highCable400Price?.company + cable95Count * highCable95Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {Math.round(cable325Count * highCable325Price?.customer + cable400Count * highCable400Price?.customer + cable95Count * highCable95Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(cable325Count * highCable325Price?.company + cable400Count * highCable400Price?.company + cable95Count * highCable95Price?.company +
                                cable325Count * highCable325Price?.customer + cable400Count * highCable400Price?.customer + cable95Count * highCable95Price?.customer).toLocaleString()
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}