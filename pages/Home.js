import React from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";
import HorizontalSwipeList from "../components/HorizontalSwipeList";
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
              navigation.navigate("Profile", {
                name: "Matthew Phan",
                hours: "By appointment only",
                specialties: "Men's haircuts",
                highlights: "Caring, funny, efficient",
                id: 2,
              });
            }}
          ></Feather>
        </View>
      </View>
      <SearchBar can_edit={false} />
      <ScrollView>
        <Option />
        <View style={styles.swipeListsContainer}>
          <HorizontalSwipeList
            title="Hall Of Fame"
            data={[
              { id: "1", image: require("../assets/person1.jpg") },
              { id: "8", image: require("../assets/zendaya.jpeg") },
              { id: "3", image: require("../assets/person3.jpg") },
              { id: "9", image: require("../assets/lizzo.jpg") },
              { id: "5", image: require("../assets/person5.jpg") },
            ]}
          />
          <HorizontalSwipeList
            title="Nearby Stylists"
            data={[
              { id: "2", image: require("../assets/person2.jpg") },
              { id: "10", image: require("../assets/taylor_swift.jpg") },
              { id: "9", image: require("../assets/lizzo.jpg") },
              { id: "4", image: require("../assets/person4.jpg") },
              { id: "7", image: require("../assets/person7.jpg") },
            ]}
          />
          <HorizontalSwipeList
            title="Past Stylists"
            pictureSize={80}
            data={[
              { id: "1", image: require("../assets/person1.jpg") },
              { id: "7", image: require("../assets/person7.jpg") },
              { id: "3", image: require("../assets/person3.jpg") },
              { id: "4", image: require("../assets/person4.jpg") },
              { id: "9", image: require("../assets/lizzo.jpg") },
            ]}
          />
          <Text>{"\n\n\n\n"}</Text>
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
    padding: 10,
  },
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    marginTop: 40,
  },
  logo: {
    width: 60,
    height: 40,
  },
  swipeListsContainer: {
    flex: 1,
    flexDirection: "column",
  },
});
