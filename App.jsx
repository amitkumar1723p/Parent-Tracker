
import React from 'react';
import { Provider } from 'react-redux';
import CustomToastStack from './src/components/Tost/CustomToastStack';
import AppNavigator from './src/navigation/AppNavigator.js';
import { store } from './src/redux/store';
import mmkvStorage from './src/utils/mmkvstorage.js';
import './src/utils/setupGlobalFont';
const App = () => {



  // useEffect(async () => {

  console.log(mmkvStorage.getAllData(), "Hello")

  // mmkvStorage.setItem("user", { name: "ami" })

  // }, [])




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
