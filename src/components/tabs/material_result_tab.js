import { Card, CardBody } from "@nextui-org/react"
import DetailResultHighCable from "./detail_material_result/high_cable"

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
                    <DetailResultHighCable />
                </CardBody>
            </Card>
        </>
    )
}