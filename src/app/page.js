"use client"

import { RecoilRoot } from "recoil";
import { Tab, Tabs } from "@nextui-org/react"
import InputTab from "@/components/v2/input/input_tab";
import ResultTab from "@/components/v2/result/result_tab";
import MainMaterialTab from "@/components/v2/main_material/main_material_tab";
import DetailMaterialTab from "@/components/v2/detail_material/detail_material_tab";
import ReferenceTab from "@/components/v2/reference/reference_tab";
import ReportV2Tab from "@/components/v2/report/report_tab";
import InvoiceV2Tab from "@/components/v2/invoice/invoice_tab";
import InputAreaTab from "@/components/v2/input/input_area_tab";

export default function Home() {
  return (
    <RecoilRoot>
      <main>
        <Tabs className="mt-3">
          <Tab key="input_area_tab" title="면적정보 입력창">
            <InputAreaTab />
          </Tab>
          <Tab key="input_tab" title="자동산출 입력창">
            <InputTab />
          </Tab>
          <Tab key="invoice_tab" title="설계용역비 산출">
            <InvoiceV2Tab />
          </Tab>
          <Tab key="result_tab" title="개략공사비 산출">
            <ResultTab />
          </Tab>
          <Tab key="material_tab" title="주자재 단위수량">
            <MainMaterialTab />
          </Tab>
          <Tab key="detail_material_tab" title="세부자재 단위수량">
            <DetailMaterialTab />
          </Tab>
          <Tab key="reference_tab" title="기준단가">
            <ReferenceTab />
          </Tab>
          <Tab key="report_tab" title="보고서">
            <ReportV2Tab />
          </Tab>
          {/* <Tab key="invoice_tab" title="설계용역비 산출 내역">
            <InvoiceTab />
          </Tab> */}
          {/* <Tab key="material_info_tab" title="자재 단위 수량&비중">
            <MaterialInfoTab />
          </Tab> */}
          {/* <Tab key="material_result_tab" title="자재 산출 내역">
            <MaterialResultTab />
          </Tab>
          <Tab key="cost_result_tab" title="개략공사비 산출 결과">
            <CostTab />
          </Tab> */}
          {/* <Tab key="temp_tab" title="개략공사비 이전버전">
            <CostResultTab />
          </Tab> */}
          {/* <Tab key="cost_table_tab" title="개략공사비 보고서">
            <ReportTab />
          </Tab> */}
          {/* <Tab key="reference_tab" title="참고자료">
            <ReferenceTab />
          </Tab> */}
        </Tabs>
      </main>
    </RecoilRoot>
  )
}
