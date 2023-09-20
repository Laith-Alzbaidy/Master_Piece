import Login from "../component/FormLoginSignUp/Login/Login";
const LoginScreen = ({ navigation }) => {
  return <Login navigation={navigation} />;
};

LoginScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default LoginScreen;
