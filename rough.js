 import { View, Text, ScrollView , StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Onboarding1 ,Onboarding2,Onboarding3} from './components/OnboardingComponent'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient'
import { navigate } from '../../navigation/NavigationService'

const OnboardingScreen = () => {

    const [OnboardingComponent ,setOnboardingComponent] =useState(0)
 const onNext =()=>{
setOnboardingComponent(OnboardingComponent +1)
 }
 const onFinish =()=>{
     navigate("login")
 }
  return (
     <>
      <SafeAreaProvider >

        <LinearGradient
          colors={['#eff6ff', '#f0fdf4']}   // from-blue-50 → to-green-50
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center'  }}
        >
            <SafeAreaView>

                <ScrollView contentContainerStyle={styles.scrollContent} >

{
    OnboardingComponent ==0  &&  <Onboarding1 onNext={onNext} onFinish={onFinish} />
}
{
    OnboardingComponent ==1  &&  <Onboarding2 onNext={onNext} onFinish={onFinish} />
}
{
    OnboardingComponent ==2  &&  <Onboarding3 onFinish={onFinish} />
}

</ScrollView>
</SafeAreaView>


          </LinearGradient>
      </SafeAreaProvider>
     </>
  )


}

export default OnboardingScreen



// contentContainerStyle={styles.scrollContent}
const styles = StyleSheet.create({


    scrollContent: {

    flexGrow: 1,                // content ko full height deta hai
    justifyContent: "center",   // vertical center
    alignItems: "center",
    padding: 10,
    paddingTop:15
  },


 })
