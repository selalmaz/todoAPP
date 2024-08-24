import React from 'react';
import StackNavigator from './src/navigation/stackNavigation/StackNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/TaskStore';
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
