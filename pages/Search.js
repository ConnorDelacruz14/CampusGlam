import React, { useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

class UserRectangles extends React.Component {
  render() {
    const { text, textStyle } = this.props;
    return (
      <View style={styles.rectangle}>
        <Text style={[styles.rectangleText, textStyle]}>{text}</Text>
      </View>
    );
  }
}

export default function Home() {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBarContainer}>
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
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>TRENDING</Text>
          <View style={styles.rectanglesContainer}>
            <UserRectangles text="Lash Salon" textStyle={styles.textStyle2} />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
            <Text style={styles.textSpacing}>&nbsp;</Text>
            <UserRectangles />
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 40,
    marginTop: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  scrollContentContainer: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 10,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  rectanglesContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  rectangle: {
    width: 350,
    height: 160,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 65,
  },
  rectangleText: {
    textAlign: "center",
  },
  textSpacing: {
    height: 10,
    fontSize: 0, // Hide the text spacing, setting it to zero font size
  },
  // textStyle1: {

  // },
});
