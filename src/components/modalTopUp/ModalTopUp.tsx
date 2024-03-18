import { CloseIcon, EditIcon, ModalBody, ModalCloseButton, ModalContent, ModalFooter, View } from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import { Button, ButtonText, Center, Modal, ModalBackdrop, Text } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FcPlus } from "react-icons/fc";
import { DiamondItem } from "./DiamondItem";
//   import { Avatar } from "./avatarItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { Box } from "@gluestack-ui/themed";

export default function ModalTopUp() {
    const [showModal, setShowModal] = useState(false);
    const ref = React.useRef(null);
    return (
        <Center>
            <Button marginRight={-50} mt={-70} bg="transparent" onPress={() => setShowModal(true)} ref={ref}>
                <ButtonText color="white" borderWidth={10} marginLeft={230} mt={10}>
                    <Box display="flex" flexDirection="row" alignItems="center" bg="#353d41">
                        {/* <AntDesign name="pluscircle" size={24} color="black" /> */}
                        <Text style={{ fontWeight: "bold", color: "white", marginRight: 10, marginLeft: 10 }}>9999</Text>
                        <TouchableOpacity>
                            <Box bg="lime" px={3} py={2} ml={5}>
                                <Icon name="plus" size={20} color="white" />
                            </Box>
                        </TouchableOpacity>
                    </Box>
                </ButtonText>
            </Button>
            <Modal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
                finalFocusRef={ref}
            >
                <ModalBackdrop />
                <ModalContent bg="#BBE7CC">
                    <ModalHeader>
                        <ModalCloseButton>
                            <Icon as={CloseIcon} />
                        </ModalCloseButton>
                    </ModalHeader>
                    <ModalBody>
                        <DiamondItem />
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
