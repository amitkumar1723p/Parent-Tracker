
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Onboarding1 } from './src/OnboardingScreens.jsx'
const App = () => {
  return (
    <>
      <SafeAreaProvider >
        <LinearGradient
          colors={['#eff6ff', '#f0fdf4']}   // from-blue-50 → to-green-50
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        ><Onboarding1 /></LinearGradient>
      </SafeAreaProvider>

    </>

  )
}

export default App
