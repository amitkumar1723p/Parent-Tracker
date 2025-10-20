
import React   from 'react'
//  import '';
// import './src/utils/setupGlobalFont'


 import Onboarding from './src/screens/Onboarding/OnboardingScreen'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef, safeReplace } from './src/navigation/NavigationService';
import AppNavigator from './src/navigation/AppNavigator.js'
 import { Text, TextInput, View } from 'react-native';
const App = () => {







  return (
    <>

      <AppNavigator />
    </>

  )
}

export default App
