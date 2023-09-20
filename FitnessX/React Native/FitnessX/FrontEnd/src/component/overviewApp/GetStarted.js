import React from "react";

import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

const GetStarted = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require("../../assets/Image/Logo.png")} />
        <Text style={styles.title}>Everybody Can{"\n"}Train</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("TrackScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between", // Arrange children with space in-between
    alignItems: "center", // Center horizontally
    padding: 20, // Add padding to create space between content and edges
  },
  content: {
    flex: 1, // Take up available space
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: "#7B6F72",
    marginRight: 70,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    // paddingVertical: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center", // Center text inside the button
  },
});

export default GetStarted;
