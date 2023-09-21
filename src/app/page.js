"use client"

import { Card, CardBody, Divider, Input, Tab, Tabs } from "@nextui-org/react"

export default function Home() {
  return (
    <main>
      <Divider className="my-4"/>
      <Card className="border-none bg-orange-100 mb-2">
        <CardBody>
          <p>아래 입력창 탭에서 단지유형, 수요전력, 대지면적을 입력해 주세요.</p>
          <p className="text-rose-500 font-semibold">개발단지내에 전체 신설의 경우에 한함(기설설비 활용시 적용불가)</p>
        </CardBody>
      </Card>
      <Tabs>
        <Tab key="input_tab" title="입력창">
          <Input type="text" className="mb-2" label="1. 단지유형" labelPlacement="outside-left"></Input>
          <Input type="text" className="mb-2" label="2. 수요전력" labelPlacement="outside-left"></Input>
          <Input type="text" className="mb-2" label="3. 대지면적" labelPlacement="outside-left"></Input>
        </Tab>
        <Tab key="result_tab1" title="설계용역비">
          2222
        </Tab>
        <Tab key="result_tab2" title="자재산출로직">
          3333
        </Tab>
        <Tab key="result_tab3" title="계략공사비 총괄표">
          4444
        </Tab>
        <Tab key="result_tab4" title="참고자료">
          5555
        </Tab>
      </Tabs>
      {/* <div className="grid grid-cols-4 gap-4">
        <div>01</div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
        <div>06</div>
        <div>07</div>
        <div>08</div>
        <div>09</div>
      </div>
      <div className='grid grid-cols-5'>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
        <div>01</div>
      </div> */}
    </main>
  )
}
