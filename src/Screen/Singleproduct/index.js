import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import AddToCardButton from '../../Component/AddToCardButton';
import {AppButton} from '../../Component/AppButton';
import {Price} from '../../Component/price';
import styles from './styles';

export function SingleProductScreen(props) {
  // to receive productId from product Component
  const {data} = props.route.params;

  const {navigation} = props;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.image} source={data.image} />
      </View>

      <View style={styles.wrapper}>
        <Price price={data.price} discount={data.discount} />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.descriptionText}>Description</Text>
          <AddToCardButton />
        </View>

        <Text>{data.details}</Text>
        <View style={styles.wrapperButton}>
          <AppButton
            title="Chechout"
            onPress={() => navigation.navigate('ChechOutScreen', {data_D: data})}
            // onPress={navigation.navigate('ChechOutScreen')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
