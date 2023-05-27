import React, { useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import NavBar from "../components/NavBar";
function SearchBar() {
  const navigation = useNavigation();
  const searchInputRef = useRef(null);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    if (navigation.isFocused()) {
      searchInputRef.current.focus();
    }
  }, [navigation]);

  return (
    <View>
      <View style={styles.searchContainer}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={styles.icon}
          onPress={handlePress}
        />
        <TextInput
          ref={searchInputRef}
          style={styles.input}
          placeholder="Search CampusGlam"
        />
      </View>
    </View>
  );
}

export default function Search() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar />
        <Text style={styles.title}></Text>
        <NavBar></NavBar>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
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
    position: "absolute",
    top: 50,
    width: 400,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
