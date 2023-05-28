import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../../components/NavBar";

const Conversation = () => {
  return (
    <View style={styles.container}>
      <Text>This page is for Messages</Text>
      <NavBar></NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});

export default Conversation;
