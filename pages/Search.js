import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

const UserRectangles = ({ text, textStyle, subText }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Appointments");
  };

  return (
    <TouchableOpacity style={styles.rectangle} onPress={handlePress}>
      <View style={styles.textContainer}>
        <Text style={[styles.rectangleText, styles.textBottomLeft, textStyle]}>
          {text}
        </Text>
      </View>
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <Rating />
    </TouchableOpacity>
  );
};

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingPress = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating);
  };

  return (
    <View style={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleRatingPress(index + 1)}
          style={[
            styles.ratingIconContainer,
            selectedRating >= index + 1 && styles.selectedRatingIconContainer,
          ]}
        >
          <AntDesign
            name="star"
            style={[
              styles.ratingIcon,
              selectedRating >= index + 1 && styles.selectedRatingIcon,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default function Home() {
  const navigation = useNavigation();
  const searchInputRef = React.useRef(null);

  const handlePress = () => {
    navigation.navigate("Home");
  };

  React.useEffect(() => {
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
            <UserRectangles text="Faded barber" />
            <UserRectangles text="New barber" />
            <UserRectangles />
            <UserRectangles />
            <UserRectangles />
            <UserRectangles />
            <UserRectangles />
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
    position: "relative",
  },
  textContainer: {
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  rectangleText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textBottomLeft: {
    textAlign: "left",
  },
  subTextContainer: {
    position: "absolute",
    bottom: -30,
    left: 10,
    marginHorizontal: 50,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  calendarButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "transparent",
    borderRadius: 5,
    padding: 5,
  },
  calendarImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  rating: {
    flexDirection: "row",
  },
  ratingIconContainer: {
    marginRight: 2,
  },
  ratingIcon: {
    fontSize: 24,
    color: "#ccc",
  },
  selectedRatingIconContainer: {
    marginRight: 2,
  },
  selectedRatingIcon: {
    color: "gold",
    opacity: 1,
  },
});
