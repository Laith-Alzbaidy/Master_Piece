// animation_lmxyghyo

import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
const SplashOne = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("SplashScreen");
    }, 8000);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        // style={styles.icon}
        // source={require("./../../assets/Icon/g6bK8PMoaU (1).json")}
        source={require("./../../assets/Icon/animation_lmxyghyo")}
        autoPlay
        loopr
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
  },
  icon: {
    width: 300, // Set your desired width
    height: 300, // Set your desired height
  },
});

export default SplashOne;
