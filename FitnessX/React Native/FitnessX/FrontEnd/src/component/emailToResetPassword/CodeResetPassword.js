import React, { useContext, useEffect, useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { DataContext } from "../../context";
import api from "../../../api/api"; // Import Axios
import { useRoute } from "@react-navigation/native";
const CodeResetPassword = ({ navigation }) => {
  const { user, VerificationCodeToResetPassword, SendEmailToResetPassword } =
    useContext(DataContext);
  const { params } = useRoute();
  const { email } = params;
  // const email = navigation.getParam("email");
  console.log("aaa", email);
  const [code, setCode] = useState({
    digit1: "",
    digit2: "",
    digit3: "",
    digit4: "",
  });

  const handleChangeText = (text, key) => {
    // Ensure only numbers are entered and limit the length to 1 digit
    const formattedText = text.slice(0, 1);
    setCode((prevCode) => ({ ...prevCode, [key]: formattedText }));
  };

  const handleVerify = async () => {
    const verificationCode = Object.values(code).join(""); // Combine code digits

    try {
      console.log("---------------");
      const response = await api.post("/api/v1/users/verifyCodePassword", {
        email,
        verificationCode: +verificationCode,
      });

      console.log(response.status);
      if (response.data.message) {
        // Success message or error message from the server
        Alert.alert("Message", response.data.message);

        if (response.status === 200) {
          // Handle success
          navigation.navigate("ChangePasswordScreen", { email });
        }
      }
    } catch (error) {
      // Alert.alert("Error", error.response.data.message);
      console.log(error.response);
      Alert.alert(
        "Error",
        error.response.data.message,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Resend Code",
            onPress: () => SendEmailToResetPassword({ navigation }, email),
          },
        ],
        { cancelable: false }
      );
    }
  };
  return (
    <View style={styles.containerScreen}>
      <Image
        source={require("../../assets/Image/send-mail.png")}
        style={styles.image}
      />

      <View style={styles.container}>
        {Object.keys(code).map((key, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            value={code[key]}
            onChangeText={(text) => handleChangeText(text, key)}
            maxLength={1}
          />
        ))}
      </View>
      <TouchableOpacity onPress={handleVerify} style={styles.button}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250, // Set the width of your image
    height: 250, // Set the height of your image
    resizeMode: "contain", // Adjust the resizeMode as needed
  },
  containerScreen: {
    backgroundColor: "#ffffff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    fontSize: 24,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    width: 50,
    height: 50,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 40,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CodeResetPassword;
