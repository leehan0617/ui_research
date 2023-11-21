"use client"

import { Card, CardBody } from "@nextui-org/react"
import ScaleGuide from "./material/scale_guide"

export default function MaterialInfoTab() {
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8">
                            <p className="p-4 text-center font-bold">규모별 주자재 단위 수량</p>
                        </div>
                    </div>
                    <ScaleGuide />
                </CardBody>
            </Card>
        </>
    )
}