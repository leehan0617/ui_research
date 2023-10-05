"use client"

import { useMemo, useState } from "react"
import { Input, Radio, RadioGroup, Textarea } from "@nextui-org/react"

export default function InputTab() {
    const [option, setOption] = useState("resident");
    const [power, setPower] = useState(0);
    const [area, setArea] = useState(0);
    const description = useMemo(() => {
        const density = power / area
        return `부하밀도: ${density} kw/㎡\n규모선정1: ${power} (부하밀도)\n규모선정2: ${area} (대지면적)`
      }, [power, area])

    return (
        <>
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
        </>
    )
}