"use client"

import { Card, CardBody, Divider } from "@nextui-org/react"
import ScaleGuide from "./material/scale_guide"

export default function MaterialLogicTab() {
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="rounded-md col-span-8 text-center font-bold">
                            <p className="p-4">규모별 주자재 단위 수량</p>
                        </div>
                    </div>
                    <ScaleGuide />
                </CardBody>
            </Card>
        </>
    )
}