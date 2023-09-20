import React, { useState, useContext } from "react";
import {
  View,
  Button,
  Image,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Icon from "react-native-vector-icons/FontAwesome";
import { AntDesign } from "react-native-vector-icons";
import { DataContext } from "../../context";
const EditProfile = () => {
  const { UpdateProfileUser, user } = useContext(DataContext);
  // const [formData, setformData] = useState();
  // const [userUpdate, setUserUpdate] = useState({});

  const [userUpdate, setUserUpdate] = useState({
    firstname: user.firstname,
    lastname: user.lastname,
    weight: String(user.weight),
    height: String(user.height),
    image: user.image,
  });

  const handleUpdateInput = (field, value) => {
    setUserUpdate({ ...userUpdate, [field]: value });
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      // const result2 = await ImagePicker.launchImageLibraryAsync({
      //   mediaTypes: ImagePicker.MediaTypeOptions.Images,
      //   allowsEditing: true,
      //   aspect: [4, 3],
      //   quality: 1,
      // });
      if (!result.cancelled) {
        setUserUpdate({ ...userUpdate, image: result.assets[0].uri });
        // Replace 'your-server-url' with your actual server URL
      }
    } catch (error) {
      // Handle other errors, if any
      console.error(error);
    }
  };
  console.log("************", userUpdate);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity style={styles.imagePickerButton} onPress={pickImage}>
        <Image source={{ uri: userUpdate.image }} style={styles.imageProfile} />

        <View style={styles.containerIconCam}>
          <AntDesign name="camera" size={40} style={styles.iconCam} />
        </View>
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#ADA4A5"
          onChangeText={(text) => handleUpdateInput("firstname", text)}
          // onChangeText={(text) => setFirstname(text)}
          value={userUpdate.firstname}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#ADA4A5"
          onChangeText={(text) => handleUpdateInput("lastname", text)}
          // onChangeText={(text) => setLastname(text)}
          value={userUpdate.lastname}
        />
      </View>
      <View style={styles.weightHeight}>
        <View style={styles.weightInputContainer}>
          <Icon
            name="balance-scale"
            size={20}
            color="#000"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Weight"
            placeholderTextColor="#ADA4A5"
            onChangeText={(text) => handleUpdateInput("weight", text)}
            // onChangeText={(text) => setWeight(text)}
            value={userUpdate.weight}
          />
        </View>
        <View style={styles.kgContainer}>
          <Text style={styles.textKg}>KG</Text>
        </View>
      </View>
      <View style={styles.weightHeight}>
        <View style={styles.weightInputContainer}>
          <Icon name="arrows-v" size={20} color="#000" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Height"
            placeholderTextColor="#ADA4A5"
            onChangeText={(text) => handleUpdateInput("height", text)}
            // onChangeText={(text) => setHeight(text)}
            value={userUpdate.height}
          />
        </View>
        <View style={styles.kgContainer}>
          <Text style={styles.textKg}>CM</Text>
        </View>
      </View>
      <TouchableOpacity
        // onPress={() => UpdateProfile(updateUser, user._id)}
        style={styles.button}
      >
        <Text
          style={styles.buttonText}
          onPress={() => UpdateProfileUser(userUpdate)}
        >
          Save
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          setUserUpdate({
            ...user,
            weight: String(user.weight),
            height: String(user.height),
          })
        }
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageProfile: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
    fontSize: 12,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 30,
    width: 300,
    height: 40,
    justifyContent: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "#F7F8F8",
    backgroundColor: "#f7f8f8",
    borderRadius: 14,
    marginVertical: 10,
    height: 40,
    paddingHorizontal: 15,
  },
  icon: {
    color: "#7B6F72",
    width: 40,
    textAlign: "center",
  },
  weightHeight: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 48,
    marginVertical: 5,
    width: "100%", // Make sure it takes full width
    marginVertical: 8,
  },
  weightInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Distribute available space
    borderColor: "#F7F8F8",
    backgroundColor: "#f7f8f8",
    paddingLeft: 15,
    borderRadius: 14,
  },

  kgContainer: {
    backgroundColor: "#d796e3",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    borderRadius: 14,
    marginLeft: 10,
  },
  textKg: { fontSize: 12, color: "#FFFFFF" },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  imagePickerButton: {
    // backgroundColor: "#007AFF",
    // padding: 10,
    // borderRadius: 30,
    // width: 200,
    // height: 40,
    // justifyContent: "center",
    // alignItems: "center",
    // marginTop: 10,
  },
  imagePickerText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },

  iconCam: {
    color: "#7B6F72",
  },
  containerIconCam: {
    right: 10,
    top: 150,
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: 50,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default EditProfile;
