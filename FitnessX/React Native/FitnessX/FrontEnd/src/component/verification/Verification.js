import React, { useContext, useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DataContext } from "../../context";

const Verification = ({ navigation }) => {
  const { user, dataUser } = useContext(DataContext);
  // const [refresh, setRefresh] = useState(false); // Add a state variable
  console.log("-------------------------------------", user);
  useEffect(() => {
    dataUser();
    if (user.verified) {
      navigation.navigate("WelcomeScreen", { user: user });
    } else {
      console.log("not verfied");
    }
  }); // Add 'refresh' to the dependency array

  const handleProcess = () => {
    // Include logic here to trigger the verification process
    // For example, sending a verification email
    dataUser(); // Call dataUser when the button is pressed
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Image/send-mail.png")}
        style={styles.image}
      />

      <View style={styles.containerText}>
        <Text style={styles.headerText}>Account Verification</Text>
        <Text style={styles.messageText}>
          Please verify your email using the link sent to {user.email}
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleProcess}>
        <Text style={styles.buttonText}>Process</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  image: {
    width: 250, // Set the width of your image
    height: 250, // Set the height of your image
    resizeMode: "contain", // Adjust the resizeMode as needed
  },

  containerText: {
    alignItems: "center",
    marginVertical: 50,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  messageText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 20,
    marginVertical: 10,
    lineHeight: 20,
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
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Verification;
