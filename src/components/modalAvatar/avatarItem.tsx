import React, { useState } from "react";
import { Image, TouchableOpacity, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; 
import { View } from "@gluestack-ui/themed";

export const Avatar = () => {
  const [avatars, setAvatars] = useState([
    { uri: "https://picsum.photos/200/300", selected: false },
    { uri: "https://picsum.photos/200/300", selected: false },
    { uri: "https://picsum.photos/200/300", selected: false },
    { uri: "https://img.freepik.com/fotos-gratis/avatar-androgino-de-pessoa-queer-nao-binaria_23-2151100226.jpg", selected: false },
    { uri: "https://img.freepik.com/premium-photo/nonbinary-avatar-picture_862489-4367.jpg", selected: false },
    { uri: "https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100222.jpg?t=st=1710831610~exp=1710835210~hmac=ee7c2ea82a9aa8315873c31aa85fc167c08ceb2d173c7bf9ad0731ba4e3a8a73&w=740", selected: false },
  ]);

  const toggleSelection = (index : any) => {
    setAvatars(avatars.map((avatar, i) => {
      if (i === index) {
        return { ...avatar, selected: !avatar.selected };
      } else {
        return { ...avatar, selected: false }; 
      }
    }));
  };

  const renderAvatar = (avatarUri : any , index : any)  => {
    let avatarComponent = (
      <Image
        key={index}
        source={{ uri: avatarUri }}
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
          <Text style={{ color: "white", marginTop: 5, fontWeight: "bold" }}>
            FREE
          </Text>
        </>
      );
    }

    if (avatars[index].selected) {
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
      <TouchableOpacity key={index} style={{ marginRight: 20, marginBottom: 5 }} onPress={() => toggleSelection(index)}>
        <View
          style={{
            width: 75,
            height: 105,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "white",
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

  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
      {avatars.map((avatar, index) => renderAvatar(avatar.uri, index))}
    </View>
  );
};
