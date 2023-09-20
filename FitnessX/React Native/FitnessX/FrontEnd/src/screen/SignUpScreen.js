import SignUp from "../component/FormLoginSignUp/SignUp/SignUp";
const SignUpScreen = ({ navigation }) => {
  return <SignUp navigation={navigation} />;
};

SignUpScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default SignUpScreen;
