"use client"

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

// 규모별 주자재 단위 수량
export default function ScaleGuide() {
    return (
        <>
            <Table removeWrapper aria-label="규모별 주자재 단위 수량">
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
        </>
    )
}