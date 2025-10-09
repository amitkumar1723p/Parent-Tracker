import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Activity from '../screens/Activity/Activity';
import Explore from '../screens/Explore/Explore';
import HomeScreen from '../screens/Home/HomeScreen';
import UserProfileScreen from '../screens/Profile/UserProfileScreen';
import propertyFilterScreen from '../screens/PropertyFilter/propertyFilterScreen';

const AppBottomTabs = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'shift',
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0.5,
          elevation: 8,
          height: 60,
        },
        tabBarActiveTintColor: '#FF5A5F',
        tabBarInactiveTintColor: '#8e8e93',
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Activity" component={Activity} />
      <Tab.Screen name="Profile" component={UserProfileScreen} />
      <Tab.Screen name="filter" component={propertyFilterScreen} />
    </Tab.Navigator>
  );
};

export default AppBottomTabs;
