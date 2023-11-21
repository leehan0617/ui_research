import { high_cable } from "@/constants/material"
import { Card, CardBody } from "@nextui-org/react"
import DetailMaterialResultTable from "./material/detail_material_result_table"

export default function MaterialResultTab() {
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8">
                            <p className="p-4 text-center font-bold">세부 자재별 수량 산출</p>
                        </div>
                    </div>
                    <DetailMaterialResultTable material={high_cable} />
                </CardBody>
            </Card>
        </>
    )
}