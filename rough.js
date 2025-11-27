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

          return <Ionicons name={iconName} size={22} color={color} />;
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
    <Stack.Screen name="role-selector" component={RoleSelector} />
  );
}
