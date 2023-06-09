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
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import HorizontalSwipeList from "../components/HorizontalSwipeList";
import { useNavigation } from "@react-navigation/native";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.animation = new Animated.Value(1);
    this.textInputRef = createRef();
    this.scrollViewRef = createRef();
    this.name = this.props.route.params.name;
    this.hours = this.props.route.params.hours;
    this.specialties = this.props.route.params.specialties;
    this.highlights = this.props.route.params.highlights;
    this.id = this.props.route.params.id;
    this.picture = this.props.route.params.picture;
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
    console.log("rendered!", this.id);
    const { animation } = this;
    const animatedStyle = {
      transform: [{ scale: animation }],
    };
    if (this.id === "1") {
      this.picture = require("../assets/person1.jpg");
      this.name = "Rayyaan Nadeem";
      this.hours = "Monday-Thursday 5pm - 8pm";
      this.specialties = "Men's haircuts, fading";
      this.highlights = "Singing during haircut, talkative";
    } else if (this.id === "2") {
      this.picture = require("../assets/person2.jpg");
      this.name = "Matthew Phan";
      this.hours = "By appointment only";
      this.specialties = "Men's haircuts";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "3") {
      this.picture = require("../assets/person3.jpg");
      this.name = "Jerome Parker";
      this.hours = "By appointment only";
      this.specialties = "Men's haircuts";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "4") {
      this.picture = require("../assets/person4.jpg");
      this.name = "Sally Allen";
      this.hours = "Mondays-Sundays 7pm-9pm";
      this.specialties = "Women's haircuts";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "5") {
      this.picture = require("../assets/person5.jpg");
      this.name = "Rebecca Nadeem";
      this.hours = "By appointment only";
      this.specialties = "Women's beauty";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "6") {
      this.picture = require("../assets/person6.jpg");
    } else if (this.id === "7") {
      this.picture = require("../assets/person7.jpg");
      this.name = "Daniel Craig";
      this.hours = "By appointment only";
      this.specialties = "Men's haircuts";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "8") {
      this.picture = require("../assets/person8.jpg");
      this.name = "Allie Patie";
      this.hours = "By appointment only";
      this.specialties = "Men's haircuts";
      this.highlights = "Caring, funny, efficient";
    } else if (this.id === "9") {
      this.picture = require("../assets/person19.jpg");
      this.name = "Jenny Kim";
      this.hours = "By appointment only";
      this.specialties = "Nails and Men's haircuts";
      this.highlights = "Singing and dancing while cutting hair";
    } else if (this.id === "10") {
      this.picture = require("../assets/person10.jpg");
      this.name = "Taylor Chang";
      this.hours = "By appointment only";
      this.specialties = "Singing and Beauty";
      this.highlights = "Easygoing, cheerful";
    }

    return (
      <View style={styles.container}>
        <SearchBar />
        <ScrollView
          ref={this.scrollViewRef}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <View style={styles.profileContainer}>
              <Image source={this.picture} style={styles.pfp} />
              <Text style={styles.profileName}>{this.name}</Text>
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
              { id: "1", image: require("../assets/person1.jpg") },
              { id: "2", image: require("../assets/zendaya.jpeg") },
              { id: "3", image: require("../assets/person3.jpg") },
              { id: "4", image: require("../assets/lizzo.jpg") },
              { id: "5", image: require("../assets/person5.jpg") },
            ]}
          ></HorizontalSwipeList>

          <View style={styles.infoContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Info{"\n"}</Text>
            <Text>Hours: {this.hours}</Text>
            <Text>Mask Required: Yes</Text>
            <Text>Specialties: {this.specialties}</Text>
          </View>
          <View style={styles.highlightsContainer}>
            <Text style={{ fontWeight: "bold", fontSize: 18 }}>
              Highlights{"\n"}
            </Text>
            <Text>{this.highlights}</Text>
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
              img={require("../assets/connor.jpg")}
              rating={5}
            />
            <Review
              name="Rayyaan Nadeem"
              text="Did not know how to do perm."
              img={require("../assets/person1.jpg")}
              rating={1}
            />
            <Review
              name="Kaushal Saleem"
              text="Decent haircut. Would go again because of cheap prices."
              img={require("../assets/Kaushal.jpg")}
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
