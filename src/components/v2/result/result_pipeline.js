import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";
import { p175State, p150State, p100State, p9PriceState, p6PriceState, p4PriceState, p2PriceState, pipelineSumState, direct175x9State, direct175x6State, direct175x4State, direct175x2State, direct150x9State, direct150x6State, direct150x4State, direct150x2State, direct100x9State, direct100x6State, direct100x4State, direct100x2State } from "@/states/pipeline_selector";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useState } from "react";

export default function ResultPipeline() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const p175 = useRecoilValue(p175State);
    const p150 = useRecoilValue(p150State);
    const p100 = useRecoilValue(p100State);
    const p9Price = useRecoilValue(p9PriceState);
    const p6Price = useRecoilValue(p6PriceState);
    const p4Price = useRecoilValue(p4PriceState);
    const p2Price = useRecoilValue(p2PriceState);
    const pipelineTotal = useRecoilValue(pipelineSumState);

    const [temp175x9, setTemp175x9] = useState("");
    const [temp175x6, setTemp175x6] = useState("");
    const [temp175x4, setTemp175x4] = useState("");
    const [temp175x2, setTemp175x2] = useState("");

    const [temp150x9, setTemp150x9] = useState("");
    const [temp150x6, setTemp150x6] = useState("");
    const [temp150x4, setTemp150x4] = useState("");
    const [temp150x2, setTemp150x2] = useState("");

    const [temp100x9, setTemp100x9] = useState("");
    const [temp100x6, setTemp100x6] = useState("");
    const [temp100x4, setTemp100x4] = useState("");
    const [temp100x2, setTemp100x2] = useState("");

    const setDirect175x9 = useSetRecoilState(direct175x9State);
    const setDirect175x6 = useSetRecoilState(direct175x6State);
    const setDirect175x4 = useSetRecoilState(direct175x4State);
    const setDirect175x2 = useSetRecoilState(direct175x2State);

    const setDirect150x9 = useSetRecoilState(direct150x9State);
    const setDirect150x6 = useSetRecoilState(direct150x6State);
    const setDirect150x4 = useSetRecoilState(direct150x4State);
    const setDirect150x2 = useSetRecoilState(direct150x2State);

    const setDirect100x9 = useSetRecoilState(direct100x9State);
    const setDirect100x6 = useSetRecoilState(direct100x6State);
    const setDirect100x4 = useSetRecoilState(direct100x4State);
    const setDirect100x2 = useSetRecoilState(direct100x2State);

    const change175x9 = e => {
        if (temp175x9 !== "") {
            setDirect175x9(Number(temp175x9));
        }
    }
    const change175x6 = e => {
        if (temp175x6 !== "") {
            setDirect175x6(Number(temp175x6));
        }
    }
    const change175x4 = e => {
        if (temp175x4 !== "") {
            setDirect175x4(Number(temp175x4));
        }
    }
    const change175x2 = e => {
        if (temp175x2 !== "") {
            setDirect175x2(Number(temp175x2));
        }
    }

    const change150x9 = e => {
        if (temp150x9 !== "") {
            setDirect150x9(Number(temp150x9));
        }
    }
    const change150x6 = e => {
        if (temp150x6 !== "") {
            setDirect150x6(Number(temp150x6));
        }
    }
    const change150x4 = e => {
        if (temp150x4 !== "") {
            setDirect150x4(Number(temp150x4));
        }
    }
    const change150x2 = e => {
        if (temp150x2 !== "") {
            setDirect150x2(Number(temp150x2));
        }
    }

    const change100x9 = e => {
        if (temp100x9 !== "") {
            setDirect100x9(Number(temp100x9));
        }
    }
    const change100x6 = e => {
        if (temp100x6 !== "") {
            setDirect100x6(Number(temp100x6));
        }
    }
    const change100x4 = e => {
        if (temp100x4 !== "") {
            setDirect100x4(Number(temp100x4));
        }
    }
    const change100x2 = e => {
        if (temp100x2 !== "") {
            setDirect100x2(Number(temp100x2));
        }
    }

    return <>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={3} className="bg-sky-50 border border-slate-600">관로</th>
                        <th colSpan={2} rowSpan={2} className="w-1/8 bg-green-100 border border-slate-600">공사비 단가</th>
                        <th colSpan={8} className="bg-blue-500 text-white border border-slate-600">설계수량</th>
                    </tr>
                    <tr>
                        <th colSpan={2} className="bg-blue-500 text-white border border-slate-600">9공</th>
                        <th colSpan={2} className="bg-blue-500 text-white border border-slate-600">6공</th>
                        <th colSpan={2} className="bg-blue-500 text-white border border-slate-600">4공</th>
                        <th colSpan={2} className="bg-blue-500 text-white border border-slate-600">2공</th>
                    </tr>
                    <tr>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">산출수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">확정수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">산출수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">확정수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">산출수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">확정수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">산출수량</th>
                        <th className="w-1/12 bg-green-100 border border-slate-600">확정수량</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">175mm</td>
                        <td rowSpan={4} className="cursor-pointer border border-slate-600" onClick={onOpen}></td>
                        <td rowSpan={4} className="cursor-pointer border border-slate-600" onClick={onOpen}></td>
                        <td className="border border-slate-600">{p175?.count9}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p175?.count9}
                                min={0}
                                onChange={(e) => setTemp175x9(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change175x9}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p175?.count6}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p175?.count6}
                                min={0}
                                onChange={(e) => setTemp175x6(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change175x6}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p175?.count4}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p175?.count4}
                                min={0}
                                onChange={(e) => setTemp175x4(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change175x4}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p175?.count2}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p175?.count2}
                                min={0}
                                onChange={(e) => setTemp175x2(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change175x2}>적용</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150mm</td>
                        <td className="border border-slate-600">{p150?.count9}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p150?.count9}
                                min={0}
                                onChange={(e) => setTemp150x9(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change150x9}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p150?.count6}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p150?.count6}
                                min={0}
                                onChange={(e) => setTemp150x6(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change150x6}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p150?.count4}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p150?.count4}
                                min={0}
                                onChange={(e) => setTemp150x4(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change150x4}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p150?.count2}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p150?.count2}
                                min={0}
                                onChange={(e) => setTemp150x2(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change150x2}>적용</button>
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">100mm</td>
                        <td className="border border-slate-600">{p100?.count9}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p100?.count9}
                                min={0}
                                onChange={(e) => setTemp100x9(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change100x9}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p100?.count6}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p100?.count6}
                                min={0}
                                onChange={(e) => setTemp100x6(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change100x6}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p100?.count4}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p100?.count4}
                                min={0}
                                onChange={(e) => setTemp100x4(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change100x4}>적용</button>
                        </td>
                        <td className="border border-slate-600">{p100?.count2}</td>
                        <td className="border border-slate-600" style={{ display: "inline-flex" }}>
                            <input type="number"
                                className="ring-2 text-right"
                                style={{ width: 60 + '%' }} 
                                placeholder={p100?.count2}
                                min={0}
                                onChange={(e) => setTemp100x2(e.target.value) } />
                            <button type="button" className="bg-rose-600 text-slate-100" style={{ width: 40 + '%' }} onClick={change100x2}>적용</button>
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{pipelineTotal?.count9?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count9?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count6?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count6?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count4?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count4?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count2?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.count2?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-12 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-green-100">
                    <tr>
                        <th rowSpan={2} className="w-1/4 border border-slate-600">관로</th>
                        <th colSpan={2} className="w-2/4 border border-slate-600">공사비</th>
                        <th rowSpan={2} className="w-1/4 border bg-blue-500 text-white border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th className="border border-slate-600">회사분</th>
                        <th className="border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">9공</td>
                        <td className="border border-slate-600">{p9Price?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p9Price?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p9Price?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">6공</td>
                        <td className="border border-slate-600">{p6Price?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p6Price?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p6Price?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">4공</td>
                        <td className="border border-slate-600">{p4Price?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p4Price?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p4Price?.price?.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">2공</td>
                        <td className="border border-slate-600">{p2Price?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p2Price?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{p2Price?.price?.toLocaleString()}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">{pipelineTotal?.companyPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.customerPrice?.toLocaleString()}</td>
                        <td className="border border-slate-600">{pipelineTotal?.price?.toLocaleString()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">관로(경기본부자료)</ModalHeader>
                        <ModalBody>
                            <table className="w-full text-sm text-center mb-3">
                                <thead>
                                    <tr>
                                        <th className="bg-blue-500 text-white border border-slate-600">구분</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">규모</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">관공 유형</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">175mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">150mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">100mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={5} className="text-blue-500 border border-slate-600"><b>산업단지</b></td>
                                        <td rowSpan={5} className="border border-slate-600"><b>평균</b></td>
                                        <td className="border border-slate-600 text-red-500">1. 3단3열(9공)</td>
                                        <td className="border border-slate-600">24.10%</td>
                                        <td className="border border-slate-600">12.30%</td>
                                        <td className="border border-slate-600">4.70%</td>
                                        <td className="border border-slate-600">41.70%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-red-500">2. 3단2열(6공)</td>
                                        <td className="border border-slate-600">12.00%</td>
                                        <td className="border border-slate-600">13.00%</td>
                                        <td className="border border-slate-600">4.70%</td>
                                        <td className="border border-slate-600">29.70%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-red-500">3. 2단2열(4공)</td>
                                        <td className="border border-slate-600">8.00%</td>
                                        <td className="border border-slate-600">6.50%</td>
                                        <td className="border border-slate-600">4.70%</td>
                                        <td className="border border-slate-600">19.20%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-blue-500">4. 2단1열(2공)</td>
                                        <td className="border border-slate-600">-</td>
                                        <td className="border border-slate-600">-</td>
                                        <td className="border border-slate-600">9.40%</td>
                                        <td className="border border-slate-600">9.40%</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border border-slate-600">계</td>
                                        <td className="border border-slate-600">44.10%</td>
                                        <td className="border border-slate-600">32.40%</td>
                                        <td className="border border-slate-600">23.50%</td>
                                        <td className="border border-slate-600">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="w-full text-sm text-center">
                                <thead>
                                    <tr>
                                        <th className="bg-blue-500 text-white border border-slate-600">구분</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">규모</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">관공 유형</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">175mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">150mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">100mm</th>
                                        <th className="bg-blue-500 text-white border border-slate-600">계</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td rowSpan={5} className="text-blue-500 border border-slate-600"><b>주택단지</b></td>
                                        <td rowSpan={5} className="border border-slate-600"><b>평균</b></td>
                                        <td className="border border-slate-600 text-red-500">1. 3단3열(9공)</td>
                                        <td className="border border-slate-600">18.50%</td>
                                        <td className="border border-slate-600">10.60%</td>
                                        <td className="border border-slate-600">7.90%</td>
                                        <td className="border border-slate-600">37.00%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-red-500">2. 3단2열(6공)</td>
                                        <td className="border border-slate-600">9.30%</td>
                                        <td className="border border-slate-600">10.60%</td>
                                        <td className="border border-slate-600">7.90%</td>
                                        <td className="border border-slate-600">27.80%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-red-500">3. 2단2열(4공)</td>
                                        <td className="border border-slate-600">6.20%</td>
                                        <td className="border border-slate-600">5.30%</td>
                                        <td className="border border-slate-600">7.90%</td>
                                        <td className="border border-slate-600">19.40%</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-slate-600 text-blue-500">4. 2단1열(2공)</td>
                                        <td className="border border-slate-600">-</td>
                                        <td className="border border-slate-600">-</td>
                                        <td className="border border-slate-600">15.80%</td>
                                        <td className="border border-slate-600">15.80%</td>
                                    </tr>
                                    <tr className="bg-gray-100">
                                        <td className="border border-slate-600">계</td>
                                        <td className="border border-slate-600">34.00%</td>
                                        <td className="border border-slate-600">26.50%</td>
                                        <td className="border border-slate-600">39.50%</td>
                                        <td className="border border-slate-600">100%</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" variant="light" onPress={onClose}>닫기</Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    </>
}