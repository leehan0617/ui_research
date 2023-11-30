import { HIGHCABLEUNITCOUNTS } from "@/constants/constant";
import { useRecoilValue } from "recoil";
import { cu325State, al400State, al95State, highCableTotalState } from "@/states/high_cable_selector";

export default function DetailResultHighCable() {
    const cu325 = useRecoilValue(cu325State);
    const al400 = useRecoilValue(al400State);
    const al95 = useRecoilValue(al95State);
    const totalState = useRecoilValue(highCableTotalState);

    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <table className="text-sm text-center border-collapse" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border-collapse border border-slate-400">고압케이블</th>
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
                                <td colSpan={2} className="p-1 border-collapse border border-slate-400">단위수량</td>
                                {HIGHCABLEUNITCOUNTS.map((value, index) => (<td key={index} className="p-1 border-collapse border border-slate-400">{value}</td>))}
                            </tr>
                            <tr>
                                <td rowSpan={4} className="p-1 border-collapse border border-slate-400">비중</td>
                                <td className="p-1 border-collapse border border-slate-400">CU325</td>
                                <td className="p-1 border-collapse border border-slate-400">{ cu325.scale === 0 ? cu325.result : "-"}</td>
                                <td className="p-1 border-collapse border border-slate-400">{ cu325.scale === 1 ? cu325.result : "-"}</td>
                                <td className="p-1 border-collapse border border-slate-400">{ cu325.scale === 2 ? cu325.result : "-"}</td>
                                <td className="p-1 border-collapse border border-slate-400">{ cu325.scale === 3 ? cu325.result : "-"}</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL400</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al400.scale === 0 ? al400.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al400.scale === 1 ? al400.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al400.scale === 2 ? al400.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al400.scale === 3 ? al400.result : "-" }</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL 95</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al95.scale === 0 ? al95.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al95.scale === 1 ? al95.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al95.scale === 2 ? al95.result : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ al95.scale === 3 ? al95.result : "-" }</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">계</td>
                                <td className="p-1 border-collapse border border-slate-400">{ totalState.scale === 0 ? totalState.sum : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ totalState.scale === 1 ? totalState.sum : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ totalState.scale === 2 ? totalState.sum : "-" }</td>
                                <td className="p-1 border-collapse border border-slate-400">{ totalState.scale === 3 ? totalState.sum : "-" }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-1">
                    <table className="text-sm text-center border-collapse" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="p-1 border-collapse border border-slate-400">구분</th>
                                <th className="p-1 border-collapse border border-slate-400">입력값</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">CU325</td>
                                <td className="p-1 border-collapse border border-slate-400">{cu325.result}</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL400</td>
                                <td className="p-1 border-collapse border border-slate-400">{al400.result}</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL 95</td>
                                <td className="p-1 border-collapse border border-slate-400">{al95.result}</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">계</td>
                                <td className="p-1 border-collapse border border-slate-400">{totalState.sum}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}