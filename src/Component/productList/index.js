import React, { useContext } from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
//import {useNavigation} from '@react-navigation/native';
import {NavigationContext} from '@react-navigation/core';

import styles from './styles';

export function ProductList(props) {
  //const navigation = useNavigation();
  const navigation = useContext(NavigationContext);

  const {data} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SingleProductScreen', {data: data})}>
      <View style={styles.cartView}>
        <Image source={data.image} style={styles.image} />
      </View>
      <Text numberOfLines={1} style={styles.title}>
        {data.title}
      </Text>
    </TouchableOpacity>
  );
}
