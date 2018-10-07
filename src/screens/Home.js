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
import Text from '../components/Text';
import Navbar from '../components/Navbar';
import SideMenu from '../components/SideMenu';
import SideMenuDrawer from '../components/SideMenuDrawer';

// Our const
const FULL_WIDTH = Dimensions.get('window').width;
const FULL_HEIGHT = Dimensions.get('window').height;
// Natibase header height (https://github.com/GeekyAnts/NativeBase/blob/master/src/theme/variables/platform.js#L153)
const HEADER_HEIGHT = (Platform.OS === 'ios' ? 64 : 56) + 24


export default class Home extends Component {
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
    {/*
        <Button onPress={() => Actions.search()} transparent>
          <Icon name='ios-search-outline' />
        </Button>
    */}
      </Right>
    );
    return(
      <SideMenuDrawer ref={(ref) => this._sideMenuDrawer = ref}>
          <Container>
            <Navbar left={left} right={right} title="Blocklang" />
            
            <View style={styles.container}>
              
              <ScrollView contentContainerStyle={styles.scriptColumn}>
              </ScrollView>

              <View style={styles.canvasColumn}>
                <Image
                  style={styles.canvasColumn}
                  source={require('../assets/logo.png')}
                />
              </View>

            </View>
          </Container>
      </SideMenuDrawer>
    );
  }
  
  renderScriptColumn() {
    
  }

  renderCanvasColumn() {

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red'
  },

  scriptColumn: {
    height: FULL_HEIGHT - HEADER_HEIGHT,
    width: FULL_WIDTH / 2,
    backgroundColor: '#b0c4de'
  },

  canvasColumn: {
    height: FULL_HEIGHT - HEADER_HEIGHT,
    width: FULL_WIDTH / 2,
    backgroundColor: '#e8e8e8'
  }
});
