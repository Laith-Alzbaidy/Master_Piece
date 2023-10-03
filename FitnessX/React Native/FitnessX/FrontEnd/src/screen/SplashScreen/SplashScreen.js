import React, { useEffect, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  Button,
  TouchableOpacity,
  Animated, // Import Animated from react-native
} from "react-native";
import LottieView from "lottie-react-native";
const SplashScreen = ({ navigation }) => {
  const slideAnim = useRef(new Animated.Value(-400)).current; // Initial position is set to start from -400 (above the screen)

  useEffect(() => {
    // Define keyframes for the animation
    const keyframes = Animated.sequence([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -200,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -75,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: -30,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]);

    // Start the animation when the component mounts
    keyframes.start();

    // Navigate to the next screen after the animation is complete
    setTimeout(() => {
      navigation.navigate("GetStartedScreen");
    }, 4000); // Adjust the duration as needed
  }, [slideAnim, navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Use Animated.View for the logo with position controlled by the animation */}
        <Animated.View
          style={[
            styles.logoContainer,
            { transform: [{ translateY: slideAnim }] },
          ]}
        >
          <Image source={require("../../assets/Image/Logo.png")} />
          <Text style={styles.title}>Everybody Can{"\n"}Train</Text>
        </Animated.View>
      </View>

      <LottieView
        style={styles.icon}
        // source={require("./../../assets/Icon/g6bK8PMoaU (1).json")}
        source={require("./../../assets/Icon/animation_lmxxrco4")}
        autoPlay
        loop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 200,
    // flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center", // Arrange children with space in-between
    alignItems: "center", // Center horizontally
    padding: 20, // Add padding to create space between content and edges
  },
  content: {
    flex: 1, // Take up available space
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  logoContainer: {
    marginBottom: 20,
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

export default SplashScreen;
