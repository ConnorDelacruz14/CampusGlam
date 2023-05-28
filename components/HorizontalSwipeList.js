import React, { useState, useRef } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const HorizontalSwipeList = ({ title, data, pictureSize }) => {
  const [translateX] = useState(new Animated.Value(0));
  const previousTranslationX = useRef(0);
  const [listWidth, setListWidth] = useState(0);
  const itemWidth = pictureSize || 120;
  const containerWidth = useRef(0);
  const navigation = useNavigation();

  const handleLayout = (event) => {
    setListWidth(event.nativeEvent.layout.width);
  };

  const handleGestureEvent = ({ nativeEvent }) => {
    const translationX =
      previousTranslationX.current + nativeEvent.translationX;
    const minTranslateX = -containerWidth.current + itemWidth;
    const maxTranslateX = 0;
    translateX.setValue(
      Math.max(Math.min(translationX, maxTranslateX), minTranslateX)
    );
  };

  const handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const { translationX } = nativeEvent;
      previousTranslationX.current += translationX;
      Animated.spring(translateX, {
        toValue: previousTranslationX.current,
        useNativeDriver: true,
        bounciness: 0,
        velocity: translationX / 100,
      }).start();
    }
  };

  const renderListItem = ({ item }) => {
    const animatedStyle = {
      transform: [{ translateX }],
    };

    return (
      <View style={styles.itemContainer}>
        <PanGestureHandler
          onGestureEvent={handleGestureEvent}
          onHandlerStateChange={handleStateChange}
        >
          <Animated.View style={[styles.itemContent, animatedStyle]}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Profile", {
                  name: "",
                  hours: "",
                  specialties: "",
                  highlights: "",
                  id: item.id,
                });
              }}
            >
              <Image
                source={item.image}
                style={[
                  styles.itemImage,
                  { width: itemWidth, height: itemWidth },
                ]}
              />
            </TouchableOpacity>
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>{title}</Text>
      <View
        style={styles.listContainer}
        onLayout={(event) => {
          containerWidth.current = event.nativeEvent.layout.width;
        }}
      >
        <FlatList
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onLayout={handleLayout}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    marginLeft: -10,
  },
  listContainer: {
    flex: 1,
    marginRight: 5,
    marginLeft: -20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
    marginLeft: 20,
  },
  itemContainer: {
    alignItems: "center",
    marginLeft: 35,
  },
  itemImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
});

export default HorizontalSwipeList;
