// React native and others libraries imports
import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { Root } from 'native-base';
import { Scene, Router, Actions } from 'react-native-router-flux';


// Our custom files and classes import

import Welcome from './screens/Welcome';
import Home from './screens/Home';

export default class Main extends Component {
  componentWillMount = () => {
    BackHandler.addEventListener('hardwareBackPress', () => Actions.pop());
  };

  render() {
    return(
      <Root>
        <Router>
          <Scene key="root">
            <Scene key="welcome" component={Welcome} hideNavBar />
            <Scene initial key="home" component={Home} modal hideNavBar />
          </Scene>
        </Router>
      </Root>
    );
  }
}
