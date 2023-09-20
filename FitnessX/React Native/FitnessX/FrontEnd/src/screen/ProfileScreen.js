import ProfilePage from "../component/Profile/profile";
const ProfileScreen = ({ navigation }) => {
  return <ProfilePage navigation={navigation} />;
};

ProfileScreen.navigationOptions = () => {
  return {
    headerShown: true, // Hide the navigation header for this screen
  };
};

export default ProfileScreen;
