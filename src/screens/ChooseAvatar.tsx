import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  ButtonText,
  FlatList,
  Icon,
  Image,
  InputField,
  ScrollView,
  View,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import dataAvatar from "../mocks/avatar.json";
import { IAvatar } from "../interface/avatar";
import { ButtonIcon } from "@gluestack-ui/themed";
import { Input } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
const { width, height } = Dimensions.get("window");

export default function ChooseAvatar() {
  const [avatar, setAvatar] = useState<IAvatar[]>([]);

  useEffect(() => {
    setAvatar(dataAvatar);
  }, []);

  const renderItem = ({ item }: { item: IAvatar }) => (
    <TouchableOpacity style={{ width: 60, height: 60 }}>
      <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
  );

  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <KeyboardAvoidingView>
        <ScrollView>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              alt="logo"
              source={require("../../assets/logo2.png")}
              style={{
                width: 100,
                height: 100,
                marginTop: 50,
              }}
            />
            <Text style={{ color: "white", fontSize: 20, marginTop: 20 }}>
              Choose Your Avatar
            </Text>
            <View style={styles.container}>
              <FlatList numColumns={4} data={avatar} renderItem={renderItem} />
            </View>
            <View style={{ marginTop: 20 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Input
                  style={{
                    backgroundColor: "white",
                  }}
                  variant="outline"
                  size="md"
                  isDisabled={false}
                  isInvalid={false}
                  isReadOnly={false}
                >
                  <FontAwesome
                    name="pencil-square-o"
                    size={24}
                    color="black"
                    style={{ marginLeft: 10, marginTop: 10 }}
                  />
                  {/* <TextInput
                placeholder="Your name"
                value={userName}
                onChangeText={setUserName}
                style={{ marginLeft: 10 }}
              /> */}
                  <InputField placeholder="Your name" />
                </Input>
              </View>
            </View>
            <View style={{ marginTop: 10 }}>
              <Button
                size="md"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                style={{
                  width: 239,
                  backgroundColor: "green.600",
                }}
              >
                <ButtonText>Continue</ButtonText>
              </Button>
            </View>
          </View>
        </ScrollView>
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
  container: {
    marginTop: 30,
    flex: 1,
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
});
