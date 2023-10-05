"use client"

import { Card, CardBody, CardHeader, Divider, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react"

export default function InvoiceTab() {
    return (
        <>
            <Card className="border-none">
                <CardHeader>
                    <p>배전공사 설계용역비 산출 내역서</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p>1. 배전공사 총공사비(VAT제외): 4695334000</p>
                    <p className="mb-2">2. 적용요율 [직선보간법에 의한 요율산정]</p>
                    <Table removeWrapper aria-label="result_table1">
                        <TableHeader>
                            <TableColumn>구분</TableColumn>
                            <TableColumn>기본설계</TableColumn>
                            <TableColumn>실시설계</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>당해금액(총공사비)</TableCell>
                                <TableCell>4695334000</TableCell>
                                <TableCell>4695334000</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>요율표상 큰금액</TableCell>
                                <TableCell>50000000</TableCell>
                                <TableCell>50000000</TableCell>
                            </TableRow>
                            <TableRow key="3">
                                <TableCell>요율표상 작은금액</TableCell>
                                <TableCell>30000000</TableCell>
                                <TableCell>30000000</TableCell>
                            </TableRow>
                            <TableRow key="4">
                                <TableCell>작은금액 요율(%)</TableCell>
                                <TableCell>1.04</TableCell>
                                <TableCell>3.11</TableCell>
                            </TableRow>
                            <TableRow key="5">
                                <TableCell>큰금액 요율(%)</TableCell>
                                <TableCell>1.02</TableCell>
                                <TableCell>3.06</TableCell>
                            </TableRow>
                            <TableRow key="6">
                                <TableCell>적용요율(%)</TableCell>
                                <TableCell>1.02</TableCell>
                                <TableCell>3.07</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Table removeWrapper aria-label="invoice2">
                        <TableHeader>
                            <TableColumn>기본설계요율</TableColumn>
                            <TableColumn>실시설계요율</TableColumn>
                            <TableColumn>요율</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow key="1">
                                <TableCell>1.04</TableCell>
                                <TableCell>3.11</TableCell>
                                <TableCell>작은 요율</TableCell>
                            </TableRow>
                            <TableRow key="2">
                                <TableCell>1.02</TableCell>
                                <TableCell>3.06</TableCell>
                                <TableCell>큰 요율</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <p>3. 복제 절감률: 73.35%</p>
                    <p>4. 기본/실시설계 발주시 적용 계수: 1.3 (기본+실시 통합설계 발주)</p>
                    <p>5. 설계 용역비: 49939643원</p>
                    <p>6. 손해배상보험료(순계약금액 X 기본요율) = 255,192</p>
                </CardBody>
            </Card>
        </>
    )
}