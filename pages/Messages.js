import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const ProfileCard = ({ imageSource, name }) => {
  return (
    <View style={styles.profileCard}>
      <View style={styles.profileImageContainer}>
        <Image source={imageSource} style={styles.profileImage} />
      </View>
      <Text style={styles.profileName}>{name}</Text>
    </View>
  );
};

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileCardContainer}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            source={require("../assets/calendar.png")}
            style={styles.calendarImage}
          />
        </TouchableOpacity>
        <ProfileCard
          imageSource={require("../assets/person1.jpg")}
          name="Lithuanian Prime Minister"
        />
        <ProfileCard
          imageSource={require("../assets/person2.jpg")}
          name="Margret Hal"
        />
        <ProfileCard
          imageSource={require("../assets/person3.jpg")}
          name="Mike Johnson"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  profileCardContainer: {
    marginTop: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#FFF",
    marginBottom: 10,
  },
  profileImageContainer: {
    borderRadius: 40,
    overflow: "hidden",
    marginRight: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  profileButton: {
    position: "absolute",
    bottom: 5,
    right: 16,
    backgroundColor: "transparent",
    borderRadius: 5,
    padding: 15,
  },
  calendarImage: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default Page;
