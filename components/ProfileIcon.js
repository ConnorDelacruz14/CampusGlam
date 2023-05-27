import { Text, View, Image } from "react-native";
import React, { Component } from "react";

export class ProfileIcon extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ display: "flex", alignItems: "center" }}>
        <Image
          source={require("../assets/person2.jpg")}
          style={{ height: 60, width: 60 }}
        ></Image>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default ProfileIcon;
