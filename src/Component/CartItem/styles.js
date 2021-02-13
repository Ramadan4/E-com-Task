import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  outerContainer: Platform.select({
    android: {
      elevation: 25,
      backgroundColor: '#fff',
      padding: 5,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRedius: 3,
      shadowOffset: {width: 0, height: 3},
      padding: 5,
    },
  }),
  image: {
    width: 100,
    height: 100,
    marginEnd: 10,
  },
  outerContainer: {
    padding: 10,
    backgroundColor: '#fff',
    margin: 10,
  },
  container: {
    flexDirection: 'row',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
  },
});
export default styles;
