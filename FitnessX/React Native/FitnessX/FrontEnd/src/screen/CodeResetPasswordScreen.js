import CodeResetPassword from "../component/emailToResetPassword/CodeResetPassword";

const CodeResetPasswordScreen = ({ navigation }) => {
  return <CodeResetPassword navigation={navigation} />;
};

CodeResetPasswordScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default CodeResetPasswordScreen;
