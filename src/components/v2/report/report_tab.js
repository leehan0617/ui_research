import { Card, CardBody } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { powerState, areaState } from "@/states/atom";
import { buildingKr } from "@/states/input_selector";
import { reportState } from "@/states/report_selector";

export default function ReportV2Tab() {
    const power = useRecoilValue(powerState);
    const area = useRecoilValue(areaState);
    const buildingType = useRecoilValue(buildingKr);
    const report = useRecoilValue(reportState);

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 h-24 mb-3">
                        <div className="col-span-5 self-center text-5xl underline">배전간선설치공사 개략공사비 보고서</div>
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
                    </div>
                    <div className="mb-3">
                        <table className="w-full tracking-wider whitespace-pre font-bold">
                            <tbody>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border border-slate-400 w-3/12 text-center" colSpan={2}>공  사  명</td>
                                    <td className="p-1 border border-slate-400 text-right">
                                        (공사기간:                                 일)
                                    </td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border border-slate-400 text-center" rowSpan={3}>입  력  값</td>
                                    <td className="bg-blue-100 p-1 border border-slate-400 text-center">단  지  유  형</td>
                                    <td className="p-1 border border-slate-400">
                                        <span className="ml-2">{ buildingType  }</span>
                                    </td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border border-slate-400 text-center">수  요  전  력<br/>(비동시부하)</td>
                                    <td className="p-1 border border-slate-400">
                                        <span className="ml-2">{ Number(power).toLocaleString() }</span>
                                    </td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border border-slate-400 text-center">대  지  면  적</td>
                                    <td className="p-1 border border-slate-400">
                                        <span className="ml-2">{ Number(area).toLocaleString() }</span>
                                    </td>
                                </tr>
                                <tr className="h-16">
                                    <td className="bg-blue-100 p-1 border border-slate-400 text-center" colSpan={2}>설  계  자</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="text-right font-semibold mb-1">[단위:천원]</p>
                        <table className="w-full text-center whitespace-pre">
                            <thead>
                                <tr className="h-16 bg-blue-100">
                                    <th colSpan={2} className="w-3/12 p-1 border border-slate-400">구      분</th>
                                    <th className="w-2/12 p-1 border border-slate-400">회   사   분</th>
                                    <th className="w-2/12 p-1 border border-slate-400">도   급   분</th>
                                    <th className="w-2/12 p-1 border border-slate-400">총  공  사  비</th>
                                    <th className="w-3/12 p-1 border border-slate-400">비      고</th>
                                </tr>
                            </thead>
                            <tbody className="font-bold">
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400" rowSpan={9}>배전 공사<br/>(지중)</td>
                                    <td className="p-1 border border-slate-400">케이블(고압)</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.highCableCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.highCableCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.highCablePrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">케이블(저압)</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowCableCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowCableCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowCablePrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">개폐기</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.groundSwitchCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.groundSwitchCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.groundSwitchPrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">변압기</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.transformerCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.transformerCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.transformerPrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">관로</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.pipelineCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.pipelineCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.pipelinePrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">맨홀</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.manholeCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.manholeCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.manholePrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">핸드홀</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.handholeCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.handholeCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.handholePrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                                <tr className="h-16">
                                    <td className="p-1 border border-slate-400">저압 접속함</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowConnectorCompany)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowConnectorCustomer)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400">{ Math.round(report?.lowConnectorPrice)?.toLocaleString() }</td>
                                    <td className="p-1 border border-slate-400"></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr className="h-16 bg-cyan-100">
                                    <th colSpan={2} className="w-3/12 p-1 border border-slate-400">합      계</th>
                                    <td className="p-1 border border-slate-400"><b>{ Math.round(report?.totalCompany)?.toLocaleString() }</b></td>
                                    <td className="p-1 border border-slate-400"><b>{ Math.round(report?.totalCustomer)?.toLocaleString() }</b></td>
                                    <td className="p-1 border border-slate-400"><b>{ Math.round(report?.totalPrice)?.toLocaleString() }</b></td>
                                    <th className="w-3/12 p-1 border border-slate-400">VAT별도</th>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
