import {StyleSheet, Dimensions} from 'react-native'
import {ApplicationStyles} from '../../Themes/'

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: '#fafafa'
  },
  webview: {
    backgroundColor: '#fafafa',
    padding: 50
  },
  bottom: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2196F3'
  },
  txt: {
    color: '#fafafa'
  },
  full: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
