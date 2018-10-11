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
import Canvas from 'react-native-canvas';

// Our custom files and classes import
import Text from '../common/Text';
import Dim from '../../Dim';

// Our variables

export default class CanvasColumn extends Component {

  handleCanvas = (canvas) => {
    // console.log(Dim.canvasColumn.width, Dim);
    canvas.width = Dim.canvasColumn.width;
    canvas.height = Dim.canvasColumn.minHeight;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#e8e8e8';
    ctx.fillRect(0, 0, Dim.canvasColumn.width, Dim.canvasColumn.minHeight);
  }

  render() {
    return(
      <Canvas ref={this.handleCanvas}/>
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
