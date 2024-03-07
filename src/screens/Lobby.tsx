import { StyleSheet, Dimensions, ImageBackground } from "react-native";
import React from "react";
import { Button, Icon, Image, Text, View } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
import { FcGoogle } from "react-icons/fc";

export default function Lobby() {
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
            alt="logo"
            source={require("../../assets/logo2.png")}
            style={{
              width: 250,
              height: 250,
              marginTop: 150,
            }}
          />
          <View style={styles.container}>
            <Image
              alt="logo"
              style={{ width: 150, height: 150 }}
              source={require("../../assets/app name.png")}
            />

            <Button
              style={{
                marginTop: 30,
                width: 250,
                borderRadius: 20,
                backgroundColor: "#fff",
                gap: 10,
              }}
              // onPress={() => console.log("Login with Google clicked")}
            >
              <FcGoogle size={20} />
              <Text fontWeight="bold" style={{ color: "#000" }}>
                Continue with Google
              </Text>
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
