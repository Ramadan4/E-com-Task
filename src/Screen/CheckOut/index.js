import React, {useState} from 'react';
import {View, Text, FlatList, SafeAreaView, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {AppButton} from '../../Component/AppButton';
import {CartItem} from '../../Component/CartItem';

import styles from './styles';
const renderCartItem2 = () => {
  return (
    <View>
      <Text>djfbiodfj</Text>
      <Text>djfbiodfj</Text>
      <Text>djfbiodfj</Text>
    </View>
  );
};
// function renderCartItem({item}) {
//   return <CartItem data={item} />;
// }
function renderCartItems(data_D) {
  return <FlatList data={data_D} renderItem={renderCartItem} numColumns={1} />;
}
export const ChechOutScreen = (props) => {
  const {data_D} = props.route.params;
  const counter = useSelector((state) => state.count);
  const ToataPrice = counter * data_D.discount * data_D.price;
  return (
    <SafeAreaView style={styles.container}>
      {/* {renderCartItems(data_D)} */}
      {/* <Image source={data_D.image} />   */}
      <CartItem data={data_D} />
      <View style={styles.wrapper}>
        <Text style={styles.totalText}>{ToataPrice}$</Text>

        <AppButton
          title="Total"
          titleStyle={styles.checkoutText}
          onPress={() => {}}
          // disabled={cartItems.length === 0}
        />
      </View>
    </SafeAreaView>
  );
};
