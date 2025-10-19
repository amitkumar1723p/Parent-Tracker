
import React   from 'react'
// import LinearGradient from 'react-native-linear-gradient'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { Onboarding1 ,Onboarding2,Onboarding3} from './sr\
//  ic/components/OnboardingComponent'
// import { ScrollView, Text , View } from 'react-native'

 import Onboarding from './src/screens/Onboarding/OnboardingScreen'
import { NavigationContainer } from '@react-navigation/native'

import { navigationRef, safeReplace } from './src/navigation/NavigationService';
import AppNavigator from './src/navigation/AppNavigator'
 import { Text, TextInput, View } from 'react-native';
const App = () => {




//   // 🔹 Text ke liye default props
// if (Text.defaultProps == null) Text.defaultProps = {};
// Text.defaultProps.allowFontScaling = false; // Disable user scaling
// Text.defaultProps.style = {
//   fontFamily: 'Poppins-Regular',
//   fontSize: 14, // ✅ Default font size
//   color: '#000', // Optional: default color
// };

// // 🔹 TextInput ke liye default props
// if (TextInput.defaultProps == null) TextInput.defaultProps = {};
// TextInput.defaultProps.allowFontScaling = false;
// TextInput.defaultProps.style = {
//   fontFamily: 'Poppins-Regular',
//   fontSize: 14, // ✅ Default font size
//   color: '#000',
// };


// 1️⃣ Block system font scaling
Text.defaultProps = Text.defaultProps || {};
TextInput.defaultProps = TextInput.defaultProps || {};

Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;

// 2️⃣ Global style patch — Inter font, clampFont, black color
const defaultTextStyle = {
  fontFamily: 'Poppins-Regular',
  fontSize:  14,
  color: '#000',
};

const originalTextRender = Text.render;
Text.render = function (...args) {
  const origin = originalTextRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [defaultTextStyle, origin.props.style],
  });
};

const originalTextInputRender = TextInput.render;
TextInput.render = function (...args) {
  const origin = originalTextInputRender.call(this, ...args);
  return React.cloneElement(origin, {
    style: [defaultTextStyle, origin.props.style],
  });
};

  return (
    <>

      <AppNavigator />
    </>

  )
}

export default App
