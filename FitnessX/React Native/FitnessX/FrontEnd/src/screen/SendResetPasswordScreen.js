import SendResetPassword from "../component/emailToResetPassword/SendResetPassword";
const SendResetPasswordScreen = ({ navigation }) => {
  return <SendResetPassword navigation={navigation} />;
};

SendResetPasswordScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default SendResetPasswordScreen;
