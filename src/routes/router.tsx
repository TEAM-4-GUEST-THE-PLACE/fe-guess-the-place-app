import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import SignInScreen from "../screens/AuthScreen/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ChooseAvatar from "../screens/ChooseAvatar";
import Home from "../screens/Home";
import Lobby from "../screens/Lobby";

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            {/* <Stack.Screen name="Avatar" component={ChooseAvatar} /> */}
            {/* <Stack.Screen name="Splash" component={Home} /> */}
            {/* <Stack.Screen name="Signin" component={Lobby} /> */}
        </Stack.Navigator>
    );
}
