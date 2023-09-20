import Burn from "../component/overviewApp/GetBurn.js";

const BurnScreen = ({navigation}) => {
  return <Burn navigation={navigation} />;
};

BurnScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default BurnScreen;
