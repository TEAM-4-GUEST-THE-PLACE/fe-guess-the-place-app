import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Image,
  Input,
  Button,
  ButtonText,
  View,
  InputField,
  KeyboardAvoidingView,

} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

const dummyAvatar = [
  {
    id: 1,
    avatar: require("../../assets/avatar/Ellipse 1.png"),
  },
  {
    id: 2,
    avatar: require("../../assets/avatar/Ellipse 2.png"),
  },
  {
    id: 3,
    avatar: require("../../assets/avatar/Ellipse 3.png"),
  },
  {
    id: 4,
    avatar: require("../../assets/avatar/Ellipse 4.png"),
  },
  {
    id: 5,
    avatar: require("../../assets/avatar/Ellipse 5.png"),
  },
  {
    id: 6,
    avatar: require("../../assets/avatar/Ellipse 6.png"),
  },
  {
    id: 7,
    avatar: require("../../assets/avatar/Ellipse 7.png"),
  },
  {
    id: 8,
    avatar: require("../../assets/avatar/Ellipse 8.png"),
  },
  {
    id: 9,
    avatar: require("../../assets/avatar/Ellipse 9.png"),
  },
  {
    id: 10,
    avatar: require("../../assets/avatar/Ellipse 10.png"),
  },
  {
    id: 11,
    avatar: require("../../assets/avatar/Ellipse 11.png"),
  },
  {
    id: 12,
    avatar: require("../../assets/avatar/Ellipse 12.png"),
  },
];

export default function ChooseAvatar() {
  const navigation = useNavigation();

  const handleAvatarPress = (avatarId: number) => {
    // Handle avatar selection logic here
  };

  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <KeyboardAvoidingView style={{ flex: 1 }}
        behavior="position">
      
        <View display="flex" justifyContent="center" alignItems="center">
          <Image
            alt="logo"
            source={require("../../assets/logo2.png")}
            mt={100}
            display="flex"
            justifyContent="center"
            alignItems="center"
            w={100}
          />
          <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
            Choose Your Avatar
          </Text>
          <View style={styles.avatarContainer}>
            {dummyAvatar.map((avatar) => (
              <TouchableOpacity
                key={avatar.id}
                style={styles.avatarItem}
                onPress={() => handleAvatarPress(avatar.id)}
              >
                <Image
                  alt="avatar"
                  source={avatar.avatar}
                  style={styles.avatarImage}
                />
              </TouchableOpacity>
            ))}
          </View>
          <View style={{ marginTop: 20 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Input bg="white" w={300} variant="outline" size="md">
                <FontAwesome
                  name="pencil-square-o"
                  size={24}
                  color="black"
                  style={{ marginLeft: 10, marginTop: 10 }}
                />
                <InputField placeholder="your name" />
              </Input>
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Button
              style={{ width: 300, backgroundColor: "green" }}
              size="md"
              variant="solid"
              action="primary"
              isDisabled={false}
              isFocusVisible={false}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  avatarContainer: {
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: 30,
    gap: 20,
    paddingHorizontal: 20,
  },
  avatarItem: {
    justifyContent: "center",
    width: width / 4 - 30,
    marginHorizontal: 10,
    marginVertical: 1,
    alignItems: "center",
  },
  avatarImage: {
    width: 60,
    height: 60,
  },
});
