import { Button, ButtonText, Heading, Image } from "@gluestack-ui/themed";
import { useState } from "react";
import { StyleSheet, ImageBackground, StatusBar, ActivityIndicator, Alert } from "react-native"
const bg1 = require("../../../assets/background/bg1.jpg");
const logo = require("../../../assets/logo/logo2.png");
const appName = require("../../../assets/logo/gtp3.png");
const google = require("../../../assets/logo/google.png");

export default function SignInScreen() {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <ImageBackground source={bg1} style={styles.container}>
            <ActivityIndicator size={"large"} animating={isLoading} />

            <Image alt="logo" size="2xl" source={logo} />
            <Image alt="logo" size="2xl" w={300} source={appName} />

            <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} borderRadius={"$full"} bg="$white" onPress={() => setIsLoading(true)}>
                <Image alt="logo" size="2xs" source={google} mr={8} />
                <ButtonText color="$black">Continue with Google</ButtonText>
            </Button>
            {/* <Button
                marginTop={20}
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                borderRadius={"$full"}
                onPress={() =>
                    Alert.alert("Success alert", "Lets go play the game!", [
                        {
                            text: "Cancel",
                            onPress: () => console.log("you click cancel"),
                        },
                        {
                            text: "Ok",
                            onPress: () => console.log("you click ok"),
                        },
                    ])
                }
            >
                <ButtonText>Test alert </ButtonText>
            </Button> */}
            <StatusBar translucent backgroundColor="transparent" />
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontWeight: "bold",
        fontSize: 50,
        color: "#3A4D39",
    },
});
