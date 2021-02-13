import React from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen} from '../Screen/Home';
import {SingleProductScreen} from '../Screen/Singleproduct';
import {ChechOutScreen} from '../Screen/CheckOut';
import ShoppingCartIcon from '../Component/ShoppingCartIcon/ShoppingCartIcon';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

export function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Home'}}
      />
      <Stack.Screen
        name="SingleProductScreen"
        component={SingleProductScreen}
        options={{
          title: 'Product',
          headerRight: () => <ShoppingCartIcon />,
        }}
      />
      <Stack.Screen
        name="ChechOutScreen"
        component={ChechOutScreen}
        options={{title: 'Checkout', headerRight: () => <ShoppingCartIcon />}}
      />
    </Stack.Navigator>
  );
}
