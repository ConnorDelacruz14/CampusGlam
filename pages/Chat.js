import * as React from "react";
import { View, StyleSheet, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, FlatList} from "react-native";
import { useNavigation } from "@react-navigation/native";
import NavBar from "../components/NavBar";

export default function Chat() {
  const navigation = useNavigation();
  const [message, setMessage] = React.useState("");
  const [messages, setMessages] = React.useState([]);
  const scrollViewRef = React.useRef();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Connor Delacruz',
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeholder: "Search Conversation"
      }
    });
  }, [navigation]);

  const sendMessage = () => {
    // Perform actions to send the message (e.g., send API request, update chat state, etc.)
    console.log("Message sent:", message);
    setMessages((prevMessages) => [...prevMessages, message]);
    // Reset the message input
    setMessage("");
    scrollViewRef.current.scrollToEnd({ animated: true });
  };

  return (
    <KeyboardAvoidingView enabled={true} style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView ref = {scrollViewRef} showsVerticalScrollIndicator={false} onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}>
            {messages.map((msg, index) => (
            <View key={index} style={styles.messageContainer}>
                <Text style={styles.messageText}>{msg}</Text>
            </View>
            ))}
        </ScrollView>
        <ScrollView contentContainerStyle={styles.scrollContainer}>   
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="Type your message..."
                onChangeText={setMessage}
                value={message}
            />
            <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
      <NavBar />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingTop: 500,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#007AFF",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 16,
  },
});