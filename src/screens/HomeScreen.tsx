import {
  Box,
  Heading,
  Image,
  Text,
  Button,
  ButtonText,
  Avatar,
  AvatarFallbackText,
  AvatarImage,
  Link,
  View,
} from "@gluestack-ui/themed";
import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import ModalAvatar from "../components/modalAvatar/ModalAvatar";
import ModalTopUp from "../components/modalTopUp/ModalTopUp";
import { AvatarBadge } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ModalAvatar from "../components/modalAvatar/modalAvatar";

const bg1 = require("../../assets/background/bg1.jpg");
const logo = require("../../assets/logo/logo2.png");
const diamondLogo = require("../../assets/logo/diamond.png");
const img = require("../../assets/image/play-img.png");
// const avatar = require("../../assets/image/avatar.jpg");
import userStore from "../store/user";

export default function HomeScreen() {
  const { avatar, diamond, username } = userStore((state) => state.user);
  const navigation = useNavigation();

  return (
    <ImageBackground source={bg1} style={styles.container} blurRadius={3}>
      {/* <View flexDirection="row" justifyContent="space-between "></View> */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={-60}
        px={15}
        bottom={30}
      >
        <Image source={logo} alt="logo" size="sm" />
        <Box display="flex" flexDirection="row" alignItems="center">
          <Image
            source={diamondLogo}
            position="relative"
            zIndex={10}
            alt={"diamond"}
            width={25}
            height={25}
            objectFit={"contain"}
            marginRight={-8}
          />
          <Box
            width={50}
            height={20}
            bg="#ffffffce"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ButtonText color="$black" fontWeight={"bold"} size="sm">
              {diamond}
            </ButtonText>
          </Box>
          <ModalTopUp />
        </Box>
      </Box>

      <Box display="flex" alignItems="center" justifyContent="center" mt={-30}>
        <Link onPress={() => console.log("clicked edit profile")}>
          <Avatar
            bgColor="transparent"
            size="xl"
            borderRadius="$full"
            borderWidth={5}
            borderColor="$white"
          >
            <AvatarImage alt="avatar" source={avatar} />
          </Avatar>
        </Link>
        <ModalAvatar />

        <Heading color="$white" size="2xl">
          {username}
        </Heading>

        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={200}
        >
          <Image
            alt="image"
            mt={-200}
            size="2xl"
            width={400}
            height={400}
            source={img}
          />
          <Button
            size="xl"
            mt={-50}
            bg="$green600"
            w={200}
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate("FindMatch" as never)}
          >
            <ButtonText>START GAME</ButtonText>
          </Button>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt={100}
        >
          <Button
            size="md"
            mt={-50}
            bg="$green600"
            w={200}
            variant="solid"
            action="primary"
            isDisabled={false}
            isFocusVisible={false}
            onPress={() => navigation.navigate("Congrats" as never)}
          >
            <ButtonText>Tester Page</ButtonText>
          </Button>
        </Box>
      </Box>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
