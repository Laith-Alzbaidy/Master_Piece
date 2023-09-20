import EditProfile from "../component/EditProfile/EditProfile";
const ProfileEditScreen = ({ navigation }) => {
  return <EditProfile navigation={navigation} />;
};

ProfileEditScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default ProfileEditScreen;
