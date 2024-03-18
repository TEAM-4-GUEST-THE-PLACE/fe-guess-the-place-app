import { AvatarFallbackText, AvatarImage, FlatList, VStack } from "@gluestack-ui/themed";
import { Avatar } from "@gluestack-ui/themed";
import { Box, Heading, Image, ImageBackground, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import dataPlayers from "../../src/mocks/players.json";
import { useNavigation } from "@react-navigation/native";
import { IPlayers } from "../interface/players";

export default function FindMatch() {
    const navigation = useNavigation();
    const [timeLeft, setTimeLeft] = useState(30);
    const [players, setPlayers] = useState<null | IPlayers[]>(null);

    useEffect(() => {
        if (!timeLeft) return;

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timeLeft]);

    useEffect(() => {
        setPlayers(dataPlayers);
    }, []);

    if (!timeLeft) {
        setTimeout(() => {
            navigation.navigate("Question" as never);
        }, 2000);
    }

    return (
        <ImageBackground source={require("../../assets/background/bg1.jpg")} style={styles.container} blurRadius={2}>
            {/* HEADER */}
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt={20} px={15}>
                <Image source={require("../../assets/logo/logo2.png")} alt="logo" size="sm" />
                <Box bg="white" px={3} py={2} borderRadius={4}>
                    <Icon name="cross" size={20} color={"black"} onPress={() => navigation.navigate("Home" as never)} />
                </Box>
            </Box>

            {/* DETAIL-TIME-PLAYER */}
            <Box display="flex" alignItems="center">
                <Heading color="$yellow400" size="4xl">
                    00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft}
                </Heading>
                <Heading color="$white" size="2xl">
                    {timeLeft != 0 ? `Finding Opponent` : `Starting soon...`}
                </Heading>
                <Heading color="$white" size="2xl">
                    <Heading color="$green400" size="2xl">
                        {players?.length}
                    </Heading>
                    /5
                </Heading>
            </Box>

            {/* LIST PLAYER */}
            <Box mt={40} display="flex" alignItems="center" justifyContent="center" flexDirection="column" gap={20}>
                {players?.map((item, index) => (
                    <Box key={index} bg="rgba(0,0,0,0.4)" flexDirection="row" alignItems="center" w={270} pl={15} py={10} mb={5} borderRadius={"$lg"}>
                        <Avatar mr="$3">
                            <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
                            <AvatarImage alt="avatar" source={item.avatar} />
                        </Avatar>
                        <VStack>
                            <Heading size="lg" fontFamily="$heading" mb="$1" color="$white">
                                {item.name}
                            </Heading>
                        </VStack>
                    </Box>
                ))}
            </Box>

            {/* {
                    <FlatList
                        data={players}
                        renderItem={({ item }: any) => (
                            <Box bg="rgba(0,0,0,0.4)" flexDirection="row" px={40} py={10} mb={15} borderRadius={"$lg"}>
                                <Avatar mr="$3">
                                    <AvatarFallbackText fontFamily="$heading">RR</AvatarFallbackText>
                                    <AvatarImage alt="avatar" source={require("../../assets/avatar/Ellipse 1.png")} />
                                </Avatar>
                                <VStack>
                                    <Heading size="xl" fontFamily="$heading" mb="$1" color="$white">
                                        {item.name}
                                    </Heading>
                                </VStack>
                            </Box>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                } */}
            {/* </Box> */}
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
