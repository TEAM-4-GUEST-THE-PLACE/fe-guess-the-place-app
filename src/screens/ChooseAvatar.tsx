import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Input, InputField, Button, ButtonText } from "@gluestack-ui/themed";
import { FontAwesome } from "@expo/vector-icons";
import dataAvatar from "../mocks/avatar.json";
import { IAvatar } from "../interface/avatar";

const { width, height } = Dimensions.get("window");

export default function ChooseAvatar() {
  const [avatar, setAvatar] = useState<IAvatar[]>([]);

  useEffect(() => {
    setAvatar(dataAvatar); // Set avatar data on component mount
  }, []);

  const renderItem = ({ item }: { item: IAvatar }) => (
    <TouchableOpacity style={{ width: 60, height: 60 }}>
      <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50 }} />
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../../assets/bg1.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.container}>
        <FlatList
          numColumns={4}
          data={avatar}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
        />
        <View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Input
              style={{ backgroundColor: "white" }}
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
            style={{ width: 239, backgroundColor: "green.600" }}
          >
            <ButtonText>Continue</ButtonText>
          </Button>
        </View>
      </View>
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
