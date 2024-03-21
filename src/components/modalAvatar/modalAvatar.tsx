import { CloseIcon, EditIcon, Icon, ModalBody, ModalCloseButton, ModalContent, ModalFooter, Text, View } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Button, ButtonText, Center, Modal, ModalBackdrop } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Avatar } from "./avatarItem";
import { Entypo } from "@expo/vector-icons";

export default function ModalAvatar() {
    const [showModal, setShowModal] = useState(false);
    // console.log(showModal);
    const ref = React.useRef(null);
    return (
        <Center>
            <Button marginRight={-60} mt={-35} bg="transparent" onPress={() => setShowModal(true)} ref={ref}>
                <View
                    style={{
                        width: 30,
                        height: 30,
                        borderRadius: 25,
                        backgroundColor: "#2075b8",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <ButtonText color="white">
                        <Entypo name="pencil" size={24} color="white" />
                    </ButtonText>
                </View>
            </Button>
            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent bg="rgba(0, 0, 0, 0.5)">
                    <ModalHeader>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <Avatar />
                    </ModalBody>
                    <View display="flex" justifyContent="center" alignItems="center">
                        <ModalFooter>
                            <Button
                                bg="red"
                                variant="outline"
                                size="sm"
                                w={120}
                                action="secondary"
                                mr="$3"
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                <ButtonText color="white">Cancel</ButtonText>
                            </Button>
                            <Button
                                w={120}
                                size="sm"
                                action="positive"
                                borderWidth="$0"
                                onPress={() => {
                                    setShowModal(false);
                                }}
                            >
                                <ButtonText>Save</ButtonText>
                            </Button>
                        </ModalFooter>
                    </View>
                </ModalContent>
            </Modal>
        </Center>
    );
}
