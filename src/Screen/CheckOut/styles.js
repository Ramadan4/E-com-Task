import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  wrapperWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  totalText: {
    fontSize: 18,
  },
  checkoutText: {
    fontSize: 16,
  },
});
export default styles;
