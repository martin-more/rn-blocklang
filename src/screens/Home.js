// React native and others libraries imports
import React, { Component } from 'react';
import { Image } from 'react-native';
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
            <Content>
              <Text>Hello Blocklang</Text>
            </Content>
          </Container>
      </SideMenuDrawer>
    );
  }
}
