
import React from 'react';
import { Provider } from 'react-redux';
import CustomToastStack from './src/components/Tost/CustomToastStack';
import AppNavigator from './src/navigation/AppNavigator.js';
import { store } from './src/redux/store';
import './src/utils/setupGlobalFont';
const App = () => {

    console.log( store ,"store")
  return (
    <>
<Provider store={store}>

 <AppNavigator />
   <CustomToastStack />
</Provider>

    </>

  )
}

export default App
