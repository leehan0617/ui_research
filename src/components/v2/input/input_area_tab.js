"use client"

import { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Card, CardBody } from "@nextui-org/react";
import { buildingTypeState, projectState, companyState, powerState, areaState } from "@/states/atom";
import * as inputAtom from "@/states/input_atom";

export default function InputAreaTab() {
    const [projectName, setProjectName] = useRecoilState(projectState);
    const [companyName, setCompanyName] = useRecoilState(companyState);
    const [power, setPower] = useRecoilState(powerState);
    const [area, setArea] = useRecoilState(areaState);
    const [buildingType, setBuildingType] = useRecoilState(buildingTypeState);

    // 주거용지
    const [row1col1, setRow1Col1] = useRecoilState(inputAtom.row1col1State);
    const [row1col2, setRow1Col2] = useRecoilState(inputAtom.row1col2State);
    const [row1col3, setRow1Col3] = useRecoilState(inputAtom.row1col3State);
    const [row1col4, setRow1Col4] = useRecoilState(inputAtom.row1col4State);
    const [row2col1, setRow2Col1] = useRecoilState(inputAtom.row2col1State);
    const [row2col2, setRow2Col2] = useRecoilState(inputAtom.row2col2State);
    const [row2col3, setRow2Col3] = useRecoilState(inputAtom.row2col3State);
    const [row2col4, setRow2Col4] = useRecoilState(inputAtom.row2col4State);
    const [row3col1, setRow3Col1] = useRecoilState(inputAtom.row3col1State);
    const [row3col2, setRow3Col2] = useRecoilState(inputAtom.row3col2State);
    const [row3col3, setRow3Col3] = useRecoilState(inputAtom.row3col3State);
    const [row3col4, setRow3Col4] = useRecoilState(inputAtom.row3col4State);
    const [row4col1, setRow4Col1] = useRecoilState(inputAtom.row4col1State);
    const [row4col2, setRow4Col2] = useRecoilState(inputAtom.row4col2State);
    const [row4col3, setRow4Col3] = useRecoilState(inputAtom.row4col3State);
    const [row4col4, setRow4Col4] = useRecoilState(inputAtom.row4col4State);
    // 주거외 용지
    const [row5col1, setRow5Col1] = useRecoilState(inputAtom.row5col1State);
    const [row6col1, setRow6Col1] = useRecoilState(inputAtom.row6col1State);
    const [row7col1, setRow7Col1] = useRecoilState(inputAtom.row7col1State);
    const [row8col1, setRow8Col1] = useRecoilState(inputAtom.row8col1State);
    const [row9col1, setRow9Col1] = useRecoilState(inputAtom.row9col1State);
    const [row10col1, setRow10Col1] = useRecoilState(inputAtom.row10col1State);
    const [row11col1, setRow11Col1] = useRecoilState(inputAtom.row11col1State);
    const [row12col1, setRow12Col1] = useRecoilState(inputAtom.row12col1State);
    const [row13col1, setRow13Col1] = useRecoilState(inputAtom.row13col1State);
    const [row14col1, setRow14Col1] = useRecoilState(inputAtom.row14col1State);
    const [row15col1, setRow15Col1] = useRecoilState(inputAtom.row15col1State);
    const [row16col1, setRow16Col1] = useRecoilState(inputAtom.row16col1State);
    const [row17col1, setRow17Col1] = useRecoilState(inputAtom.row17col1State);
    const [row18col1, setRow18Col1] = useRecoilState(inputAtom.row18col1State);
    const [row19col1, setRow19Col1] = useRecoilState(inputAtom.row19col1State);

    const [row5col2, setRow5Col2] = useRecoilState(inputAtom.row5col2State);
    const [row6col2, setRow6Col2] = useRecoilState(inputAtom.row6col2State);
    const [row7col2, setRow7Col2] = useRecoilState(inputAtom.row7col2State);
    const [row8col2, setRow8Col2] = useRecoilState(inputAtom.row8col2State);
    const [row9col2, setRow9Col2] = useRecoilState(inputAtom.row9col2State);
    const [row10col2, setRow10Col2] = useRecoilState(inputAtom.row10col2State);
    const [row11col2, setRow11Col2] = useRecoilState(inputAtom.row11col2State);
    const [row12col2, setRow12Col2] = useRecoilState(inputAtom.row12col2State);
    const [row13col2, setRow13Col2] = useRecoilState(inputAtom.row13col2State);
    const [row14col2, setRow14Col2] = useRecoilState(inputAtom.row14col2State);
    const [row15col2, setRow15Col2] = useRecoilState(inputAtom.row15col2State);
    const [row16col2, setRow16Col2] = useRecoilState(inputAtom.row16col2State);
    const [row17col2, setRow17Col2] = useRecoilState(inputAtom.row17col2State);
    const [row18col2, setRow18Col2] = useRecoilState(inputAtom.row18col2State);
    const [row19col2, setRow19Col2] = useRecoilState(inputAtom.row19col2State);

    const [row5col3, setRow5Col3] = useRecoilState(inputAtom.row5col3State);
    const [row6col3, setRow6Col3] = useRecoilState(inputAtom.row6col3State);
    const [row7col3, setRow7Col3] = useRecoilState(inputAtom.row7col3State);
    const [row8col3, setRow8Col3] = useRecoilState(inputAtom.row8col3State);
    const [row9col3, setRow9Col3] = useRecoilState(inputAtom.row9col3State);
    const [row10col3, setRow10Col3] = useRecoilState(inputAtom.row10col3State);
    const [row11col3, setRow11Col3] = useRecoilState(inputAtom.row11col3State);
    const [row12col3, setRow12Col3] = useRecoilState(inputAtom.row12col3State);
    const [row13col3, setRow13Col3] = useRecoilState(inputAtom.row13col3State);
    const [row14col3, setRow14Col3] = useRecoilState(inputAtom.row14col3State);
    const [row15col3, setRow15Col3] = useRecoilState(inputAtom.row15col3State);
    const [row16col3, setRow16Col3] = useRecoilState(inputAtom.row16col3State);
    const [row17col3, setRow17Col3] = useRecoilState(inputAtom.row17col3State);
    const [row18col3, setRow18Col3] = useRecoilState(inputAtom.row18col3State);
    const [row19col3, setRow19Col3] = useRecoilState(inputAtom.row19col3State);

    const [row5col4, setRow5Col4] = useRecoilState(inputAtom.row5col4State);
    const [row6col4, setRow6Col4] = useRecoilState(inputAtom.row6col4State);
    const [row7col4, setRow7Col4] = useRecoilState(inputAtom.row7col4State);
    const [row8col4, setRow8Col4] = useRecoilState(inputAtom.row8col4State);
    const [row9col4, setRow9Col4] = useRecoilState(inputAtom.row9col4State);
    const [row10col4, setRow10Col4] = useRecoilState(inputAtom.row10col4State);
    const [row11col4, setRow11Col4] = useRecoilState(inputAtom.row11col4State);
    const [row12col4, setRow12Col4] = useRecoilState(inputAtom.row12col4State);
    const [row13col4, setRow13Col4] = useRecoilState(inputAtom.row13col4State);
    const [row14col4, setRow14Col4] = useRecoilState(inputAtom.row14col4State);
    const [row15col4, setRow15Col4] = useRecoilState(inputAtom.row15col4State);
    const [row16col4, setRow16Col4] = useRecoilState(inputAtom.row16col4State);
    const [row17col4, setRow17Col4] = useRecoilState(inputAtom.row17col4State);
    const [row18col4, setRow18Col4] = useRecoilState(inputAtom.row18col4State);
    const [row19col4, setRow19Col4] = useRecoilState(inputAtom.row19col4State);

    // 산업단지
    const [row20col1, setRow20Col1] = useRecoilState(inputAtom.row20col1State);
    const [row20col2, setRow20Col2] = useRecoilState(inputAtom.row20col2State);
    const [row20col3, setRow20Col3] = useRecoilState(inputAtom.row20col3State);
    const [row20col4, setRow20Col4] = useRecoilState(inputAtom.row20col4State);
    // 기타지역
    const [row21col1, setRow21Col1] = useRecoilState(inputAtom.row21col1State);
    const [row21col2, setRow21Col2] = useRecoilState(inputAtom.row21col2State);
    const [row21col3, setRow21Col3] = useRecoilState(inputAtom.row21col3State);
    const [row21col4, setRow21Col4] = useRecoilState(inputAtom.row21col4State);

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
        setPower(sumCol4);
    }, [sumCol4]);

    useEffect(() => {
        setArea(sumCol1);
    }, [sumCol1]);

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-1 mt-3">
                            <span>1. 사업명</span>
                        </div>
                        <div className="col-span-11 mt-3">
                            <input type="text" name="project_name" className="ml-2 rounded-md border border-slate-600 text-right" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                        </div>
                        <div className="col-span-1 mt-3">
                            <span>2. 시행사</span>
                        </div>
                        <div className="col-span-11 mt-3">
                            <input type="text" name="company_name" className="ml-2 rounded-md border border-slate-600 text-right"  value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                        </div>
                        <div className="col-span-1 mt-3">
                            <span>3. 단지유형</span>
                        </div>
                        <div className="col-span-11 mt-3">
                            <input type="radio" name="building_type" value="resident" className="ml-2"  checked={buildingType === "resident"} onChange={(e) => setBuildingType(e.target.value)} />
                            <span className="mr-2 ml-2">주택단지</span>
                            <input type="radio" name="building_type" value="industry"  checked={buildingType === "industry"} onChange={(e) => setBuildingType(e.target.value)} />
                            <span className="mr-2 ml-2">산업단지</span>
                        </div>
                        <div className="col-span-12 mt-3">
                            <table className="w-full text-sm text-center">
                                <thead className="bg-sky-50">
                                    <tr>
                                        <th rowSpan={2} className="p-2 border border-slate-400">구분1</th>
                                        <th rowSpan={2} className="p-2 border border-slate-400">구분2</th>
                                        <th colSpan={2} className="p-2 border border-slate-400">개발면적(㎡)</th>
                                        <th colSpan={2} className="p-2 border border-slate-400">수요전력(kW)</th>
                                    </tr>
                                    <tr>
                                        <th className="p-2 border border-slate-400">대지면적(㎡)</th>
                                        <th className="p-2 border border-slate-400">연면적(㎡)</th>
                                        <th className="p-2 border border-slate-400">동시부하(kW)</th>
                                        <th className="p-2 border border-slate-400">비동시부하(kW)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={5} className="border border-slate-400">1. 주거용지</td>
                                        <td className="border border-slate-400 text-left">① 단독주택</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row1col1} onChange={(e) => setRow1Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row1col2} onChange={(e) => setRow1Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row1col3} onChange={(e) => setRow1Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row1col4} onChange={(e) => setRow1Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">② 공동주택</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row2col1} onChange={(e) => setRow2Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row2col2} onChange={(e) => setRow2Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row2col3} onChange={(e) => setRow2Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row2col4} onChange={(e) => setRow2Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">③ 근생(주상복합)</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row3col1} onChange={(e) => setRow3Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row3col2} onChange={(e) => setRow3Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row3col3} onChange={(e) => setRow3Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row3col4} onChange={(e) => setRow3Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">④ 기타</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row4col1} onChange={(e) => setRow4Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row4col2} onChange={(e) => setRow4Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row4col3} onChange={(e) => setRow4Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row4col4} onChange={(e) => setRow4Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-200">
                                        <td className="p-2 border border-slate-400">소계</td>
                                        <td className="p-2 border border-slate-400">{subSum1Col1.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum1Col2.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum1Col3.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum1Col4.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={16} className="border border-slate-400">2. 주거외 용지</td>
                                        <td className="border border-slate-400 text-left">① 일반상업</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row5col1} onChange={(e) => setRow5Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row5col2} onChange={(e) => setRow5Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row5col3} onChange={(e) => setRow5Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row5col4} onChange={(e) => setRow5Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">② 중심상업</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row6col1} onChange={(e) => setRow6Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row6col2} onChange={(e) => setRow6Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row6col3} onChange={(e) => setRow6Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row6col4} onChange={(e) => setRow6Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">③ 종합병원</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row7col1} onChange={(e) => setRow7Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row7col2} onChange={(e) => setRow7Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row7col3} onChange={(e) => setRow7Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row7col4} onChange={(e) => setRow7Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">④ 학교</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row8col1} onChange={(e) => setRow8Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row8col2} onChange={(e) => setRow8Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row8col3} onChange={(e) => setRow8Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row8col4} onChange={(e) => setRow8Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑤ 공공청사</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row9col1} onChange={(e) => setRow9Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row9col2} onChange={(e) => setRow9Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row9col3} onChange={(e) => setRow9Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row9col4} onChange={(e) => setRow9Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑥ 체육시설</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row10col1} onChange={(e) => setRow10Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row10col2} onChange={(e) => setRow10Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row10col3} onChange={(e) => setRow10Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row10col4} onChange={(e) => setRow10Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑦ 종교시설</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row11col1} onChange={(e) => setRow11Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row11col2} onChange={(e) => setRow11Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row11col3} onChange={(e) => setRow11Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row11col4} onChange={(e) => setRow11Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑧ 문화시설</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row12col1} onChange={(e) => setRow12Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row12col2} onChange={(e) => setRow12Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row12col3} onChange={(e) => setRow12Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row12col4} onChange={(e) => setRow12Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑨ 공원</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row13col1} onChange={(e) => setRow13Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row13col2} onChange={(e) => setRow13Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row13col3} onChange={(e) => setRow13Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row13col4} onChange={(e) => setRow13Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑩ 녹지</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row14col1} onChange={(e) => setRow14Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row14col2} onChange={(e) => setRow14Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row14col3} onChange={(e) => setRow14Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row14col4} onChange={(e) => setRow14Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑪ 도로</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row15col1} onChange={(e) => setRow15Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row15col2} onChange={(e) => setRow15Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row15col3} onChange={(e) => setRow15Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row15col4} onChange={(e) => setRow15Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑫ 하천</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row16col1} onChange={(e) => setRow16Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row16col2} onChange={(e) => setRow16Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row16col3} onChange={(e) => setRow16Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row16col4} onChange={(e) => setRow16Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑬ 광장</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row17col1} onChange={(e) => setRow17Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row17col2} onChange={(e) => setRow17Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row17col3} onChange={(e) => setRow17Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row17col4} onChange={(e) => setRow17Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑭ 주차장</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row18col1} onChange={(e) => setRow18Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row18col2} onChange={(e) => setRow18Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row18col3} onChange={(e) => setRow18Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row18col4} onChange={(e) => setRow18Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400 text-left">⑮ (기타)</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row19col1} onChange={(e) => setRow19Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row19col2} onChange={(e) => setRow19Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row19col3} onChange={(e) => setRow19Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row19col4} onChange={(e) => setRow19Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr className="bg-slate-200">
                                        <td className="p-2 border border-slate-400">소계</td>
                                        <td className="p-2 border border-slate-400">{subSum2Col1.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum2Col2.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum2Col3.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{subSum2Col4.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400">3. 산업단지</td>
                                        <td className="border border-slate-400 bg-slate-200">소계</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row20col1} onChange={(e) => setRow20Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row20col2} onChange={(e) => setRow20Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row20col3} onChange={(e) => setRow20Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row20col4} onChange={(e) => setRow20Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-400">4. 기타지역</td>
                                        <td className="border border-slate-400 bg-slate-200">소계</td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row21col1} onChange={(e) => setRow21Col1(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row21col2} onChange={(e) => setRow21Col2(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row21col3} onChange={(e) => setRow21Col3(e.target.value) } />
                                        </td>
                                        <td className="border border-slate-400">
                                            <input type="number" className="w-full rounded-md border border-slate-300 text-right p-2" value={row21col4} onChange={(e) => setRow21Col4(e.target.value) } />
                                        </td>
                                    </tr>
                                    <tr className="bg-orange-200">
                                        <td className="p-2 border border-slate-400">전체</td>
                                        <td className="p-2 border border-slate-400">합계</td>
                                        <td className="p-2 border border-slate-400">{sumCol1.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{sumCol2.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{sumCol3.toLocaleString()}</td>
                                        <td className="p-2 border border-slate-400">{sumCol4.toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}
