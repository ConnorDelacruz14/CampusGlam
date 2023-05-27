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
        <HorizontalSwipeList title="Featured" />
        <NavBar />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
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
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
  },
});
