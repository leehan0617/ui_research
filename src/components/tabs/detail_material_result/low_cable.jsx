import { useRecoilValue } from "recoil";
import { cv240State, cv120State, totalState } from "@/states/low_cable_selector";
import { pipelineState } from "@/states/pipeline_selector";

export default function DetailResultLowCable() {
    const cv240 = useRecoilValue(cv240State);
    const cv120 = useRecoilValue(cv120State);
    const total = useRecoilValue(totalState);
    const pipeline = useRecoilValue(pipelineState);
    const { sub2x1 } = pipeline;
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-8">
                    <table className="text-sm text-center border-collapse" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border-collapse border border-slate-400">저압케이블</th>
                                <th colSpan={3} className="p-1 border-collapse border border-slate-400">주택단지</th>
                                <th className="p-1 border-collapse border border-slate-400">산업단지</th>
                            </tr>
                            <tr>
                                <th className="p-1 border-collapse border border-slate-400">상</th>
                                <th className="p-1 border-collapse border border-slate-400">중</th>
                                <th className="p-1 border-collapse border border-slate-400">하</th>
                                <th className="p-1 border-collapse border border-slate-400">평균</th>
                            </tr>
                            <tr>
                                <th className="p-1 border-collapse border border-slate-400">(C-km/천m2)</th>
                                <th className="p-1 border-collapse border border-slate-400">(C-km/천m2)</th>
                                <th className="p-1 border-collapse border border-slate-400">(C-km/천m2)</th>
                                <th className="p-1 border-collapse border border-slate-400">(C-km/천m2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className="p-1 border border-slate-400">단위수량</td>
                                <td className="p-1 border border-slate-400">{ sub2x1[3] }</td>
                                <td className="p-1 border border-slate-400">{ sub2x1[3] }</td>
                                <td className="p-1 border border-slate-400">{ sub2x1[3] }</td>
                                <td className="p-1 border border-slate-400">{ sub2x1[3] }</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} className="p-1 border border-slate-400">비중</td>
                                <td className="p-1 border border-slate-400">CV 240mm x 3,<br/>120mm x 1</td>
                                <td className="p-1 border border-slate-400">{ cv240.scale === 0 ? cv240.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv240.scale === 1 ? cv240.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv240.scale === 2 ? cv240.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv240.scale === 3 ? cv240.result : "-" }</td>
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">CV 120mm x 3,<br/>75mm x 1</td>
                                <td className="p-1 border border-slate-400">{ cv120.scale === 0 ? cv120.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv120.scale === 1 ? cv120.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv120.scale === 2 ? cv120.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ cv120.scale === 3 ? cv120.result : "-" }</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border border-slate-400">계</td>
                                <td className="p-1 border border-slate-400">{ total.scale === 0 ? total.sum : "-" }</td>
                                <td className="p-1 border border-slate-400">{ total.scale === 1 ? total.sum : "-" }</td>
                                <td className="p-1 border border-slate-400">{ total.scale === 2 ? total.sum : "-" }</td>
                                <td className="p-1 border border-slate-400">{ total.scale === 3 ? total.sum : "-" }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}