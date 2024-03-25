import { useUser } from "@clerk/clerk-expo";

export default function useLogin() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return null;
    }

    let email = "";
    for (const data of user.emailAddresses) {
        email = data.emailAddress;
    }

    return {
        fullname: user.fullName,
        email: email,
    };
}
