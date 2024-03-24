import { Button, ButtonText, Image } from "@gluestack-ui/themed";
import { useCallback, useState } from "react";
import { StyleSheet, ImageBackground, StatusBar, ActivityIndicator } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";
import useLogin from "../../hooks/useLogin";

const bg1 = require("../../../assets/background/bg1.jpg");
const logo = require("../../../assets/logo/logo2.png");
const appName = require("../../../assets/logo/gtp3.png");
const google = require("../../../assets/logo/google.png");

WebBrowser.maybeCompleteAuthSession();

export default function SignInScreen() {
    const [isLoading, setIsLoading] = useState(false);

    useWarmUpBrowser();
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

    const onPress = useCallback(async () => {
        try {
            const { createdSessionId, signIn, signUp, setActive } = await startOAuthFlow();
            console.log("success sign in");
            // useLogin();

            if (createdSessionId) {
                setActive!({ session: createdSessionId });
            } else {
                // Use signIn or signUp for next steps such as MFA
            }

            // const login = useLogin();

            // console.log("data login:", login);
        } catch (err) {
            console.error("OAuth error", err);
        }
    }, []);

    return (
        <ImageBackground source={bg1} style={styles.container}>
            <ActivityIndicator size={"large"} animating={isLoading} />

            <Image alt="logo" size="2xl" source={logo} />
            <Image alt="logo" size="2xl" w={300} source={appName} />

            <Button size="md" variant="solid" action="primary" isDisabled={false} isFocusVisible={false} borderRadius={"$full"} bg="$white" onPress={onPress}>
                <Image alt="logo" size="2xs" source={google} mr={8} />
                <ButtonText color="$black">Continue with Google</ButtonText>
            </Button>

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
