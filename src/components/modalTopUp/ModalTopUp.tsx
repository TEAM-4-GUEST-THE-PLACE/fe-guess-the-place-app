// import {
//   CloseIcon,
//   EditIcon,
//   Image,
//   ModalBody,
//   ModalCloseButton,
//   ModalContent,
//   ModalFooter,
//   View,
// } from "@gluestack-ui/themed";
// import { ModalHeader } from "@gluestack-ui/themed";
// import {
//   Button,
//   ButtonText,
//   Center,
//   Modal,
//   ModalBackdrop,
//   Text,
// } from "@gluestack-ui/themed";
// import React, { useState } from "react";
// import { DiamondItem } from "./DiamondItem";
// import Icon from "react-native-vector-icons/FontAwesome";
// import { TouchableOpacity } from "react-native";
// import { Box } from "@gluestack-ui/themed";
// import userStore from "../../store/user";
// import { IDiamond } from "../../interface/diamond";

// export default function ModalTopUp() {
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDiamond, setSelectedDiamond] = useState(0);
//   const setDiamond = userStore((state) => state.setDiamond);

//   // console.log(showModal);
//   const handleSave = () => {
//     if (selectedDiamond) {
//       setDiamond(selectedDiamond);
//     }
//   };
//   const ref = React.useRef(null);
//   return (
//     <Center>
//       <Box bg="red" mt={30}>
//         <TouchableOpacity>
//           <Button
//             marginLeft={250}
//             mt={-70}
//             bg="rgba(0, 0, 0, 0.5)"
//             w="$24"
//             h={"$7"}
//             onPress={() => setShowModal(true)}
//             ref={ref}
//           >
//             {/* <FontAwesome name="diamond" size={29} color="#00e5ff" marginRight={24} /> */}
//             <Image
//               alt="diamond"
//               source={require("../../../assets/logo/diamond.png")}
//               style={{ width: 29, height: 30, marginRight: 30 }}
//             />

//             <ButtonText color="white" borderWidth={10} mt={2} ml={-5}>
//               0
//             </ButtonText>

//             <Box bg="lime" px={2} py={2} ml={1}>
//               <Icon name="plus" size={22} color="white" />
//             </Box>
//           </Button>
//         </TouchableOpacity>
//       </Box>

//       <Modal
//         isOpen={showModal}
//         onClose={() => {
//           setShowModal(false);
//         }}
//         finalFocusRef={ref}
//       >
//         <ModalBackdrop />
//         <ModalContent bg="rgba(0, 0, 0, 0.5)">
//           <ModalHeader>
//             <ModalCloseButton>
//               <CloseIcon />
//             </ModalCloseButton>
//           </ModalHeader>
//           <ModalBody>
//             <DiamondItem />
//           </ModalBody>
//           <View display="flex" justifyContent="center" alignItems="center">
//             <ModalFooter>
//               <Button
//                 variant="outline"
//                 size="sm"
//                 w={120}
//                 action="secondary"
//                 mr="$3"
//                 onPress={() => {
//                   setShowModal(false);
//                 }}
//               >
//                 <ButtonText color="white">Cancel</ButtonText>
//               </Button>
//               <Button
//                 w={120}
//                 size="sm"
//                 action="positive"
//                 borderWidth="$0"
//                 onPress={() => {
//                   setShowModal(false), handleSave();
//                 }}
//               >
//                 <ButtonText>Save</ButtonText>
//               </Button>
//             </ModalFooter>
//           </View>
//         </ModalContent>
//       </Modal>
//     </Center>
//   );
// }

import {
  Button,
  ButtonText,
  Center,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalFooter,
  Text,
  Pressable,
  Box,
  Card,
  View,
} from "@gluestack-ui/themed";
import React, { useState } from "react";

import { FontAwesome } from "@expo/vector-icons";
import { moderateScale as ms } from "react-native-size-matters";

// import { WebView } from 'react-native-webview';

// import dataModalDiamond, { IDiamond } from "../mocks/dataModalDiamond";
import { ListRenderItem, FlatList } from "react-native";
import { styled } from "nativewind";
import { Image } from "@gluestack-ui/themed";
import userStore from "../../store/user";
import { IDiamond } from "../../interface/diamond";
const StyledPressable = styled(Pressable);

