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
  FlatList,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

const UserRectangles = ({
  text,
  textStyle,
  subText,
  imageSource,
  welcomeText,
  welcomeTextStyle,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.rectangleContainer}
      onPress={() => navigation.navigate("Details")} // Replace "Details" with the appropriate screen name
    >
      <View style={styles.rectangle}>
        <Image source={imageSource} style={styles.rectangleImage} />
      </View>
      <Text style={[styles.rectangleText, styles.textBottomLeft, textStyle]}>
        {text}
      </Text>
      {welcomeText && (
        <Text style={[styles.welcomeText, welcomeTextStyle]}>
          {welcomeText}
        </Text>
      )}
      <View style={styles.subTextContainer}>
        <Text style={styles.subText}>{subText}</Text>
      </View>
      <TouchableOpacity
        style={styles.calendarButton}
        onPress={() => navigation.navigate("Appointments")}
      >
        <Image
          source={require("../assets/calendar.png")}
          style={styles.calendarImage}
        />
      </TouchableOpacity>
      <View style={styles.rating}>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingPress = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating);
  };

  return (
    <View style={[styles.rating, { justifyContent: "center" }]}>
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
  const [recentSearches, setRecentSearches] = useState([
    "Faded Barber",
    "Hair Stylist",
    "Nail Tech",
    "Boxing Sessions",
    "Yoga Sessions",
    "Other",
  ]);
  const [isSearchBarFocused, setIsSearchBarFocused] = useState(false);

  const handleSearchBarFocus = () => {
    setIsSearchBarFocused(true);
  };

  const handleSearchBarBlur = () => {
    setIsSearchBarFocused(false);
  };

  const handlePress = () => {
    navigation.navigate("Home");
  };

  React.useEffect(() => {
    if (navigation.isFocused()) {
      searchInputRef.current.focus();
    }
  }, [navigation]);

  const renderRecentSearchItem = ({ item }) => (
    <TouchableOpacity style={styles.recentSearchItem}>
      <Text style={styles.recentSearchText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.browseText}>Browse</Text>

      <View style={styles.searchBarContainer}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={styles.icon}
          onPress={handlePress}
        />
        {/* <Text style={styles.browseText}>Browse</Text> */}
        <TextInput
          ref={searchInputRef}
          style={styles.input}
          placeholder="Search CampusGlam"
          onFocus={handleSearchBarFocus} // Add this onFocus event handler
          onBlur={handleSearchBarBlur} // Add this onBlur event handler
        />
      </View>
      {isSearchBarFocused && ( // Render the FlatList only if the search bar is focused
        <FlatList
          data={recentSearches}
          renderItem={renderRecentSearchItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.recentSearchesContainer}
          keyboardShouldPersistTaps="always"
        />
      )}
      <ScrollView
        contentContainerStyle={styles.scrollContentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Trending</Text>
          <View style={styles.rectanglesContainer}>
            <UserRectangles
              text="FADED BARBER - $45"
              imageSource={require("../assets/person1.jpg")}
            />
            <UserRectangles
              text="HAIR STYLIST - $20"
              imageSource={require("../assets/person2.jpg")}
            />
            <UserRectangles
              text="NAIL TECH - $22.50"
              imageSource={require("../assets/person3.jpg")}
            />
            <UserRectangles
              text="YOGA SESSION - $15/HR"
              imageSource={require("../assets/person4.jpg")}
            />
            <UserRectangles
              text="BOXING - $25"
              imageSource={require("../assets/person5.jpg")}
            />
            <UserRectangles
              text="CAR WASH - $10/HR"
              imageSource={require("../assets/Kaushal.jpg")}
            />
            <UserRectangles
              text="Top Fitness Tra - $10"
              imageSource={require("../assets/k_seelam_professional.jpeg")}
            />
            <UserRectangles
              text="MAKEUP ARTIST - $20"
              imageSource={require("../assets/zendaya.jpeg")}
            />
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
    backgroundColor: "#FFF",
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
  browseText: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  recentSearchesContainer: {
    paddingHorizontal: 50,
    marginTop: 1,
  },
  recentSearchItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  recentSearchText: {
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
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  rectanglesContainer: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  rectangleContainer: {
    marginBottom: 65,
  },
  rectangle: {
    width: 350,
    height: 160,
    backgroundColor: "white",
    borderRadius: 10,
    position: "relative",
    overflow: "hidden",
  },
  rectangleImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  rectangleText: {
    fontWeight: "bold",
    fontSize: 20,
    bottom: -10,
    textAlign: "left",
    marginLeft: 10,
  },
  subTextContainer: {
    marginHorizontal: 50,
    marginTop: 10,
  },
  subText: {
    fontSize: 12,
    color: "gray",
  },
  calendarButton: {
    position: "absolute",
    bottom: 5,
    right: 16,
    backgroundColor: "transparent",
    borderRadius: 5,
    padding: 15,
  },
  calendarImage: {
    width: 28,
    height: 35,
    resizeMode: "contain",
  },
  rating: {
    flexDirection: "row",
    bottom: 3,
    right: -5,
    justifyContent: "flex-start",
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
