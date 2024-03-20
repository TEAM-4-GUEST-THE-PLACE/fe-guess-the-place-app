import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import SignInScreen from "../screens/AuthScreen/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ChooseAvatar from "../screens/ChooseAvatar";
import FindMatch from "../screens/FindMatch";
import QuestionScreen from "../screens/QuestionScreen";
import RoomScreen from "../screens/RoomScreen";

const Stack = createNativeStackNavigator();

export default function Router() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Avatar">
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Avatar" component={ChooseAvatar} />
            <Stack.Screen name="FindMatch" component={FindMatch} />
            <Stack.Screen name="Question" component={QuestionScreen} />
            <Stack.Screen name="Room" component={RoomScreen} />
        </Stack.Navigator>
    );
}
