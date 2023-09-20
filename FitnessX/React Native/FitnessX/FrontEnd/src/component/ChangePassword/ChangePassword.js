import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataContext } from "../../context";
import { useRoute } from "@react-navigation/native";

const ChangePassword = ({ navigation }) => {
  const { ChangePassword } = useContext(DataContext);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const { params } = useRoute();
  const { email } = params;
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  console.log("*************************", email);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/Image/padlock.png")}
      />
      <Text style={styles.header}>Change New Password</Text>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#000" style={styles.icon} />

        <TextInput
          style={styles.input}
          placeholder="New Password"
          placeholderTextColor="#ADA4A5"
          secureTextEntry={!isPasswordVisible}
          onChangeText={(password) => setNewPassword(password)}
        />
        <Icon
          onPress={togglePasswordVisibility}
          name={isPasswordVisible ? "eye" : "eye-slash"}
          size={20}
          style={styles.eye}
        />
      </View>
      <TouchableOpacity
        onPress={() => ChangePassword(email, newPassword, { navigation })} // Assuming 'email' is available in your scope
        style={styles.button}
      >
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff", // Set your desired background color
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: 250, // Set the width of your image
    height: 250, // Set the height of your image
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F7F8F8",
    backgroundColor: "#f7f8f8",
    borderRadius: 14,
    marginVertical: 5,
    // alignSelf: "center",
    // marginVertical: 40,
    height: 60,
    marginTop: 30,
  },
  input: {
    flex: 1,
    fontSize: 16, // Set your desired font size here
  },
  icon: {
    marginHorizontal: 15,
    color: "#7B6F72",
  },
  eye: {
    marginRight: 15,
    color: "#7B6F72",
  },

  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ChangePassword;
