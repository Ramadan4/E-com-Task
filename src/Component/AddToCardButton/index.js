import React from 'react';
import {View, Text, ToastAndroid, Platform, AlertIOS} from 'react-native';
import {connect, useSelector} from 'react-redux';
import {AppButton} from '../AppButton';
import styles from './styles';

const AddToCardButton = (props) => {
  //const [Quantity, setQuantity] = React.useState(0);
  const Quantity = useSelector((state) => state.count);
  const add = 'Add Successfully';
  const remove = 'Remove Successfully';

  const notifyMessage = (msg) => {
    if (Platform.OS === 'android') {
      ToastAndroid.show(msg, ToastAndroid.SHORT);
    } else {
      AlertIOS.alert(msg);
    }
  };

  const incrementQuantityHandler = () => {
    // this.setState((prevState) => ({Quantity: prevState.Quantity + 1}));
    //  setQuantity(Quantity + 1);
    notifyMessage(add);
  };
  const decrementQuantityHandler = () => {
    // this.setState((prevState) => ({Quantity: prevState.Quantity - 1}));
    //  setQuantity(Quantity - 1);
    notifyMessage(remove);
  };
  const renderInitialButton = () => {
    return (
      <AppButton
        //  onPress={this.incrementQuantityHandler}
        onPress={props.addItemToCart}
        title="ADD TO CART"
        wrapperStyle={styles.wrapper}
      />
    );
  };

  const renderIncreaseDecreseButton = () => {
    return (
      <View style={[styles.increaseDecreaseContainer, styles.wrapper]}>
        <Text style={styles.plisMinus} onPress={props.addItemToCart}>
          +
        </Text>
        <Text> {Quantity} </Text>
        <Text style={styles.plisMinus} onPress={props.removeFromCart}>
          -
        </Text>
      </View>
    );
  };

  return Quantity === 0
    ? renderInitialButton()
    : [renderIncreaseDecreseButton()];
  //return renderIncreaseDecreseButton();
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: () => dispatch({type: 'ADD_TO_CART'}),
    removeFromCart: () => dispatch({type: 'REMOVE_FROM_CART'}),
  };
};
export default connect(null, mapDispatchToProps)(AddToCardButton);
