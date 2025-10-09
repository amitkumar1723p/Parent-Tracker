


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
 import { navigationRef, safeReplace } from './NavigationService';
// import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import Login from "../screens/Login";
import RoleSelector from "../screens/RoleSelector";
import ConnectToParentScreen from "../screens/ConnectToParentScreen";
import ConnectedSuccessScreen from "../screens/ConnectedSuccessScreen";
import ChildDashboardScreen from "../screens/ChildDashboardScreen";
import ParentDashboardScreen from "../screens/ParentDashboardScreen";
import AddChildScreen from "../screens/AddChildScreen";
import AddInviteScreen from '../screens/AddInviteScreen'
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ---------------- Parent Tabs ----------------
function ParentTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#fff", height: 60 },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "History") iconName = focused ? "time" : "time-outline";
          else if (route.name === "Geofencing") iconName = focused ? "map" : "map-outline";
          else if (route.name === "Summary") iconName = focused ? "stats-chart" : "stats-chart-outline";

          // return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <Tab.Screen name="Home" component={ParentDashboardScreen} />
      <Tab.Screen name="History" component={ParentDashboardScreen} />
      <Tab.Screen name="Geofencing" component={ParentDashboardScreen} />
      <Tab.Screen name="Summary" component={ParentDashboardScreen} />
    </Tab.Navigator>
  );
}

// ---------------- Child Tabs ----------------
function ChildTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#fff", height: 60 },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "SOS") iconName = focused ? "alert" : "alert-outline";
          else if (route.name === "Battery") iconName = focused ? "battery-full" : "battery-half-outline";
          else if (route.name === "Settings") iconName = focused ? "settings" : "settings-outline";

          // return <Ionicons name={iconName} size={22} color={color} />;
        },
        tabBarActiveTintColor: "#007BFF",
        tabBarInactiveTintColor: "#888",
      })}
    >
      <Tab.Screen name="Home" component={ChildDashboardScreen} />
      <Tab.Screen name="SOS" component={ChildDashboardScreen} />
      <Tab.Screen name="Battery" component={ChildDashboardScreen} />
      <Tab.Screen name="Settings" component={ChildDashboardScreen} />
    </Tab.Navigator>
  );
}

// ---------------- Main Stack ----------------
const AppNavigator = () => {


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Auth Screens */}
        <Stack.Screen name="onboarding" component={OnboardingScreen} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="role-selector" component={RoleSelector} />
        <Stack.Screen name="child" component={ConnectToParentScreen} />
        <Stack.Screen name="parent-child-connect" component={ConnectedSuccessScreen} />

        {/* Parent Flow */}
        <Stack.Screen name="parent-dashboard" component={ParentTabs} />

        {/* Child Flow */}
        <Stack.Screen name="child-dashboard" component={ChildTabs} />
        <Stack.Screen name="add-child-screen" component={AddChildScreen} />
        <Stack.Screen name="add-invite" component={AddInviteScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
