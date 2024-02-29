export default function ReferenceTab() {
    return <>
        <div className="col-span-12 text-center text-2xl bg-yellow-100 p-2">
            <b>2023년 배전건설공사 기준단가(지중)</b>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr className="bg-orange-200">
                        <th colSpan={5} rowSpan={2} className="border border-slate-400">유형분류</th>
                        <th className="border border-slate-400" rowSpan={2}>단위</th>
                        <th className="border border-slate-400" colSpan={3}>회사분</th>
                        <th className="border border-slate-400" rowSpan={2}>도급공사비</th>
                        <th className="border border-slate-400" rowSpan={2}>기준단가</th>
                        <th className="border border-slate-400" colSpan={3}>회사분(조정후)</th>
                        <th className="border border-slate-400" rowSpan={2}>도급공사비(조정후)</th>
                        <th className="border border-slate-400" rowSpan={2}>기준단가(조정후)</th>
                        <th className="border border-slate-400" rowSpan={2}>설계수량</th>
                        <th className="border border-slate-400" colSpan={2}>공사비</th>
                        <th className="border border-slate-400" rowSpan={2}>개략공사비</th>
                    </tr>
                    <tr className="bg-orange-200">
                        <th className="border border-slate-400">재료비</th>
                        <th className="border border-slate-400">경비</th>
                        <th className="border border-slate-400">소계</th>
                        <th className="border border-slate-400">재료비</th>
                        <th className="border border-slate-400">경비</th>
                        <th className="border border-slate-400">소계</th>
                        <th className="border border-slate-400">회사분</th>
                        <th className="border border-slate-400">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={3} className="border border-slate-400">고압케이블</td>
                        <td rowSpan={3} className="border border-slate-400">관로설치</td>
                        <td className="border border-slate-400">TRCNCE-WCU</td>
                        <td className="border border-slate-400">325mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">175,989</td>
                        <td className="border border-slate-400">175</td>
                        <td className="border border-slate-400">176,164</td>
                        <td className="border border-slate-400">58,810</td>
                        <td className="border border-slate-400">234,974</td>
                        <td className="border border-slate-400">175,989</td>
                        <td className="border border-slate-400">175</td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                    </tr>
                    <tr>
                        <td rowSpan={2} className="border border-slate-400">TRCNCE-WAL</td>
                        <td className="border border-slate-400">400mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">73,494</td>
                        <td className="border border-slate-400">175</td>
                        <td className="border border-slate-400">73,669</td>
                        <td className="border border-slate-400">58,660</td>
                        <td className="border border-slate-400">132,329</td>
                        <td className="border border-slate-400">73,494</td>
                        <td className="border border-slate-400">175</td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-400">95mm 1회선</td>
                        <td className="border border-slate-400">MCM(100호)</td>
                        <td className="border border-slate-400">km</td>
                        <td className="border border-slate-400">24,696</td>
                        <td className="border border-slate-400">62</td>
                        <td className="border border-slate-400">24,758</td>
                        <td className="border border-slate-400">20,802</td>
                        <td className="border border-slate-400">45,560</td>
                        <td className="border border-slate-400">24,696</td>
                        <td className="border border-slate-400">62</td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                        <td className="border border-slate-400"></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
};
