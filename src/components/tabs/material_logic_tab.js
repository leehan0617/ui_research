"use client"

import { Card, CardHeader, CardBody, Divider } from "@nextui-org/react"
import ScaleGuide from "./material/scale_guide"

export default function MaterialLogicTab() {
    return (
        <>
            <Card className="border-none">
                <CardHeader>
                    <p>자재산출로직</p>
                </CardHeader>
                <Divider />
                <CardBody>
                    <p className="mb-2">규모별 주자재 단위 수량</p>
                    <ScaleGuide />
                </CardBody>
            </Card>
        </>
    )
}