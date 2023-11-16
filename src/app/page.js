"use client"

import { Card, CardBody, Tab, Tabs } from "@nextui-org/react"
import CostResultTab from "@/components/tabs/cost_result_tab";
import MaterialLogicTab from "@/components/tabs/material_logic_tab";
import InputTab from "@/components/tabs/input_tab";
import InvoiceTab from "@/components/tabs/invoice_tab";
import ReferenceTab from "@/components/tabs/reference_tab";
import ReportTab from "@/components/tabs/report_tab";

export default function Home() {
  return (
    <main>
      <Tabs className="mt-3">
        <Tab key="input_tab" title="자동산출 입력창">
          <InputTab />
        </Tab>
        <Tab key="invoice_tab" title="설계용역비 산출 내역서">
          <InvoiceTab />
        </Tab>
        <Tab key="material_logic_tab" title="자재산출로직">
          <MaterialLogicTab />
        </Tab>
        <Tab key="cost_result_tab" title="개략공사비 산출 결과">
          <CostResultTab />
        </Tab>
        <Tab key="cost_table_tab" title="개략공사비 보고서">
          <ReportTab />
        </Tab>
        <Tab key="reference_tab" title="참고자료">
          <ReferenceTab />
        </Tab>
      </Tabs>
    </main>
  )
}
