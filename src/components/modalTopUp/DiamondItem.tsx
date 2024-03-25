// import React, { useState } from "react";
// import { Image, TouchableOpacity, View, Text } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { Box } from "@gluestack-ui/themed";
// import { IDiamond } from "../../interface/diamond";
// import userStore from "../../store/user";
// import { getItem } from "expo-secure-store";

// export const DiamondItem = () => {
//   const [selectedDiamond, setSelectedDiamond] = useState(0);
//   const setDiamond = userStore((state) => state.setDiamond);
//   const [diamonds, setDiamonds] = useState(0);
//   const diamondData: IDiamond[] = [
//     {
//       id: 1,
//       amount: 100,
//       image: require("../../../assets/diamond/diamond1.jpg"),
//       price: 20000,
//     },
//     {
//       id: 2,
//       amount: 250,
//       image: require("../../../assets/diamond/diamond2.jpg"),
//       price: 37000,
//     },
//     {
//       id: 3,
//       amount: 500,
//       image: require("../../../assets/diamond/diamond3.jpg"),
//       price: 69000,
//     },
//     {
//       id: 4,
//       amount: 1000,
//       image: require("../../../assets/diamond/diamond4.jpg"),
//       price: 135000,
//     },
//     {
//       id: 5,
//       amount: 5000,
//       image: require("../../../assets/diamond/diamond5.jpg"),
//       price: 250000,
//     },
//     {
//       id: 6,
//       amount: 10000,
//       image: require("../../../assets/diamond/diamond6.jpg"),
//       price: 516000,
//     },
//   ];



//   const handleSave = () => {
//     if (diamonds) {
//       setDiamond(diamonds);
//     }
//   };

//   const handleDiamond = (diamondId: number, diamond: number) => {
//     setSelectedDiamond(diamondId);
//     setDiamonds(diamond);
//   };

//   return (
//     <Box
//       style={{
//         flexDirection: "row",
//         flexWrap: "wrap",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 10,
//       }}
//     >
//       {diamondData.map((item: IDiamond, index: number) => (
//         <TouchableOpacity
//           key={index}
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: 5,
//             borderWidth: 1,
//             borderColor: "white",
//             padding: 10,
//             borderRadius: 5,
         
//           }}
//           onPress={() => handleDiamond(item.id, index)}
//         >
//           <Text
//             style={{
//               textAlign: "center",
//               color: "#24ff00",
//               fontWeight: "bold",
//               fontSize: 20,
//             }}
//           >
//             {item.amount}
//           </Text>

//           <Image
//             alt="diamond"
//             source={{ uri: item.image }} 
//             style={{
//               width: 65,
//               height: 75,
//               borderRadius: 10,
//               borderWidth: 1,
//               margin: 2,
//               opacity: selectedDiamond === item.amount ? 0.5 : 1,
//             }}
//           />
//           {selectedDiamond === item.amount && (
//             <FontAwesome
//               name="check-circle"
//               size={20}
//               color="green"
//               style={{ position: "absolute", top: 5, right: 5 }}
//             />
//           )}
//           <View style={{ flexDirection: "row", justifyContent: "center" }}>
//             <Text
//               style={{ color: "#e97e45", fontWeight: "bold", fontSize: 15 }}
//             >
//               Rp.{item.price}
//             </Text>
//           </View>
//         </TouchableOpacity>
//       ))}
//     </Box>
//   );
// };
