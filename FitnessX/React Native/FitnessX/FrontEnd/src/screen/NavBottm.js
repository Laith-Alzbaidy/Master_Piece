import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileScreen from "./ProfileScreen";
import WorkoutTrackerScreen from "./WorkoutTrackerScreen";
import ProfileEditScreen from "./EditProfileScreen";

import { MaterialIcons } from "@expo/vector-icons"; // Import the icon library you want to use

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "home") {
            iconName = "home"; // Set the appropriate icon name for the "home" tab
          } else if (route.name === "Profile") {
            iconName = "person"; // Set the appropriate icon name for the "Profile" tab
          }

          // You can customize the icon style as needed, e.g., change the color and size
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="home"
        component={WorkoutTrackerScreen}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: true }}
      />
      {/* <Tab.Screen
        name="Profile Edit"
        component={ProfileEditScreen}
        options={{ headerShown: true }}
      /> */}
    </Tab.Navigator>
  );
};

export default BottomTab;
