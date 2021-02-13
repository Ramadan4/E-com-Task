import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect, useSelector} from 'react-redux';

const ShoppingCartIcon = (props) => {
  const count = useSelector((state) => state.count);
  console.log(this.props);
  return (
    <View style={{padding: 5}}>
      <Icon name="cart" size={30} />
      <View style={styles.iconWrapper}>
        <Text style={styles.textWapper}>{count}</Text>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};
export default connect(mapStateToProps)(ShoppingCartIcon);
const styles = StyleSheet.create({
  iconWrapper: {
    position: 'absolute',
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWapper: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
