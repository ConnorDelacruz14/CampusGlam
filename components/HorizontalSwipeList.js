import React, { Component } from "react";
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

class HorizontalSwipeList extends Component {
  constructor(props) {
    super(props);
    this.translateX = new Animated.Value(0);
    this.previousTranslationX = 0;
    this.listWidth = 0;
    this.itemWidth = this.props.pictureSize || 120; // Default size is 120
    this.containerWidth = 0;
    this.data = this.props.data;
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
            <TouchableOpacity
              onPress={() => console.log("Pressed item ID:", item.id)}
            >
              <Image
                source={item.image}
                style={[
                  styles.itemImage,
                  { width: this.itemWidth, height: this.itemWidth },
                ]}
              />
            </TouchableOpacity>
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
            data={this.data}
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
