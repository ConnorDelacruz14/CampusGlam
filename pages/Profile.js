import React, { useState, Component, createRef } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  TextInput,
} from "react-native";
import { Feather, FontAwesome, AntDesign } from "@expo/vector-icons";
import NavBar from "../comcomponents/NavBar";
import SearchBar from "../comcomponents/SearchBar";
import HorizontalSwipeList from "../comcomponents/HorizontalSwipeList";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(1);
    this.textInputRef = createRef();
    this.scrollViewRef = createRef();
  }

  handlePressIn = () => {
    Animated.spring(this.animation, {
      toValue: 0.8,
      useNativeDriver: true,
    }).start();
  };

  handlePressOut = () => {
    Animated.spring(this.animation, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  handleNavigateToMessages = () => {
    this.props.navigation.navigate("Messages"); // Navigating to "Messages" screen
  };

  handleScrollToReviews = () => {
    if (this.scrollViewRef.current) {
      this.scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  render() {
    const { navigation } = this.props;
    const { animation } = this;
    const animatedStyle = {
      transform: [{ scale: animation }],
    };

    return (
      <View style={styles.container}>
        <SearchBar />
        <ScrollView
          ref={this.scrollViewRef}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.profileContainer}>
              <Image
                source={require("../../assets/person2.jpg")}
                style={styles.pfp}
              />
              <Text style={styles.profileName}>Matthew Phan</Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.sendMessageContainer, animatedStyle]}
                onPressIn={this.handlePressIn}
                onPressOut={this.handlePressOut}
                onPress={() => this.handleNavigateToMessages("Messages")}
              >
                <Feather name="send" size={24} color="#808080" />
                <Text>Send Message</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.bioContainer}>
            <Text>300 Bookings | </Text>
            <FontAwesome name="star" size={24} color="gold"></FontAwesome>
            <FontAwesome name="star" size={24} color="gold"></FontAwesome>
            <FontAwesome name="star" size={24} color="gold"></FontAwesome>
            <FontAwesome name="star" size={24} color="gold"></FontAwesome>
            <Feather name="star" size={24} color="gold"></Feather>
            <Text> | 119 Reviews </Text>
          </View>

          <HorizontalSwipeList
            title="Photos"
            data={[
              { id: "1", image: require("../../assets/person1.jpg") },
              { id: "2", image: require("../../assets/person7.jpg") },
              { id: "3", image: require("../../assets/person3.jpg") },
              { id: "4", image: require("../../assets/person4.jpg") },
              { id: "5", image: require("../../assets/person7.jpg") },
            ]}
          ></HorizontalSwipeList>

          <View style={styles.infoContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Info{"\n"}</Text>
            <Text>Hours: Only By Appointments</Text>
            <Text>Mask Required: Yes</Text>
            <Text>Specialties: Hairstyles for guys</Text>
          </View>
          <View style={styles.highlightsContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Highlights{"\n"}
            </Text>
            <Text>Polite, professional, caring, etc.</Text>
          </View>
          <View style={styles.reviewsContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Reviews{"\n"}
            </Text>
            <View style={styles.userReviewContainer}>
              <View style={styles.bioContainer}>
                <Text style={{ fontWeight: "bold" }}>Guest{"\t"}</Text>
                <Rating />
              </View>
              <TextInput
                ref={this.textInputRef}
                style={{ color: "black", padding: 10 }}
                placeholder="Leave a review..."
              />
            </View>
            <Review
              name="Connor Delacruz"
              text="I love my new hair. Best barber on campus!"
              img={require("../../assets/connor.jpg")}
              rating={5}
            />
            <Review
              name="Rayyaan Nadeem"
              text="Did not know how to do perm."
              img={require("../../assets/person1.jpg")}
              rating={1}
            />
            <Review
              name="Kaushal Saleem"
              text="Decent haircut. Would go again because of cheap prices."
              img={require("../../assets/Kaushal.jpg")}
              rating={3}
            />
            <Text>{"\n\n\n"}</Text>
          </View>
        </ScrollView>
        <NavBar can_edit={true} />
      </View>
    );
  }
}

class Review extends Component {
  renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FontAwesome name="star" size={24} color="gold" key={i} />);
    }
    return stars;
  };

  render() {
    const { img, name, rating, text } = this.props;
    return (
      <View style={styles.reviewContainer}>
        <View style={styles.rating}>
          <Image
            source={img}
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              marginRight: 10,
              marginBottom: 10,
            }}
          />
          <Text>
            {name}
            {"\n"}
            {this.renderStars(rating)}
          </Text>
        </View>
        <View style={styles.review}>
          <Text>{text}</Text>
        </View>
      </View>
    );
  }
}

const Rating = () => {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleRatingPress = (rating) => {
    setSelectedRating(rating === selectedRating ? 0 : rating);
  };

  return (
    <View style={styles.ratingValue}>
      {[...Array(5)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleRatingPress(index + 1)}
          style={[
            styles.ratingIconContainer,
            selectedRating >= index + 1 && styles.selectedRatingIconContainer,
          ]}
        >
          <AntDesign
            name="star"
            style={[
              styles.ratingIcon,
              selectedRating >= index + 1 && styles.selectedRatingIcon,
            ]}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ratingValue: {
    flexDirection: "row",
  },
  ratingIconContainer: {
    marginRight: 2,
  },
  ratingIcon: {
    fontSize: 24,
    color: "#5A5A5A",
  },
  selectedRatingIconContainer: {
    marginRight: 2,
  },
  selectedRatingIcon: {
    color: "gold",
    opacity: 1,
  },
  container: {
    paddingTop: 30,
    padding: 10,
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profileContainer: {
    alignItems: "center",
  },
  pfp: {
    height: 100,
    width: 100,
    borderRadius: 60,
  },
  profileName: {
    marginTop: 8,
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  sendMessageContainer: {
    flexDirection: "row",
    width: 150,
    backgroundColor: "lightgray",
    height: 40,
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bioContainer: {
    margin: 10,

    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  infoContainer: {
    margin: 10,
    marginTop: -20,
  },
  highlightsContainer: {
    margin: 10,
  },
  userReviewContainer: {
    backgroundColor: "lightgray",
    borderRadius: 20,
    height: 100,
    width: "100%",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  reviewsContainer: {
    margin: 10,
    marginTop: 20,
  },
  rating: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    width: 200,
  },
  reviewContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  review: {
    width: "100%",
    height: 50,
    backgroundColor: "lightgray",
    borderRadius: 15,
    padding: 10,
    textAlign: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Profile;
