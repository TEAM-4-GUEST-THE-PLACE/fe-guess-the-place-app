import { Button, ButtonText, GluestackUIProvider, View } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./src/routes/router";
import { StatusBar } from "expo-status-bar";
import { ClerkProvider, SignedIn, SignedOut, useAuth } from "@clerk/clerk-expo";
import { Text } from "react-native";
import SignInScreen from "./src/screens/AuthScreen/SignInScreen";
import * as SecureStore from "expo-secure-store";
import UseUserData from "./src/hooks/useUserData";

const Stack = createNativeStackNavigator();

const tokenCache = {
    async getToken(key: string) {
        try {
            return SecureStore.getItemAsync(key);
        } catch (err) {
            return null;
        }
    },
    async saveToken(key: string, value: string) {
        try {
            return SecureStore.setItemAsync(key, value);
        } catch (err) {
            return;
        }
    },
};

const SignOut = () => {
    const { isLoaded, signOut } = useAuth();
    if (!isLoaded) {
        return null;
    }
    return (
        <Button
            onPress={() => {
                signOut();
            }}
        >
            <ButtonText>Sign Out</ButtonText>
        </Button>
    );
};

export default function App() {
    return (
        <ClerkProvider tokenCache={tokenCache} publishableKey="pk_test_YWRqdXN0ZWQtbWFtbWFsLTg4LmNsZXJrLmFjY291bnRzLmRldiQ">
            <GluestackUIProvider config={config}>
                <StatusBar style="auto" />

                <SignedIn>
                    {/* <UseUserData /> */}
                    <NavigationContainer>
                        <Router />
                    </NavigationContainer>
                    <SignOut />
                </SignedIn>
                <SignedOut>
                    <SignInScreen />
                </SignedOut>
            </GluestackUIProvider>
        </ClerkProvider>
    );
}
