import React, { useState } from "react";
import { Image, TouchableOpacity, View, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "@gluestack-ui/themed";
import { AntDesign } from "@expo/vector-icons";
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
            // Untuk menghilangkan pemilihan jika item yang sama diklik lagi
            setSelectedDiamond(null);
        } else {
            setSelectedDiamond(diamond);
        }
    };

    return (
        <View
            style={{
                flex: 1,
                padding: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "yellow",
            }}
        >
            <FlatList
                data={diamondData}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingLeft: 5,
                            paddingRight: 5,
                            // marginRight: 20,
                            marginBottom: 5,
                            borderWidth: 1,
                            borderColor: "black",
                            padding: 1,
                            borderRadius: 5,
                            backgroundColor: selectedDiamond?.totaldiamond === item.totaldiamond ? "lightblue" : "#82ade1",
                        }}
                        onPress={() => selectDiamond(item)}
                    >
                        <Text
                            style={{
                                textAlign: "center",
                                color: "#24ff00",
                                fontWeight: "bold",
                                fontSize: 15,
                            }}
                        >
                            {item.totaldiamond}
                        </Text>

                        <Image
                            source={item.imagediamond}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 10,
                                borderWidth: 1,
                                margin: 2,
                                opacity: selectedDiamond?.totaldiamond === item.totaldiamond ? 0.5 : 1,
                            }}
                        />
                        {selectedDiamond?.totaldiamond === item.totaldiamond && <FontAwesome name="check-circle" size={20} color="green" style={{ position: "absolute", top: 5, right: 5 }} />}
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <Text style={{ color: "#e97e45", fontWeight: "bold", fontSize: 15 }}>Rp.{item.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
                numColumns={3}
            />
        </View>
    );
};
