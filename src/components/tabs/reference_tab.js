import Image from "next/image"
import { Card, CardBody } from "@nextui-org/react"
import ReferenceModal from "./reference/reference_modal"
import { CameraIcon } from "./reference/camera_icon"

export default function ReferenceTab() {
    const test_img = <>
        <p>test text</p>
        <Image src="/images/test_img.png"
            width={1024}
            height={1024}
            alt="test_img"
        />
    </>
    const camera_icon = <CameraIcon />
    return (
        <>
            <Card className="border-none">
                <CardBody>
                    <div className="grid grid-cols-8 gap-2">
                        <div className="col-span-8">
                            <p className="p-4 text-center font-bold">
                                아래 버튼을 클릭하시면 내용을 확인할 수 있습니다.
                            </p>
                        </div>
                        <div className="col-span-8 mb-4">
                            <ReferenceModal
                                button_text="설계감리 요율"
                                button_icon={camera_icon}
                                button_class="bg-gradient-to-tr from-sky-500 to-violet-400 text-white shadow-lg"
                                header_text="전력시설물공사 설계 및 설계감리 요율"
                                body_component={test_img}
                            />    
                        </div>
                        <div className="col-span-8 mb-4">
                            <ReferenceModal
                                button_text="손해배상 보험료"
                                button_icon={camera_icon}
                                button_class="bg-gradient-to-tr from-violet-300 to-green-500 text-white shadow-lg"
                                header_text="배전설계 용역업무 절차서"
                                body_component="test"
                            />            
                        </div>
                        <div className="col-span-8 mb-4">
                            <ReferenceModal
                                button_text="기준단가 근거(기획처)"
                                button_icon={camera_icon}
                                button_class="bg-gradient-to-tr from-green-400 to-yellow-500 text-white shadow-lg"
                                header_text="2023년 건설분야 예산 기준단가 개정 알림"
                                body_component="test"
                            />
                        </div>
                        <div className="col-span-8 mb-4">
                            <ReferenceModal
                                button_text="절감률 근거(배전계획처)"
                                button_icon={camera_icon}
                                button_class="bg-gradient-to-tr from-yellow-300 to-pink-400 text-white shadow-lg"
                                header_text="배전설계 용역업무 절차서(잠정) 개정 알림"
                                body_component="test3"
                            />
                        </div>
                    </div>
                </CardBody>
            </Card>
        </>
    )
}