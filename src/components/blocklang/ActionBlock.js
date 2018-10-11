// React native and others libraries imports
import React, { Component } from 'react';
import { Image, TextInput, StyleSheet, ScrollView, Dimensions, Platform } from 'react-native';
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
import Style from '../../Style';


export default class ActionBlock extends Component {

  render() {
    let { block, onAction } = this.props;
    return (
      <View style={styles.content}>
        <Text style={styles.title}>{block.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    ...Style.blocks.contentCommon,
    height: 30,
  },
  title: {
    ...Style.blocks.titleCommon,
    margin: 6,
  }
});
