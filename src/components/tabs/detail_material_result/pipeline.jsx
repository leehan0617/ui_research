import { useRecoilValue } from "recoil";
import { pipelineState } from "@/states/pipeline_selector";

export default function DetailResultPipeline() {
    const pipeline = useRecoilValue(pipelineState);
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-8">
                    <table className="text-sm text-center" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border border-slate-400">관로</th>
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
                                <th className="p-1 border border-slate-400">(km/천m2)</th>
                                <th className="p-1 border border-slate-400">(km/천m2)</th>
                                <th className="p-1 border border-slate-400">(km/천m2)</th>
                                <th className="p-1 border border-slate-400">(km/천m2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className="p-1 border border-slate-400">단위수량</td>
                                {
                                    pipeline.unitCounts.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td rowSpan={4} className="p-1 border border-slate-400">비중</td>
                                <td className="p-1 border border-slate-400">175mm</td>
                                {
                                    pipeline.result175.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">150mm</td>
                                {
                                    pipeline.result150.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">100mm</td>
                                {
                                    pipeline.result100.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border border-slate-400">계</td>
                                {
                                    pipeline.total.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-8 mb-4">
                    <table className="text-sm text-center" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-sky-100">
                                <th className="p-1 border border-slate-400">구분</th>
                                <th className="p-1 border border-slate-400">규모</th>
                                <th className="p-1 border border-slate-400">관공 유형</th>
                                <th className="p-1 border border-slate-400">175mm</th>
                                <th className="p-1 border border-slate-400">150mm</th>
                                <th className="p-1 border border-slate-400">100mm</th>
                                <th className="p-1 border border-slate-400">계/공</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={5} className="p-1 border border-slate-400 text-blue-400 font-bold">{pipeline.buildingType}</td>
                                <td rowSpan={5} className="p-1 border border-slate-400 font-bold">{pipeline.scale}</td>
                                <td className="p-1 border border-slate-400 text-red-400">1. 3단3열(9공)</td>
                                {
                                    pipeline.sub3x3.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400 text-red-400">2. 3단2열(6공)</td>
                                {
                                    pipeline.sub3x2.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400 text-red-400">3. 2단2열(4공)</td>
                                {
                                    pipeline.sub2x2.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400 text-blue-400">4. 2단1열(2공)</td>
                                {
                                    pipeline.sub2x1.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border border-slate-400">계</td>
                                {
                                    pipeline.subTotal.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}