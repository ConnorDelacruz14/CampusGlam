import React from 'react';
import Image123 from  '../assets/splash.png';
import { View, Image, StyleSheet } from 'react-native';

const DetailsPage = () => {
  return (
    <View style={styles.container}>
      <Image
        source= {Image123}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangle: {
    width: 200,
    height: 100,
    backgroundColor: 'blue',
    borderRadius: 10, // Adjust this value to change the roundness of the edges
  },
});

export default DetailsPage;
