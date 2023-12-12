import { GROUNDMACHINEUNITCOUNTS } from "@/constants/constant";
import { useRecoilValue } from "recoil";
import { groundSwitchState, groundTransformerState, totalState } from "@/states/ground_machine_selector";

export default function DetailResultGroundMachine() {
    const groundSwitch = useRecoilValue(groundSwitchState);
    const groundTransformer = useRecoilValue(groundTransformerState);
    const total = useRecoilValue(totalState);
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-8">
                    <table className="text-sm text-center" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border border-slate-400">지상기기</th>
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
                                    GROUNDMACHINEUNITCOUNTS.map((value, index) => (<td key={index} className="p-1 border border-slate-400">{value}</td>))
                                }
                            </tr>
                            <tr>
                                <td rowSpan={3} className="p-1 border border-slate-400">비중</td>
                                <td className="p-1 border border-slate-400">개폐기</td>
                                <td className="p-1 border border-slate-400">{ groundSwitch.scale === 0 ? groundSwitch.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundSwitch.scale === 1 ? groundSwitch.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundSwitch.scale === 2 ? groundSwitch.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundSwitch.scale === 3 ? groundSwitch.result : "-" }</td> 
                            </tr>
                            <tr>
                                <td className="p-1 border border-slate-400">변압기</td>
                                <td className="p-1 border border-slate-400">{ groundTransformer.scale === 0 ? groundTransformer.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundTransformer.scale === 1 ? groundTransformer.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundTransformer.scale === 2 ? groundTransformer.result : "-" }</td>
                                <td className="p-1 border border-slate-400">{ groundTransformer.scale === 3 ? groundTransformer.result : "-" }</td> 
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