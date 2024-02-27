import { hb4hb2Price, hscPrice } from "@/constants/price";

export default function ResultHandhole({ props }) {
    const { handhole, area } = props;
    const unitCount = handhole?.unitCount;
    const hb4hb2 = handhole?.hb4hb2;
    const hsc = handhole?.hsc;
    const hb4hb2Scale = Math.round(unitCount * hb4hb2 * 1000) / 1000;
    const hscScale = Math.round(unitCount * hsc * 1000) / 1000;
    const hb4hb2Count = Math.round(hb4hb2Scale * area / 1000);
    const hscCount = Math.round(hscScale * area / 1000);

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
                        <td className="border border-slate-600">{hb4hb2Scale}</td>
                        <td className="border border-slate-600">{hb4hb2Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{(hb4hb2Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(hb4hb2Price?.customer).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">{hscScale}</td>
                        <td className="border border-slate-600">{hscCount.toLocaleString()}</td>
                        <td className="border border-slate-600">{(hscPrice?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(hscPrice.customer).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {Math.round((hb4hb2Scale + hscScale) * 1000) / 1000}
                        </td>
                        <td className="border border-slate-600">
                            {(hb4hb2Count + hscCount).toLocaleString()}
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
                            {(hb4hb2Count * hb4hb2Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(hb4hb2Count * hb4hb2Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(hb4hb2Count * (hb4hb2Price.company + hb4hb2Price.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">HSC</td>
                        <td className="border border-slate-600">
                            {(hscCount * hscPrice?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(hscCount * hscPrice?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(hscCount * (hscPrice.company + hscPrice.customer)).toLocaleString()}
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {(hb4hb2Count * hb4hb2Price?.company + hscCount * hscPrice?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(hb4hb2Count * hb4hb2Price?.customer + hscCount * hscPrice?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(
                                hb4hb2Count * (hb4hb2Price?.company + hb4hb2Price?.customer) +
                                hscCount * (hscPrice?.company + hscPrice?.customer)
                            ).toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
