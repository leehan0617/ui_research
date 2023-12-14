import { Card, CardBody } from "@nextui-org/react";
import DetailResultHighCable from "./detail_material_result/high_cable";
import DetailResultLowCable from "./detail_material_result/low_cable";
import DetailResultGroundMachine from "./detail_material_result/ground_machine";
import DetailResultTransformer from "./detail_material_result/transformer";
import DetailResultStructure from "./detail_material_result/structure";
import DetailResultManhole from "./detail_material_result/manhole";
import DetailResultPipeline from "./detail_material_result/pipeline";

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
                    <DetailResultLowCable />
                    <DetailResultGroundMachine />
                    <DetailResultTransformer />
                    <DetailResultStructure />
                    <DetailResultManhole />
                    <DetailResultPipeline />
                </CardBody>
            </Card>
        </>
    )
}