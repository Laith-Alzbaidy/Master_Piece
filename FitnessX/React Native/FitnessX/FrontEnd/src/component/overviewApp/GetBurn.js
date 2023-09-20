import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";
const Burn = ({ navigation }) => {
  return (
    <View style={styles.continar}>
      <Image source={require("../../assets/Image/GetBurn.png")} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Get Burn</Text>
        <Text style={styles.description}>
          Let’s keep burning, to achive yours goals, it hurts only temporarily,
          if you give up now you will be in pain forever
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("EatWellScreen")}
        style={styles.btn}
      >
        <Image source={require("../../assets/Icon/Next-2.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Burn;
