Exercise;

import Exercise from "../component/Exercise/Exercise";

const ExerciseScreen = ({ navigation }) => {
  return <Exercise navigation={navigation} />;
};

ExerciseScreen.navigationOptions = () => {
  return {
    headerShown: true,
    headerTitleAlign: "center",
    // headerTransparent: true, // Make the header transparent
  };
};

export default ExerciseScreen;
