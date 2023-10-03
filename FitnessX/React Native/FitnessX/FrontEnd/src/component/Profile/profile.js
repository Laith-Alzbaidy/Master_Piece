import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import { DataContext } from "../../context";
const ProfilePage = ({ navigation }) => {
  // Replace these with actual user data, including the image URI
  const { user, removeToken } = useContext(DataContext);

  console.log(user);
  const calculateAge = (birthdate) => {
    const currentDate = new Date();
    const timeDifference = currentDate - birthdate;
    const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25; // Account for leap years
    const yearsDifference = timeDifference / millisecondsInYear;
    return Math.floor(yearsDifference);
  };
  console.log("-------------------", user.image);
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#ffffff",
        justifyContent: "space-evenly",
      }}
    >
      <View style={styles.container}>
        <View style={styles.headerLeft}>
          <Image
            source={{
              uri: user.image,
            }}
            style={styles.profileImage}
          />
          <View style={styles.containerName}>
            <Text style={styles.name}>
              {`${user.firstname} ${user.lastname}`}
            </Text>
            <Text style={styles.undername}>Lose a Fat Program</Text>
          </View>
        </View>
        {/* Add more user information here */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ProfileEditScreen");
          }}
          style={styles.editButton}
        >
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_H_W}>
        <View style={styles.card}>
          <Text style={styles.cardUp}>{`${user.height}cm`}</Text>
          <Text style={styles.titleCard}>Height</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardUp}>{`${user.weight}cm`}</Text>
          <Text style={styles.titleCard}>Weight</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardUp}>
            {calculateAge(new Date(user.birthdate))}
          </Text>
          <Text style={styles.titleCard}>Age</Text>
        </View>
      </View>
      <View style={styles.sectionAcount}>
        <Text style={styles.accountTitle}>Account</Text>
        <View style={styles.continarAccount}>
          <View style={styles.leftAccount}>
            <Icon name="user" size={20} style={styles.iconAccount} />
            <Text style={styles.nameMinu}>Personal Data</Text>
          </View>
          <AntDesign name="right" size={20} color="#ADA4A5" />
        </View>
        <View style={styles.continarAccount}>
          <View style={styles.leftAccount}>
            <Icon name="trophy" size={20} style={styles.iconAccount} />
            <Text style={styles.nameMinu}>Achievement</Text>
          </View>
          <AntDesign name="right" size={20} color="#ADA4A5" />
        </View>
        <View style={styles.continarAccount}>
          <View style={styles.leftAccount}>
            <Icon name="history" size={20} style={styles.iconAccount} />
            <Text style={styles.nameMinu}>Activity History</Text>
          </View>
          <AntDesign name="right" size={20} color="#ADA4A5" />
        </View>
        <View style={styles.continarAccount}>
          <View style={styles.leftAccount}>
            <Icon name="line-chart" size={20} style={styles.iconAccount} />
            <Text style={styles.nameMinu}>Workout Progress</Text>
          </View>
          <AntDesign name="right" size={20} color="#ADA4A5" />
        </View>
      </View>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => removeToken({ navigation })}
      >
        <Icon name="sign-out" style={styles.logoutIcon} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 75,
  },
  containerName: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  undername: {
    fontSize: 12,
    color: "#7B6F72",
    marginTop: 4,
  },
  editButton: {
    backgroundColor: "#99bdfe",
    borderRadius: 99,
    width: 83,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  editButtonText: {
    color: "white",
    fontSize: 12,
  },

  container_H_W: {
    flexDirection: "row",
    // marginTop: 10,
    justifyContent: "center",
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: 95,
    height: 80,
    padding: 16,
    elevation: 15, // This adds a shadow on Android
    shadowColor: "#000", // This sets shadow color on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginHorizontal: 8,
  },

  cardUp: {
    color: "#9ac2fe",
    fontWeight: "bold",
    fontSize: 14,
  },
  titleCard: {
    fontSize: 12,
    color: "#7B6F72",
    marginVertical: 5,
  },
  sectionAcount: {
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 15, // This adds a shadow on Android
    shadowColor: "#000", // This sets shadow color on iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    padding: 20,
    marginVertical: 30,
  },

  accountTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
  },

  continarAccount: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    // marginVertical: 8,
  },
  leftAccount: {
    flexDirection: "row",
    alignItems: "center",
  },
  nameMinu: {
    marginLeft: 10,
    fontSize: 12,
    color: "#7B6F72",
  },
  iconAccount: {
    color: "#9ac2fe",
    textAlign: "center",
    width: 30,
  },

  logoutButton: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
  },
  logoutText: {
    color: "white",
    marginRight: 10,
    fontWeight: "bold",
  },
  logoutIcon: {
    fontSize: 20,
    color: "white",
  },
});

export default ProfilePage;
