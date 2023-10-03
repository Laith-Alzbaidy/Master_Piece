import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const SplashOne = ({ navigation }) => {
  // const navigation = useNavigation(); // Get the navigation object
  // const route = useRoute();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("")
    }, 1400);
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        // style={styles.icon}
        // source={require("./../../assets/Icon/g6bK8PMoaU (1).json")}
        source={require("./../../assets/Icon/animation_lmxxrco4")}
        autoPlay
        loopr
      />
      <Text
        style={{
          marginTop: 20,
          fontSize: 19,
          fontWeight: "600",
          textAlign: "center",
        }}
      >
        Vervication successful
      </Text>
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
