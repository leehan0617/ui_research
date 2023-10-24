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
            <Table removeWrapper aria-label="규모별 주자재 단위 수량" className="mb-3">
                <TableHeader>
                    <TableColumn>주택단지</TableColumn>
                    <TableColumn>고압케이블</TableColumn>
                    <TableColumn>지상기기</TableColumn>
                    <TableColumn>구조물</TableColumn>
                    <TableColumn>관로</TableColumn>
                    <TableColumn>전체관로 중 저압비중</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>상</TableCell>
                        <TableCell>0.023</TableCell>
                        <TableCell>0.050</TableCell>
                        <TableCell>0.173</TableCell>
                        <TableCell>0.060</TableCell>
                        <TableCell>35.4%</TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>중</TableCell>
                        <TableCell>0.018</TableCell>
                        <TableCell>0.040</TableCell>
                        <TableCell>0.137</TableCell>
                        <TableCell>0.052</TableCell>
                        <TableCell>35.5%</TableCell>
                    </TableRow>
                    <TableRow key="3">
                        <TableCell>하</TableCell>
                        <TableCell>0.013</TableCell>
                        <TableCell>0.030</TableCell>
                        <TableCell>0.142</TableCell>
                        <TableCell>0.043</TableCell>
                        <TableCell>40.8%</TableCell>
                    </TableRow>
                    <TableRow key="4">
                        <TableCell className="bg-violet-100 rounded-l-lg text-fuchsia-600">평균</TableCell>
                        {/* <TableCell>0.018</TableCell> */}
                        <TableCell className="bg-violet-100 text-fuchsia-600">0.018</TableCell>
                        <TableCell className="bg-violet-100 text-fuchsia-600">0.040</TableCell>
                        <TableCell className="bg-violet-100 text-fuchsia-600">0.146</TableCell>
                        <TableCell className="bg-violet-100 text-fuchsia-600">0.052</TableCell>
                        <TableCell className="bg-violet-100 rounded-r-lg text-fuchsia-600">37.2%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Table removeWrapper aria-label="규모별 주자재 단위 수량 산업단지" className="mb-3">
                <TableHeader>
                    <TableColumn>산업단지</TableColumn>
                    <TableColumn>고압케이블</TableColumn>
                    <TableColumn>지상기기</TableColumn>
                    <TableColumn>구조물</TableColumn>
                    <TableColumn>관로</TableColumn>
                    <TableColumn>전체관로 중 저압비중</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>평균</TableCell>
                        <TableCell>0.025</TableCell>
                        <TableCell>0.071</TableCell>
                        <TableCell>0.158</TableCell>
                        <TableCell>0.069</TableCell>
                        <TableCell>22.2%</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <table>
                <thead>
                    <tr className="bg-violet-100">
                        <th className="rounded-l-lg p-2">주택단지</th>
                        <th className="p-2">구조물</th>
                        <th className="p-2 rounded-r-lg">비고</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="p-2">소규모</td>
                        <td className="p-2">0.154</td>
                        <td rowSpan={4} className="p-2 align-middle">구조물은 면적에 따라 규모 구분</td>
                    </tr>
                    <tr>
                        <td className="p-2">중규모</td>
                        <td className="p-2">0.146</td>
                    </tr>
                    <tr>
                        <td className="p-2">대규모</td>
                        <td className="p-2">0.092</td>
                    </tr>
                    <tr>
                        <td className="p-2">평균</td>
                        <td className="p-2">0.139</td>
                    </tr>
                </tbody>
            </table>
            <p>세부 자재별 비중</p>
            <DetailMaterialTable material={high_cable} />
            <DetailMaterialTable material={low_cable} />
            <DetailMaterialTable material={ground_machine} />
            <DetailMaterialTable material={transformer} />
            <DetailMaterialTable material={structure} />
            <DetailMaterialTable material={pipeline} />
            <DetailMaterialTable material={tube} use_total={false} />
            <DetailMaterialTable material={tube_150} use_total={false} />
            <DetailMaterialTable material={tube_100} use_total={false} />
            <DetailMaterialSubTable />
            <p>세부 자재별 수량 산출</p>
            <DetailMaterialResultTable material={high_cable} />
        </>
    )
}