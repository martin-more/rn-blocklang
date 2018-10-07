/** @format */

import {AppRegistry} from 'react-native';
import Main from './src/Main';
import {name as appName} from './app.json';

// +----------+
// |   POC    |
// +----------+
// 
// - react-native-sortable-grid
//import example from './poc-components/rn-sortable-grid/basicExample';
import example from './poc-components/rn-sortable-grid/deletionExample';
//import example from './poc-components/rn-sortable-grid/customAnimationExample';


AppRegistry.registerComponent(appName, () => Main);
