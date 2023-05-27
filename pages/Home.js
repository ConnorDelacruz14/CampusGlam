import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import HorizontalSwipeList from "../components/HorizontalSwipeList";

const { width } = Dimensions.get("window");

function SearchBar() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Search");
  };

  const handleFocus = () => {
    navigation.navigate("Search");
  };

  return (
    <TouchableOpacity style={styles.searchContainer} onPress={handlePress}>
      <Feather name="search" size={24} color="#808080" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search CampusGlam"
        onFocus={handleFocus}
        onPress={handlePress}
        editable={false}
      />
    </TouchableOpacity>
  );
}

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require("../icons/uci-logo.png")} style={styles.logo} />
        </View>
        <SearchBar />
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../icons/uci-logo.png")} style={styles.logo} />
        <Text>Guest</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Feather
            name="bell"
            size={24}
            color="#808080"
            style={{ marginLeft: 0, marginRight: 20 }}
          ></Feather>
          <Feather
            name="user"
            size={24}
            color="#808080"
            style={{ marginLeft: 0, marginRight: 25 }}
          ></Feather>
        </View>
      </View>
      <SearchBar />
      <View style={styles.swipeListsContainer}>
        <HorizontalSwipeList title="Featured" />
        <HorizontalSwipeList title="Nearby" />
      </View>
      <NavBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    margin: 10,
  },
  logo: {
    width: width * 0.2,
    height: width * 0.12,

  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    top: 130,
    width: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  swipeListsContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
