import { Box, ImageBackground, Text } from "@gluestack-ui/themed";
import React from "react";
import { StyleSheet } from "react-native";

export default function FindMatch() {
    return (
        <ImageBackground source={require("../../assets/background/bg1.jpg")} style={styles.container} blurRadius={3}>
            <Box>
                <Text>find match page</Text>
            </Box>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
