import React from 'react';
import {View, Text} from 'react-native';
import {CURRENCY} from '../../helperFunctions/constant';
import {getActualPrice} from '../../helperFunctions/helper';
import styles from './styles';
export function Price(props) {
  const {price, discount} = props;
  // discount => 0.2 => 20%
  const ValuOfDiscount = discount * 100;
  return (
    <View style={styles.container}>
      <Text style={styles.price}>
        {CURRENCY}
        {getActualPrice(price, discount)}
      </Text>

      {discount ? (
        <Text style={styles.oldPrice}>
          {CURRENCY}
          {price}
        </Text>
      ) : null}
      <Text>Discount ={ValuOfDiscount}%</Text>
    </View>
  );
}
