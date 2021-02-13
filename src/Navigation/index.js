import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {HomeStack} from './HomeStack';

export function AppContainer(props) {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}
