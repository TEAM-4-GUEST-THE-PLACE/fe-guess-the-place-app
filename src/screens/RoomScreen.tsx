import { Box, Heading, Input, InputField } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput } from "react-native";
import io from "socket.io-client";

export default function RoomScreen() {
    const [chatMessage, setChatMessage] = useState("");
    const [messages, setMessages] = useState<string[]>([]);

    //connection to socket server
    const socket = io("http://192.168.18.27:3000");

    // useEffect(() => {
    //     socket.emit("joinRoom", { username: "iqbal uhuy" });
    // }, []);

    socket.on("chat-message", (msg) => {
        setMessages((prevMsg) => [...prevMsg, msg]);
    });

    function submitChatMessage() {
        socket.emit("chat-message", chatMessage);

        setChatMessage("");
    }
    const chatMessages = messages.map((chat, i) => <Text key={i}>{chat}</Text>);

    return (
        <Box style={styles.container}>
            <Heading>Room Game</Heading>

            <TextInput
                style={{ height: 40, borderWidth: 2 }}
                placeholder="Message here..."
                autoCorrect={false}
                onSubmitEditing={() => submitChatMessage()}
                value={chatMessage}
                onChangeText={(chatMessage) => {
                    setChatMessage(chatMessage);
                }}
            />
            {chatMessages}
        </Box>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
});
