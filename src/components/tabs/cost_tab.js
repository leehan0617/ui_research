import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { useRecoilValue } from "recoil";
import { cu325State, al400State, al95State } from "@/states/high_cable_selector";
import { cv240State, cv120State } from "@/states/low_cable_selector";
import { ground4w4sState, groundsw4State } from "@/states/ground_machine_selector";
import { hb2State, jblState } from "@/states/structure_selector";
import { kva75State, kva150State, kva300State, kvaTotalState } from "@/states/transformer_selector";
import { pipeline2x1State, pipeline2x2State, pipeline3x2State, pipeline3x3State } from "@/states/pipeline_selector";
import { ma4State, ma6State, me6State } from "@/states/manhole_selector";

export default function CostTab() {
    const cu325 = useRecoilValue(cu325State);
    const al400 = useRecoilValue(al400State);
    const al95 = useRecoilValue(al95State);
    const cv240 = useRecoilValue(cv240State);
    const cv120 = useRecoilValue(cv120State);
    const ground4w4s = useRecoilValue(ground4w4sState);
    const groundsw4 = useRecoilValue(groundsw4State);
    const hb2 = useRecoilValue(hb2State);
    const jbl = useRecoilValue(jblState);
    const kva75 = useRecoilValue(kva75State);
    const kva150 = useRecoilValue(kva150State);
    const kva300 = useRecoilValue(kva300State);
    const kvaTotal = useRecoilValue(kvaTotalState);
    const pipeline2x1 = useRecoilValue(pipeline2x1State);
    const pipeline2x2 = useRecoilValue(pipeline2x2State);
    const pipeline3x2 = useRecoilValue(pipeline3x2State);
    const pipeline3x3 = useRecoilValue(pipeline3x3State);
    const ma4 = useRecoilValue(ma4State);
    const ma6 = useRecoilValue(ma6State);
    const me6 = useRecoilValue(me6State);

    return (
        <>
            <Card className="border-none">
                <CardHeader>
                    <p>2023년 배전건설공사 기준단가(지중) [단위:천원]</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <table className="text-sm text-center">
                        <thead>
                            <tr className="bg-orange-200">
                                <th colSpan={5} rowSpan={2} className="p-1 border border-slate-400">유형분류</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>단위</th>
                                <th className="p-1 border border-slate-400" colSpan={3}>회사분</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>도급공사비</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>기준단가</th>
                                <th className="p-1 border border-slate-400" colSpan={3}>회사분(조정후)</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>도급공사비(조정후)</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>기준단가(조정후)</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>설계수량</th>
                                <th className="p-1 border border-slate-400" colSpan={2}>공사비</th>
                                <th className="p-1 border border-slate-400" rowSpan={2}>개략공사비</th>
                            </tr>
                            <tr className="bg-orange-200">
                                <th className="p-1 border border-slate-400">재료비</th>
                                <th className="p-1 border border-slate-400">경비</th>
                                <th className="p-1 border border-slate-400">소계</th>
                                <th className="p-1 border border-slate-400">재료비</th>
                                <th className="p-1 border border-slate-400">경비</th>
                                <th className="p-1 border border-slate-400">소계</th>
                                <th className="p-1 border border-slate-400">회사분</th>
                                <th className="p-1 border border-slate-400">도급분</th>
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
                                <td className="border border-slate-400">{cu325.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cu325.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cu325.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cu325.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cu325.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cu325.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cu325.totalResult).toLocaleString()}</td>
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
                                <td className="border border-slate-400">{al400.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al400.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al400.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al400.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al400.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al400.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al400.totalResult).toLocaleString()}</td>
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
                                <td className="border border-slate-400">{al95.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al95.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al95.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{al95.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al95.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al95.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(al95.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td rowSpan={2} className="border border-slate-400">저압케이블</td>
                                <td rowSpan={2} className="border border-slate-400">간선용</td>
                                <td rowSpan={2} className="border border-slate-400">CV Cable</td>
                                <td className="border border-slate-400">120mm x 3<br/>70mm x 1</td>
                                <td className="border border-slate-400">인력</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">50,725</td>
                                <td className="border border-slate-400">56</td>
                                <td className="border border-slate-400">50,781</td>
                                <td className="border border-slate-400">27,799</td>
                                <td className="border border-slate-400">78,580</td>
                                <td className="border border-slate-400">50,725</td>
                                <td className="border border-slate-400">56</td>
                                <td className="border border-slate-400">{cv120.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv120.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv120.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv120.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv120.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv120.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv120.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">240mm x 3<br/>120mm x 1</td>
                                <td className="border border-slate-400">인력</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">97,003</td>
                                <td className="border border-slate-400">85</td>
                                <td className="border border-slate-400">97,088</td>
                                <td className="border border-slate-400">42,740</td>
                                <td className="border border-slate-400">139,928</td>
                                <td className="border border-slate-400">97,003</td>
                                <td className="border border-slate-400">85</td>
                                <td className="border border-slate-400">{cv240.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv240.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv240.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{cv240.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv240.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv240.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(cv240.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td rowSpan={2} className="border border-slate-400">지상개폐기</td>
                                <td className="border border-slate-400">개폐기</td>
                                <td colSpan={2} className="border border-slate-400">4W4S(지능화용)</td> 
                                <td className="border border-slate-400">애폭시절연</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">23,477</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">23,479</td>
                                <td className="border border-slate-400">1,230</td>
                                <td className="border border-slate-400">24,709</td>
                                <td className="border border-slate-400">23,477</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">{ground4w4s.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ground4w4s.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ground4w4s.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ground4w4s.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ground4w4s.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ground4w4s.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ground4w4s.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">개폐기 기초대</td>
                                <td colSpan={2} className="border border-slate-400">SW4</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">358</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">360</td>
                                <td className="border border-slate-400">1082</td>
                                <td className="border border-slate-400">1,442</td>
                                <td className="border border-slate-400">358</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">{groundsw4.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{groundsw4.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{groundsw4.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{groundsw4.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(groundsw4.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(groundsw4.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(groundsw4.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td rowSpan={4} className="border border-slate-400">지상변압기</td>
                                <td rowSpan={3} className="border border-slate-400">변압기</td>
                                <td rowSpan={3} className="border border-slate-400">삼상</td>
                                <td className="border border-slate-400">75kVA</td>
                                <td className="border border-slate-400">compact</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">7,571</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">7,573</td>
                                <td className="border border-slate-400">1,169</td>
                                <td className="border border-slate-400">8,742</td>
                                <td className="border border-slate-400">7,571</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">{ kva75.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva75.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva75.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva75.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva75.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva75.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva75.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">150kVA</td>
                                <td className="border border-slate-400">compact</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">8,752</td>
                                <td className="border border-slate-400">3</td>
                                <td className="border border-slate-400">8,755</td>
                                <td className="border border-slate-400">1,336</td>
                                <td className="border border-slate-400">10,091</td>
                                <td className="border border-slate-400">8,752</td>
                                <td className="border border-slate-400">3</td>
                                <td className="border border-slate-400">{ kva150.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva150.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva150.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva150.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva150.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva150.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva150.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">300kVA</td>
                                <td className="border border-slate-400">compact</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">10,632</td>
                                <td className="border border-slate-400">3</td>
                                <td className="border border-slate-400">10,635</td>
                                <td className="border border-slate-400">1,360</td>
                                <td className="border border-slate-400">11,995</td>
                                <td className="border border-slate-400">10,632</td>
                                <td className="border border-slate-400">3</td>
                                <td className="border border-slate-400">{ kva300.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva300.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva300.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kva300.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva300.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva300.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kva300.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">변압기기초대</td>
                                <td className="border border-slate-400" colSpan={2}>T3L</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">대</td>
                                <td className="border border-slate-400">437</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">439</td>
                                <td className="border border-slate-400">1096</td>
                                <td className="border border-slate-400">1,535</td>
                                <td className="border border-slate-400">437</td>
                                <td className="border border-slate-400">2</td>
                                <td className="border border-slate-400">{ kvaTotal.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kvaTotal.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kvaTotal.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ kvaTotal.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kvaTotal.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kvaTotal.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(kvaTotal.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr>
                                <td rowSpan={3} className="border border-slate-400">고압관로공사</td>
                                <td rowSpan={3} colSpan={2} className="border border-slate-400">합성수지파형관 200mm(인력시공)</td>
                                <td className="border border-slate-400">4공</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">41,475</td>
                                <td className="border border-slate-400">317</td>
                                <td className="border border-slate-400">41,792</td>
                                <td className="border border-slate-400">158,346</td>
                                <td className="border border-slate-400">200,138</td>
                                <td className="border border-slate-400">32,506</td>
                                <td className="border border-slate-400">248</td>
                                <td className="border border-slate-400">{ pipeline2x2.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline2x2.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline2x2.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline2x2.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline2x2.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline2x2.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline2x2.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">6공</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">61,888</td>
                                <td className="border border-slate-400">397</td>
                                <td className="border border-slate-400">62,285</td>
                                <td className="border border-slate-400">198,623</td>
                                <td className="border border-slate-400">260,908</td>
                                <td className="border border-slate-400">49,975</td>
                                <td className="border border-slate-400">321</td>
                                <td className="border border-slate-400">{ pipeline3x2.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x2.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x2.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x2.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x2.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x2.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x2.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">9공</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">92,192</td>
                                <td className="border border-slate-400">528</td>
                                <td className="border border-slate-400">92,720</td>
                                <td className="border border-slate-400">263,927</td>
                                <td className="border border-slate-400">356,647</td>
                                <td className="border border-slate-400">78,824</td>
                                <td className="border border-slate-400">451</td>
                                <td className="border border-slate-400">{ pipeline3x3.companyBeforeCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x3.contractCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x3.companyCost.toLocaleString() }</td>
                                <td className="border border-slate-400">{ pipeline3x3.result.toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x3.companyResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x3.contractResult).toLocaleString() }</td>
                                <td className="border border-slate-400">{ Math.round(pipeline3x3.totalResult).toLocaleString() }</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">저압관로공사</td>
                                <td colSpan={2} className="border border-slate-400">합성수지파형관 100mm (인력시공)</td>
                                <td className="border border-slate-400">2공</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">km</td>
                                <td className="border border-slate-400">6,965</td>
                                <td className="border border-slate-400">85</td>
                                <td className="border border-slate-400">7,050</td>
                                <td className="border border-slate-400">42,387</td>
                                <td className="border border-slate-400">49,437</td>
                                <td className="border border-slate-400">6,617</td>
                                <td className="border border-slate-400">81</td>
                                <td className="border border-slate-400">{pipeline2x1.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{pipeline2x1.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{pipeline2x1.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{pipeline2x1.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(pipeline2x1.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(pipeline2x1.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(pipeline2x1.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td rowSpan={4} className="border border-slate-400">고압구조물</td>
                                <td rowSpan={3} className="border border-slate-400">맨홀</td>
                                <td className="border border-slate-400">MA4</td>
                                <td className="border border-slate-400">조립식</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">개소</td>
                                <td className="border border-slate-400">5,693</td>
                                <td className="border border-slate-400">8</td>
                                <td className="border border-slate-400">5,701</td>
                                <td className="border border-slate-400">3,785</td>
                                <td className="border border-slate-400">9,486</td>
                                <td className="border border-slate-400">5,693</td>
                                <td className="border border-slate-400">8</td>
                                <td className="border border-slate-400">{ma4.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma4.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma4.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma4.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma4.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma4.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma4.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">MA6</td>
                                <td className="border border-slate-400">조립식</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">개소</td>
                                <td className="border border-slate-400">6,064</td>
                                <td className="border border-slate-400">8</td>
                                <td className="border border-slate-400">6,072</td>
                                <td className="border border-slate-400">3,978</td>
                                <td className="border border-slate-400">10,050</td>
                                <td className="border border-slate-400">6,064</td>
                                <td className="border border-slate-400">8</td>
                                <td className="border border-slate-400">{ma6.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma6.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma6.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{ma6.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma6.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma6.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(ma6.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">ME6</td>
                                <td className="border border-slate-400">조립식</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">개소</td>
                                <td className="border border-slate-400">11,174</td>
                                <td className="border border-slate-400">13</td>
                                <td className="border border-slate-400">11,187</td>
                                <td className="border border-slate-400">6,257</td>
                                <td className="border border-slate-400">17,444</td>
                                <td className="border border-slate-400">11,174</td>
                                <td className="border border-slate-400">13</td>
                                <td className="border border-slate-400">{me6.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{me6.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{me6.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{me6.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(me6.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(me6.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(me6.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td className="border border-slate-400">핸드홀</td>
                                <td className="border border-slate-400">HB2(2방향용)</td>
                                <td className="border border-slate-400">조립식</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">개소</td>
                                <td className="border border-slate-400">3,057</td>
                                <td className="border border-slate-400">5</td>
                                <td className="border border-slate-400">3,062</td>
                                <td className="border border-slate-400">2,448</td>
                                <td className="border border-slate-400">5,510</td>
                                <td className="border border-slate-400">3,057</td>
                                <td className="border border-slate-400">5</td>
                                <td className="border border-slate-400">{hb2.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{hb2.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{hb2.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{hb2.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(hb2.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(hb2.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(hb2.totalResult).toLocaleString()}</td>
                            </tr>
                            <tr className="bg-yellow-200">
                                <td className="border border-slate-400">저압구조물</td>
                                <td className="border border-slate-400">저압접속함</td>
                                <td className="border border-slate-400">간선용(JBL)</td>
                                <td className="border border-slate-400">조립식</td>
                                <td className="border border-slate-400">사리도</td>
                                <td className="border border-slate-400">개소</td>
                                <td className="border border-slate-400">336</td>
                                <td className="border border-slate-400">1</td>
                                <td className="border border-slate-400">337</td>
                                <td className="border border-slate-400">717</td>
                                <td className="border border-slate-400">1,054</td>
                                <td className="border border-slate-400">336</td>
                                <td className="border border-slate-400">1</td>
                                <td className="border border-slate-400">{jbl.companyBeforeCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{jbl.contractCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{jbl.companyCost.toLocaleString()}</td>
                                <td className="border border-slate-400">{jbl.result.toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(jbl.companyResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(jbl.contractResult).toLocaleString()}</td>
                                <td className="border border-slate-400">{Math.round(jbl.totalResult).toLocaleString()}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="bg-orange-200 font-bold">
                                <td className="border border-slate-400" colSpan={5}>합계</td>
                                <td className="border border-slate-400" colSpan={12}></td>
                                <td className="border border-slate-400"></td>
                                <td className="border border-slate-400"></td>
                                <td className="border border-slate-400"></td>
                            </tr>
                        </tfoot>
                    </table>
                </CardBody>
            </Card>
        </>
    )
}
