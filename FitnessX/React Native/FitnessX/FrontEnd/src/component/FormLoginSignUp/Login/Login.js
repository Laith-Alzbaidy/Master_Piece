import React, { useContext, useState } from "react";
import { styles } from "../style";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataContext } from "../../../context";
import ErrorText from "../../ErrTextForm/textError";
const Login = ({ navigation }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Add this state variable
  const { handleInputLogin, loginUser, loginForm, error } =
    useContext(DataContext);
  const [errors, setErrors] = useState({});

  // const validateForm = () => {
  //   const valid = false;
  //   let errors = {};
  //   if (!loginForm.email) {
  //     errors.email = "Email is required.";
  //   } else if (!/\S+@\S+\.\S+/.test(email)) {
  //     errors.email = "Email is invalid.";
  //   }

  //   // Validate password field
  //   if (!loginForm.password) {
  //     errors.password = "Password is required.";
  //   } else if (password.length < 6) {
  //     errors.password = "Password must be at least 6 characters.";
  //   }

  //   // Set the errors and update form validity
  //   setErrors(errors);
  //   return valid;
  // };

  // const handleSubmit = () => {
  //   if (validateForm()) {
  //     // Form is valid, perform the submission logic
  //     console.log("Form submitted successfully!");
  //   } else {
  //     // Form is invalid, display error messages
  //     console.log("Form has errors. Please correct them.");
  //   }
  // };

  // Toggle password visibility
  const togglePasswordVisibility = ({ navigation }) => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerScreen}>
        <View>
          <View style={styles.containerHeader}>
            <Text style={styles.textTitle}>Hey there,</Text>
            <Text style={styles.headerTitle}>Welcome Back</Text>
          </View>
          <View>
            {/* <ErrorText /> */}
            <View style={styles.inputContainer}>
              <Icon
                name="envelope"
                size={20}
                color="#000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#ADA4A5"
                onChangeText={(text) => handleInputLogin("email", text)}
                value={loginForm.email ? loginForm.email : ""}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                onPress={() => console.log("layth")}
                name="lock"
                size={20}
                color="#000"
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ADA4A5"
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => handleInputLogin("password", text)}
                value={loginForm?.password}
              />
              <Icon
                onPress={togglePasswordVisibility}
                name={isPasswordVisible ? "eye" : "eye-slash"} // Change the eye icon based on visibility
                size={20}
                style={styles.eye}
              />
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => navigation.navigate("SendResetPasswordScreen")}
              >
                <Text style={styles.lableLogin}>Forgot your password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => loginUser({ navigation })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <View style={styles.containerLine}>
            <View style={styles.line} />
            <Text style={styles.textLine}>Or</Text>
            <View style={styles.line} />
          </View>
          <View style={styles.containerIconSignUp}>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="facebook" size={20} color="#3b5998" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Icon name="google" size={20} color="#DB4437" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
            <Text style={styles.loginText}>
              Don’t have an account yet?
              <Text style={{ color: "blue" }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
