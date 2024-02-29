import { pipeline9Price, pipeline6Price, pipeline4Price, pipeline2Price } from "@/constants/price";
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, ModalFooter } from "@nextui-org/react";

export default function ResultPipeline({ props }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { pipeline, area } = props;
    const { unitCount, p175, p150, p100 } = pipeline;
    const { p175x9, p175x6, p175x4, p175x2 } = pipeline;
    const { p150x9, p150x6, p150x4, p150x2 } = pipeline;
    const { p100x9, p100x6, p100x4, p100x2 } = pipeline;
    const p175Scale = Math.round(unitCount * p175 * 1000) / 1000;
    const p150Scale = Math.round(unitCount * p150 * 1000) / 1000;
    const p100Scale = Math.round(unitCount * p100 * 1000) / 1000;

    return <>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead>
                    <tr>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">관로</th>
                        <th rowSpan={2} className="w-1/6 bg-sky-50 border border-slate-600">수요전력규모</th>
                        <th colSpan={4} className="w-2/6 bg-blue-500 text-white border border-slate-600">설계수량</th>
                        <th colSpan={2} className="w-2/6 bg-green-100 border border-slate-600">공사비 단가</th>
                    </tr>
                    <tr>
                        <th className="bg-blue-500 text-white border border-slate-600">9공</th>
                        <th className="bg-blue-500 text-white border border-slate-600">6공</th>
                        <th className="bg-blue-500 text-white border border-slate-600">4공</th>
                        <th className="bg-blue-500 text-white border border-slate-600">2공</th>
                        <th className="bg-green-100 border border-slate-600">회사분</th>
                        <th className="bg-green-100 border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">175mm</td>
                        <td className="border border-slate-600">{p175Scale}</td>
                        <td className="border border-slate-600">{Math.round(p175Scale * p175x9 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p175Scale * p175x6 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p175Scale * p175x4 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p175Scale * p175x2 * area / 1000 * 100) / 100}</td>
                        <td rowSpan={4} className="cursor-pointer border border-slate-600" onClick={onOpen}></td>
                        <td rowSpan={4} className="cursor-pointer border border-slate-600" onClick={onOpen}></td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">150mm</td>
                        <td className="border border-slate-600">{p150Scale}</td>
                        <td className="border border-slate-600">{Math.round(p150Scale * p150x9 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p150Scale * p150x6 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p150Scale * p150x4 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p150Scale * p150x2 * area / 1000 * 100) / 100}</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">100mm</td>
                        <td className="border border-slate-600">{p100Scale}</td>
                        <td className="border border-slate-600">{Math.round(p100Scale * p100x9 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p100Scale * p100x6 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p100Scale * p100x4 * area / 1000 * 100) / 100}</td>
                        <td className="border border-slate-600">{Math.round(p100Scale * p100x2 * area / 1000 * 100) / 100}</td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {Math.round((p175Scale + p150Scale + p100Scale) * 1000) / 1000}
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x9 * area / 1000) + 
                                (p150Scale * p150x9 * area / 1000) + 
                                (p100Scale * p100x9 * area / 1000)) / 9 * 100) / 100
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x6 * area / 1000) + 
                                (p150Scale * p150x6 * area / 1000) + 
                                (p100Scale * p100x6 * area / 1000)) / 6 * 100) / 100
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x4 * area / 1000) + 
                                (p150Scale * p150x4 * area / 1000) + 
                                (p100Scale * p100x4 * area / 1000)) / 4 * 100) / 100
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x2 * area / 1000) + 
                                (p150Scale * p150x2 * area / 1000) + 
                                (p100Scale * p100x2 * area / 1000)) / 2 * 100) / 100
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-span-6 mt-3">
            <table className="w-full text-sm text-center">
                <thead className="bg-green-100">
                    <tr>
                        <th rowSpan={2} className="w-1/4 border border-slate-600">관로</th>
                        <th colSpan={2} className="w-2/4 border border-slate-600">공사비</th>
                        <th rowSpan={2} className="w-1/4 border border-slate-600">개략공사비</th>
                    </tr>
                    <tr>
                        <th className="border border-slate-600">회사분</th>
                        <th className="border border-slate-600">도급분</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-600">9공</td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x9 * area / 1000) + 
                                (p150Scale * p150x9 * area / 1000) + 
                                (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x9 * area / 1000) + 
                                (p150Scale * p150x9 * area / 1000) + 
                                (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                (Math.round(((p175Scale * p175x9 * area / 1000) + 
                                (p150Scale * p150x9 * area / 1000) + 
                                (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.company)
                                +
                                Math.round(((p175Scale * p175x9 * area / 1000) + 
                                (p150Scale * p150x9 * area / 1000) + 
                                (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.customer)).toLocaleString()
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">6공</td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x6 * area / 1000) + 
                                (p150Scale * p150x6 * area / 1000) + 
                                (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x6 * area / 1000) + 
                                (p150Scale * p150x6 * area / 1000) + 
                                (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                (Math.round(((p175Scale * p175x6 * area / 1000) + 
                                (p150Scale * p150x6 * area / 1000) + 
                                (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.company)
                                +
                                Math.round(((p175Scale * p175x6 * area / 1000) + 
                                (p150Scale * p150x6 * area / 1000) + 
                                (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.customer)).toLocaleString()
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">4공</td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x4 * area / 1000) + 
                                (p150Scale * p150x4 * area / 1000) + 
                                (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x4 * area / 1000) + 
                                (p150Scale * p150x4 * area / 1000) + 
                                (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                (Math.round(((p175Scale * p175x4 * area / 1000) + 
                                (p150Scale * p150x4 * area / 1000) + 
                                (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.company)
                                +
                                Math.round(((p175Scale * p175x4 * area / 1000) + 
                                (p150Scale * p150x4 * area / 1000) + 
                                (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.customer)).toLocaleString()
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-slate-600">2공</td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x2 * area / 1000) + 
                                (p150Scale * p150x2 * area / 1000) + 
                                (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.company).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(((p175Scale * p175x2 * area / 1000) + 
                                (p150Scale * p150x2 * area / 1000) + 
                                (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.customer).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                (Math.round(((p175Scale * p175x2 * area / 1000) + 
                                (p150Scale * p150x2 * area / 1000) + 
                                (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.company)
                                +
                                Math.round(((p175Scale * p175x2 * area / 1000) + 
                                (p150Scale * p150x2 * area / 1000) + 
                                (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.customer)).toLocaleString()
                            }
                        </td>
                    </tr>
                    <tr className="bg-gray-100">
                        <td className="border border-slate-600">계</td>
                        <td className="border border-slate-600">
                            {
                                Math.round(
                                    Math.round(((p175Scale * p175x9 * area / 1000) + (p150Scale * p150x9 * area / 1000) + (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.company) +
                                    Math.round(((p175Scale * p175x6 * area / 1000) + (p150Scale * p150x6 * area / 1000) + (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.company) +
                                    Math.round(((p175Scale * p175x4 * area / 1000) + (p150Scale * p150x4 * area / 1000) + (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.company) +
                                    Math.round(((p175Scale * p175x2 * area / 1000) + (p150Scale * p150x2 * area / 1000) + (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.company)
                                ).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(
                                    Math.round(((p175Scale * p175x9 * area / 1000) + (p150Scale * p150x9 * area / 1000) + (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.customer) +
                                    Math.round(((p175Scale * p175x6 * area / 1000) + (p150Scale * p150x6 * area / 1000) + (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.customer) +
                                    Math.round(((p175Scale * p175x4 * area / 1000) + (p150Scale * p150x4 * area / 1000) + (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.customer) +
                                    Math.round(((p175Scale * p175x2 * area / 1000) + (p150Scale * p150x2 * area / 1000) + (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.customer)
                                ).toLocaleString()
                            }
                        </td>
                        <td className="border border-slate-600">
                            {
                                Math.round(Math.round(
                                    Math.round(((p175Scale * p175x9 * area / 1000) + (p150Scale * p150x9 * area / 1000) + (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.company) +
                                    Math.round(((p175Scale * p175x6 * area / 1000) + (p150Scale * p150x6 * area / 1000) + (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.company) +
                                    Math.round(((p175Scale * p175x4 * area / 1000) + (p150Scale * p150x4 * area / 1000) + (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.company) +
                                    Math.round(((p175Scale * p175x2 * area / 1000) + (p150Scale * p150x2 * area / 1000) + (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.company)
                                )
                                +
                                Math.round(
                                    Math.round(((p175Scale * p175x9 * area / 1000) + (p150Scale * p150x9 * area / 1000) + (p100Scale * p100x9 * area / 1000)) / 9 * pipeline9Price?.customer) +
                                    Math.round(((p175Scale * p175x6 * area / 1000) + (p150Scale * p150x6 * area / 1000) + (p100Scale * p100x6 * area / 1000)) / 6 * pipeline6Price?.customer) +
                                    Math.round(((p175Scale * p175x4 * area / 1000) + (p150Scale * p150x4 * area / 1000) + (p100Scale * p100x4 * area / 1000)) / 4 * pipeline4Price?.customer) +
                                    Math.round(((p175Scale * p175x2 * area / 1000) + (p150Scale * p150x2 * area / 1000) + (p100Scale * p100x2 * area / 1000)) / 2 * pipeline2Price?.customer)
                                )).toLocaleString()
                            }
                        </td>
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