import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { getAuth } from "../utils/authStorage";
import { navigationRef } from "./NavigationService";

// Screens
import CompleteProfileScreen from "../screens/CompleteProfileScreen";
import EnterEmailScreen from "../screens/EnterEmailScreen";
import Login from "../screens/Login";
import OnboardingScreen from "../screens/Onboarding/OnboardingScreen";
import VerifyOtpScreen from "../screens/VerifyOtpScreen";

import AddChildScreen from "../screens/AddChildScreen";
import AddInviteScreen from "../screens/AddInviteScreen";
import ParentDashboardScreen from "../screens/ParentDashboardScreen";

import ChildDashboardScreen from "../screens/ChildDashboardScreen";
import ConnectToParentScreen from "../screens/ConnectToParentScreen";
import ConnectedSuccessScreen from "../screens/ConnectedSuccessScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


// ---------------- PARENT TABS ----------------
function ParentTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: { backgroundColor: "#fff" },
        tabBarLabelStyle: {
          fontFamily: "Roboto-Regular",
          fontSize: 12,
          color: "#000",
        },
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === "Home") iconName = focused ? "home" : "home-outline";
          else if (route.name === "History") iconName = focused ? "time" : "time-outline";
          else if (route.name === "Geofencing") iconName = focused ? "map" : "map-outline";
          else if (route.name === "Summary") iconName = focused ? "stats-chart" : "stats-chart-outline";

          return <Ionicons name={iconName} size={22} color={color} />;
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


// ---------------- CHILD TABS (Future Use) ----------------
function ChildTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={ChildDashboardScreen} />
    </Tab.Navigator>
  );
}


// 🔥 Splash While Checking Auth
const SplashScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color="#007BFF" />
  </View>
);


// ---------------- APP NAVIGATOR ----------------
const AppNavigator = () => {
  const [userRole, setUserRole] = useState(null);
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const auth = await getAuth();
      if (auth?.token && auth?.user?.role) {
        setUserRole(auth.user.role);
      } else {
        setUserRole("auth");
      }
      setAppReady(true);
    };

    const handleChange = () => {
      console.log("🔥 Auth changed — updating UI");
      checkAuth();
    };

    onAuthChanged(handleChange); // Listener add

    checkAuth(); // Initial auth check on app start
  }, []);



  if (!appReady) return <SplashScreen />;


  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>


        {/* 🔵 AUTH FLOW ONLY WHEN userRole = auth */}
        {userRole === "auth" && (
          <>
            <Stack.Screen name="onboarding" component={OnboardingScreen} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
            <Stack.Screen name="VerifyOtp" component={VerifyOtpScreen} />
            <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
          </>
        )}


        {/* 🟢 PARENT FLOW */}
        {userRole === "parent" && (
          <>
            <Stack.Screen name="parent-dashboard" component={ParentTabs} />

            <Stack.Screen
              name="add-child-screen"
              component={AddChildScreen}
              options={{
                headerShown: true,
                title: "Add Child",
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Roboto-Regular",
                  fontSize: 18,
                  color: "#000",
                },
              }}
            />

            <Stack.Screen name="add-invite" component={AddInviteScreen} />
          </>
        )}


        {/* 🟠 CHILD FLOW */}
        {userRole === "child" && (
          <>
            <Stack.Screen
              name="child"
              component={ConnectToParentScreen}
              options={{
                headerShown: true,
                title: "Connect To Parent",
                headerTitleAlign: "center",
                headerTitleStyle: {
                  fontFamily: "Roboto-Regular",
                  fontSize: 18,
                  color: "#000",
                },
              }}
            />

            <Stack.Screen name="parent-child-connect" component={ConnectedSuccessScreen} />
            <Stack.Screen name="child-dashboard" component={ChildDashboardScreen} />
          </>
        )}


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
