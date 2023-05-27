import React, { useState } from "react";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function SearchBar() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    // handle search logic here
  };

  return (
    <View style={styles.searchContainer}>
      <Feather name="search" size={24} color="black" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search CampusGlam"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
}

export default function Home() {
  // const navigation = useNavigation();

  // React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //         headerSearchBarOptions: {
  //             placeHolder: "Search CampusGlam",
  //         },
  //     });
  // }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require("../icons/uci-logo.png")} style={styles.logo} />
      <SearchBar />
      <Text style={styles.title}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      position: 'absolute',
      top: 0,
      left: 10,
      fontSize: 24,
      fontWeight: 'bold',
    },
    logo: {
      width: 100,
      height: 60,
      position: 'absolute',
      top: 40, 
      left: 10,
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
      top: 130,
      left: 20,
      width: 350,
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 16,
    },
    icon: {
      marginRight: 10,
    },
});
