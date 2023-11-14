"use client"

import { Card, CardBody, CardHeader, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

export default function InvoiceTab() {
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8 bg-green-200 rounded-md text-lime-700 font-bold mb-2">
                            <p className="p-4">배전공사 설계용역비 산출 내역서</p>
                        </div>
                        <div className="col-span-5">
                            <span>1. 배전공사 총공사비(VAT제외): 4695334000</span>
                        </div>
                        <div className="col-span-3 text-end">
                            <span className="p-2 border border-slate-800 bg-amber-200 text-blue-400 mr-1">용역대상 선택</span>
                            <select className="p-2 border border-slate-800 bg-yellow-100 text-red-500">
                                <option>기본+실시 설계용역</option>
                                <option>기본 설계용역</option>
                                <option>실시 설계용역</option>
                            </select>
                        </div>
                    </div>
                    <p className="mb-2">2. 적용요율 [직선보간법에 의한 요율산정]</p>
                    <div className="grid grid-cols-8 gap-2 mb-2">
                        <div className="col-span-5">
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr>
                                        <th className="bg-lime-50 p-3 border border-slate-400">구분</th>
                                        <th className="bg-lime-400 p-3 border border-slate-400">기본설계</th>
                                        <th className="bg-sky-200 p-3 border border-slate-400">실시설계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-slate-400">당해금액(총공사비)</td>
                                        <td className="p-3 border border-slate-400">4695334000</td>
                                        <td className="p-3 border border-slate-400">4695334000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">요율표상 큰 금액</td>
                                        <td className="p-3 border border-slate-400">5000000000</td>
                                        <td className="p-3 border border-slate-400">5000000000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">요율표상 작은금액</td>
                                        <td className="p-3 border border-slate-400">3000000000</td>
                                        <td className="p-3 border border-slate-400">3000000000</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은금액 요율(%)</td>
                                        <td className="p-3 border border-slate-400">1.04</td>
                                        <td className="p-3 border border-slate-400">3.11</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰금액 요율(%)</td>
                                        <td className="p-3 border border-slate-400">1.02</td>
                                        <td className="p-3 border border-slate-400">3.06</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">적용요율(%)</td>
                                        <td className="p-3 border border-slate-400">1.02</td>
                                        <td className="p-3 border border-slate-400">3.07</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-3">
                            <table className="w-full text-sm text-center">
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-slate-400">총공사비(억원)</td>
                                        <td className="p-3 border border-slate-400">46.95</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은금액 인덱스</td>
                                        <td className="p-3 border border-slate-400">10</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰 금액 인덱스</td>
                                        <td className="p-3 border border-slate-400">11</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은 금액</td>
                                        <td className="p-3 border border-slate-400">30.00</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰 금액</td>
                                        <td className="p-3 border border-slate-400">50.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>3. 복제 절감률: 73.35%</p>
                    <p>4. 기본/실시설계 발주시 적용 계수: 1.3 (기본+실시 통합설계 발주)</p>
                    <p>5. 설계 용역비: 49939643원</p>
                    <p>6. 손해배상보험료(순계약금액 X 기본요율) = 255,192</p>
                </CardBody>
            </Card>
        </>
    )
}