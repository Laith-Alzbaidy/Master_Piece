import CodeVerfication from "../component/verification/CodeVerification";

const CodeVerficationScreen = ({ navigation }) => {
  return <CodeVerfication navigation={navigation} />;
};

CodeVerficationScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default CodeVerficationScreen;
