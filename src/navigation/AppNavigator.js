import { createNativeStackNavigator } from '@react-navigation/native-stack';



 import Onboarding from '../screens/Onboarding'
 import Login from '../screens/Login'

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  // const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* 🔁 Always accessible */}

      <Stack.Screen name="onboarding" component={Onboarding} />
       <Stack.Screen name="login" component={Login} />

      {/* <Stack.Screen name="login" component={AppBottomTabs} /> */}



    </Stack.Navigator>
  );
};

export default AppNavigator;
