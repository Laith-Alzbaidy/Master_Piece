import ImproveSleep from "../component/overviewApp/ImproveSleep";

const ImproveSleepScreen = ({ navigation }) => {
  return <ImproveSleep navigation={navigation} />;
};

ImproveSleepScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default ImproveSleepScreen;
