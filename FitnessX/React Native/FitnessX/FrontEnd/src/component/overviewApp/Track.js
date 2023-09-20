import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
const Track = ({ navigation }) => {
  // console.log(navigation);
  return (
    <View style={styles.continar}>
      <Image
        source={require("../../assets/Image/Track.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Track Your Goal</Text>
        <Text style={styles.description}>
          Don't worry if you have trouble determining your goals. We can help
          you determine your goals and track your goals.
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("BurnScreen")}
        style={styles.btn}
      >
        <Image source={require("../../assets/Icon/Next-1.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Track;
