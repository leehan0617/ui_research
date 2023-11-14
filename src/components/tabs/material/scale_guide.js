"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"
import DetailMaterialTable from "./detail_material_table"
import { high_cable, low_cable, ground_machine, transformer, structure, pipeline, tube, tube_150, tube_100 } from "@/constants/material"
import DetailMaterialSubTable from "./detail_material_sub_table"
import DetailMaterialResultTable from "./detail_material_result_table"

// 규모별 주자재 단위 수량
export default function ScaleGuide() {
    return (
        <>
            <div className="grid grid-cols-8 gap-2">
                <div className="col-span-4">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-violet-100">
                                <th className="p-1 border-collapse border border-slate-400">주택단지</th>
                                <th className="p-1 border-collapse border border-slate-400">고압케이블</th>
                                <th className="p-1 border-collapse border border-slate-400">지상기기</th>
                                <th className="p-1 border-collapse border border-slate-400">구조물</th>
                                <th className="p-1 border-collapse border border-slate-400">관로</th>
                                <th className="p-1 border-collapse border border-slate-400">전체관로 중 저압비중</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">상</td>
                                <td className="p-1 border-collapse border border-slate-400">0.023</td>
                                <td className="p-1 border-collapse border border-slate-400">0.050</td>
                                <td className="p-1 border-collapse border border-slate-400">0.173</td>
                                <td className="p-1 border-collapse border border-slate-400">0.060</td>
                                <td className="p-1 border-collapse border border-slate-400">35.4%</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">중</td>
                                <td className="p-1 border-collapse border border-slate-400">0.018</td>
                                <td className="p-1 border-collapse border border-slate-400">0.040</td>
                                <td className="p-1 border-collapse border border-slate-400">0.137</td>
                                <td className="p-1 border-collapse border border-slate-400">0.052</td>
                                <td className="p-1 border-collapse border border-slate-400">35.5%</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">하</td>
                                <td className="p-1 border-collapse border border-slate-400">0.013</td>
                                <td className="p-1 border-collapse border border-slate-400">0.030</td>
                                <td className="p-1 border-collapse border border-slate-400">0.142</td>
                                <td className="p-1 border-collapse border border-slate-400">0.043</td>
                                <td className="p-1 border-collapse border border-slate-400">40.8%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">평균</td>
                                <td className="p-1 border-collapse border border-slate-400">0.018</td>
                                <td className="p-1 border-collapse border border-slate-400">0.040</td>
                                <td className="p-1 border-collapse border border-slate-400">0.146</td>
                                <td className="p-1 border-collapse border border-slate-400">0.052</td>
                                <td className="p-1 border-collapse border border-slate-400">37.2%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-4">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-violet-100">
                                <th className="p-1 border-collapse border border-slate-400">주택단지</th>
                                <th className="p-1 border-collapse border border-slate-400">구조물</th>
                                <th className="p-1 border-collapse border border-slate-400">비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">소규모</td>
                                <td className="p-1 border-collapse border border-slate-400">0.154</td>
                                <td rowSpan={4} className="p-1 border-collapse border border-slate-400">구조물은 면적에 따라 규모 구분</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">중규모</td>
                                <td className="p-1 border-collapse border border-slate-400">0.146</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">대규모</td>
                                <td className="p-1 border-collapse border border-slate-400">0.092</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">평균</td>
                                <td className="p-1 border-collapse border border-slate-400">0.139</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-4">
                    <table className="w-full text-sm text-center border-collapse">
                        <thead>
                            <tr className="bg-violet-100">
                                <th className="p-1 border-collapse border border-slate-400">산업단지</th>
                                <th className="p-1 border-collapse border border-slate-400">고압케이블</th>
                                <th className="p-1 border-collapse border border-slate-400">지상기기</th>
                                <th className="p-1 border-collapse border border-slate-400">구조물</th>
                                <th className="p-1 border-collapse border border-slate-400">관로</th>
                                <th className="p-1 border-collapse border border-slate-400">전체관로 중 저압비중</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">평균</td>
                                <td className="p-1 border-collapse border border-slate-400">0.025</td>
                                <td className="p-1 border-collapse border border-slate-400">0.071</td>
                                <td className="p-1 border-collapse border border-slate-400">0.158</td>
                                <td className="p-1 border-collapse border border-slate-400">0.069</td>
                                <td className="p-1 border-collapse border border-slate-400">22.2%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>세부 자재별 비중</p>
            <div className="grid grid-cols-8 gap-2">
                <div className="col-span-4">
                    <DetailMaterialTable material={high_cable} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={low_cable} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={high_cable} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={low_cable} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={ground_machine} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={transformer} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={structure} />
                </div>
                <div className="col-span-4">
                    <DetailMaterialTable material={pipeline} />
                </div>
            </div>
            <div className="grid grid-cols-9 gap-2 mt-2">
                <div className="col-span-3">
                    <DetailMaterialTable material={tube} use_total={false} />
                </div>
                <div className="col-span-3">
                    <DetailMaterialTable material={tube_150} use_total={false} />
                </div>
                <div className="col-span-3">
                    <DetailMaterialTable material={tube_100} use_total={false} />
                </div>
            </div>
            <div className="grid grid-cols-8 mt-2">
                <div className="col-span-8">
                    <table className="w-full text-sm text-center">
                        <thead>
                            <tr className="bg-violet-100">
                                <th className="border-slate-400 border">구분</th>
                                <th className="border-slate-400 border">규모</th>
                                <th className="border-slate-400 border">관공 유형</th>
                                <th className="border-slate-400 border">175mm</th>
                                <th className="border-slate-400 border">150mm</th>
                                <th className="border-slate-400 border">100mm</th>
                                <th className="border-slate-400 border">계</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td rowSpan={15} className="text-blue-500 font-bold border border-slate-400">주택단지</td>
                                <td rowSpan={5} className="font-bold border border-slate-400">소규모</td>
                                <td className="text-red-500 border border-slate-400">1. 3단3열(9공)</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">-</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">2. 3단2열(6공)</td>
                                <td className="border border-slate-400">14.60%</td>
                                <td className="border border-slate-400">21.70%</td>
                                <td className="border border-slate-400">10.70%</td>
                                <td className="border border-slate-400">47.00%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">3. 2단2열(6공)</td>
                                <td className="border border-slate-400">9.80%</td>
                                <td className="border border-slate-400">10.90%</td>
                                <td className="border border-slate-400">10.80%</td>
                                <td className="border border-slate-400">31.50%</td>
                            </tr>
                            <tr>
                                <td className="text-blue-500 border border-slate-400">4. 2단1열(2공)</td>
                                <td className="border border-slate-400">0</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">21.50%</td>
                                <td className="border border-slate-400">21.50%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="border border-slate-400">계</td>
                                <td className="border border-slate-400">24.40%</td>
                                <td className="border border-slate-400">32.60%</td>
                                <td className="border border-slate-400">43.00%</td>
                                <td className="border border-slate-400">100.00%</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} className="font-bold border border-slate-400">중규모</td>
                                <td className="text-red-500 border border-slate-400">1. 3단3열(9공)</td>
                                <td className="border border-slate-400">18.50%</td>
                                <td className="border border-slate-400">10.60%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">37.00%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">2. 3단2열(6공)</td>
                                <td className="border border-slate-400">9.30%</td>
                                <td className="border border-slate-400">10.60%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">27.80%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">3. 2단2열(6공)</td>
                                <td className="border border-slate-400">6.20%</td>
                                <td className="border border-slate-400">5.30%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">19.40%</td>
                            </tr>
                            <tr>
                                <td className="text-blue-500 border border-slate-400">4. 2단1열(2공)</td>
                                <td className="border border-slate-400">0</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">15.80%</td>
                                <td className="border border-slate-400">15.80%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="border border-slate-400">계</td>
                                <td className="border border-slate-400">34.00%</td>
                                <td className="border border-slate-400">26.50%</td>
                                <td className="border border-slate-400">39.50%</td>
                                <td className="border border-slate-400">100.00%</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} className="font-bold border border-slate-400">대규모</td>
                                <td className="text-red-500 border border-slate-400">1. 3단3열(9공)</td>
                                <td className="border border-slate-400">24.60%</td>
                                <td className="border border-slate-400">9.10%</td>
                                <td className="border border-slate-400">6.40%</td>
                                <td className="border border-slate-400">40.10%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">2. 3단2열(6공)</td>
                                <td className="border border-slate-400">12.30%</td>
                                <td className="border border-slate-400">9.10%</td>
                                <td className="border border-slate-400">6.40%</td>
                                <td className="border border-slate-400">27.80%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">3. 2단2열(6공)</td>
                                <td className="border border-slate-400">8.20%</td>
                                <td className="border border-slate-400">4.60%</td>
                                <td className="border border-slate-400">6.40%</td>
                                <td className="border border-slate-400">19.20%</td>
                            </tr>
                            <tr>
                                <td className="text-blue-500 border border-slate-400">4. 2단1열(2공)</td>
                                <td className="border border-slate-400">0</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">12.90%</td>
                                <td className="border border-slate-400">12.90%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="border border-slate-400">계</td>
                                <td className="border border-slate-400">45.10%</td>
                                <td className="border border-slate-400">22.80%</td>
                                <td className="border border-slate-400">32.10%</td>
                                <td className="border border-slate-400">100.00%</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} className="text-blue-500 font-bold border border-slate-400">산업단지</td>
                                <td rowSpan={5} className="font-bold border border-slate-400">평균</td>
                                <td className="text-red-500 border border-slate-400">1. 3단3열(9공)</td>
                                <td className="border border-slate-400">24.10%</td>
                                <td className="border border-slate-400">12.90%</td>
                                <td className="border border-slate-400">4.70%</td>
                                <td className="border border-slate-400">41.70%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">2. 3단2열(6공)</td>
                                <td className="border border-slate-400">12.00%</td>
                                <td className="border border-slate-400">13.00%</td>
                                <td className="border border-slate-400">4.70%</td>
                                <td className="border border-slate-400">29.70%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">3. 2단2열(6공)</td>
                                <td className="border border-slate-400">8.00%</td>
                                <td className="border border-slate-400">6.50%</td>
                                <td className="border border-slate-400">4.70%</td>
                                <td className="border border-slate-400">19.20%</td>
                            </tr>
                            <tr>
                                <td className="text-blue-500 border border-slate-400">4. 2단1열(2공)</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">-</td>
                                <td className="border border-slate-400">9.40%</td>
                                <td className="border border-slate-400">9.40%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="border border-slate-400">계</td>
                                <td className="border border-slate-400">44.10%</td>
                                <td className="border border-slate-400">32.40%</td>
                                <td className="border border-slate-400">23.50%</td>
                                <td className="border border-slate-400">100.00%</td>
                            </tr>
                            <tr>
                                <td rowSpan={5} className="text-blue-500 font-bold border border-slate-400">주택단지</td>
                                <td rowSpan={5} className="font-bold border border-slate-400">평균</td>
                                <td className="text-red-500 border border-slate-400">1. 3단3열(9공)</td>
                                <td className="border border-slate-400">18.50%</td>
                                <td className="border border-slate-400">10.60%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">37.00%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">2. 3단2열(6공)</td>
                                <td className="border border-slate-400">9.30%</td>
                                <td className="border border-slate-400">10.60%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">27.80%</td>
                            </tr>
                            <tr>
                                <td className="text-red-500 border border-slate-400">3. 2단2열(6공)</td>
                                <td className="border border-slate-400">6.20%</td>
                                <td className="border border-slate-400">5.30%</td>
                                <td className="border border-slate-400">7.90%</td>
                                <td className="border border-slate-400">19.40%</td>
                            </tr>
                            <tr>
                                <td className="text-blue-500 border border-slate-400">4. 2단1열(2공)</td>
                                <td className="border border-slate-400"></td>
                                <td className="border border-slate-400"></td>
                                <td className="border border-slate-400">15.80%</td>
                                <td className="border border-slate-400">15.80%</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="border border-slate-400">계</td>
                                <td className="border border-slate-400">34.00%</td>
                                <td className="border border-slate-400">26.50%</td>
                                <td className="border border-slate-400">39.50%</td>
                                <td className="border border-slate-400">100.00%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <p>세부 자재별 수량 산출</p>
            <DetailMaterialResultTable material={high_cable} />
        </>
    )
}