import { Text, Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { styles } from "./style";
import { useEffect } from "react";
import { useRoute } from "@react-navigation/native";

const Welcome = ({ navigation }) => {
  const route = useRoute();
  const { user } = route.params;
  // const { user } = route.params;
  // console.log("-------------", route.params.user);
  // console.log("-******************-", route.params);
  // console.log("--+++++++++++++++++++++++++---", route);

  // console.log(user);
  // const user = navigation.getParam("user");
  // console.log(user);
  useEffect(() => {
    console.log("welcome", user);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.centerContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/Image/Welcome.png")}
        />
        <View style={styles.containerText}>
          <Text style={styles.title}>
            Welcome, {user.firstname + user.lastname}
          </Text>
          <Text style={styles.description}>
            You are all set now, let’s reach your goals together with us
          </Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("WorkoutTrackerScreen");
          }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Go To Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
