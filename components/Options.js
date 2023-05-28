import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function Option() {
  const navigate = useNavigation();
  const handlePress = (page) => {
    // Handle navigation or any other logic based on the selected page
    navigate.navigate(page);
  };

  return (
    <View style={styles.optionsContainer}>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => handlePress("Search")}
      >
        <Image source={require('../icons/razor.png')} style={styles.option} />
        <Text style={styles.optionText}>Hair</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => handlePress("Search")}
      >
        <Image source={require('../icons/nail-polish.png')} style={styles.option} />
        <Text style={styles.optionText}>Nails</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => handlePress("Search")}
      >
        <Image source={require('../icons/makeup.png')} style={styles.option} />
        <Text style={styles.optionText}>Makeup</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => handlePress("Search")}
      >
        <View style={styles.circleContent}>
          <Image source={require('../icons/skincare.png')} style={styles.option} />
          <Text style={styles.optionText}>Skincare </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  optionText: {
    fontSize: 14,
    paddingTop: 4,
    textAlign: 'center',
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  option: {
    width: 50,
    height: 55,
    borderWidth: 0,
    borderRadius: 50,
    
  },
  circle: {
    width: 80,
    height: 120,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 12,
  },
});
