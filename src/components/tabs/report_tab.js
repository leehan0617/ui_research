"use client"

import { Card, CardBody } from "@nextui-org/react"

export default function ReportTab() {
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 h-24 mb-3">
                        <div className="col-span-5 self-center text-5xl underline">배전간선설치공사 개략공사비 보고서</div>
                        <div className="col-span-3">
                            <table className="w-full h-full whitespace-pre font-semibold text-center">
                                <tbody>
                                    <tr className="h-1/5">
                                        <td className="border-collapse border border-slate-400">담   당</td>
                                        <td className="border-collapse border border-slate-400">차   장</td>
                                        <td className="border-collapse border border-slate-400">팀   장</td>
                                    </tr>
                                    <tr className="h-4/5">
                                        <td className="border-collapse border border-slate-400"></td>
                                        <td className="border-collapse border border-slate-400"></td>
                                        <td className="border-collapse border border-slate-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mb-3">
                        <table className="w-full tracking-wider whitespace-pre font-bold">
                            <tbody>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 w-3/12 text-center" colSpan={2}>공  사  명</td>
                                    <td className="p-1 border-collapse border border-slate-400 text-right">
                                        (공사기간:                                 일)
                                    </td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 text-center" rowSpan={3}>입  력  값</td>
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 text-center">단  지  유  형</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 text-center">수  요  전  력<br/>(비동시부하)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 text-center">대  지  면  적</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border-collapse border border-slate-400 text-center" colSpan={2}>설  계  자</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="text-right font-semibold mb-1">[단위:천원]</p>
                        <table className="w-full text-center whitespace-pre">
                            <thead>
                                <tr className="h-16 bg-blue-100">
                                    <th colSpan={2} className="w-3/12 p-1 border-collapse border border-slate-400">구      분</th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400">회   사   분</th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400">도   급   분</th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400">총  공  사  비</th>
                                    <th className="w-3/12 p-1 border-collapse border border-slate-400">비      고</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400" rowSpan={9}>배전 공사<br/>(지중)</td>
                                    <td className="p-1 border-collapse border border-slate-400">케이블(고압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">케이블(저압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">지상개폐기</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">지상변압기</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">관로(고압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">관로(저압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">구조물(고압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400">구조물(저압)</td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                    <td className="p-1 border-collapse border border-slate-400"></td>
                                </tr>
                            </tbody>
                            <tfoot>
                            <tr className="h-16 bg-cyan-100">
                                    <th colSpan={2} className="w-3/12 p-1 border-collapse border border-slate-400">합      계</th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400"></th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400"></th>
                                    <th className="w-2/12 p-1 border-collapse border border-slate-400"></th>
                                    <th className="w-3/12 p-1 border-collapse border border-slate-400">VAT별도asdf</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}