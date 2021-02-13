import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

export function Category(props) {
  const {data} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('SingleProductScreen', {data: data})}>
      <View style={{padding: 2}}>
        <Image source={data.image} style={styles.image} />
      </View>
      <Text style={styles.title}>{data.title}</Text>
    </TouchableOpacity>
  );
}
