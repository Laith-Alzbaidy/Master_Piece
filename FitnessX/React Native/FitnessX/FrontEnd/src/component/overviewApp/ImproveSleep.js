import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
const ImproveSleep = ({ navigation }) => {
  return (
    <View style={styles.continar}>
      <Image
        source={require("../../assets/Image/ImproveSleep.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Improve Sleep Quality</Text>
        <Text style={styles.description}>
          Improve the quality of your sleep with us, good quality sleep can
          bring a good mood in the morning
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("SignUpScreen")}
        style={styles.btn}
      >
        <Image source={require("../../assets/Icon/Next-4.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default ImproveSleep;
