"use client"

import { useMemo, useState } from "react"
import { Card, CardBody, Input, Radio, RadioGroup, Textarea } from "@nextui-org/react"

export default function InputTab() {
    const [option, setOption] = useState("resident");
    const [power, setPower] = useState(0);
    const [area, setArea] = useState(0);
    const description = useMemo(() => {
        const density = power / area
        const view_power = Number(power).toLocaleString("ko-KR")
        const view_area = Number(area).toLocaleString("ko-KR")
        return `부하밀도: ${density.toLocaleString("ko-KR")} kw/㎡\n규모선정1: ${view_power} (부하밀도)\n규모선정2: ${view_area} (대지면적)`
      }, [power, area])

    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <RadioGroup
                    label="1. 단지유형"
                    orientation="horizontal"
                    className="mb-2"
                    value={option}
                    onValueChange={setOption}
                    >
                        <Radio value="resident">주택단지</Radio>
                        <Radio value="industry">산업단지</Radio>
                    </RadioGroup>
                    <Input
                        type="number"
                        className="mb-2"
                        label="2. 수요전력"
                        labelPlacement="outside-left"
                        value={power}
                        onValueChange={setPower}
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">kW</span>
                            </div>
                        }
                    />
                    <Input
                        type="number"
                        className="mb-2"
                        label="3. 대지면적"
                        labelPlacement="outside-left"
                        value={area}
                        onValueChange={setArea}
                        endContent={
                            <div className="pointer-events-none flex items-center">
                                <span className="text-default-400 text-small">㎡ </span>
                            </div>
                        }
                    />
                    <Textarea
                        isReadOnly
                        label="4. 단지 규모 정보"
                        variant="bordered"
                        labelPlacement="outside"
                        placeholder="규모 계산 중..."
                        value={description}
                        className="max-w-ws"
                    />
                </CardBody>
            </Card>
        </>
    )
}