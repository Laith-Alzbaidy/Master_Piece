import CompleteProfile from "../component/completeProfile/completeProfile";
const CompleteProfileScreen = ({ navigation }) => {
  return <CompleteProfile navigation={navigation} />;
};

CompleteProfileScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default CompleteProfileScreen;
