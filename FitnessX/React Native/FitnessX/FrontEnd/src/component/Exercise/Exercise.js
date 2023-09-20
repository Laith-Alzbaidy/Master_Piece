import React, { useState, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { DataContext } from "../../context";
import { useRoute } from "@react-navigation/native";

const Exercise = ({ navigation }) => {
  const { exercise } = useContext(DataContext);
  const [showButton, setShowButton] = useState(false);
  const route = useRoute();
  const { id } = route.params;

  const trainingId = id; // 'defaultId' is the default value if 'id' is not found

  const data = exercise.filter((exercise) => {
    return exercise.idTraining === trainingId;
  });
  const handleScroll = (event) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const threshold = 100;
    setShowButton(yOffset >= threshold);
  };

  return (
    <View style={styles.containerScreen}>
      <ScrollView
        onScroll={handleScroll}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.containerHeader}>
          <View style={styles.wrapImage}>
            <Image
              style={styles.imageHeader}
              source={require("../../assets/Image/DetailsTrain.png")}
            />
          </View>
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
          <View>
            <Text style={styles.headerTitle}>What Do You Want to Train</Text>
            <Text style={styles.numberEx_min}>
              11 Exercises | 32mins | 320 Calories Burn
            </Text>
          </View>
          <View>
            <Text style={styles.headerTitle}>What Do You Want to Train</Text>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                  <View style={styles.wrapTools}>
                    <Image source={require("../../assets/Image/Barbell.png")} />
                  </View>
                  <Text style={styles.nameTools}>Barbell</Text>
                </View>
                <View>
                  <View style={styles.wrapTools}>
                    <Image
                      source={require("../../assets/Image/Skipping-Rope.png")}
                    />
                  </View>
                  <Text style={styles.nameTools}>Skipping Rope</Text>
                </View>
                <View>
                  <View style={styles.wrapTools}>
                    <Image
                      source={require("../../assets/Image/water-bottle.png")}
                    />
                  </View>
                  <Text style={styles.nameTools}>Bottle 1 Liters</Text>
                </View>
              </ScrollView>
            </View>
          </View>

          <View style={{ paddingBottom: 100 }}>
            <Text style={styles.headerTitle}>Exercises</Text>
            <View>
              <Text>Set</Text>
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.wrapCard}>
                      <View style={styles.cardExercises}>
                        <Image
                          style={styles.imageExercises}
                          source={{
                            uri: `${item.image}`,
                          }}
                        ></Image>
                        <View style={styles.textCard}>
                          <Text style={styles.nameExercises}>{item.name}</Text>
                          <Text style={styles.reapet}>{item.repeat}</Text>
                        </View>
                      </View>
                      <AntDesign
                        onPress={() =>
                          navigation.navigate("VideoExerciseScreen", {
                            exercise: item,
                          })
                        }
                        name="rightcircleo"
                        size={26}
                        color="#ADA4A5"
                      />
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      {showButton && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Workout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerScreen: {
    backgroundColor: "#94acfd",
    flex: 1,
  },
  containerHeader: {
    marginTop: 60,
    height: 260,
    alignItems: "center",
    justifyContent: "center",
  },
  imageHeader: {
    width: 260,
    height: 350,
    resizeMode: "stretch",
  },
  wrapImage: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    height: 250,
    width: 250,
    borderRadius: 300,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
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
  wrapTools: {
    backgroundColor: "#f7f8f8",
    width: 130,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    marginRight: 15,
  },
  nameTools: {
    fontSize: 12,
    margin: 5,
    fontWeight: "500",
  },
  numberEx_min: {
    fontSize: 12,
  },
  wrapCard: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  cardExercises: {
    alignItems: "center",
    flexDirection: "row",
  },
  textCard: {
    marginHorizontal: 10,
  },
  nameExercises: {
    fontSize: 14,
    fontWeight: "bold",
    marginVertical: 5,
  },
  reapet: {
    fontSize: 12,
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
    position: "absolute",
    bottom: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  imageExercises: {
    width: 60,
    height: 60,
  },
});

export default Exercise;
