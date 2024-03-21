import React, { useState } from "react";
import { Image, TouchableOpacity, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Box } from "@gluestack-ui/themed";
import userStore from "../../store/user";

const avatarsData = [
  { id: 1, image: require("../../../assets/avatar/reguler1.jpg"), price: 0, selected: false },
  { id: 2, image: require("../../../assets/avatar/reguler2.jpg"), price: 0, selected: false },
  { id: 3, image: require("../../../assets/avatar/reguler3.jpg"), price: 0, selected: false },
  { id: 4, image: require("../../../assets/avatar/premium1.jpg"), price: 100, selected: false },
  { id: 5, image: require("../../../assets/avatar/premium2.jpg"), price: 250, selected: false },
  { id: 6, image: require("../../../assets/avatar/premium3.jpg"), price: 570, selected: false },
];

export const Avatar = ({ onSelectAvatar }: any) => {
  const { setDiamond, setAvatar, user } = userStore((state) => state);
  const [avatars, setAvatars] = useState(avatarsData);

  const handleAvatar = ({ id, image, price, selected }: any) => {
    if (!selected) {
      onSelectAvatar({ id, image, price });
      setAvatars(avatars.map(avatar => {
        if (avatar.id === id) {
          return { ...avatar, selected: true };
        } else {
          return { ...avatar, selected: false };
        }
      }));
    }
  };

  const renderAvatar = (avatar: any) => {
    let avatarComponent = (
      <Image
        source={avatar.image}
        style={{
          width: 65,
          height: 65,
          borderRadius: 50,
          borderColor: "white",
          borderWidth: 2,
        }}
      />
    );

    if (avatar.selected) {
      avatarComponent = (
        <>
          {avatarComponent}
          <FontAwesome
            name="check-circle"
            size={24}
            color="green"
            style={{ position: "absolute", top: 5, right: 5 }}
          />
        </>
      );
    }

    if (avatar.price > 0) {
      avatarComponent = (
        <>
          {avatarComponent}
          <Box flexDirection="row">
            <Text style={{ color: "white", marginTop: 5, fontWeight: "bold" }}>
              {avatar.price}
            </Text>
            <FontAwesome
              name="diamond"
              size={19}
              color="#0091ea"
              style={{ marginTop: 5, marginBottom: 5 }}
            />
          </Box>
        </>
      );
    }

    return (
      <TouchableOpacity
        key={avatar.id}
        onPress={() => handleAvatar(avatar)}
      >
        <View
          style={{
            width: "100%",
            height: 105,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
            backgroundColor: "transparent",
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
          }}
        >
          {avatarComponent}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        width: "100%",
        gap: 10,
      }}
    >
      {avatars.map((avatar) => renderAvatar(avatar))}
    </View>
  );
};
