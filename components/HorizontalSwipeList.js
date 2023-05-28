import React, { Component } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Animated,
} from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

const data = [
  { id: "1", image: require("../assets/person1.jpg") },
  { id: "2", image: require("../assets/person2.jpg") },
  { id: "3", image: require("../assets/person3.jpg") },
  { id: "4", image: require("../assets/person4.jpg") },
  { id: "5", image: require("../assets/person5.jpg") },
];

class HorizontalSwipeList extends Component {
  constructor(props) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.previousTranslationX = 0;
    this.listWidth = 0;
    this.itemWidth = 120; // Update with the actual item width
    this.containerWidth = 0;
  }

  handleLayout = (event) => {
    this.listWidth = event.nativeEvent.layout.width;
  };

  handleGestureEvent = ({ nativeEvent }) => {
    const translationX = this.previousTranslationX + nativeEvent.translationX;
    const minTranslateX = -this.containerWidth + this.itemWidth;
    const maxTranslateX = 0;
    this.translateX.setValue(
      Math.max(Math.min(translationX, maxTranslateX), minTranslateX)
    );
  };

  handleStateChange = ({ nativeEvent }) => {
    if (nativeEvent.state === State.END) {
      const { translationX } = nativeEvent;
      this.previousTranslationX += translationX;
      Animated.spring(this.translateX, {
        toValue: this.previousTranslationX,
        useNativeDriver: true,
        bounciness: 0,
        velocity: translationX / 100,
      }).start();
    }
  };

  renderListItem = ({ item }) => {
    const animatedStyle = {
      transform: [{ translateX: this.translateX }],
    };

    return (
      <View style={styles.itemContainer}>
        <PanGestureHandler
          onGestureEvent={this.handleGestureEvent}
          onHandlerStateChange={this.handleStateChange}
        >
          <Animated.View style={[styles.itemContent, animatedStyle]}>
            <Image source={item.image} style={styles.itemImage} />
          </Animated.View>
        </PanGestureHandler>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.listTitle}>{this.props.title}</Text>
        <View
          style={styles.listContainer}
          onLayout={(event) => {
            this.containerWidth = event.nativeEvent.layout.width;
          }}
        >
          <FlatList
            data={data}
            renderItem={this.renderListItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            onLayout={this.handleLayout}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  listContainer: {
    flex: 1,
    marginRight: 20,
    marginLeft: -20,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#808080",
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
