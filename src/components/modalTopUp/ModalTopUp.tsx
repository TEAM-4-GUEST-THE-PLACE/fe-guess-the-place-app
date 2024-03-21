import {
  CloseIcon,
  EditIcon,
  Image,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  View,
} from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import {
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
  Text,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FcPlus } from "react-icons/fc";
import { DiamondItem } from "./DiamondItem";
//   import { Avatar } from "./avatarItem";
import Icon from "react-native-vector-icons/FontAwesome";
import { TouchableOpacity } from "react-native";
import { Box } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";

export default function ModalTopUp() {
  const [showModal, setShowModal] = useState(false);
  // console.log(showModal);
  const ref = React.useRef(null);
  return (
    <Center>
      <Box bg="red" mt={30}>
        <TouchableOpacity>
          <Button
            marginLeft={250}
            mt={-70}
            bg="rgba(0, 0, 0, 0.5)"
            w="$24"
            h={"$7"}
            onPress={() => setShowModal(true)}
            ref={ref}
          >
            {/* <FontAwesome name="diamond" size={29} color="#00e5ff" marginRight={24} /> */}
            <Image
              alt="diamond"
              source={require("../../../assets/logo/diamond.png")}
              style={{ width: 29, height: 30, marginRight: 30 }}
            />

            <ButtonText
              color="white"
              borderWidth={10}
              mt={2}
              ml={-5}
            >0</ButtonText>

            <Box bg="lime" px={2} py={2} ml={1}>
              <Icon name="plus" size={22} color="white" />
            </Box>
          </Button>
        </TouchableOpacity>
      </Box>

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
              <CloseIcon />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <DiamondItem />
          </ModalBody>
          <View display="flex" justifyContent="center" alignItems="center">
            <ModalFooter>
              <Button
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
