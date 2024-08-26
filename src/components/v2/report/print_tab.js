import { useRef, useEffect, useState } from "react";
import * as inputAtom from "@/states/input_atom";
import ReactToPrint from "react-to-print";
import "./print.css";
import { useRecoilValue } from "recoil";
import { projectState, companyState, powerState, areaState, userState, dateState } from "@/states/atom";
import { densityState, scaleState, singleResidentAreaState, commonResidentAreaState, greenAreaState } from "@/states/input_selector";
import { buildingKr } from "@/states/input_selector";
import { reportState } from "@/states/report_selector";
import { optionState } from "@/states/invoice_selector";
import { indexTableList, findTable, findNextTable } from "@/util/table";

export default function PrintTab() {
    const [content, setContent] = useState("");
    const ref = useRef();
    const projectName = useRecoilValue(projectState);
    const companyName = useRecoilValue(companyState);
    const date = useRecoilValue(dateState);
    const power = useRecoilValue(powerState);
    const area = useRecoilValue(areaState);
    const buildingType = useRecoilValue(buildingKr);
    const report = useRecoilValue(reportState);
    const userName = useRecoilValue(userState);
    const dayCount = useRecoilValue(dateState);

    const density = useRecoilValue(densityState);
    const scale = useRecoilValue(scaleState);
    const greenArea = useRecoilValue(greenAreaState);
    const singleResidentArea = useRecoilValue(singleResidentAreaState);
    const commonResidentArea = useRecoilValue(commonResidentAreaState);
    const [totalPrice, setTotalPrice] = useState(0);

    // 1. 설계용역비 시트
    const optionType = useRecoilValue(optionState);
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

    // 주거용지
    const row1col1 = useRecoilValue(inputAtom.row1col1State);
    const row1col2 = useRecoilValue(inputAtom.row1col2State);
    const row1col3 = useRecoilValue(inputAtom.row1col3State);
    const row1col4 = useRecoilValue(inputAtom.row1col4State);
    const row2col1 = useRecoilValue(inputAtom.row2col1State);
    const row2col2 = useRecoilValue(inputAtom.row2col2State);
    const row2col3 = useRecoilValue(inputAtom.row2col3State);
    const row2col4 = useRecoilValue(inputAtom.row2col4State);
    const row3col1 = useRecoilValue(inputAtom.row3col1State);
    const row3col2 = useRecoilValue(inputAtom.row3col2State);
    const row3col3 = useRecoilValue(inputAtom.row3col3State);
    const row3col4 = useRecoilValue(inputAtom.row3col4State);
    const row4col1 = useRecoilValue(inputAtom.row4col1State);
    const row4col2 = useRecoilValue(inputAtom.row4col2State);
    const row4col3 = useRecoilValue(inputAtom.row4col3State);
    const row4col4 = useRecoilValue(inputAtom.row4col4State);

    // 주거외 용지
    const row5col1 = useRecoilValue(inputAtom.row5col1State);
    const row6col1 = useRecoilValue(inputAtom.row6col1State);
    const row7col1 = useRecoilValue(inputAtom.row7col1State);
    const row8col1 = useRecoilValue(inputAtom.row8col1State);
    const row9col1 = useRecoilValue(inputAtom.row9col1State);
    const row10col1 = useRecoilValue(inputAtom.row10col1State);
    const row11col1 = useRecoilValue(inputAtom.row11col1State);
    const row12col1 = useRecoilValue(inputAtom.row12col1State);
    const row13col1 = useRecoilValue(inputAtom.row13col1State);
    const row14col1 = useRecoilValue(inputAtom.row14col1State);
    const row15col1 = useRecoilValue(inputAtom.row15col1State);
    const row16col1 = useRecoilValue(inputAtom.row16col1State);
    const row17col1 = useRecoilValue(inputAtom.row17col1State);
    const row18col1 = useRecoilValue(inputAtom.row18col1State);
    const row19col1 = useRecoilValue(inputAtom.row19col1State);

    const row5col2 = useRecoilValue(inputAtom.row5col2State);
    const row6col2 = useRecoilValue(inputAtom.row6col2State);
    const row7col2 = useRecoilValue(inputAtom.row7col2State);
    const row8col2 = useRecoilValue(inputAtom.row8col2State);
    const row9col2 = useRecoilValue(inputAtom.row9col2State);
    const row10col2 = useRecoilValue(inputAtom.row10col2State);
    const row11col2 = useRecoilValue(inputAtom.row11col2State);
    const row12col2 = useRecoilValue(inputAtom.row12col2State);
    const row13col2 = useRecoilValue(inputAtom.row13col2State);
    const row14col2 = useRecoilValue(inputAtom.row14col2State);
    const row15col2 = useRecoilValue(inputAtom.row15col2State);
    const row16col2 = useRecoilValue(inputAtom.row16col2State);
    const row17col2= useRecoilValue(inputAtom.row17col2State);
    const row18col2 = useRecoilValue(inputAtom.row18col2State);
    const row19col2 = useRecoilValue(inputAtom.row19col2State);

    const row5col3 = useRecoilValue(inputAtom.row5col3State);
    const row6col3 = useRecoilValue(inputAtom.row6col3State);
    const row7col3 = useRecoilValue(inputAtom.row7col3State);
    const row8col3 = useRecoilValue(inputAtom.row8col3State);
    const row9col3 = useRecoilValue(inputAtom.row9col3State);
    const row10col3 = useRecoilValue(inputAtom.row10col3State);
    const row11col3 = useRecoilValue(inputAtom.row11col3State);
    const row12col3 = useRecoilValue(inputAtom.row12col3State);
    const row13col3 = useRecoilValue(inputAtom.row13col3State);
    const row14col3 = useRecoilValue(inputAtom.row14col3State);
    const row15col3 = useRecoilValue(inputAtom.row15col3State);
    const row16col3 = useRecoilValue(inputAtom.row16col3State);
    const row17col3 = useRecoilValue(inputAtom.row17col3State);
    const row18col3 = useRecoilValue(inputAtom.row18col3State);
    const row19col3 = useRecoilValue(inputAtom.row19col3State);

    const row5col4 = useRecoilValue(inputAtom.row5col4State);
    const row6col4 = useRecoilValue(inputAtom.row6col4State);
    const row7col4 = useRecoilValue(inputAtom.row7col4State);
    const row8col4 = useRecoilValue(inputAtom.row8col4State);
    const row9col4 = useRecoilValue(inputAtom.row9col4State);
    const row10col4 = useRecoilValue(inputAtom.row10col4State);
    const row11col4 = useRecoilValue(inputAtom.row11col4State);
    const row12col4 = useRecoilValue(inputAtom.row12col4State);
    const row13col4= useRecoilValue(inputAtom.row13col4State);
    const row14col4 = useRecoilValue(inputAtom.row14col4State);
    const row15col4 = useRecoilValue(inputAtom.row15col4State);
    const row16col4 = useRecoilValue(inputAtom.row16col4State);
    const row17col4 = useRecoilValue(inputAtom.row17col4State);
    const row18col4 = useRecoilValue(inputAtom.row18col4State);
    const row19col4 = useRecoilValue(inputAtom.row19col4State);

    // 산업단지
    const row20col1 = useRecoilValue(inputAtom.row20col1State);
    const row20col2 = useRecoilValue(inputAtom.row20col2State);
    const row20col3 = useRecoilValue(inputAtom.row20col3State);
    const row20col4 = useRecoilValue(inputAtom.row20col4State);
    // 기타지역
    const row21col1 = useRecoilValue(inputAtom.row21col1State);
    const row21col2 = useRecoilValue(inputAtom.row21col2State);
    const row21col3 = useRecoilValue(inputAtom.row21col3State);
    const row21col4 = useRecoilValue(inputAtom.row21col4State);

    const [subSum1Col1, setSubSum1Col1] = useState(0);
    const [subSum1Col2, setSubSum1Col2] = useState(0);
    const [subSum1Col3, setSubSum1Col3] = useState(0);
    const [subSum1Col4, setSubSum1Col4] = useState(0);
    const [subSum2Col1, setSubSum2Col1] = useState(0);
    const [subSum2Col2, setSubSum2Col2] = useState(0);
    const [subSum2Col3, setSubSum2Col3] = useState(0);
    const [subSum2Col4, setSubSum2Col4] = useState(0);
    const [sumCol1, setSumCol1] = useState(0);
    const [sumCol2, setSumCol2] = useState(0);
    const [sumCol3, setSumCol3] = useState(0);
    const [sumCol4, setSumCol4] = useState(0);

    // 소계1
    useEffect(() => {
        setSubSum1Col1(Number(row1col1) + Number(row2col1) + Number(row3col1) + Number(row4col1));
    }, [row1col1, row2col1, row3col1, row4col1]);

    useEffect(() => {
        setSubSum1Col2(Number(row1col2) + Number(row2col2) + Number(row3col2) + Number(row4col2));
    }, [row1col2, row2col2, row3col2, row4col2]);

    useEffect(() => {
        setSubSum1Col3(Number(row1col3) + Number(row2col3) + Number(row3col3) + Number(row4col3));
    }, [row1col3, row2col3, row3col3, row4col3]);

    useEffect(() => {
        setSubSum1Col4(Number(row1col4) + Number(row2col4) + Number(row3col4) + Number(row4col4));
    }, [row1col4, row2col4, row3col4, row4col4]);

    useEffect(() => {
        setSubSum2Col1(Number(row5col1) + Number(row6col1) + Number(row7col1) + Number(row8col1) + Number(row9col1) + Number(row10col1) + Number(row11col1) +
        Number(row12col1) + Number(row13col1) + Number(row14col1) + Number(row15col1) + Number(row16col1) + Number(row17col1) + Number(row18col1) + Number(row19col1));
    }, [row5col1, row6col1, row7col1, row8col1, row9col1, row10col1, row11col1, row12col1, row13col1, row14col1, row15col1, row16col1, row17col1, row18col1, row19col1]);

    useEffect(() => {
        setSubSum2Col2(Number(row5col2) + Number(row6col2) + Number(row7col2) + Number(row8col2) + Number(row9col2) + Number(row10col2) + Number(row11col2) +
        Number(row12col2) + Number(row13col2) + Number(row14col2) + Number(row15col2) + Number(row16col2) + Number(row17col2) + Number(row18col2) + Number(row19col2));
    }, [row5col2, row6col2, row7col2, row8col2, row9col2, row10col2, row11col2, row12col2, row13col2, row14col2, row15col2, row16col2, row17col2, row18col2, row19col2]);

    useEffect(() => {
        setSubSum2Col3(Number(row5col3) + Number(row6col3) + Number(row7col3) + Number(row8col3) + Number(row9col3) + Number(row10col3) + Number(row11col3) +
        Number(row12col3) + Number(row13col3) + Number(row14col3) + Number(row15col3) + Number(row16col3) + Number(row17col3) + Number(row18col3) + Number(row19col3));
    }, [row5col3, row6col3, row7col3, row8col3, row9col3, row10col3, row11col3, row12col3, row13col3, row14col3, row15col3, row16col3, row17col3, row18col3, row19col3]);

    useEffect(() => {
        setSubSum2Col4(Number(row5col4) + Number(row6col4) + Number(row7col4) + Number(row8col4) + Number(row9col4) + Number(row10col4) + Number(row11col4) +
        Number(row12col4) + Number(row13col4) + Number(row14col4) + Number(row15col4) + Number(row16col4) + Number(row17col4) + Number(row18col4) + Number(row19col4));
    }, [row5col4, row6col4, row7col4, row8col4, row9col4, row10col4, row11col4, row12col4, row13col4, row14col4, row15col4, row16col4, row17col4, row18col4, row19col4]);

    useEffect(() => {
        setSumCol1(Number(subSum1Col1) + Number(subSum2Col1) + Number(row20col1) + Number(row21col1));
    }, [subSum1Col1, subSum2Col1, row20col1, row21col1]);

    useEffect(() => {
        setSumCol2(Number(subSum1Col2) + Number(subSum2Col2) + Number(row20col2) + Number(row21col2));
    }, [subSum1Col2, subSum2Col2, row20col2, row21col2]);

    useEffect(() => {
        setSumCol3(Number(subSum1Col3) + Number(subSum2Col3) + Number(row20col3) + Number(row21col3));
    }, [subSum1Col3, subSum2Col3, row20col3, row21col3]);

    useEffect(() => {
        setSumCol4(Number(subSum1Col4) + Number(subSum2Col4) + Number(row20col4) + Number(row21col4));
    }, [subSum1Col4, subSum2Col4, row20col4, row21col4]);

    useEffect(() => {
        const price = report.totalPrice;
        setTotalPrice(Math.round(price) * 1000);
    }, [report]);

    useEffect(() => {
        // 테이블 요율 찾기
        const currentTable = findTable(totalPrice/100000000);
        const { index } = currentTable;
        const currentNextTable = findNextTable(index);
        setTable(currentTable);
        setNextTable(currentNextTable);

        // 적용요율 계산
        if (totalPrice <= 20000000) {
            setBasicRate(currentNextTable.basic);
            setRealRate(currentNextTable.real);
        } else {
            const e13 = currentTable.basic;
            const e10 = totalPrice;
            const e12 = currentTable.start * 100000000;
            const e14 = currentNextTable.basic;
            const e11 = currentNextTable.start * 100000000;
            const basicRateResult = e13 - (((e10-e12)*(e13-e14))/(e11-e12));
            setBasicRate(Math.round(basicRateResult * 100) / 100);
            const f13 = currentTable.real;
            const f10 = totalPrice;
            const f12 = e12;
            const f14 = currentNextTable.real;
            const f11 = currentNextTable.start * 100000000;
            const realRateResult = f13 - (((f10-f12)*(f13-f14))/(f11-f12));
            setRealRate(Math.round(realRateResult * 100) / 100);
        }
    }, [totalPrice]);

    useEffect(() => {
        const rate = optionType === "basic" ? basicRate : realRate;
        const coefficient = optionType === "all" ? 1.3 : 1;
        const copyRate = optionType === "all" ? 73.35 : optionType === "basic" ? 46.5 : 82.3
        setServiceFee(Math.round(totalPrice*rate/100*coefficient*(1-(copyRate/100))));

        // 손해배상보험료 계산
        let insuranceRate = 0;
        if (totalPrice < 500000000) {
            insuranceRate = optionType === "basic" ? 0.348 : 0.511;
        } else if (totalPrice <= 1000000000) {
            insuranceRate = optionType === "basic" ? 0.338 : 0.495;
        } else if (totalPrice <= 2000000000) {
            insuranceRate = optionType === "basic" ? 0.328 : 0.479;
        } else if (totalPrice <= 3000000000) {
            insuranceRate = optionType === "basic" ? 0.317 : 0.464;
        } else if (totalPrice <= 5000000000) {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        } else {
            insuranceRate = optionType === "basic" ? 0.308 : 0.449;
        }
        setInsuranceCost(Math.round(totalPrice * insuranceRate / 100 / 100));
    }, [optionType, basicRate, realRate]);

    return (
        <>
            <ReactToPrint trigger={() => <button className="bg-sky-100 cursor-pointer rounded-lg p-1 m-1">여기누르면 인쇄</button>}
                content={() => ref.current}
            />
            <div ref={ref} content={content} className="mt-3">
                {/* 보고서 페이지 */}
                <div className="report">
                    <div className="grid grid-cols-8 mb-3">
                        <div className="col-span-5 h-24 self-center text-xl underline content-center">배전간선설치공사 개략공사비 보고서</div>
                        <div className="col-span-3">
                            <table className="w-full h-full whitespace-pre font-semibold text-center">
                                <tbody>
                                    <tr className="h-1/5">
                                        <td className="border border-slate-400">담   당</td>
                                        <td className="border border-slate-400">차   장</td>
                                        <td className="border border-slate-400">팀   장</td>
                                    </tr>
                                    <tr className="h-4/5">
                                        <td className="border border-slate-400"></td>
                                        <td className="border border-slate-400"></td>
                                        <td className="border border-slate-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-8 mt-3 mb-3">
                            <table className="w-full tracking-wider whitespace-pre font-bold">
                                <tbody>
                                    <tr className="h-12">
                                        <td className="bg-blue-100 p-1 border border-slate-400 w-3/12 text-center" colSpan={2}>사  업  명</td>
                                        <td className="p-1 border border-slate-400"><span className="ml-2">{projectName}</span>
                                            <span className="float-right">(공사기간: {Number(dayCount).toLocaleString()} 일)</span>
                                        </td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="bg-blue-100 p-1 border border-slate-400 text-center" rowSpan={3}>입  력  값</td>
                                        <td className="bg-blue-100 p-1 border border-slate-400 text-center">단  지  유  형</td>
                                        <td className="p-1 border border-slate-400">
                                            <span className="ml-2">{ buildingType  }</span>
                                        </td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="bg-blue-100 p-1 border border-slate-400 text-center">수  요  전  력<br/>(비동시부하)</td>
                                        <td className="p-1 border border-slate-400">
                                            <span className="ml-2">{ Number(power).toLocaleString() }</span>
                                        </td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="bg-blue-100 p-1 border border-slate-400 text-center">대  지  면  적</td>
                                        <td className="p-1 border border-slate-400">
                                            <span className="ml-2">{ Number(area).toLocaleString() }</span>
                                        </td>
                                    </tr>
                                    <tr className="h-12">
                                        <td className="bg-blue-100 p-1 border border-slate-400 text-center" colSpan={2}>설  계  자</td>
                                        <td className="p-1 border border-slate-400">{ userName }</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p className="text-right font-semibold mb-1">[단위:천원]</p>
                    <table className="w-full text-center whitespace-pre">
                        <thead>
                            <tr className="h-12 bg-blue-100">
                                <th colSpan={2} className="w-3/12 p-1 border border-slate-400">구      분</th>
                                <th className="w-2/12 p-1 border border-slate-400">회   사   분</th>
                                <th className="w-2/12 p-1 border border-slate-400">도   급   분</th>
                                <th className="w-2/12 p-1 border border-slate-400">총  공  사  비</th>
                                <th className="w-3/12 p-1 border border-slate-400">비      고</th>
                            </tr>
                        </thead>
                        <tbody className="font-bold">
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400" rowSpan={9}>배전 공사<br/>(지중)</td>
                                <td className="p-1 border border-slate-400">케이블(고압)</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.highCableCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.highCableCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.highCablePrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">케이블(저압)</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowCableCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowCableCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowCablePrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">개폐기</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.groundSwitchCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.groundSwitchCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.groundSwitchPrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">변압기</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.transformerCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.transformerCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.transformerPrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">관로</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.pipelineCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.pipelineCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.pipelinePrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">맨홀</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.manholeCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.manholeCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.manholePrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">핸드홀</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.handholeCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.handholeCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.handholePrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                            <tr className="h-12">
                                <td className="p-1 border border-slate-400">저압 접속함</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowConnectorCompany)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowConnectorCustomer)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right">{ Math.round(report?.lowConnectorPrice)?.toLocaleString() }</td>
                                <td className="p-1 border border-slate-400 text-right"></td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="h-12 bg-cyan-100">
                                <th colSpan={2} className="w-3/12 p-1 border border-slate-400">합      계</th>
                                <td className="p-1 border border-slate-400 text-right"><b>{ Math.round(report?.totalCompany)?.toLocaleString() }</b></td>
                                <td className="p-1 border border-slate-400 text-right"><b>{ Math.round(report?.totalCustomer)?.toLocaleString() }</b></td>
                                <td className="p-1 border border-slate-400 text-right"><b>{ Math.round(report?.totalPrice)?.toLocaleString() }</b></td>
                                <th className="w-3/12 p-1 border border-slate-400">VAT별도</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* 개발단지정보 페이지 */}
                <div className="report">
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-6 mt-3">
                            <span>1. 사업명: {projectName}</span>
                        </div>
                        <div className="col-span-6 mt-3">
                            <span>설계자: {userName}</span>
                        </div>
                        <div className="col-span-6 mt-3">
                            <span>2. 시행사: {companyName}</span>
                        </div>
                        <div className="col-span-6 mt-3">
                            <span>공사기간(일): {dayCount}</span>
                        </div>
                        <div className="col-span-12 mt-3">
                            <span>3. 단지유형</span>
                            <span className="mr-2 ml-2">{buildingType}</span>
                        </div>
                    </div>
                    <div className="col-span-12 mt-3 mb-3">
                        <table className="w-full text-sm text-center">
                            <thead className="bg-sky-50">
                                <tr>
                                    <th rowSpan={2} className="border border-slate-400">구분1</th>
                                    <th rowSpan={2} className="border border-slate-400">구분2</th>
                                    <th colSpan={2} className="p-1 border border-slate-400">개발면적(㎡)</th>
                                    <th colSpan={2} className="p-1 border border-slate-400">수요전력(kW)</th>
                                </tr>
                                <tr>
                                    <th className="p-1 border border-slate-400">대지면적(㎡)</th>
                                    <th className="p-1 border border-slate-400">연면적(㎡)</th>
                                    <th className="p-1 border border-slate-400">동시부하(kW)</th>
                                    <th className="p-1 border border-slate-400">비동시부하(kW)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td rowSpan={5} className="border border-slate-400">1. 주거용지</td>
                                    <td className="p-1 border border-slate-400 text-left">① 단독주택</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row1col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row1col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row1col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row1col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">② 공동주택</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row2col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row2col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row2col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row2col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">③ 근생(주상복합)</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row3col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row3col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row3col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row3col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">④ 기타</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row4col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row4col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row4col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row4col4).toLocaleString()}</td>
                                </tr>
                                <tr className="bg-slate-200">
                                    <td className="p-1 border border-slate-400">소계</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum1Col1.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum1Col2.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum1Col3.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum1Col4.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={16} className="p-1 border border-slate-400">2. 주거외 용지</td>
                                    <td className="p-1 border border-slate-400 text-left">① 일반상업</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row5col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row5col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row5col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row5col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">② 중심상업</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row6col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row6col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row6col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row6col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">③ 종합병원</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row7col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row7col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row7col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row7col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">④ 학교</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row8col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row8col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row8col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row8col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑤ 공공청사</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row9col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row9col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row9col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row9col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑥ 체육시설</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row10col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row10col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row10col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row10col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑦ 종교시설</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row11col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row11col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row11col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row11col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑧ 문화시설</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row12col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row12col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row12col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row12col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑨ 공원</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row13col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row13col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row13col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row13col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑩ 녹지</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row14col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row14col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row14col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row14col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑪ 도로</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row15col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row15col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row15col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row15col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑫ 하천</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row16col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row16col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row16col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row16col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑬ 광장</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row17col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row17col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row17col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row17col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑭ 주차장</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row18col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row18col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row18col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row18col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400 text-left">⑮ (기타)</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row19col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row19col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row19col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row19col4).toLocaleString()}</td>
                                </tr>
                                <tr className="bg-slate-200">
                                    <td className="p-1 border border-slate-400">소계</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum2Col1.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum2Col2.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum2Col3.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{subSum2Col4.toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400">3. 산업단지</td>
                                    <td className="p-1 border border-slate-400 bg-slate-200">소계</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row20col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row20col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row20col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row20col4).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="p-1 border border-slate-400">4. 기타지역</td>
                                    <td className="p-1 border border-slate-400 bg-slate-200">소계</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row21col1).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row21col2).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row21col3).toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{Number(row21col4).toLocaleString()}</td>
                                </tr>
                                <tr className="bg-orange-200">
                                    <td className="p-1 border border-slate-400">전체</td>
                                    <td className="p-1 border border-slate-400">합계</td>
                                    <td className="text-right p-1 border border-slate-400">{sumCol1.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{sumCol2.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{sumCol3.toLocaleString()}</td>
                                    <td className="text-right p-1 border border-slate-400">{sumCol4.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* 입력정보 확인 */}
                <div className="report">
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8 mt-3">
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr className="bg-sky-50">
                                        <th className="p-4 border border-slate-400">순번</th>
                                        <th className="p-4 border border-slate-400">항목</th>
                                        <th className="p-4 border border-slate-400">입력값</th>
                                        <th className="p-4 border border-slate-400">단위</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-4 border border-slate-400">1</td>
                                        <td className="p-4 border border-slate-400">단지유형</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{buildingType}</td>
                                        <td className="p-4 border border-slate-400"></td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">2</td>
                                        <td className="p-4 border border-slate-400">수요전력(비동시부하)</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{power.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">kW</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">3</td>
                                        <td className="p-4 border border-slate-400">대지면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{area.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">4</td>
                                        <td className="p-4 border border-slate-400">공원, 녹지 면적</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{greenArea.toLocaleString()}</td>
                                        <td className="p-4 border border-slate-400">㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">5</td>
                                        <td className="p-4 border border-slate-400">단독주택 비중</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{(Math.round(singleResidentArea / area * 100 * 100) / 100) || 0}</td>
                                        <td className="p-4 border border-slate-400">%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">6</td>
                                        <td className="p-4 border border-slate-400">공공주택 비중</td>
                                        <td className="p-4 border border-slate-400 bg-yellow-200">{(Math.round(commonResidentArea / area * 100 * 100) / 100) || 0}</td>
                                        <td className="p-4 border border-slate-400">%</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">7</td>
                                        <td className="p-4 border border-slate-400">부하밀도</td>
                                        <td className="p-4 border border-slate-400">{ density != 0 ? density.toFixed(3) : 0 }</td>
                                        <td className="p-4 border border-slate-400">kW/㎡</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-slate-400">8</td>
                                        <td className="p-4 border border-slate-400">규모선정</td>
                                        <td className="p-4 border border-slate-400">규모{scale}</td>
                                        <td className="p-4 border border-slate-400"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="col-span-8 col-start-1 mt-3 mb-3">
                            <p className="p-4 font-bold text-rose-600 bg-lime-100 border border-slate-200">
                                (조건) 개발단지내에 전체 신설의 경우에 한함(기설설비 활용시 적용불가)
                            </p>
                        </div>
                    </div>
                </div>
                <div className="report">
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8 text-center text-3xl font-bold bg-slate-300 p-3 mb-8">
                            배전공사 설계용역비 산출 내역서
                        </div>
                        <div className="col-span-8 mb-8">
                            {/* <b>1. 배전공사 총공사비(VAT제외): { (Math.round(report?.totalPrice) * 1000)?.toLocaleString() }원</b> */}
                            <b>1. 배전공사 총공사비(VAT제외): { Math.round(totalPrice).toLocaleString() }원</b>
                            <span className="float-right text-red-600 bg-yellow-300 p-1"><b>용역대상: { optionType === "all" ? "기본+실시설계용역" : optionType === "basic" ? "기본설계용역" : "실시설계용역"}</b></span>
                        </div>
                        <div className="col-span-8 mb-8">
                            <b>2. 적용요율</b> <span>[직선보간법에 의한 요율산정]</span>
                        </div>
                        <div className="col-span-5 mb-8">
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
                                        <td className="p-3 border border-slate-400">{ totalPrice.toLocaleString() }</td>
                                        <td className="p-3 border border-slate-400">{ totalPrice.toLocaleString() }</td>
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
                        <div className="col-span-3 mb-8">
                            <table className="w-full text-sm text-center">
                                <tbody>
                                    <tr>
                                        <td className="p-3 border border-slate-400">총공사비</td>
                                        <td className="p-3 border border-slate-400">{ (totalPrice / 100000000).toLocaleString() }(억원)</td>
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
                        </div>
                        <div className="col-span-8 mb-8">
                            <span>3. 복제 절감률: { optionType === "all" ? 73.35 : optionType === "basic" ? 46.5 : 82.3 } %</span>
                        </div>
                        <div className="col-span-8 mb-8">
                            <span>4. 기본/실시설계 발주시 적용 계수: { optionType === "all" ? 1.3 : 1 }</span>
                        </div>
                        <div className="col-span-8 mb-8">
                            <span>5. 설계 용역비: {serviceFee.toLocaleString()} 원</span>
                        </div>
                        <div className="col-span-8 mb-8">
                            <p>6. 손해배상보험료 (순계약금액 X 기본요율) = {insuranceCost.toLocaleString()}원</p>
                            <p className="text-red-500 ml-3"><small>* 용역기간 2년 이내 산출기준으로 2년초과시 가산요율 적용 필요</small></p>
                        </div>
                        <div className="col-span-8 mb-8">
                            <span>7. 총 용역비: {(serviceFee+insuranceCost).toLocaleString()}원</span>
                        </div>
                    </div>
                </div>
                <div className="report">
                    개략공사비 산출
                </div>
            </div>
        </>
    );
}