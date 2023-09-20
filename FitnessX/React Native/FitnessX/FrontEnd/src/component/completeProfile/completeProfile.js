import {
  Text,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { DataContext } from "../../context";

const CompleteProfile = ({ navigation }) => {
  const { updateUser, handleCompleteProfile, formCompleteProfile } =
    useContext(DataContext);
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    if (selectedDate) {
      setShowDatePicker(false);
      setBirthDate(selectedDate);
      handleCompleteProfile("birthdate", selectedDate.toDateString());
      console.log(selectedDate);
    } else {
      setShowDatePicker(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.containerScreen}>
        <Image
          style={styles.image}
          source={require("../../assets/Image/CompleteProfile.png")}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <View style={styles.containerHeader}>
            <Text style={styles.headerTitle}>Let’s complete your profile</Text>
            <Text style={styles.textHeader}>
              It will help us to know more about you!
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <Icon name="venus-double" size={20} style={styles.icon} />
            <Picker
              style={styles.input}
              onValueChange={(itemValue) => {
                handleCompleteProfile("gender", itemValue);
                console.log(itemValue); // This should be inside curly braces
              }}
              selectedValue={
                formCompleteProfile.gender ? formCompleteProfile.gender : "selected"
              }
            >
              <Picker.Item
                label="Select Gender"
                value="Select Gender"
                fontSize={20}
              />
              <Picker.Item label="Female" value="Female" />
              <Picker.Item label="Male" value="Male" />
            </Picker>
          </View>

          <View style={styles.weigth_height}>
            <TouchableOpacity
              style={styles.inputContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <Icon name="calendar" size={20} style={styles.icon} />
              <Text style={styles.input}>{birthDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={
                  formCompleteProfile.birthDate
                    ? formCompleteProfile.birthDate
                    : birthDate
                }
                display="spinner"
                onChange={handleDateChange}
              />
            )}
          </View>

          <View style={styles.weigth_height}>
            <View style={styles.inputContainer}>
              <Icon
                name="balance-scale"
                size={20}
                color="#000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Your Weight"
                placeholderTextColor="#ADA4A5"
                onChangeText={(text) => handleCompleteProfile("weight", text)}
                keyboardType="numeric"
                maxLength={3}
                value={formCompleteProfile.weight}
              />
            </View>
            <View style={styles.kg_cm}>
              <Text style={styles.text_kg_cm}>KG</Text>
            </View>
          </View>
          <View style={styles.weigth_height}>
            <View style={styles.inputContainer}>
              <Icon
                name="arrows-v"
                size={20}
                color="#000"
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Your Height"
                placeholderTextColor="#ADA4A5"
                onChangeText={(text) => handleCompleteProfile("height", text)}
                keyboardType="numeric"
                maxLength={3}
                value={formCompleteProfile.height}
              />
            </View>
            <View style={styles.kg_cm}>
              <Text style={styles.text_kg_cm}>CM</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => updateUser({ navigation })}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
          <Icon
            name="angle-right"
            size={30}
            color={"#ffffff"}
            style={{ marginLeft: 20 }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingBottom: 20,
  },
  image: {
    resizeMode: "contain",
    height: 300,
  },
  weigth_height: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 48,
    marginVertical: 5,
  },
  kg_cm: {
    backgroundColor: "#d796e3",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    marginLeft: 10,
    borderRadius: 14,
  },
  text_kg_cm: { fontSize: 12, color: "#FFFFFF" },
  containerHeader: {
    alignItems: "center",
    marginVertical: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textHeader: {
    fontSize: 12,
    color: "#7B6F72",
    marginVertical: 5,
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    fontSize: 12,
    color: "#ADA4A5",
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
    height: 48,
    flex: 1,
  },
  icon: {
    marginHorizontal: 10,
    color: "#7B6F72",
    width: 30,
    textAlign: "center",
  },
  pickerItem: {
    fontSize: 12, // Set the text size
    color: "blue", // Set the text color
  },
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 30,
    width: 300,
    height: 60,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 15,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CompleteProfile;
