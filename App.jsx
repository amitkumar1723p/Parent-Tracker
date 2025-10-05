
import React   from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { Onboarding1 ,Onboarding2,Onboarding3} from './sr\
//  ic/components/OnboardingComponent'
// import { ScrollView, Text , View } from 'react-native'

 import Onboarding from './src/screens/Onboarding'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef, safeReplace } from './src/navigation/NavigationService';
import AppNavigator from './src/navigation/AppNavigator'
// import { navigationRef, safeReplace } from './';
const App = () => {
  return (
    <>



    <NavigationContainer ref={navigationRef}>
      <AppNavigator />
    </NavigationContainer>


    </>

  )
}

export default App
