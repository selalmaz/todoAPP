import React from 'react';
import StackNavigator from './src/navigation/StackNavigation/StackNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';
import FlashMessage from 'react-native-flash-message';

function App() {
  return (
    <Provider store={Store}>
      <StackNavigator></StackNavigator>
      <FlashMessage position="top" />
    </Provider>
    // son testler yapıldi ++
  );
}

export default App;
