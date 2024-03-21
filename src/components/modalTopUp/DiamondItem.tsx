import React, { useState } from "react";
import { Image, TouchableOpacity, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Box } from "@gluestack-ui/themed";
import { Diamond } from "../../interface/diamond";

export const DiamondItem = () => {
    const [selectedDiamond, setSelectedDiamond] = useState<Diamond | null>(null);
    const diamondData: Diamond[] = [
        {
            totaldiamond: 100,
            imagediamond: require("../../../assets/diamond/diamond1.jpg"),
            price: 20000,
        },
        {
            totaldiamond: 250,
            imagediamond: require("../../../assets/diamond/diamond2.jpg"),
            price: 37000,
        },
        {
            totaldiamond: 500,
            imagediamond: require("../../../assets/diamond/diamond3.jpg"),
            price: 69000,
        },
        {
            totaldiamond: 1000,
            imagediamond: require("../../../assets/diamond/diamond4.jpg"),
            price: 135000,
        },
        {
            totaldiamond: 5000,
            imagediamond: require("../../../assets/diamond/diamond5.jpg"),
            price: 250000,
        },
        {
            totaldiamond: 10000,
            imagediamond: require("../../../assets/diamond/diamond6.jpg"),
            price: 516000,
        },
    ];

    const selectDiamond = (diamond: Diamond) => {
        if (selectedDiamond === diamond) {
            setSelectedDiamond(null);
        } else {
            setSelectedDiamond(diamond);
        }
    };

    return (
        <Box style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: 10 }}>
            {diamondData.map((diamond, index) => (
                <TouchableOpacity
                    key={index}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 5,
                        borderWidth: 1,
                        borderColor: "white",
                        padding: 10,
                        borderRadius: 5,
                        backgroundColor: selectedDiamond?.totaldiamond === diamond.totaldiamond ? "rgba(255, 255, 255, 0.5)" : "transparent",
                    }}
                    onPress={() => selectDiamond(diamond)}
                >
                    <Text style={{ textAlign: "center", color: "#24ff00", fontWeight: "bold", fontSize: 20 }}>{diamond.totaldiamond}</Text>

                    <Image
                        source={diamond.imagediamond}
                        style={{
                            width: 65,
                            height: 75,
                            borderRadius: 10,
                            borderWidth: 1,
                            margin: 2,
                            opacity: selectedDiamond?.totaldiamond === diamond.totaldiamond ? 0.5 : 1,
                        }}
                    />
                    {selectedDiamond?.totaldiamond === diamond.totaldiamond && <FontAwesome name="check-circle" size={20} color="green" style={{ position: "absolute", top: 5, right: 5 }} />}
                    <View style={{ flexDirection: "row", justifyContent: "center" }}>
                        <Text style={{ color: "#e97e45", fontWeight: "bold", fontSize: 15 }}>Rp.{diamond.price}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </Box>
    );
};
