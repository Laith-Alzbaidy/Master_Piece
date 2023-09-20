import React from "react";
import DataProvider from "./src/context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import StatusBar from "./src/component/StatusBar/statusBar";
import BottomTab from "./src/screen/NavBottm";
import GetStartedScreen from "./src/screen/GetStartedScreen";
import TrackScreen from "./src/screen/TrackScreen";
import BurnScreen from "./src/screen/BurnScreen";
import EatWellScreen from "./src/screen/EatWellScreen";
import ImproveSleepScreen from "./src/screen/ImproveSleepScreen";
import SignUpScreen from "./src/screen/SignUpScreen";
import VerificationScreen from "./src/screen/VerificationScreen";
import CodeVerficationScreen from "./src/screen/CodeVerificationScreen";
import CompleteProfileScreen from "./src/screen/CompleteProfileScreen";
import WelcomeScreen from "./src/screen/WelcomScreen";
import WorkoutTrackerScreen from "./src/screen/WorkoutTrackerScreen";
import ExercisesScreen from "./src/screen/ExercisesScreen";
import LoginScreen from "./src/screen/LoginScreen";
import SendResetPasswordScreen from "./src/screen/SendResetPasswordScreen";
import CodeResetPasswordScreen from "./src/screen/CodeResetPasswordScreen";
import ChangePasswordScreen from "./src/screen/ChangePasswordScreen";
import ProfileScreen from "./src/screen/ProfileScreen";
import ProfileEditScreen from "./src/screen/EditProfileScreen";
import VideoExerciseScreen from "./src/screen/VideoExerciseScreen";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="GetStartedScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="TrackScreen"
          options={{ headerShown: false }}
          component={TrackScreen}
        />
        <Stack.Screen
          name="BurnScreen"
          options={{ headerShown: false }}
          component={BurnScreen}
        />
        <Stack.Screen
          name="EatWellScreen"
          options={{ headerShown: false }}
          component={EatWellScreen}
        />
        <Stack.Screen
          name="ImproveSleepScreen"
          options={{ headerShown: false }}
          component={ImproveSleepScreen}
        />
        <Stack.Screen
          name="SignUpScreen"
          options={{ headerShown: false }}
          component={SignUpScreen}
        />
        <Stack.Screen
          name="CompleteProfileScreen"
          options={{ headerShown: false }}
          component={CompleteProfileScreen}
        />
        <Stack.Screen
          name="WelcomeScreen"
          options={{ headerShown: false }}
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="VerificationScreen"
          options={{ headerShown: false }}
          component={VerificationScreen}
        />
        <Stack.Screen
          name="CodeVerficationScreen"
          options={{ headerShown: false }}
          component={CodeVerficationScreen}
        />
        <Stack.Screen
          name="WorkoutTrackerScreen"
          options={{ headerShown: false }}
          component={BottomTab}
        />
        <Stack.Screen
          name="ExercisesScreen"
          options={{ headerShown: true }}
          component={ExercisesScreen}
        />
        <Stack.Screen
          name="VideoExerciseScreen"
          options={{ headerShown: true }}
          component={VideoExerciseScreen}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="SendResetPasswordScreen"
          options={{ headerShown: false }}
          component={SendResetPasswordScreen}
        />
        <Stack.Screen
          name="CodeResetPasswordScreen"
          options={{ headerShown: false }}
          component={CodeResetPasswordScreen}
        />
        <Stack.Screen
          name="ChangePasswordScreen"
          options={{ headerShown: false }}
          component={ChangePasswordScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          options={{ headerShown: false }}
          component={BottomTab}
        />
        <Stack.Screen
          name="ProfileEditScreen"
          options={{ headerShown: true }}
          component={ProfileEditScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return (
    <>
      <DataProvider>
        <StatusBar />
        <AppNavigation />
      </DataProvider>
    </>
  );
}
