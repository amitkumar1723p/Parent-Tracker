
import React   from 'react'
 import './src/utils/setupGlobalFont'
import AppNavigator from './src/navigation/AppNavigator.js'
import { store } from './src/redux/store';
import CustomToastStack from './src/components/Tost/CustomToastStack';
import { Provider } from 'react-redux';
const App = () => {


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
