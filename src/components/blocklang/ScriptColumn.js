// React native and others libraries imports
import React, { Component } from 'react';
import { Image, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
import { 
  Container,
  Content,
  View,
  Button,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  cardBody
} from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from '../common/Text';

// Our variables
var scriptRegistry = {};

export default class ScriptColumn extends Component {
  render() {
    return(
      <View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
});
