import React from "react";
import { View, StyleSheet, Text } from "react-native";
import NavBar from "../components/NavBar";

const Page = () => {
  return (
    <View style={styles.container}>
      <Text>This page is for Appointments</Text>
      <NavBar></NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});

export default Page;