import { Center, GluestackUIProvider } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { config } from "@gluestack-ui/config";
import { NavigationContainer } from "@react-navigation/native";
import { Route } from "./src/routes/router";

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Route />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
