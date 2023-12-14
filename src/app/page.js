"use client"

import { RecoilRoot } from "recoil";
import { Tab, Tabs } from "@nextui-org/react"
import CostResultTab from "@/components/tabs/cost_result_tab";
import CostTab from "@/components/tabs/cost_tab";
import MaterialInfoTab from "@/components/tabs/material_info_tab";
import MaterialResultTab from "@/components/tabs/material_result_tab"; 
import InputTab from "@/components/tabs/input_tab";
import InvoiceTab from "@/components/tabs/invoice_tab";
import ReferenceTab from "@/components/tabs/reference_tab";
import ReportTab from "@/components/tabs/report_tab";

export default function Home() {
  return (
    <RecoilRoot>
      <main>
        <Tabs className="mt-3">
          <Tab key="input_tab" title="자동산출 입력창">
            <InputTab />
          </Tab>
          <Tab key="invoice_tab" title="설계용역비 산출 내역">
            <InvoiceTab />
          </Tab>
          <Tab key="material_info_tab" title="자재 단위 수량&비중">
            <MaterialInfoTab />
          </Tab>
          <Tab key="material_result_tab" title="자재 산출 내역">
            <MaterialResultTab />
          </Tab>
          <Tab key="cost_result_tab" title="개략공사비 산출 결과">
            <CostTab />
          </Tab>
          <Tab key="temp_tab" title="개략공사비 이전버전">
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
    </RecoilRoot>
  )
}
