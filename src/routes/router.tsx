import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Lobby from "../screens/Lobby";
import ChooseAvatar from "../screens/ChooseAvatar";
const Stack = createStackNavigator();

export const Route = () => {
  return (
    <Stack.Navigator
      // screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Splash" component={Home} />
      <Stack.Screen name="Signin" component={Lobby} />
      <Stack.Screen name="Avatar" component={ChooseAvatar} />
    </Stack.Navigator>
  );
};
