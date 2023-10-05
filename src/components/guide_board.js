"use client"

import { Accordion, AccordionItem, Divider } from "@nextui-org/react"

export default function GuideBoard() {
    return (
        <>
            <Divider className="my-4" />
            <Accordion variant="bordered" className="bg-violet-100 mb-2"  isCompact defaultExpandedKeys={["1"]}>
                <AccordionItem key="1" aria-label="guide accordion"  title={<strong className="text-fuchsia-400">배전간선(지중) 개략공사비 자동산출</strong>}>
                    <p className="text-sm">아래 입력창 탭에서 단지유형, 수요전력, 대지면적을 입력해 주세요.</p>
                    <p className="text-sm text-fuchsia-600 font-semibold underline decoration-wavy">개발단지내에 전체 신설의 경우에 한함 (기설설비 활용시 적용불가)</p>
                </AccordionItem>
            </Accordion>
        </>
    )
}