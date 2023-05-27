import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SearchBar() {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Search");
  };

  const handleFocus = () => {
    navigation.navigate("Search");
  };

  return (
    // Hello World
    <TouchableOpacity style={styles.searchContainer} onPress={handlePress}>
      <Feather name="search" size={24} color="black" style={styles.icon}/>
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
        <Image source={require("../icons/uci-logo.png")} style={styles.logo}/>
        <SearchBar />
        <Text style={styles.title}></Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      position: 'absolute',
      top: 0,
      left: 10,
      fontSize: 24,
      fontWeight: 'bold',
    },
    logo: {
      width: 100,
      height: 60,
      position: 'absolute',
      top: 40, 
      left: 10,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderRadius: 30,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
      margin: 10,
      position: 'absolute',
      top: 130,
      left: 20,
      width: 350,
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
