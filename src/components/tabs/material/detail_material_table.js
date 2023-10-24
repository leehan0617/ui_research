"use client"

// 세부 자재별 비중
export default function DetailMaterialTable({ material, use_total = true }) {
    const { name, unit, unit_text, unit_values, data } = material
    return (
        <>
            <table className="mb-3 text-sm text-center border-collapse border border-slate-400">
                <thead className="text-slate-500">
                    <tr className="bg-violet-100">
                        <th className="rounded-l-lg p-1 border-collapse border border-slate-400" colSpan={2} rowSpan={2}>{ name }</th>
                        <th colSpan={3} className="p-1 border-collapse border border-slate-400">주택단지</th>
                        <th className="rounded-tr-lg p-1 border-collapse border border-slate-400">산업단지</th>
                    </tr>
                    <tr className="bg-violet-100">
                        <th className="p-1 border-collapse border-slate-400 border">상<br/>{unit_text}</th>
                        <th className="p-1 border-collapse border-slate-400 border">중<br/>{unit_text}</th>
                        <th className="p-1 border-collapse border-slate-400 border">하<br/>{unit_text}</th>
                        <th className="p-1 rounded-br-lg border-collapse border-slate-400 border">평균<br/>{unit_text}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colSpan={2} className="border border-collapse border-slate-400">{ unit }</td>
                        {unit_values.map((value, index) => (<td key={index} className="p-1 border border-collapse border-slate-400">{value}</td>))}
                    </tr>
                    {
                        data.map((element, index) => {
                            const { name: sub_name, values } = element
                            const value_list = values.map((value, sub_index) => (<td key={sub_index} className="p-1 border border-collapse border-slate-400">{value}%</td>))
                            const td_list = [(<td key={`0${index}`} className="p-1 border border-collapse, border-slate-400">{sub_name}</td>), ...value_list]
                            if (index == 0) {
                                return (
                                    <tr key={index}>
                                        <td  className="p-1" rowSpan={data.length}>비중</td>
                                        {td_list}
                                    </tr>
                                )
                            }

                            return (<tr key={index} className="border-collapse border border-slate-400">{td_list}</tr>)
                        })
                    }
                    {
                        use_total &&
                        <tr className="bg-slate-100">
                            <td colSpan={2} className="p-1 rounded-l-lg border border-collapse border-slate-400">계</td>
                            <td className="p-1 border border-collapse border-slate-400">100%</td>
                            <td className="p-1 border border-collapse border-slate-400">100%</td>
                            <td className="p-1 border border-collapse border-slate-400">100%</td>
                            <td className="rounded-r-lg">100%</td>
                        </tr>
                    }
                </tbody>
            </table>
        </>
    )
}
