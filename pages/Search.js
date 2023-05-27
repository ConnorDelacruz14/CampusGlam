<<<<<<< HEAD
import React from 'react';
import Image123 from  '../assets/splash.png';
import { View, Image, StyleSheet } from 'react-native';
=======
import React, { useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
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
>>>>>>> main

  return (
<<<<<<< HEAD
    <View style={styles.container}>
      <Image
        source= {Image123}
        style={styles.image}
      />
=======

    <View style={styles.searchContainer}>
      <Feather name="arrow-left" size={24} color="black" style={styles.icon} onPress={handlePress}/>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        placeholder="Search CampusGlam"
      />
        
>>>>>>> main
    </View>
    
    
  );
}

function UserRectangles(){

  return <View style={styles.rectangle}></View>;

}

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar />
        <Text style={styles.title}></Text>
        <UserRectangles></UserRectangles>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

<<<<<<< HEAD
const styles = StyleSheet.create({
  rectangle: {
    width: 200,
    height: 100,
=======
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
    position: 'absolute',
    top: 80,
    left: 30,
    width: 350,
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
  rectangle: {
    width: 350,
    height: 160,
>>>>>>> main
    backgroundColor: 'blue',
    borderRadius: 10, // Adjust this value to change the roundness of the edges
  },
});
<<<<<<< HEAD

export default DetailsPage;
=======
>>>>>>> main
