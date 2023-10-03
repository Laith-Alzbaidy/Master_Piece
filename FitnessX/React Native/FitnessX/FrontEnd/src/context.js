import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import showVerificationAlert from "./component/popup/popup";
import { useNavigation } from "@react-navigation/native";

// Create a new context
export const DataContext = createContext();
// Initial state values

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("jwt", token);
  } catch (e) {
    console.error("Error  saving token:", e);
  }
};
const removeToken = async ({ navigation }) => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Token removed successfully!");
    navigation.navigate("LoginScreen");
  } catch (error) {
    console.error("Error removing token:", error);
  }
};

const aaaa = async () => {
  try {
    await AsyncStorage.removeItem("jwt");
    console.log("Token removed successfully!");
  } catch (error) {
    console.error("Error removing token:", error);
  }
};
const DataProvider = ({ children }) => {
  const navigation = useNavigation();

  const [exercise, setExercise] = useState([]);
  const [training, setTraining] = useState([]);
  const [user, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  const [formCompleteProfile, setFormCompleteProfile] = useState({});
  const [loginForm, setLoginForm] = useState({});
  const [errorsLogin, setErrorsLogin] = useState({});
  const [errorsSignUp, setErrors] = useState({});
  const handleInputChange = (fieldName, value) => {
    // console.log(formData);
    setFormData({ ...formData, [fieldName]: value });
    // ValidationSignUp();
  };
  const handleInputLogin = (fieldName, value) => {
    setLoginForm({ ...loginForm, [fieldName]: value });
    // ValidationLogin();
  };

  const ValidationLogin = () => {
    const { email, password } = loginForm;
    let newErrors = { ...errorsLogin };
    let valid = true; // Assume the form is valid by default

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false; // Set valid to false when email is invalid
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid.";
      valid = false; // Set valid to false when email is invalid
    } else {
      newErrors.email = "";
    }

    if (!password) {
      newErrors.password = "Password is required.";
      valid = false; // Set valid to false when password is invalid
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
      valid = false; // Set valid to false when password is invalid
    } else {
      newErrors.password = "";
    }

    setErrorsLogin(newErrors);
    return valid;
  };

  // const ValidationSignUp = () => {
  //   const { email, password, confirmPassword, firstname, lastname } = formData;
  //   let newErrors = { ...errors }; // Copy existing errors
  //   let valid = true; // Assume the form is valid by default

  //   // Handle firstname validation
  //   if (!firstname) {
  //     newErrors.firstname = "Firstname is required.";
  //     valid = false;
  //   } else if (firstname.length < 3 && !newErrors.firstname) {
  //     // Check if the field is currently empty
  //     newErrors.firstname = "Firstname must be at least 3 characters.";
  //     valid = false;
  //   }

  //   // Handle lastname validation
  //   if (!lastname) {
  //     newErrors.lastname = "Lastname is required.";
  //     valid = false;
  //   } else if (lastname.length < 3 && !newErrors.lastname) {
  //     // Check if the field is currently empty
  //     newErrors.lastname = "Lastname must be at least 3 characters.";
  //     valid = false;
  //   }

  //   // Handle email validation
  //   if (!email) {
  //     newErrors.email = "Email is required.";
  //     valid = false;
  //   } else if (!/\S+@\S+\.\S+/.test(email) && !newErrors.email) {
  //     // Check if the field is currently empty
  //     newErrors.email = "Email is invalid.";
  //     valid = false;
  //   }

  //   // Handle password validation
  //   if (!password) {
  //     newErrors.password = "Password is required.";
  //     valid = false;
  //   } else if (
  //     !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(password) &&
  //     !newErrors.password
  //   ) {
  //     // Check if the field is currently empty
  //     newErrors.password =
  //       "Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.";
  //     valid = false;
  //   }

  //   // Handle confirmPassword validation
  //   if (password !== confirmPassword) {
  //     newErrors.confirmPassword = "Passwords do not match.";
  //     valid = false;
  //   }

  //   // Update the error state for each input
  //   setErrors(newErrors);

  //   return valid;
  // };

  const handleCompleteProfile = (fieldName, value) => {
    setFormCompleteProfile({ ...formCompleteProfile, [fieldName]: value });
    console.log(formCompleteProfile);
  };
  const signUp = async ({ navigation }) => {
    console.log("----------------------", navigation);
    try {
      const response = await api.post("/api/v1/users/siginup", formData);
      const token = response.data.token;
      storeToken(token);
      await dataUser();
      navigation.navigate("CodeVerficationScreen");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const dataUser = async () => {
    const token = await AsyncStorage.getItem("jwt");
    try {
      // console.log("----------------", token);
      const response = await api.get("/api/v1/users/datauser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data.data);
      setUserData(response.data.data);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  // const getUserDataWithLogin = async () => {
  //   const token = await AsyncStorage.getItem("jwt");
  //   try {
  //     const response = await api.get("/api/v1/users/profileWithLogin", {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setUserData(response.data.user);
  //     const datauser = response.data.user;
  //     return datauser;
  //   } catch (error) {
  //     // console.error("Error fetching user data:", error);
  //   }
  // };

  const loginUser = async ({ navigation }) => {
    try {
      const response = await api.post("/api/v1/users/login", loginForm);
      if (response.data && response.data.token) {
        setLoginForm({});
        // Successful login
        await storeToken(response.data.token);
        const user = await dataUser();
        // const UserData = await getUserDataWithLogin();
        if (user.verified) {
          if (user.statusAccount === "active") {
            navigation.navigate("WorkoutTrackerScreen");
            setErrorsLogin({});
          } else {
            Alert.alert("Error", "your account it is block");
          }
        } else {
          // Alert.alert("Error", "User is not verified");
          // console.log("-------------", user.email);
          showVerificationAlert(user.email);
        }
      } else {
        Alert.alert("Error", "Login failed: Invalid response from the server");
      }
    } catch (error) {
      // console.error("Error logging in:", error.response.data.message);
      setErrorsLogin({
        ...error,
        email: error.response.data.message,
        password: error.response.data.message,
      });
    }
  };
  // const handleSubmitLogin = ({ navigation }) => {
  //   ValidationLogin();

  //   console.log(ValidationLogin());
  //   const valid = ValidationLogin();
  //   if (valid) {
  //     loginUser({ navigation });
  //   }
  // };
  const updateUser = async ({ navigation }) => {
    try {
      const response = await api.patch(
        `/api/v1/users/${user._id}`,
        formCompleteProfile,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // setFormCompleteProfile({});
      navigation.navigate("WelcomeScreen", { user: user });
      dataUser();
    } catch (error) {
      console.error("Error updating user data:", error);
    }
  };

  const getExercise = async () => {
    try {
      const response = await api.get("/api/v1/exercise");
      setExercise(response.data.data);
    } catch (error) {
      console.error("Error fetching exercise data:", error);
    }
  };

  const getTraining = async () => {
    try {
      const response = await api.get("/api/v1/training");
      setTraining(response.data.data);
    } catch (error) {
      console.error("Error fetching training data:", error);
    }
  };

  const SendEmailToResetPassword = async ({ navigation }, email) => {
    try {
      const response = await api.post("/api/v1/users/forgotpassword", {
        email,
      });
      if (response.status === 200) {
        // console.log("SendEmailToResetPassword", response.data.message);
        Alert.alert(response.data.message);
        navigation.navigate("CodeResetPasswordScreen", { email });
      }
    } catch (error) {
      console.error("Error sending password reset email", error);
    }
  };

  const ChangePassword = async (email, newPassword, { navigation }) => {
    try {
      const response = await api.post("/api/v1/users//ChangePassword", {
        email,
        newPassword,
      });
      navigation.navigate("LoginScreen");
      Alert.alert(response.data.message);
    } catch (error) {
      consolele.log(error);
    }
  };

  const UpdateProfileUser = async (UpdateUser) => {
    // console.log("UpdateUser", UpdateUser);
    const formData = new FormData();

    formData.append("image", {
      uri: UpdateUser.image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    formData.append("firstname", UpdateUser.firstname);
    formData.append("lastname", UpdateUser.lastname);
    formData.append("weight", UpdateUser.weight);
    formData.append("height", UpdateUser.height);

    // console.log("form", formData);

    try {
      const response = await api.patch(`api/v1/users/${user._id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status === "success") {
        // Handle success, e.g., display the uploaded image
        setUserData(response.data.data);
      } else {
        // Handle server error
        console.error(response.data.message);
      }
    } catch (error) {
      // Handle other errors, if any
      console.error(error);
    }
  };

  const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem("jwt");
      console.log(token);
      return token; // Return the token (or null if it doesn't exist)
    } catch (error) {
      console.error("Error retrieving token:", error);
      return null; // Return null in case of an error
    }
  };

  useEffect(() => {
    // const fetchData = async () => {
    //   // Call your functions here after setting the initial route
    //   const token = await getToken();

    //   if (token) {
    //     // You can navigate to the "WorkoutTrackerScreen" if token is available
    //     navigation.navigate("WorkoutTrackerScreen");
    //     // Call other functions like getTraining and getExercise here if needed
    //     getTraining();
    //     getExercise();
    //     dataUser();
    //   } else {
    //     // Navigate to "GetStartedScreen" if there's no token
    //     navigation.navigate("SplashScreen");
    //   }
    // };
    getTraining();
    getExercise();

    // fetchData(); // Call fetchData to initiate the process
  }, []);

  const data = {
    exercise,
    training,
    setFormData,
    handleInputChange,
    formData,
    signUp,
    updateUser,
    handleCompleteProfile,
    formCompleteProfile,
    user,
    dataUser,
    handleInputLogin,
    loginUser,
    removeToken,
    SendEmailToResetPassword,
    // VerificationCodeToResetPassword,
    ChangePassword,
    getTraining,
    setUserData,
    UpdateProfileUser,
    // getUserDataWithLogin,
    setLoginForm,
    loginForm,
    // initialRoute,
    // handleSubmitLogin,
    errorsLogin,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
