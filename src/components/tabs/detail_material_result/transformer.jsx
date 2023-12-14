import { useRecoilValue } from "recoil";
import { transformerState } from "@/states/transformer_selector";

export default function DetailResultTransformer() {
    const transformer = useRecoilValue(transformerState);

    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-8">
                    <table className="text-sm text-center" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border border-slate-400">변압기</th>
                                <th colSpan={3} className="p-1 border border-slate-400">주택단지</th>
                                <th className="p-1 border border-slate-400">산업단지</th>
                            </tr>
                            <tr>
                                <th className="p-1 border border-slate-400">상</th>
                                <th className="p-1 border border-slate-400">중</th>
                                <th className="p-1 border border-slate-400">하</th>
                                <th className="p-1 border border-slate-400">평균</th>
                            </tr>
                            <tr>
                                <th className="p-1 border border-slate-400">(대/천m2)</th>
                                <th className="p-1 border border-slate-400">(대/천m2)</th>
                                <th className="p-1 border border-slate-400">(대/천m2)</th>
                                <th className="p-1 border border-slate-400">(대/천m2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className="p-1 border border-slate-400">단위수량</td>
                                {
                                    transformer.unitCounts.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td rowSpan={4} className="p-1 border border-slate-400">비중</td>
                                <td className="p-1 border border-slate-400">75kVA</td>
                                {
                                    transformer.kva75.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">150kVA</td>
                                { transformer.kva150.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>)) }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">300kVA</td>
                                { transformer.kva300.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>)) }
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border border-slate-400">계</td>
                                { transformer.kvaTotal.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>)) }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}