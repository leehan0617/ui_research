"use client"

import { Tab, Tabs } from "@nextui-org/react"
import CostTableTab from "@/components/tabs/cost_table_tab";
import CostResultTab from "@/components/tabs/cost_result_tab";
import GuideBoard from "@/components/guide_board";
import MaterialLogicTab from "@/components/tabs/material_logic_tab";
import InputTab from "@/components/tabs/input_tab";
import InvoiceTab from "@/components/tabs/invoice_tab";
import ReferenceTab from "@/components/tabs/reference_tab";

export default function Home() {
  return (
    <main>
      <GuideBoard />
      <Tabs>
        <Tab key="input_tab" title="입력창">
          <InputTab />
        </Tab>
        <Tab key="invoice_tab" title="설계용역비">
          <InvoiceTab />
        </Tab>
        <Tab key="material_logic_tab" title="자재산출로직">
          <MaterialLogicTab />
        </Tab>
        <Tab key="cost_result_tab" title="개략공사비 산출 결과">
          <CostResultTab />
        </Tab>
        <Tab key="cost_table_tab" title="개략공사비 총괄표">
          <CostTableTab />
        </Tab>
        <Tab key="reference_tab" title="참고자료">
          <ReferenceTab />
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
