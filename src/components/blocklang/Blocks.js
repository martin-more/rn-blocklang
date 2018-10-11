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

import LoopBlock from './LoopBlock';
import DrawBlock from './DrawBlock';
import ActionBlock from './ActionBlock';

export default class Blocks extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let { block } = this.props;
    let RNBlock;
    if (block.type == 'loop') {
      RNBlock = <LoopBlock {...this.props} />
    } else if (block.type == 'draw') {
      RNBlock = <DrawBlock {...this.props} />
    } else {
      RNBlock = <ActionBlock {...this.props} />
    }
    return RNBlock;
  }
}
