import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  price: {
    fontSize: 16,
    color: '#ff25d5',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: '#bbb',
    paddingHorizontal: 10,
  },
});
export default styles;
