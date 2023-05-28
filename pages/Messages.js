import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Feather, AntDesign } from "@expo/vector-icons";
import NavBar from "../components/NavBar";

const ProfileCard = ({ imageSource, name }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.profileButton}
      onPress={() => navigation.navigate("Home")}
    >
      <View style={styles.profileCard}>
        <View style={styles.profileImageContainer}>
          <Image source={imageSource} style={styles.profileImage} />
        </View>
        <Text style={styles.profileName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Page = () => {
  const navigation = useNavigation();
  const searchInputRef = useRef(null);
  const [searchText, setSearchText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const data = [
    { id: 1, name: "Lithuanian Prime Minister" },
    { id: 2, name: "Margret Hal" },
    { id: 3, name: "Mike Johnson" },
  ];

  const handleSearchBarFocus = () => {
    setShowDropdown(true);
  };

  const handleSearchBarBlur = () => {
    setShowDropdown(false);
  };

  const handleSearchTextChange = (text) => {
    setSearchText(text);
    setShowDropdown(text.length > 0);
  };

  const renderDropdownItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setSearchText(item.name);
        setShowDropdown(false);
      }}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    if (searchInputRef.current && navigation.isFocused()) {
      searchInputRef.current.focus();
    }
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Feather
          name="arrow-left"
          size={24}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("Home")}
        />
        <TextInput
          ref={searchInputRef}
          style={styles.searchInput}
          placeholder="Search"
          value={searchText}
          onChangeText={handleSearchTextChange}
          onFocus={handleSearchBarFocus}
          onBlur={handleSearchBarBlur}
        />
        {showDropdown && (
          <FlatList
            style={styles.dropdown}
            data={data}
            renderItem={renderDropdownItem}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
      </View>
      <ScrollView contentContainerStyle={styles.profileCardContainer}>
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
      </ScrollView>
      <NavBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  icon: {
    marginRight: 16,
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#DDD",
    backgroundColor: "#F8F8F8",
  },
  dropdown: {
    position: "absolute",
    top: 48,
    left: 16,
    right: 16,
    maxHeight: 200,
    borderRadius: 8,
    backgroundColor: "#FFF",
    elevation: 4,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  profileCardContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  profileButton: {
    marginBottom: 16,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 8,
    padding: 8,
  },
  profileImageContainer: {
    borderRadius: 50,
    overflow: "hidden",
  },
  profileImage: {
    width: 40,
    height: 40,
  },
  profileName: {
    marginLeft: 8,
    fontWeight: "bold",
  },
});

export default Page;
