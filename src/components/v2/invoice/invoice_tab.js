import { Card, CardBody, Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import { indexTableList, findTable, findNextTable } from "@/util/table";
import { reportState } from "@/states/report_selector";

export default function InvoiceV2Tab() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const report = useRecoilValue(reportState);
    // 총공사비
    const [constructionCost, setConstructCost] = useState(0);
    const [optionType, setOptionType] = useState("all");
    // 설계 용역비
    const [serviceFee, setServiceFee] = useState(0);
    // 손해배상 보험료
    const [insuranceCost, setInsuranceCost] = useState(0);
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
    // 복제 절감율
    const [copyRate, setCopyRate] = useState(0);
    // 계수
    const [coefficient, setCoefficient] = useState(0);

    useEffect(() => {
        const { totalPrice } = report;
        setConstructCost(Math.round(totalPrice) * 1000);
    }, [report]);

    useEffect(() => {
        // 테이블 요율 찾기
        const currentTable = findTable(constructionCost/100000000);
        const { index } = currentTable;
        const currentNextTable = findNextTable(index);
        setTable(currentTable);
        setNextTable(currentNextTable);

        // 적용요율 계산
        if (constructionCost <= 20000000) {
            setBasicRate(currentNextTable.basic);
            setRealRate(currentNextTable.real);
        } else {
            const e13 = currentTable.basic;
            const e10 = constructionCost;
            const e12 = currentTable.start * 100000000;
            const e14 = currentNextTable.basic;
            const e11 = currentNextTable.start * 100000000;
            const basicRateResult = e13 - (((e10-e12)*(e13-e14))/(e11-e12));
            setBasicRate(Math.round(basicRateResult * 100) / 100);
            const f13 = currentTable.real;
            const f10 = constructionCost;
            const f12 = e12;
            const f14 = currentNextTable.real;
            const f11 = currentNextTable.start * 100000000;
            const realRateResult = f13 - (((f10-f12)*(f13-f14))/(f11-f12));
            setRealRate(Math.round(realRateResult * 100) / 100);
        }
    }, [constructionCost]);

    useEffect(() => {
        // 복제 절감률 & 계수
        setCopyRate(optionType === "all" ? 73.35 : optionType === "basic" ? 46.5 : 82.3);
        setCoefficient(optionType === "all" ? 1.3 : 1);
    }, [optionType]);

    useEffect(() => {
        // 설계용역비 계산
        const rate = optionType === "basic" ? basicRate : realRate;
        setServiceFee(Math.round(constructionCost*rate/100*coefficient*(1-(copyRate/100))));

        // 손해배상보험료 계산
        let insuranceRate = 0;
        if (constructionCost < 500000000) {
            insuranceRate = optionType === "basic" ? 0.348 : 0.511;
        } else if (constructionCost <= 1000000000) {
            insuranceRate = optionType === "basic" ? 0.338 : 0.495;
        } else if (constructionCost <= 2000000000) {
            insuranceRate = optionType === "basic" ? 0.328 : 0.479;
        } else if (constructionCost <= 3000000000) {
            insuranceRate = optionType === "basic" ? 0.317 : 0.464;
        } else if (constructionCost <= 5000000000) {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        } else {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        }
        setInsuranceCost(Math.round(constructionCost * insuranceRate / 100));
    }, [constructionCost, optionType, copyRate, coefficient]);

    // 단순히 모달 상단 테이블 빗금치기용 css
    const tableLine = {
        "backgroundImage": "linear-gradient(to left bottom, transparent calc(50% - 1px), #000000, transparent calc(50% + 1px))",
        "backgroundSize": "120% 120%",
        "backgroundPosition": "center"
    };

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-5">
                            <span>1. 배전공사 총공사비(VAT제외): { constructionCost.toLocaleString() }원</span>
                        <div className="col-span-3 text-end">
                            </div>
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
                                        <td className="p-3 border border-slate-400">{ constructionCost.toLocaleString() }</td>
                                        <td className="p-3 border border-slate-400">{ constructionCost.toLocaleString() }</td>
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
                                        <td className="p-3 border border-slate-400">{ (constructionCost / 100000000).toLocaleString() }</td>
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
                                <p className="text-red-400">전력시설물공사 설계 및 설계감리 요율표<small>(클릭)</small></p>
                            </div>
                        </div>
                    </div>
                    <p>3. 복제 절감률: { copyRate }%</p>
                    <p>4. 기본/실시설계 발주시 적용 계수: { coefficient } (기본+실시 통합설계 발주)</p>
                    <p>5. 설계 용역비: {serviceFee.toLocaleString()}원</p>
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
                                                <div className="text-right">공사비</div>
                                                <div className="text-left">(억원)</div>
                                            </th>
                                            <th colSpan={4} className="border border-slate-600">요    율(%)</th>
                                            <th rowSpan={2} className="border border-slate-600">INDEX</th>
                                        </tr>
                                        <tr>
                                            <th className="border border-slate-600 w-1/6 bg-lime-200">기본설계</th>
                                            <th className="border border-slate-600 w-1/6 bg-sky-200">실시설계</th>
                                            <th className="border border-slate-600 w-1/6">설계감리</th>
                                            <th className="border border-slate-600 w-1/6">계</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            indexTableList.filter((_, i) => i > 0).map((e, i) => {
                                                return <tr key={i}>
                                                <td className="border border-slate-600">{Number(e.start).toLocaleString()}</td>
                                                <td className="border border-slate-600">{e.basic}</td>
                                                <td className="border border-slate-600">{e.real}</td>
                                                <td className="border border-slate-600">{e.management}</td>
                                                <td className="border border-slate-600">{e.total}</td>
                                                <td className="border border-slate-600">{e.index}</td>
                                                </tr>;
                                            })
                                        }
                                    </tbody>
                                </table>
                                <div className="mt-3">
                                    <p>* 비고</p>
                                    <p>1. 발주자가 기본설계를 시행하지 아니하거나 또는 기본설계용역을 발주하지 아니하고</p>
                                    <p>실시설계만을 발주하는 경우에는 당해 실시설계요율의 1.3배를 적용한다.</p>
                                    <p>2. 기본설계와 실시설계를 동시에 발주하는 경우에는 당해 실시설계요율의 1.3배를 적용한다.</p>
                                </div>
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