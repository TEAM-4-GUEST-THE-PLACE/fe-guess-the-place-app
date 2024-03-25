import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import userStore from "../store/user";
import useLogin from "../hooks/useLogin";
import { useUser } from "@clerk/clerk-expo";
import { API } from "../utils/API";
const { width, height } = Dimensions.get("window");

const dummyAvatar = [
  {
    id: 1,
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?t=st=1711343109~exp=1711346709~hmac=3847b39bfbd5d8f8c5212563937f93239761b14ecc7a8f0fc1d11dc5087a8f8c&w=740",
  },
  {
    id: 2,
    image: require("../../assets/avatar/avatar-reguler2.png"),
  },
  {
    id: 3,
    image: require("../../assets/avatar/avatar-reguler3.png"),
  },
  {
    id: 4,
    image: require("../../assets/avatar/avatar-reguler4.png"),
  },
  {
    id: 5,
    image: require("../../assets/avatar/avatar-reguler5.png"),
  },
  {
    id: 6,
    image: require("../../assets/avatar/avatar-reguler6.png"),
  },
  {
    id: 7,
    image: require("../../assets/avatar/avatar-reguler7.png"),
  },
  {
    id: 8,
    image: require("../../assets/avatar/avatar-reguler8.png"),
  },
  {
    id: 9,
    image: require("../../assets/avatar/avatar-reguler9.png"),
  },
  {
    id: 10,
    image: require("../../assets/avatar/avatar-reguler10.png"),
  },
  {
    id: 11,
    image: require("../../assets/avatar/avatar-reguler11.png"),
  },
  {
    id: 12,
    image: require("../../assets/avatar/avatar-reguler12.png"),
  },
];

interface IListAvatars {
  id: number;
  image: string;
}

export default function ChooseAvatar() {
  const navigation = useNavigation();
  const [selectedAvatar, setSelectedAvatar] = useState<number | null>(null); // State for selected avatar
  const [nama, setNama] = useState<string>("");
  const [avatar, setAvatar] = useState<string>("");
  const [listAvatars, setListAvatars] = useState<IListAvatars[] | null>(null);
  const setAvatarUsername = userStore((state) => state.updateUserNameAvatar);
  const setEmail = userStore((state) => state.setEmail);
  const userLogin = useLogin();

  const fetchListAvatar = async () => {
    try {
      const response = await API.get("avatars");
      setListAvatars(response.data.data);
      console.log("list avatar:", response.data.data);
    } catch (error) {
      console.log("error fetch listAvatar:", error);
    }
  };

  useEffect(() => {
    fetchListAvatar();
  }, []);

  const postDataUser = async () => {
    try {
      const response = await API.post("users", {
        email: userLogin?.email,
        fullname: userLogin?.fullname,
        username: nama,
        avatar: avatar,
      });

      console.log("response avatar:", avatar);

      setEmail(response.data.data.email);
      setAvatarUsername(nama, avatar);

      console.log(response.data);

      if (nama) {
        navigation.navigate("Home" as never);
      } else {
        alert("Please enter your name");
      }
    } catch (error) {
      console.log("error post dataUser:", error);
    }
  };

  const { user } = useUser();
  console.log("dataUser:", user?.fullName);

  const handleSumbit = () => {
    setAvatarUsername(nama, avatar);
    if (nama) {
      navigation.navigate("Home" as never);
    } else {
      alert("Please enter your name");
    }
  };

  const handleAvatarPress = (avatarId: number, image: string) => {
    // Toggle selected avatar
    setSelectedAvatar(selectedAvatar === avatarId ? null : avatarId);
    setAvatar(image);
    // setAvatar("avatarcoba.jpg");
  };

  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="position">
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
            {listAvatars &&
              listAvatars.map((avatar) => (
                <TouchableOpacity
                  key={avatar.id}
                  style={[
                    styles.avatarItem,
                    selectedAvatar === avatar.id && styles.selectedAvatar,
                  ]}
                  onPress={() => handleAvatarPress(avatar.id, avatar.image)}
                >
                  <Image
                    alt="avatar"
                    source={avatar.image}
                    style={styles.avatarImage}
                  />
                  {selectedAvatar === avatar.id && (
                    <FontAwesome
                      name="check-circle"
                      size={24}
                      color="green"
                      style={styles.checkIcon}
                    />
                  )}
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
                <InputField
                  placeholder="your name"
                  onChangeText={(e) => setNama(e)}
                />
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
              onPress={postDataUser}
            >
              <ButtonText>Continue</ButtonText>
            </Button>
          </View>
        </View>
      </KeyboardAvoidingView>
      <StatusBar translucent backgroundColor="transparent" />
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
    position: "relative", // Added position relative
  },
  avatarImage: {
    width: 60,
    height: 60,
  },
  selectedAvatar: {
    borderColor: "green", // Added border color for selected avatar
  },
  checkIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});
