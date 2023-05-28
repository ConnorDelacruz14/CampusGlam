import React from "react";
import { TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchBar = (props) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Search");
  };

  return (
    <TouchableOpacity style={styles.searchContainer} onPress={handlePress}>
      <Feather name="search" size={24} color="#808080" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search CampusGlam"
        onFocus={handlePress}
        editable={props.can_edit}
      />
    </TouchableOpacity>
  );
};

const styles = {
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
};

export default SearchBar;
