import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function NavBar() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        borderTopWidth: 1,
        borderTopColor: "#ccc",
        height: 60,
        width: "100%",
        position: "absolute",
        bottom: 40,
      }}
    >
      <TouchableOpacity
        style={{
          alignItems: "center",
          color: "#808080",
        }}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Feather name="home" size={24} color="#808080" />
        <Text
          style={{
            fontSize: 12,
            color: "#808080", // Updated text color to #808080
          }}
        >
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          color: "#808080",
        }}
      >
        <Feather name="calendar" size={24} color="#808080" />
        <Text
          style={{
            fontSize: 12,
            color: "#808080", // Updated text color to #808080
          }}
        >
          Appointments
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          color: "#808080",
        }}
      >
        <Feather name="message-circle" size={24} color="#808080" />
        <Text
          style={{
            fontSize: 12,
            color: "#808080", // Updated text color to #808080
          }}
        >
          Messages
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          alignItems: "center",
          color: "#808080",
        }}
      >
        <Feather name="search" size={24} color="#808080" />
        <Text
          style={{
            fontSize: 12,
            color: "#808080", // Updated text color to #808080
          }}
        >
          Browse
        </Text>
      </TouchableOpacity>
    </View>
  );
}
