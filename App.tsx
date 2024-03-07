import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Router from "./src/routes/router";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer>
                <Router />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}
