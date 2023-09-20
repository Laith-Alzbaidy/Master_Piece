import Verification from "../component/verification/Verification";

const VerificationScreen = ({ navigation }) => {
  return <Verification navigation={navigation} />;
};
8;
VerificationScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default VerificationScreen;
