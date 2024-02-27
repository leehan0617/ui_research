import { ma4Price, me6Price, ma6Price } from "@/constants/price";

export default function ResultManhole({ props }) {
    const { manhole, area } = props;
    const unitCount = manhole?.unitCount;
    const ma4 = manhole?.ma4;
    const me6 = manhole?.me6;
    const ma6 = manhole?.ma6;
    const ma4Scale = Math.round(unitCount * ma4 * 1000) / 1000;
    const me6Scale = Math.round(unitCount * me6 * 1000) / 1000;
    const ma6Scale = Math.round(unitCount * ma6 * 1000) / 1000;
    const ma4Count = Math.round(ma4Scale * area / 1000);
    const me6Count = Math.round(me6Scale * area / 1000);
    const ma6Count = Math.round(ma6Scale * area / 1000);

    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">맨홀</th>
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
                        <td className="border border-slate-600">MA4</td>
                        <td className="border border-slate-600">{ma4Scale}</td>
                        <td className="border border-slate-600">{ma4Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma4Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma4Price?.customer).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">{me6Scale}</td>
                        <td className="border border-slate-600">{me6Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{(me6Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(me6Price?.customer).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">{ma6Scale}</td>
                        <td className="border border-slate-600">{ma6Count.toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma6Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma6Price?.customer).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{Math.round((ma4Scale + me6Scale + ma6Scale) * 1000) / 1000}</td>
                        <td className="border border-slate-600">{(ma4Count + me6Count + ma6Count).toLocaleString()}</td>
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
                        <td className="border border-slate-600">{(ma4Count * ma4Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma4Count * ma4Price?.customer).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma4Count * (ma4Price?.company + ma4Price?.customer)).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">ME6</td>
                        <td className="border border-slate-600">{(me6Count * me6Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(me6Count * me6Price?.customer).toLocaleString()}</td>
                        <td className="border border-slate-600">{(me6Count * (me6Price?.company + me6Price?.customer)).toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">MA6</td>
                        <td className="border border-slate-600">{(ma6Count * ma6Price?.company).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma6Count * ma6Price?.customer).toLocaleString()}</td>
                        <td className="border border-slate-600">{(ma6Count * (ma6Price?.company + ma6Price?.customer)).toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {(ma4Count * ma4Price?.company + me6Count * me6Price?.company + ma6Count * ma6Price?.company).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {(ma4Count * ma4Price?.customer + me6Count * me6Price?.customer + ma6Count * ma6Price?.customer).toLocaleString()}
                        </td>
                        <td className="border border-slate-600">
                            {((ma4Count * (ma4Price?.company + ma4Price?.customer)) + 
                            (me6Count * (me6Price?.company + me6Price?.customer)) + 
                            (ma6Count * (ma6Price?.company + ma6Price?.customer))).toLocaleString()}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
}