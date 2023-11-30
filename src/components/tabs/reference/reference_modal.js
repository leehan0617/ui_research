import { Divider, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Button } from "@nextui-org/react"

export default function ReferenceModal({button_icon, button_text, button_class, header_text, body_component}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()

    return (
        <>
            <Button onPress={onOpen}
                className={button_class}
                startContent={ button_icon ? button_icon : "" }
            >
                {button_text}
            </Button>
            <Modal size="2xl" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {
                        (onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">{header_text}</ModalHeader>
                                <Divider />
                                <ModalBody>
                                    {body_component}
                                </ModalBody>
                                <Divider />
                                <ModalFooter>
                                    <Button radius="full"
                                        className={button_class}
                                        onPress={onClose}>
                                            닫기
                                    </Button>
                                </ModalFooter>
                            </>
                        )
                    }
                </ModalContent>
            </Modal>
        </>
    )
}