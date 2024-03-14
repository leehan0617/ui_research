import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { findTable, findNextTable } from "@/util/table";
import { reportState } from "@/states/report_selector";

export default function InvoiceV2Tab() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const report = useRecoilValue(reportState);
    const { totalPrice } = report;
    const [optionType, setOptionType] = useState("all");
    const [copyRate, setCopyRate] = useState(0);
    const [applyCount, setApplyCount] = useState(0);
    // 설계 용역비
    const [totalCost, setTotalCost] = useState(0);
    // 손해배상 보험료
    const [insuranceCost, setInsuranceCost] = useState(0);
    const [cost, setCost] = useState(0);
    const [table, setTable] = useState({
        "start": 0, "end": 0, "index": 0, "basic": 0, "real": 0, "management": 0, "total": 0
    });
    const [nextTable, setNextTable] = useState({
        "start": 0, "end": 0, "index": 0, "basic": 0, "real": 0, "management": 0, "total": 0
    });
    // 기본설계 적용요율
    const [basicRate, setBasicRate] = useState(0);
    // 실시설계 적용요율
    const [realRate, setRealRate] = useState(0);

    const setFinalCost = () => {
        if (optionType === "all") {
            const copyRate = 73.35;
            const applyCount = 1.3;
            setCopyRate(copyRate);
            setApplyCount(applyCount);
            setTotalCost(Math.round(cost*realRate/100*applyCount*(1-(copyRate/100))));
        } else if (optionType === "basic") {
            const copyRate = 46.5;
            const applyCount = 1;
            setCopyRate(copyRate);
            setApplyCount(applyCount);
            setTotalCost(Math.round(cost*basicRate/100*(1-(copyRate/100))));
        } else {
            const copyRate = 82.3;
            const applyCount = 1;
            setCopyRate(copyRate);
            setApplyCount(applyCount);
            setTotalCost(Math.round(cost*realRate/100*(1-(copyRate/100))));
        }
    };

    useEffect(() => {
        const costResult = Math.round(totalPrice) * 1000;
        const currentTable = findTable(Math.round(costResult) / 100000000);
        const { index } = currentTable;
        const nextTable = findNextTable(index);
        setTable(currentTable);
        setNextTable(nextTable);
        setCost(costResult);
    }, [totalPrice]);

    useEffect(() => {
        if (cost <= 20000000) {
            setBasicRate(nextTable.basic);
            setRealRate(nextTable.real);
        } else {
            const e13 = table.basic;
            const e10 = cost;
            const e12 = table.start * 100000000;
            const e14 = nextTable.basic;
            const e11 = nextTable.start * 100000000;
            const basicRateResult = e13 - (((e10-e12)*(e13-e14))/(e11-e12));
            setBasicRate(Math.round(basicRateResult * 100) / 100);
            const f13 = table.real;
            const f10 = cost;
            const f12 = e12;
            const f14 = nextTable.real;
            const f11 = nextTable.start * 100000000;
            const realRateResult = f13 - (((f10-f12)*(f13-f14))/(f11-f12));
            setRealRate(Math.round(realRateResult * 100) / 100);
        }
        setFinalCost();
    }, [cost]);
    
    useEffect(() => {
        setFinalCost();
    }, [optionType, basicRate, realRate]);

    useEffect(() => {
        let insuranceRate = 0;
        if (totalCost < 500000000) {
            insuranceRate = optionType === "basic" ? 0.348 : 0.511;
        } else if (totalCost <= 1000000000) {
            insuranceRate = optionType === "basic" ? 0.338 : 0.495;
        } else if (totalCost <= 2000000000) {
            insuranceRate = optionType === "basic" ? 0.328 : 0.479;
        } else if (totalCost <= 3000000000) {
            insuranceRate = optionType === "basic" ? 0.317 : 0.464;
        } else if (totalCost <= 5000000000) {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        } else {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        }
        setInsuranceCost(Math.round(totalCost * insuranceRate / 100));
    }, [totalCost]);

    const tableLine = {
        "backgroundImage": "linear-gradient(to left bottom, transparent calc(50% - 1px), #d4a12c, transparent calc(50% + 1px))",
        "backgroundSize": "120% 120%",
        "backgroundPosition": "center"
    };
    const backSlash = {
        "background": "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\"><line x1='0' y1='0' x2='100%' y2='100%' stroke='gray' /></svg>')",
        "textAlign": "left"
    };

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-5">
                            <span>1. 배전공사 총공사비(VAT제외): { cost.toLocaleString() }</span>
                        </div>
                        <div className="col-span-3 text-end">
                            <span className="p-2 border border-slate-800 bg-amber-200 text-blue-400 mr-1">용역대상 선택</span>
                            <select value={optionType} onChange={e => setOptionType(e.target.value)} className="p-2 border border-slate-800 bg-yellow-100 text-red-500">
                                <option value="all">기본+실시 설계용역</option>
                                <option value="basic">기본 설계용역</option>
                                <option value="real">실시 설계용역</option>
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
                                        <td className="p-3 border border-slate-400">{cost.toLocaleString()}</td>
                                        <td className="p-3 border border-slate-400">{cost.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">요율표상 큰 금액</td>
                                        <td className="p-3 border border-slate-400">{ (nextTable.start * 100000000).toLocaleString() }</td>
                                        <td className="p-3 border border-slate-400">{ (nextTable.start * 100000000).toLocaleString() }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">요율표상 작은금액</td>
                                        <td className="p-3 border border-slate-400">{ (table.start * 100000000).toLocaleString() }</td>
                                        <td className="p-3 border border-slate-400">{ (table.start * 100000000).toLocaleString() }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은금액 요율(%)</td>
                                        <td className="p-3 border border-slate-400">{ table.basic }</td>
                                        <td className="p-3 border border-slate-400">{ table.real }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰금액 요율(%)</td>
                                        <td className="p-3 border border-slate-400">{ nextTable.basic }</td>
                                        <td className="p-3 border border-slate-400">{ nextTable.real }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">적용요율(%)</td>
                                        <td className="p-3 border border-slate-400">{ basicRate }</td>
                                        <td className="p-3 border border-slate-400">{ realRate }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-3">
                            <table className="w-full text-sm text-center">
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-slate-400">총공사비(억원)</td>
                                        <td className="p-3 border border-slate-400">{ (Math.round(cost) / 100000000).toLocaleString() }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은금액 인덱스</td>
                                        <td className="p-3 border border-slate-400">{ table.index }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰 금액 인덱스</td>
                                        <td className="p-3 border border-slate-400">{ nextTable.index }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">작은 금액</td>
                                        <td className="p-3 border border-slate-400">{ table.start }</td>
                                    </tr>
                                    <tr>
                                        <td className="p-3 border border-slate-400">큰 금액</td>
                                        <td className="p-3 border border-slate-400">{ nextTable.start }</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="p-3 mt-3 border-solid border border-lime-500 text-center hover:bg-lime-200 cursor-pointer" onClick={onOpen}>
                                전력시설물공사 설계 및 설계감리 요율표<small>(클릭)</small>
                            </div>
                        </div>
                    </div>
                    <p>3. 복제 절감률: {copyRate}%</p>
                    <p>4. 기본/실시설계 발주시 적용 계수: {applyCount} (기본+실시 통합설계 발주)</p>
                    <p>5. 설계 용역비: {totalCost.toLocaleString()}원</p>
                    <p>6. 손해배상보험료(순계약금액 X 기본요율) = {insuranceCost.toLocaleString()}원</p>
                </CardBody>
            </Card>
            <Modal size="4xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-center">
                                <span className="underline">전력시설물공사 설계 및 설계감리 요율</span>
                            </ModalHeader>
                            <ModalBody>
                                <table className="w-full text-sm text-center">
                                    <thead>
                                        <tr>
                                            <th rowSpan={2} className="border border-slate-600" style={tableLine}>
                                                <div className="text-right">ㅇㅇ</div>
                                                <div className="text-left">ㅇㅇ2</div>
                                            </th>
                                            <th colSpan={4} className="border border-slate-600">요    율(%)</th>
                                            <th rowSpan={2} className="border border-slate-600">INDEX</th>
                                        </tr>
                                        <tr>
                                            <th className="border border-slate-600 w-1/6">기본설계</th>
                                            <th className="border border-slate-600 w-1/6">실시설계</th>
                                            <th className="border border-slate-600 w-1/6">설계감리</th>
                                            <th className="border border-slate-600 w-1/6">계</th>
                                        </tr>
                                    </thead>
                                </table>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" variant="light" onPress={onClose}>닫기</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}