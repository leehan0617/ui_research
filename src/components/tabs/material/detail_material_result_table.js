"use client"

// 3. 자재산출로직 > 세부 자재별 수량 산출
export default function DetailMaterialResultTable({ material }) {
    const { name, unit, unit_text, unit_values, data } = material
    return (
        <>
            <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                    <table className="text-sm text-center border-collapse" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th rowSpan={3} colSpan={2} className="p-1 border-collapse border border-slate-400">{name}</th>
                                <th colSpan={3} className="p-1 border-collapse border border-slate-400">주택단지</th>
                                <th className="p-1 border-collapse border border-slate-400">산업단지</th>
                            </tr>
                            <tr>
                                <th className="p-1 border-collapse border border-slate-400">상</th>
                                <th className="p-1 border-collapse border border-slate-400">중</th>
                                <th className="p-1 border-collapse border border-slate-400">하</th>
                                <th className="p-1 border-collapse border border-slate-400">평균</th>
                            </tr>
                            <tr>
                                <th className="p-1 border-collapse border border-slate-400">{unit_text}</th>
                                <th className="p-1 border-collapse border border-slate-400">{unit_text}</th>
                                <th className="p-1 border-collapse border border-slate-400">{unit_text}</th>
                                <th className="p-1 border-collapse border border-slate-400">{unit_text}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={2} className="p-1 border-collapse border border-slate-400">{unit}</td>
                                {unit_values.map((value, index) => (<td key={index} className="p-1 border-collapse border border-slate-400">{value}</td>))}
                                {/* <td className="p-1 border-collapse border border-slate-400">0.023</td>
                                <td className="p-1 border-collapse border border-slate-400">0.018</td>
                                <td className="p-1 border-collapse border border-slate-400">0.013</td>
                                <td className="p-1 border-collapse border border-slate-400">0.025</td> */}
                            </tr>
                            <tr>
                                <td rowSpan={4} className="p-1 border-collapse border border-slate-400">비중</td>
                                <td className="p-1 border-collapse border border-slate-400">CU325</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">0.87</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL400</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">7.74</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL 95</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">5.84</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">계</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                                <td className="p-1 border-collapse border border-slate-400">14.44</td>
                                <td className="p-1 border-collapse border border-slate-400">-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-span-1">
                    <table className="text-sm text-center border-collapse" style={{ width: "100%" }}>
                        <thead>
                            <tr className="bg-orange-200">
                                <th className="p-1 border-collapse border border-slate-400">구분</th>
                                <th className="p-1 border-collapse border border-slate-400">입력값</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">CU325</td>
                                <td className="p-1 border-collapse border border-slate-400">0.87</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL400</td>
                                <td className="p-1 border-collapse border border-slate-400">7.74</td>
                            </tr>
                            <tr>
                                <td className="p-1 border-collapse border border-slate-400">AL 95</td>
                                <td className="p-1 border-collapse border border-slate-400">5.84</td>
                            </tr>
                            <tr className="bg-slate-100">
                                <td className="p-1 border-collapse border border-slate-400">계</td>
                                <td className="p-1 border-collapse border border-slate-400">14.44</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}