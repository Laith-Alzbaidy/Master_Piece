import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
const IconAnimation = ({ navigation }) => {
  // const navigation = useNavigation(); // Get the navigation object
  const route = useRoute();
  const { name, email } = route.params;
  // console.log(route.params);
  console.log("////////", name);
  console.log("/////////////////", email);
  useEffect(() => {
    if (name === "CodeVerficationScreen") {
      setTimeout(() => {
        navigation.navigate("CompleteProfileScreen"); // Navigate to the next screen upon successful verification
      }, 1500);
    }
    if (name === "CodeResetPasswordScreen") {
      setTimeout(() => {
        navigation.navigate("ChangePasswordScreen", { email }); // Navigate to the next screen upon successful verification
      }, 1500);
    }
  }, []);
  return (
    <View style={styles.container}>
      <LottieView
        style={styles.icon}
        source={require("../assets/Icon/animation_lmxhwp2w")}
        autoPlay
        loop
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
      <LottieView
        style={styles.icon}
        autoPlay
        loop
        source={require("../assets/Icon/animation_lmxi2grz")}
      />
    </View>
  );
};

export default IconAnimation;

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
