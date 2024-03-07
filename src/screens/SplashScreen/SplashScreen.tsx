import {
  AddIcon,
  Button,
  ButtonIcon,
  ButtonText,
  Heading,
  Image,
} from "@gluestack-ui/themed";
import { StyleSheet, ImageBackground, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
const bg1 = require("../../../assets/background/bg1.jpg");
const logo = require("../../../assets/logo/logo2.png");
const appName = require("../../../assets/logo/app-name.png");

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={bg1} style={styles.container}>
      <Image alt="logo" size="2xl" source={logo} />
      <Image alt="logo" size="2xl" source={appName} />
      <Button
        size="md"
        variant="solid"
        action="primary"
        isDisabled={false}
        isFocusVisible={false}
        onPress={() => navigation.navigate("SignIn" as never)}
      >
        <ButtonText>Next</ButtonText>
      </Button>

      <StatusBar hidden />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#3A4D39",
  },
});
