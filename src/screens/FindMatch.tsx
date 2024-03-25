import {
  AvatarFallbackText,
  AvatarImage,
  Button,
  VStack,
} from "@gluestack-ui/themed";
import {
  Box,
  Heading,
  Image,
  ImageBackground,
  Avatar,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import dataPlayers from "../../src/mocks/players.json";
import { useNavigation } from "@react-navigation/native";
import { IPlayers } from "../interface/players";
import { ButtonText } from "@gluestack-ui/themed";
import io from "socket.io-client";
import UseUserData from "../hooks/useLogin";
import { IUserList } from "../interface/userList";
import userStore from "../store/user";

export default function FindMatch() {
  const navigation = useNavigation();
  const [timeLeft, setTimeLeft] = useState(5);
  const [players, setPlayers] = useState<null | IPlayers[]>(null);
  const [userLists, setUserLists] = useState<IUserList[]>();
  const [playerInRoom, setPlayerInRoom] = useState(0);
  const username = userStore((state) => state.user.username);
  const avatar = userStore((state) => state.user.avatar);

  const dataUserLogin = UseUserData();

  // const socket = io("http://192.168.18.27:3000");
  // const socket = io("https://8af2-2404-8000-1095-99a-d18c-ab8f-d10-fea4.ngrok-free.app");
  const socket = io(
    "https://aace-2404-8000-1095-99a-14b4-8e00-e1a4-b94b.ngrok-free.app"
  );

  useEffect(() => {
    socket.emit("joinRoom", { username: dataUserLogin?.fullname });
  }, []);

  socket.on("usersList", (data) => {
    setUserLists(data);
  });

  socket.on("clients-total", (data) => {
    setPlayerInRoom(data);
  });

  function exitRoom() {
    const userExitRoom =
      userLists &&
      userLists.filter((user) => user.username === dataUserLogin?.fullname);
    const { id, username, room } = userExitRoom![0];
    const dataUserToExit = { id, username, room };
    console.log("dataUserToExit", dataUserToExit);

    socket.emit("exitRoom", dataUserToExit);
    navigation.navigate("Congrats" as never);
  }

  useEffect(() => {
    if (!timeLeft) return;

    const intervalId = setInterval(() => {
      setTimeLeft((t) => t - 1);
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
    <ImageBackground
      source={require("../../assets/background/bg1.jpg")}
      style={styles.container}
      blurRadius={2}
    >
      {/* HEADER */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt={20}
        px={15}
      >
        <Image
          source={require("../../assets/logo/logo2.png")}
          alt="logo"
          size="sm"
        />
        <Box bg="white" px={3} py={2} borderRadius={4}>
          <Icon
            name="cross"
            size={20}
            color={"black"}
            onPress={() => exitRoom()}
          />
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
            {playerInRoom}
          </Heading>
          /5
        </Heading>
      </Box>

      {/* LIST PLAYER */}
      <Box
        mt={40}
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap={20}
      >
        {players &&
          players?.map((item, index) => {
            if (index === 0) {
              return (
                <Box
                  key={index}
                  bg="rgba(0,0,0,0.4)"
                  flexDirection="row"
                  alignItems="center"
                  w={270}
                  pl={15}
                  py={10}
                  mb={5}
                  borderRadius={"$lg"}
                >
                  <Avatar mr="$3">
                    <AvatarFallbackText fontFamily="$heading">
                      {username.charAt(0)}
                    </AvatarFallbackText>
                    <AvatarImage alt="avatar" source={avatar} />
                  </Avatar>
                  <VStack>
                    <Heading
                      size="lg"
                      fontFamily="$heading"
                      mb="$1"
                      color="$white"
                    >
                      {username}
                    </Heading>
                  </VStack>
                </Box>
              );
            }
            return null;
          })}
      </Box>

      {/* ROOM CHAT while waiting players soon... */}
      {/* <Button size="md" mt={20} bg="$green600" w={150} variant="solid" action="primary" isDisabled={false} isFocusVisible={false} onPress={() => navigation.navigate("Room" as never)}>
                <ButtonText>Room Chat </ButtonText>
            </Button> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
