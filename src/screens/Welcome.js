// React native and others libraries imports
import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Colors from '../Colors';

class Welcome extends Component {

  _goHome = () => {
    Actions.home();
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity 
          onPress={this._goHome}
          activeOpacity={.7}>
          <Image
            style={{width: 205, height: 225}}
            source={require('../assets/logo.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.navbarBackgroundColor
  }
});