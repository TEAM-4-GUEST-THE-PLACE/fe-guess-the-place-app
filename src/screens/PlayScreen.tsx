import {
  Box,
  Button,
  ButtonText,
  Heading,
  Image,
  Text,
  View,
} from "@gluestack-ui/themed";
import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";
const bg1 = require("../../assets/background/bg1.jpg");

export default function PlayScreen() {
  return (
    <ImageBackground source={bg1} style={styles.container}>
      <View w="85%" h="85%" bg="rgba(0,0,0,0.4)" borderRadius={20}>
        <Text mt={20} textAlign="center" fontSize={50} color="#0acf83">
          00:18
        </Text>

        <View
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={50}
        >
          <Image
            alt="place-image"
            source={
              "https://img.freepik.com/free-photo/statue-liberty-new-york_268835-778.jpg?t=st=1710472135~exp=1710475735~hmac=6912cdb34c55d3d813900d0ac88211812c0807a84abfc765651726fbf6567bc9&w=360"
            }
            w={300}
            h={300}
            borderRadius={20}
          />
        </View>
        <View gap={20} mt={50} display="flex" justifyContent="center" alignItems="center">
          <Button w="80%" bg="#fff" >
            <ButtonText color="#000" fontSize={20}>London</ButtonText>
          </Button>
          <Button w="80%" bg="#fff">
            <ButtonText color="#000" fontSize={20}>New York</ButtonText>
          </Button>
          <Button w="80%" bg="#fff">
            <ButtonText color="#000" fontSize={20}>Jakarta</ButtonText>
          </Button>
          <Button w="80%" bg="#fff">
            <ButtonText color="#000" fontSize={20}>Madrid</ButtonText>
          </Button>
        </View>
      </View>

      {/* <StatusBar translucent backgroundColor="transparent" /> */}
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
