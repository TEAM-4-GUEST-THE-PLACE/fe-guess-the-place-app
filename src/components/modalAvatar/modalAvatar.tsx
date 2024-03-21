import {
  Box,
  CloseIcon,
  EditIcon,
  Icon,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  Text,
  View,
} from "@gluestack-ui/themed";
import { ModalHeader } from "@gluestack-ui/themed";
import {
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Avatar } from "./avatarItem";
import { Entypo } from "@expo/vector-icons";
import userStore from "../../store/user";

export default function ModalAvatar() {
  const { setDiamond, setAvatar, user } = userStore((state) => state);
  const [selectedAvatarData, setSelectedAvatarData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [avatarPrice, setAvatarPrice] = useState(0);


  const handleSubmit = () => {
    if (selectedAvatarData) {
      const { price, image } = selectedAvatarData;
      if (price) {
        if (user.diamond >= price) {
          setDiamond(user.diamond - price);
          setAvatar(image);
        } else {
          alert("Not enough diamond");
        }
      } else {
        setAvatar(image);
      }
    } else {
      alert("Please select an avatar");
    }
  };
  
  
  // const [showModal, setShowModal] = useState(false);
  // console.log(showModal);
  const ref = React.useRef(null);
  return (
    <Center>
      <Button
        marginRight={-60}
        mt={-35}
        bg="transparent"
        onPress={() => setShowModal(true)}
        ref={ref}
      >
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
            <Box >
            <Avatar onSelectAvatar={(avatarData: any) => setSelectedAvatarData(avatarData)} />

            </Box>
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
                onPress={() =>  {
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
                  setShowModal(false), handleSubmit();
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
