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


export default class LoopBlock extends Component {

  render() {
    let { block, onAction } = this.props;
    return (
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <Text style={styles.title}>{block.name}</Text>
          <TextInput style={styles.input} value={block.value} />
          <Text style={styles.title}>{block.units}</Text>
        </View>
        <View style={styles.childs} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    ...Style.blocks.contentCommon,
    height: 50,
  },
  content: {
    flexDirection: 'row',
  },
  title: {
    ...Style.blocks.titleCommon,
    margin: 6,
  },
  input: {
     ...Style.blocks.inputCommon,
    height: 30,
  },
  childs: {
    height: 8,
    backgroundColor: '#ffdab9',
    marginLeft: 20,
    marginTop: 5,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
  },
});
