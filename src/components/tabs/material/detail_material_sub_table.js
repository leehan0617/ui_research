"use client"

// 세부 자재별 비중 관공유형
export default function DetailMaterialSubTable() {
    return (
        <>
            <table className="mb-3 text-sm text-center border-collapse border border-slate-400">
                <thead className="text-slate-500">
                    <tr className="bg-violet-100">
                        <th className="p-1 border-collapse border border-slate-400">구분</th>
                        <th className="p-1 border-collapse border border-slate-400">규모</th>
                        <th className="p-1 border-collapse border border-slate-400">관공 유형</th>
                        <th className="p-1 border-collapse border border-slate-400">175mm</th>
                        <th className="p-1 border-collapse border border-slate-400">150mm</th>
                        <th className="p-1 border-collapse border border-slate-400">100mm</th>
                        <th className="p-1 border-collapse border border-slate-400">계</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={15} className="bg-slate-100 border border-collapse border-slate-400">주택단지</td>
                        <td rowSpan={5} className="p-1 border border-collapse border-slate-400">소규모</td>
                        <td className="p-1 border border-collapse border-slate-400">1. 3단3열(9공)</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td> 
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">2. 3단2열(6공)</td>
                        <td className="p-1 border border-collapse border-slate-400">14.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">21.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">47.00%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">3. 2단2열(4공)</td>
                        <td className="p-1 border border-collapse border-slate-400">9.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">31.50%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">4. 2단1열(2공)</td>
                        <td className="p-1 border border-collapse border-slate-400">0</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">21.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">21.50</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="p-1 border border-collapse border-slate-400">계</td>
                        <td className="p-1 border border-collapse border-slate-400">24.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">32.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">43.00</td>
                        <td className="p-1 border border-collapse border-slate-400">100.00%</td>
                    </tr>
                    <tr>
                        <td rowSpan={5} className="p-1 border border-collapse border-slate-400">중규모</td>
                        <td className="p-1 border border-collapse border-slate-400">1. 3단3열(9공)</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">2. 3단2열(6공)</td>
                        <td className="p-1 border border-collapse border-slate-400">14.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">21.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">47.00%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">3. 2단2열(4공)</td>
                        <td className="p-1 border border-collapse border-slate-400">9.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">31.50%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">4. 2단1열(2공)</td>
                        <td className="p-1 border border-collapse border-slate-400">0</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">15.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">15.80%</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="p-1 border border-collapse border-slate-400">계</td>
                        <td className="p-1 border border-collapse border-slate-400">34.00%</td>
                        <td className="p-1 border border-collapse border-slate-400">26.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">39.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">100%</td>
                    </tr>
                    <tr>
                        <td rowSpan={5} className="p-1 border border-collapse border-slate-400">대규모</td>
                        <td className="p-1 border border-collapse border-slate-400">1. 3단3열(9공)</td>
                        <td className="p-1 border border-collapse border-slate-400">24.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">9.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">6.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">40.10%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">2. 3단2열(6공)</td>
                        <td className="p-1 border border-collapse border-slate-400">12.30%</td>
                        <td className="p-1 border border-collapse border-slate-400">9.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">6.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">27.80%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">3. 2단2열(4공)</td>
                        <td className="p-1 border border-collapse border-slate-400">8.20%</td>
                        <td className="p-1 border border-collapse border-slate-400">4.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">6.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">19.20%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">4. 2단1열(2공)</td>
                        <td className="p-1 border border-collapse border-slate-400">0</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">12.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">12.90%</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="p-1 border border-collapse border-slate-400">계</td>
                        <td className="p-1 border border-collapse border-slate-400">45.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">22.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">32.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">100%</td>
                    </tr>
                    <tr>
                        <td rowSpan={5} className="bg-slate-100 p-1 border border-collapse border-slate-400">산업단지</td>
                        <td rowSpan={5} className="p-1 border border-collapse border-slate-400">평균</td>
                        <td className="p-1 border border-collapse border-slate-400">1. 3단3열(9공)</td>
                        <td className="p-1 border border-collapse border-slate-400">24.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">12.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">4.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">41.70%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">2. 3단2열(6공)</td>
                        <td className="p-1 border border-collapse border-slate-400">12.00%</td>
                        <td className="p-1 border border-collapse border-slate-400">13.00%</td>
                        <td className="p-1 border border-collapse border-slate-400">4.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">29.70%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">3. 2단2열(4공)</td>
                        <td className="p-1 border border-collapse border-slate-400">8.00%</td>
                        <td className="p-1 border border-collapse border-slate-400">6.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">4.70%</td>
                        <td className="p-1 border border-collapse border-slate-400">19.20%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">4. 2단1열(2공)</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">-</td>
                        <td className="p-1 border border-collapse border-slate-400">9.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">9.40%</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="p-1 border border-collapse border-slate-400">계</td>
                        <td className="p-1 border border-collapse border-slate-400">44.10%</td>
                        <td className="p-1 border border-collapse border-slate-400">32.40%</td>
                        <td className="p-1 border border-collapse border-slate-400">23.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">100%</td>
                    </tr>
                    <tr>
                        <td rowSpan={5} className="bg-slate-100 p-1 border border-collapse border-slate-400">주택단지</td>
                        <td rowSpan={5} className="p-1 border border-collapse border-slate-400">평균</td>
                        <td className="p-1 border border-collapse border-slate-400">1. 3단3열(9공)</td>
                        <td className="p-1 border border-collapse border-slate-400">18.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">7.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">37.00%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">2. 3단2열(6공)</td>
                        <td className="p-1 border border-collapse border-slate-400">9.30%</td>
                        <td className="p-1 border border-collapse border-slate-400">10.60%</td>
                        <td className="p-1 border border-collapse border-slate-400">7.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">27.80%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">3. 2단2열(4공)</td>
                        <td className="p-1 border border-collapse border-slate-400">6.20%</td>
                        <td className="p-1 border border-collapse border-slate-400">5.30%</td>
                        <td className="p-1 border border-collapse border-slate-400">7.90%</td>
                        <td className="p-1 border border-collapse border-slate-400">19.40%</td>
                    </tr>
                    <tr>
                        <td className="p-1 border border-collapse border-slate-400">4. 2단1열(2공)</td>
                        <td className="p-1 border border-collapse border-slate-400"></td>
                        <td className="p-1 border border-collapse border-slate-400"></td>
                        <td className="p-1 border border-collapse border-slate-400">15.80%</td>
                        <td className="p-1 border border-collapse border-slate-400">15.80%</td>
                    </tr>
                    <tr className="bg-slate-100">
                        <td className="p-1 border border-collapse border-slate-400">계</td>
                        <td className="p-1 border border-collapse border-slate-400">34.00%</td>
                        <td className="p-1 border border-collapse border-slate-400">26.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">39.50%</td>
                        <td className="p-1 border border-collapse border-slate-400">100%</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}