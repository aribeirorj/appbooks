import 'react-native-gesture-handler';

import React from 'react';
import Routes from '../src/routes';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, SafeAreaView} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(0, 0, 0)" />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </>
  );
};

export default App;
