import React from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";

const Profile = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <NavBar can_edit={true}></NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default Profile;
