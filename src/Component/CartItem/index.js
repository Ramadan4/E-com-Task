import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {Price} from '../price';
import styles from './styles';
export function CartItem(props) {
  const {data} = props;
  const count = useSelector((state) => state.count);
  return (
    <View style={styles.outerContainer}>
      <TouchableOpacity style={styles.container}>
        <Image source={data.image} style={styles.image} />
        <View style={styles.wrapper}>
          <Text numberOfLines={2} style={styles.title}>
            {data.title}
          </Text>
          <Text style={styles.title}>number of paces = {count}</Text>
          <Price price={data.price} discount={data.discount} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
