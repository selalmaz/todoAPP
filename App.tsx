import React from 'react';
import StackNavigator from './src/navigation/StackNavigation/StackNavigator';
import {Provider} from 'react-redux';
import Store from './src/redux/Store';

function App() {
  return (
    <Provider store={Store}>
      <StackNavigator></StackNavigator>
    </Provider>
    // son testler yapıldi ++
  );
}

export default App;
