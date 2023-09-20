import Track from "../component/overviewApp/Track.js";

const TrackScreen = ({ navigation }) => {
  return <Track navigation={navigation} />;
};

TrackScreen.navigationOptions = () => {
  return {
    headerShown: false, // Hide the navigation header for this screen
  };
};

export default TrackScreen;
