import VideoExercise from "../component/VideoExercise/VideoExercise";

const VideoExerciseScreen = ({ navigation }) => {
  return <VideoExercise navigation={navigation} />;
};
8;
VideoExerciseScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default VideoExerciseScreen;
