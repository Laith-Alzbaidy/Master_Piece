import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Import an icon from the library

export default function App() {
  const route = useRoute();
  const { exercise } = route.params;
  console.log("---------------", exercise);
  const [isPlaying, setIsPlaying] = useState(false); // State to track video playback
  const [isLoading, setIsLoading] = useState(true); // State to track video loading

  // Function to toggle video playback
  const togglePlayback = async () => {
    setIsPlaying(!isPlaying);
  };
  const handleVideoLoad = () => {
    setIsLoading(false);
  };
  const handleVideoError = (error) => {
    setIsLoading(false);
    console.error("Video loading error:", error);
  };
  return (
    <ScrollView style={{ flexGrow: 1, flex: 1 }}>
      <View style={styles.container}>
        <View>
          {isLoading && (
            <ActivityIndicator
              style={styles.iconContainer}
              size="large"
              color="#0000ff"
            />
          )}
          <Video
            style={styles.video}
            source={{
              uri: exercise.video,
            }}
            useNativeControls={true}
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            shouldPlay={isPlaying}
            onTouchStart={() => setIsPlaying(!isPlaying)}
            onLoad={handleVideoLoad}
            onError={handleVideoError}
          />
          {!isPlaying && !isLoading && (
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={togglePlayback}
            >
              <Ionicons name="md-play-circle" size={60} color="white" />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.containerHeader}>
          <Text style={styles.title}>{exercise.name}</Text>
          <Text style={styles.description}>{exercise.description}</Text>
        </View>
        <View style={styles.containerHowToDo}>
          <View style={styles.titleHowToDo}>
            <Text style={styles.title}>How To Do It</Text>
            <Text style={styles.description}>4 Steps</Text>
          </View>
          <View>
            <View style={styles.ContinerStep}>
              {/* Vertical line with circle */}
              <View style={styles.verticalLine}>
                <View style={styles.borderCircle}>
                  <View style={styles.circle}></View>
                </View>
              </View>
              {/* Content */}
              <View style={styles.containerTextStep}>
                <Text style={styles.titleStep}>Spread Your Arms</Text>
                <Text style={styles.description}>
                  To make the gestures feel more relaxed, stretch your arms as
                  you start this movement. No bending of hands.
                </Text>
              </View>
            </View>
            <View style={styles.ContinerStep}>
              {/* Vertical line with circle */}
              <View style={styles.verticalLine}>
                <View style={styles.borderCircle}>
                  <View style={styles.circle}></View>
                </View>
              </View>
              {/* Content */}
              <View style={styles.containerTextStep}>
                <Text style={styles.titleStep}>Rest at The Toe</Text>
                <Text style={styles.description}>
                  The basis of this movement is jumping. Now, what needs to be
                  considered is that you have to use the tips of your feet
                </Text>
              </View>
            </View>
            <View style={styles.ContinerStep}>
              {/* Vertical line with circle */}
              <View style={styles.verticalLine}>
                <View style={styles.borderCircle}>
                  <View style={styles.circle}></View>
                </View>
              </View>
              {/* Content */}
              <View style={styles.containerTextStep}>
                <Text style={styles.titleStep}>Adjust Foot Movement</Text>
                <Text style={styles.description}>
                  Jumping Jack is not just an ordinary jump. But, you also have
                  to pay close attention to leg movements.
                </Text>
              </View>
            </View>
            <View style={styles.ContinerStep}>
              {/* Vertical line with circle */}
              <View style={styles.hidden}>
                <View style={styles.borderCircle}>
                  <View style={styles.circle}></View>
                </View>
              </View>
              {/* Content */}
              <View style={styles.containerTextStep}>
                <Text style={styles.titleStep}>Clapping Both Hands</Text>
                <Text style={styles.description}>
                  This cannot be taken lightly. You see, without realizing it,
                  the clapping of your hands helps you to keep your rhythm while
                  doing the Jumping Jack
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "white",
    // backgroundColor: "#ecf0f1",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  video: {
    width: 320,
    height: 200,
  },
  iconContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  containerHeader: {
    marginVertical: 20,
  },
  containerHowToDo: {},
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 12,
    color: "#7B6F72",
    marginVertical: 10,
    lineHeight: 18,
  },
  titleHowToDo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ContinerStep: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 10,

    // paddingLeft: 20,
  },

  containerTextStep: {
    paddingHorizontal: 30,
    width: 280,
  },
  // Vertical line style
  verticalLine: {
    height: "100%",
    backgroundColor: "transparent",
    borderStyle: "dashed",
    borderWidth: 1,
    borderColor: "#ccc",
    alignItems: "center",
    alignItems: "center",
    position: "relative",
    top: 20,
  },
  borderCircle: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderRadius: 20 / 2,
    borderColor: "#C58BF2",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -20,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#C58BF2",
  },
  titleStep: {
    fontSize: 16,
    fontWeight: "bold",
  },
  hidden: {
    top: -35,
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
});
