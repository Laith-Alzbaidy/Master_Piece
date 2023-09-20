import EatWell from "../component/overviewApp/EatWell.js";

const EatWellScreen = ({ navigation }) => {
  return <EatWell navigation={navigation} />;
};

EatWellScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default EatWellScreen;
