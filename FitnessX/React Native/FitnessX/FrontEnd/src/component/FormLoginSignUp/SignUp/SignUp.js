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
import { CheckBox } from "react-native-elements";
import { DataContext } from "../../../context";
const SignUp = ({ navigation }) => {
  const { handleInputChange, formData, signUp } = useContext(DataContext);
  const [isChecked, setIsChecked] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Add this state variable

  const handleSubmit = () => {
    // setSubmittedData(formData);
    // console.log(formData);
    signUp({ navigation });
  };

  // Handle checkbox state change
  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerScreen}>
        <View>
          <View style={styles.containerHeader}>
            <Text style={styles.textTitle}>Hey there,</Text>
            <Text style={styles.headerTitle}>Create an Account</Text>
          </View>
          <View>
            <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="First Name"
                placeholderTextColor="#ADA4A5"
                onChangeText={(text) => handleInputChange("firstname", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="user" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Last Name"
                placeholderTextColor="#ADA4A5"
                onChangeText={(text) => handleInputChange("lastname", text)}
              />
            </View>
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
                onChangeText={(text) => handleInputChange("email", text)}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock" size={20} color="#000" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#ADA4A5"
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) => handleInputChange("password", text)}
              />
              <Icon
                onPress={togglePasswordVisibility}
                name={isPasswordVisible ? "eye" : "eye-slash"} // Change the eye icon based on visibility
                size={20}
                style={styles.eye}
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
                placeholder="Confirm Password"
                placeholderTextColor="#ADA4A5"
                secureTextEntry={!isPasswordVisible}
                onChangeText={(text) =>
                  handleInputChange("confirmPassword", text)
                }
              />
            </View>
            <View style={styles.checkboxContainer}>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckBoxChange}
                containerStyle={styles.checkbox}
              />
              <Text style={styles.checkboxLabel}>
                By continuing you accept our{" "}
                <Text style={styles.underlineText}>Privacy Policy</Text> and{" "}
                <Text style={styles.underlineText}>Terms of Use</Text>
              </Text>
            </View>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              handleSubmit();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Sign Up</Text>
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
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Text style={styles.loginText}>
              Already have an account?{" "}
              <Text style={{ color: "blue" }}>Login</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
