"use client"

import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react"
import HighCable from "./cost/high_cable"

export default function CostResultTab() {
    return (
        <>
            <Card className="border-none">
                <CardHeader>
                    <p>2023년 배전건설공사 기준단가(지중) [단위:천원]</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <table className="text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-orange-200">
                                <th colSpan={5} rowSpan={2} className="p-1 border-collapse border border-slate-400">유형분류</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>단위</th>
                                <th className="p-1 border-collapse border border-slate-400" colSpan={3}>회사분</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>도급공사비</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>기준단가</th>
                                <th className="p-1 border-collapse border border-slate-400" colSpan={3}>회사분(조정후)</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>도급공사비(조정후)</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>기준단가(조정후)</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>설계수량</th>
                                <th className="p-1 border-collapse border border-slate-400" colSpan={2}>공사비</th>
                                <th className="p-1 border-collapse border border-slate-400" rowSpan={2}>개략공사비</th>
                            </tr>
                            <tr className="bg-orange-200">
                                <th className="p-1 border-collapse border border-slate-400">재료비</th>
                                <th className="p-1 border-collapse border border-slate-400">경비</th>
                                <th className="p-1 border-collapse border border-slate-400">소계</th>
                                <th className="p-1 border-collapse border border-slate-400">재료비</th>
                                <th className="p-1 border-collapse border border-slate-400">경비</th>
                                <th className="p-1 border-collapse border border-slate-400">소계</th>
                                <th className="p-1 border-collapse border border-slate-400">회사분</th>
                                <th className="p-1 border-collapse border border-slate-400">도급분</th>
                            </tr>
                        </thead>
                        <tbody>
                            <HighCable />
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        </>
    )
}