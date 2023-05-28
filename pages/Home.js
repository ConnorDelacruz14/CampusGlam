import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import HorizontalSwipeList from "../components/HorizontalSwipeList";
import ProfileIcon from "../components/ProfileIcon";
import Option from "../components/Options";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const navigation = useNavigation();
  return (
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
            onPress={() => {
              navigation.navigate("Profile");
            }}
          ></Feather>
        </View>
      </View>
      <SearchBar can_edit={false} />
      <ScrollView>
        <Option />
        <View style={styles.swipeListsContainer}>
          <HorizontalSwipeList title="Featured" />
          <HorizontalSwipeList title="Nearby" />
          <ProfileIcon name="Connor" />
          <ProfileIcon name="Matthew" />
        </View>
      </ScrollView>
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
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  logo: {
    width: 100,
    height: 60,
  },
  swipeListsContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
