import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
const imageDimensions = width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: imageDimensions,
    height: imageDimensions,
  },
  icontitleWrapper: {
    position: 'absolute',
    flexDirection: 'row',
  },
  backIcon: {
    fontSize: 30,
    color: '#000',
    paddingStart: 20,
    paddingVertical: 10,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  titleWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperButton: {
    flex: 1,
    justifyContent: 'flex-end',
    //marginBottom: '20@s',
  },
  wrapper: {
    flex: 1,
    padding: 10,
  },
  descriptionText: {
    fontSize: 25,
    color: '#000',
    paddingVertical: 10,
  },
});
export default styles;
