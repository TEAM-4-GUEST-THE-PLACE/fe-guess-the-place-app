import { Box, Heading, Image, Text, Button, ButtonText, Avatar, AvatarFallbackText, AvatarImage, Link } from "@gluestack-ui/themed";
import { ImageBackground, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import ModalAvatar from "../components/modalAvatar/ModalAvatar";
import ModalTopUp from "../components/modalTopUp/ModalTopUp";
import { AvatarBadge } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import ModalAvatar from "../components/modalAvatar/modalAvatar";

const bg1 = require("../../assets/background/bg1.jpg");
const logo = require("../../assets/logo/logo2.png");
const diamond = require("../../assets/logo/diamond.png");
const img = require("../../assets/image/play-img.png");
const avatar = require("../../assets/image/avatar.jpg");

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ImageBackground source={bg1} style={styles.container} blurRadius={3}>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={20} px={15}>
                <Image source={logo} alt="logo" size="sm" />
            </Box>
            <ModalTopUp />

            <Box display="flex" alignItems="center" justifyContent="center" mt={50}>
                <Link onPress={() => console.log("clicked edit profile")}>
                    <Avatar bgColor="$amber600" size="xl" borderRadius="$full" borderWidth={2}>
                        <AvatarImage alt="avatar" source={avatar} />
                    </Avatar>
                </Link>
                <ModalAvatar />

                <Heading color="$white" size="2xl" italic={true}>
                    Kura-kura Ninja
                </Heading>

                <Box display="flex" alignItems="center" justifyContent="center" mt={200}>
                    <Image alt="image" mt={-200} size="2xl" width={400} height={400} source={img} />
                    <Button size="md" mt={-50} bg="$green600" w={200} variant="solid" action="primary" isDisabled={false} isFocusVisible={false} onPress={() => navigation.navigate("FindMatch" as never)}>
                        <ButtonText>Play </ButtonText>
                    </Button>
                </Box>
                
                   
            </Box>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
