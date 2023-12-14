import { useRecoilValue } from "recoil";
import { manholeState } from "@/states/manhole_selector";

export default function DetailResultManhole() {
    const manhole = useRecoilValue(manholeState);
    return (
        <>
            <div className="grid grid-cols-4 gap-4 mb-4">
                <div className="col-span-8">
                    <table className="text-sm text-center" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border border-slate-400">맨홀</th>
                                <th colSpan={3} className="p-1 border border-slate-400">주택단지</th>
                                <th className="p-1 border border-slate-400">산업단지</th>
                            </tr>
                            <tr>
                                <th className="p-1 border border-slate-400">대규모</th>
                                <th className="p-1 border border-slate-400">중규모</th>
                                <th className="p-1 border border-slate-400">소규모</th>
                                <th className="p-1 border border-slate-400">평균</th>
                            </tr>
                            <tr>
                                <th className="p-1 border border-slate-400">(조/천m2)</th>
                                <th className="p-1 border border-slate-400">(조/천m2)</th>
                                <th className="p-1 border border-slate-400">(조/천m2)</th>
                                <th className="p-1 border border-slate-400">(조/천m2)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className="p-1 border border-slate-400">단위수량</td>
                                {
                                    manhole.unitCounts.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td rowSpan={4} className="p-1 border border-slate-400">비중</td>
                                <td className="p-1 border border-slate-400">MA4</td>
                                {
                                    manhole.ma4.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">MA6</td>
                                {
                                    manhole.ma6.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">ME6</td>
                                {
                                    manhole.me6.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border border-slate-400">계</td>
                                {
                                    manhole.total.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}