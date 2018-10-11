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
const _ = require('lodash');

// Our custom files and classes import
import Blocks from './Blocks';
import Text from '../common/Text';
import {menuItems} from '../../data/menu.json';


export default class MenuColumn extends Component {

  render() {
    return(
      <View style={styles.container}>
        <Blocks block={menuItems[0]}  />
        <Blocks block={menuItems[1]}  />
        <Blocks block={menuItems[2]}  />
        <Blocks block={menuItems[3]}  />
        <Blocks block={menuItems[4]}  />
        <Blocks block={menuItems[5]}  />
        <Blocks block={menuItems[6]}   />
        <Blocks block={menuItems[7]}   />
        <Blocks block={menuItems[8]}   />
        <Blocks block={menuItems[9]}   />
        <Blocks block={menuItems[10]}   />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //borderRadius: 10,
    //borderWidth: 1,
  },
});
