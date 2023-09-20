import WorkoutTracker from "../component/WorkoutTracker/WorkoutTracker";

const WorkoutTrackerScreen = ({ navigation }) => {
  return <WorkoutTracker navigation={navigation} />;
};

WorkoutTrackerScreen.navigationOptions = () => {
  return {
    headerShown: true,
    headerTitleAlign: "center",
    // headerTransparent: true, // Make the header transparent
  };
};

export default WorkoutTrackerScreen;
