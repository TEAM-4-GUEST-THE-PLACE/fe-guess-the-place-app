import { useUser } from "@clerk/clerk-expo";
import { Text } from "react-native";

export default function UseUserData() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    let email = "";
    for (const data of user.emailAddresses) {
        email = data.emailAddress;
    }
    // return (
    //     <Text>
    //         Hello, {user.fullName} welcome to Guess The Place, {email}
    //     </Text>
    // );

    return {
        username: user.fullName,
        email: email,
    };
}
