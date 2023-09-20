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
import api from "../../../api/api"; // Import Axios
import { DataContext } from "../../context";

const VerificationCodeInput = ({ navigation }) => {
  const { user, dataUser } = useContext(DataContext);

  useEffect(() => {
    dataUser();
  }, []);
  console.log("-------", user.email);
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
    console.log(typeof verificationCode);
    try {
      const response = await api.post("/api/v1/users/layth", {
        userId: user._id, // Replace with the actual user ID
        verificationCode: +verificationCode,
      });
      console.log("response", response.data.message);
      if (response.status === 200) {
        Alert.alert("Success", "Email verified successfully");
        navigation.navigate("CompleteProfileScreen"); // Navigate to the next screen upon successful verification
      } else {
        Alert.alert("Error", response.data.message || "Verification failed");
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      Alert.alert("Error", "Verification failed");

      
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

export default VerificationCodeInput;
