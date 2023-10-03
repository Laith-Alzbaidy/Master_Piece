import { Alert } from "react-native";
import api from "../../../api/api";
const resendVerify = async (email) => {
  try {
    const response = await api.post("api/v1/users/verify", {
      email,
    });
    console.log("/api/v1/users/verify", response.data);
    // Handle the response, e.g., show a success message
  } catch (err) {
    console.error(err);
    // Handle the error, e.g., show an error message
  }
};

// Function to show the alert
const showVerificationAlert = (email) => {
  // console.log(email);
  Alert.alert(
    "Error",
    "User is not verified",
    [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Send Verification Email",
        onPress: () => resendVerify(email), // Call the correct function name here
      },
    ],
    { cancelable: false }
  );
};

// Call the function to show the alert
export default showVerificationAlert;
