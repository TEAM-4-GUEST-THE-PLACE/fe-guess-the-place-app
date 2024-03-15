import React, { useState } from "react";
import { Image, FlatList, TouchableOpacity, View, Text } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons"; 

export const Avatar = () => {
  const [avatar, setAvatar] = useState([
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ]);

  const renderItem = ({ item, index }: any) => {
    let avatarComponent = (
      <Image
        source={{ uri: item }}
        style={{
          width: 65,
          height: 65,
          borderRadius: 50,
          borderColor: "white",
          borderWidth: 2,
        }}
      />
    );


    if (index < 3) {
      avatarComponent = (
        <>
          {avatarComponent}
          <Text style={{ color: "black", marginTop: 5, fontWeight: "bold" }}>
            FREE
          </Text>
        </>
      );
    }

    if (index >= 3) {
      avatarComponent = (
        <>
          {avatarComponent}
          <FontAwesome
            name="diamond"
            size={24}
            color="#0091ea"
            style={{ marginTop: 5, marginBottom: 5 }}
          />
        </>
      );
    }

    return (
      <TouchableOpacity style={{ marginRight: 20, marginBottom: 5 }}>
        <View
          style={{
            width: 75,
            height: 105,
            borderRadius: 10,
            borderWidth: 1,
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {avatarComponent}
        </View>
      </TouchableOpacity>
    );
  };

  const renderSeparator = () => <View style={{ width: 10 }} />;

  return (
    <View
      style={{
        flex: 1,
        padding: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={avatar}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        ItemSeparatorComponent={renderSeparator}
      />
    </View>
  );
};
