import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { useContext } from "react";
import { DataContext } from "../../context";
import Chart from "./chart";
const WorkoutTracker = ({ navigation }) => {
  const { training } = useContext(DataContext);
  return (
    <View style={styles.containerScreen}>
      <View style={styles.containerHeader}>
        {/* <Image
          style={styles.imageHeader}
          source={require("../../assets/Image/EatWell.png")}
        /> */}
        <Chart />
      </View>
      <View style={styles.containerTrain}>
        <View
          style={{
            width: 50,
            height: 5,
            backgroundColor: "#e8e8e8",
            alignSelf: "center",
            marginTop: 10,
            borderRadius: 20,
          }}
        ></View>
        <Text style={styles.headerTitle}>What Do You Want to Train</Text>

        <FlatList
          data={training}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <View style={styles.card}>
                <View style={styles.contentCard}>
                  <Text style={styles.titleCard}>{item.name}</Text>
                  <Text style={styles.numberEx_min}>
                    {`${item.exercises.length} Exercises | ${item.time}mins `}
                  </Text>
                  <View style={styles.button}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("ExercisesScreen", {
                          id: item._id,
                        });
                      }}
                      style={styles.button}
                    >
                      <Text style={styles.buttonText}>View More</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.wrapImage}>
                  <Image
                    style={styles.imageTraining}
                    source={{
                      uri: `${item.image}`,
                    }}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: "#94acfd",
    flex: 1,
  },
  containerHeader: {
    marginTop: 10,
    height: 250,
    alignItems: "center",
    justifyContent: "center",
  },
  imageHeader: {
    width: 300,
    height: 150,
    resizeMode: "cover",
  },
  wrapImage: {
    backgroundColor: "#ffffff",
    borderRadius: 100,
    height: 90,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  imageTraining: {
    width: 70,
    height: 105,
    resizeMode: "stretch",
  },
  containerTrain: {
    backgroundColor: "#ffffff",
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 30,
  },
  headerTitle: {
    textAlign: "left",
    marginTop: 30,
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#eaefff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    height: 130,
    paddingHorizontal: 20,
    marginVertical: 5,
  },
  contentCard: {
    alignItems: "center",
  },
  titleCard: {
    fontWeight: "bold",
  },
  numberEx_min: {
    fontSize: 10,
    marginTop: 5,
    marginBottom: 20,
  },

  button: {
    width: 94,
    height: 35,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonText: {
    color: "#94abfd",
    fontSize: 10,
  },
});

export default WorkoutTracker;
