import {
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { Button, ButtonText, Image, View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");

export default function Home() {
  const navigation = useNavigation();
  return (
    <>
      <ImageBackground
        source={require("../../assets/bg1.jpg")}
        style={styles.background}
      >
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/logo2.png")}
            style={{
              width: 250,
              height: 250,
              marginTop: 150,
            }}
          />
          <View style={styles.container}>
            <Image
              style={{ width: 200, height: 200 }}
              source={require("../../assets/logo-text2.png")}
            />
            <Button onPress={() => navigation.navigate("Signin" as never)}>
              <ButtonText>Signin</ButtonText>
            </Button>
            <Button onPress={() => navigation.navigate("Avatar" as never)}>
              <ButtonText>Avatar</ButtonText>
            </Button>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  background: {
    width: width,
    height: height,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    opacity: 0.95,
    justifyContent: "center",
    alignItems: "center",
  },
});