const Diamond = ({ navigation }: any) => {
  const [selectedDiamond, setSelectedDiamond] = React.useState(0);
  const setDiamond = userStore((state) => state.setDiamond);
  const [diamonds, setDiamonds] = React.useState(0);

  const diamondData: IDiamond[] = [
    {
      id: 1,
      diamond: 100,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 20000,
    },
    {
      id: 2,
      diamond: 250,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 37000,
    },
    {
      id: 3,
      diamond: 500,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 69000,
    },
    {
      id: 4,
      diamond: 1000,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 135000,
    },
    {
      id: 5,
      diamond: 5000,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 250000,
    },
    {
      id: 6,
      diamond: 10000,
      image: "https://i.ibb.co/JjX02XT/diamond-2.png",
      price: 516000,
    },
  ];

  const handleDiamond = (diamondId: number, diamond: number) => {
    setSelectedDiamond(diamondId);
    setDiamonds(diamond);
  };

  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const ref = React.useRef(null);
  const handleSave = () => {
    if (diamonds) {
      setDiamond(diamonds);
      setShowModal(false);
    }
  };

  const Item = ({ item, index }: { item: IDiamond; index: number }) => (
    <StyledPressable
      key={index}
      className={`
              active:scale-110
            hover:bg-slate-950
              m-2 `}
      onPress={() => handleDiamond(item.id, item.diamond || 0)}
      // onPress={() => handlePayment()}
    >
      <Card
        w={"$24"}
        rounded={"$xl"}
        justifyContent="center"
        alignItems="center"
        width={"$24"}
        height={"$40"}
        borderWidth={2}
        borderColor="white"
        backgroundColor="rgba(52, 52, 52, 0.9)"
      >
        <Text pb={10} color="$light100" fontWeight="bold">
          {item.diamond}
        </Text>
        <Image
          w={"$12"}
          h={"$12"}
          source={{
            uri: item.image,
          }}
          alt="image"
        />
        {selectedDiamond === item.id && (
          <Box
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
            }}
          >
            <FontAwesome name="check-circle" size={30} color="white" />
          </Box>
        )}
        <View alignItems="center" justifyContent="center" pt={10} w={"$full"}>
          <Text
            color="$red"
            fontWeight="bold"
            fontSize={ms(13)}
            fontStyle="italic"
          >
            Rp.{item.price}
          </Text>
        </View>
      </Card>
    </StyledPressable>
  );

  const renderItem: ListRenderItem<IDiamond> = ({ item }) => (
    <Item item={item} index={item.id} />
  );
  return (
    <>
      <Center h={300}>
        <Pressable
          px={10}
          bg="#0ACF83"
          borderWidth={1}
          borderColor={"#018b56"}
          borderRadius={"$md"}
          onPress={() => setShowModal(true)}
          ref={ref}
        >
          <ButtonText
            shadowRadius={2}
            color="$white"
            fontWeight={"semibold"}
            size="md"
          >
            +
          </ButtonText>
        </Pressable>
        <Modal
          isOpen={showModal}
          onClose={() => {
            setShowModal(false);
          }}
          finalFocusRef={ref}
        >
          <ModalBackdrop />
          <ModalContent
            w={"$full"}
            maxHeight="60%"
            alignItems="center"
            overflow="visible"
            backgroundColor="rgba(52, 52, 52, 0.9)"
          >
            <Pressable
              bg="#F8BD00"
              w={"$32"}
              alignItems="center"
              justifyContent="center"
              h={"$10"}
              borderRadius="$xl"
              mt={-20}
            >
              <Text>Diamond</Text>
            </Pressable>

            <FlatList
              data={diamondData}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ alignItems: "center" }}
              style={{ marginTop: ms(20) }}
              numColumns={3}
            />

            <ModalFooter
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button
                w={130}
                size="sm"
                action="negative"
                mr="$3"
                onPress={() => {
                  setShowModal(false);
                }}
              >
                <ButtonText>Cancel</ButtonText>
              </Button>
              <Button
                w={130}
                size="sm"
                action="positive"
                borderWidth="$0"
                onPress={handleSave}
              >
                <ButtonText>CheckOut</ButtonText>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Center>
    </>
  );
};

export default Diamond;
