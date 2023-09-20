import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

const EatWell = ({ navigation }) => {
  return (
    <View style={styles.continar}>
      <Image
        source={require("../../assets/Image/EatWell.png")}
        style={styles.image}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Eat Well</Text>
        <Text style={styles.description}>
          Let's start a healthy lifestyle with us, we can determine your diet
          every day. healthy{`\n`}eating is fun
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("ImproveSleepScreen")}
        style={styles.btn}
      >
        <Image source={require("../../assets/Icon/Next-3.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default EatWell;
