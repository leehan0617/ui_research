import { Accordion, AccordionItem } from "@nextui-org/react";

export default function InputViewer({ props }) {
    const { power, area, buildingType, density, scale } = props;

    return <>
        <Accordion isCompact variant="bordered">
            <AccordionItem key="input_viewer_accrdion_item_1" aria-label="Input Viewer Accordion Item1" title="입력값" subtitle="클릭하여 확인할 수 있습니다.">
                <table className="w-full text-sm text-center mb-3">
                    <tbody>
                        <tr>
                            <td className="bg-sky-50 p-1 border border-slate-600">유형</td>
                            <td className="p-1 border border-slate-600">{buildingType}</td>
                        </tr>
                        <tr>
                            <td className="bg-sky-50 p-1 border border-slate-600">수요전력</td>
                            <td className="p-1 border border-slate-600">{Number(power).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="bg-sky-50 p-1 border border-slate-600">대지면적</td>
                            <td className="p-1 border border-slate-600">{Number(area).toLocaleString()}</td>
                        </tr>
                        <tr>
                            <td className="bg-sky-50 p-1 border border-slate-600">부하밀도</td>
                            <td className="p-1 border border-slate-600">{density != 0 ? density.toFixed(3) : 0}</td>
                        </tr>
                        <tr>
                            <td className="bg-sky-50 p-1 border border-slate-600">개발단지 규모</td>
                            <td className="p-1 border border-slate-600">규모{scale}</td>
                        </tr>
                    </tbody>
                </table>
            </AccordionItem>
        </Accordion>
    </>
}