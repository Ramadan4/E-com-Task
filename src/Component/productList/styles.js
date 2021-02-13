import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 2;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  image: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontSize: 20,
  },
  cartView: Platform.select({
    android: {
      elevation: 30,
      backgroundColor: '#fff',
      padding: 10,
    },
    ios: {
      shadowColor: '#000',
      shadowOpacity: 0.5,
      shadowRedius: 3,
      shadowOffset: {width: 0, height: 3},
      padding: 5,
    },
  }),
});
export default styles;
