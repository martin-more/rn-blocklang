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
import Text from '../components/common/Text';
import Navbar from '../components/common/Navbar';
import SideMenuDrawer from '../components/common/SideMenuDrawer';

import MenuColumn   from '../components/blocklang/MenuColumn';
import ScriptColumn from '../components/blocklang/ScriptColumn';
import CanvasColumn from '../components/blocklang/CanvasColumn';

import Dim from '../Dim';

// Our const
// Natibase header height (https://github.com/GeekyAnts/NativeBase/blob/master/src/theme/variables/platform.js#L153)
import { menuItems } from '../data/menu.json';

// Our variables

export default class Home extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var left = (
      <Left style={{flex:1}}>
        <Button onPress={() => this._sideMenuDrawer.open()} transparent>
          <Icon name='ios-menu-outline' />
        </Button>
      </Left>
    );
    var right = (
      <Right style={{flex:1}}>
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Navbar left={left} right={right} title="Blocklang" />
          <Container style={styles.container}>
            

              <ScrollView contentContainerStyle={styles.menuColumn}>
                <Text style={{textAlign: 'center'}}>Menu</Text>
                <View style={{flex: 1}}>
                  <MenuColumn  />
                </View>
              </ScrollView>

              <ScrollView contentContainerStyle={styles.scriptColumn}>
                <Text style={{textAlign: 'center'}}>Script</Text>
                <View style={{flex: 1}}>
                  <ScriptColumn />
                </View>
              </ScrollView>

              <ScrollView contentContainerStyle={styles.canvasColumn}>
                <Text style={{textAlign: 'center'}}>Result</Text>
                <View style={{flex: 1}}>
                  <CanvasColumn />
                </View>
              </ScrollView>

         
          </Container>
      </SideMenuDrawer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },
  menuColumn: {
    ...Dim.menuColumn,
    backgroundColor: '#ffdab9'
  },

  scriptColumn: {
    ...Dim.scriptColumn,
    backgroundColor: '#b0c4de'
  },

  canvasColumn: {
    ...Dim.canvasColumn,
    backgroundColor: '#ffffff'
  }
});
