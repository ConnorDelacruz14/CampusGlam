import React, { useEffect, useRef } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SearchBar() {
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
    <View style={styles.searchContainer}>
      <Feather name="arrow-left" size={24} color="black" style={styles.icon} onPress={handlePress}/>
      <TextInput
        ref={searchInputRef}
        style={styles.input}
        placeholder="Search CampusGlam"
      />
    </View>
  );
}

export default function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <SearchBar />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 30,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    margin: 10,
    position: 'absolute',
    top: 50,
    width: 400,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
});

