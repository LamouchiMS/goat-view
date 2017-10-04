import React, {Component} from 'react'
import {
  ScrollView,
  Text,
  Image,
  View,
  WebView,
  TouchableHighlight,
  KeyboardAvoidingView
} from 'react-native'
import {Images} from '../Themes'
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  state = {
    rawData: {}
  }
  onMessage(params) {
    const data = params.nativeEvent.data;
    if (data[0] === '{') {
      const rawData = JSON.parse(data);
      this.setState({rawData});
    }
  }
  onPress() {
    alert(JSON.stringify(this.state.rawData));
  }
  renderLoading() {
    return (
      <View style={styles.full}>
        <Text>LOADING...</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <WebView
          renderLoading={this.renderLoading}
          startInLoadingState
          style={styles.webview}
          onMessage={this
          .onMessage
          .bind(this)}
          source={require('../Lib/draft-webview/index.html')}/>
        <TouchableHighlight style={styles.bottom} onPress={() => this.onPress()}>
          <View>
            <Text style={styles.txt}>POST</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}
