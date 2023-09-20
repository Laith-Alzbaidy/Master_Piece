import ChangePassword from "../component/ChangePassword/ChangePassword";

const ChangePasswordScreen = ({ navigation }) => {
  return <ChangePassword navigation={navigation} />;
};

ChangePasswordScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default ChangePasswordScreen;
