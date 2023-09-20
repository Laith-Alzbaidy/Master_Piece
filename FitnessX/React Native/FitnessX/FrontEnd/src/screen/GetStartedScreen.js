// import { Text, StyleSheet } from "react-native";
import GetStarted from "../component/overviewApp/GetStarted";
const GetStartedScreen = ({ navigation }) => {
  return <GetStarted navigation={navigation} />;
};

GetStartedScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default GetStartedScreen;
