import React, { createContext, useContext, useState, useEffect } from "react";
import api from "../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
// Create a new context
export const DataContext = createContext();

// Initial state values

const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem("jwt", token);
  } catch (e) {
    console.error("Error saving token:", e);
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
  const [exercise, setExercise] = useState([]);
  const [training, setTraining] = useState([]);
  const [user, setUserData] = useState({});
  const [formData, setFormData] = useState({});
  const [formCompleteProfile, setFormCompleteProfile] = useState({});
  const [loginForm, setLoginForm] = useState({});
  const [error, setErrors] = useState({});

  const handleInputChange = (fieldName, value) => {
    console.log(formData);
    setFormData({ ...formData, [fieldName]: value });
  };
  const handleInputLogin = (fieldName, value) => {
    setLoginForm({ ...loginForm, [fieldName]: value });
    // console.log(loginForm);
  };

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
      dataUser();
      navigation.navigate("CodeVerficationScreen");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  const dataUser = async () => {
    const token = await AsyncStorage.getItem("jwt");
    try {
      console.log("----------------", token);
      const response = await api.get("/api/v1/users/datauser", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const getUserDataWithLogin = async () => {
    const token = await AsyncStorage.getItem("jwt");
    try {
      const response = await api.get("/api/v1/users/profileWithLogin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUserData(response.data.user);
      const datauser = response.data.user;
      return datauser;
    } catch (error) {
      // console.error("Error fetching user data:", error);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  };

  const loginUser = async ({ navigation }) => {
    try {
      const response = await api.post("/api/v1/users/login", loginForm);

      if (response.data && response.data.token) {
        setLoginForm({});
        // Successful login
        storeToken(response.data.token);
        const UserData = await getUserDataWithLogin();
        if (UserData.verified) {
          navigation.navigate("WorkoutTrackerScreen");
        } else {
          Alert.alert("Error", "User is not verified");
        }
      } else {
        Alert.alert("Error", "Login failed: Invalid response from the server");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const updateUser = async ({ navigation }) => {
    console.log("--------------------------");
    try {
      const filteredData = {};
      for (const key in formCompleteProfile) {
        if (formCompleteProfile[key] !== "") {
          filteredData[key] = formCompleteProfile[key];
        }
      }
      console.log(filteredData);
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
      console.log(response.status);
      if (response.status === 200) {
        console.log("SendEmailToResetPassword", response.data.message);
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
    console.log("UpdateUser", UpdateUser);
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

    console.log("form", formData);

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

  useEffect(() => {
    getTraining();
    getExercise();
    const fetchData = async () => {
      try {
        await getUserDataWithLogin();
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
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
    getUserDataWithLogin,
    setLoginForm,
    // error,
    loginForm,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
