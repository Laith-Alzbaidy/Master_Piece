import Welcome from "../component/Welcome/Welcome";

const WelcomeScreen = ({ navigation }) => {
  return <Welcome navigation={navigation} />;
};

WelcomeScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default WelcomeScreen;
