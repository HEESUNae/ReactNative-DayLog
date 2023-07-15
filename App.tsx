/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

// lib
import {NavigationContainer} from '@react-navigation/native';

// components
import RootStack from './screens/RootStack';
import {LogContextProvider} from './contexts/LogContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
