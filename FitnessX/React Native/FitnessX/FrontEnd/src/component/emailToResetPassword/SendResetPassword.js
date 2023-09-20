import React, { useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataContext } from "../../context";

const SendResetPassword = ({ navigation }) => {
  const { SendEmailToResetPassword } = useContext(DataContext);

  const [email, setEmail] = useState("");

  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerHeader}>
        <Text style={styles.headerTitle}>Enter Your Email</Text>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#ADA4A5"
            onChangeText={(text) => setEmail(text)}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => SendEmailToResetPassword({ navigation }, email)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    alignItems: "center",
    marginVertical: 30,
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F7F8F8",
    backgroundColor: "#f7f8f8",
    borderRadius: 14,
    marginVertical: 5,
    alignItems: "center",
    alignSelf: "center",
    height: 60,
  },
  icon: {
    marginHorizontal: 15,
    color: "#7B6F72",
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 14,
  },

  containerScreen: {
    backgroundColor: "#ffffff",
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 28,
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

export default SendResetPassword;
