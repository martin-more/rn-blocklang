/**
* This is the category component used in home page
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import { View  } from 'native-base';
// import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';

export default class Block extends Component {
  render() {
    let {item} = this.props;

    let itemInput  = item.input ? (<TextInput style={{textAlign: 'center', height: 35, width: 50, backgroundColor: '#ffffff', borderColor: 'gray', borderWidth: 1}} value={item.input} />) : null;
    let itemSymbol = item.symbol ? (<Text style={styles.title}>{item.symbol}</Text>) : null;

    return(
      <View style={{flex:1, borderRadius:10, borderWidth: 1, backgroundColor: '#ff7f50', marginTop: 2, marginBottom: 2}}>
        <TouchableOpacity
          onPress={this._onPress.bind(this)}
          activeOpacity={0.9}>
          <View>
            {/* <Image style={styles.image} source={{uri: this.props.image}} /> */}
            {/* <View style={styles.overlay} /> */}
            {/* <View style={styles.border} /> */}
            <View style={styles.text}>
              <Text style={styles.title}>{item.title}</Text>
              {itemInput}
              {itemSymbol}
            </View>
            {item.type=='loop' ? <View style={{marginLeft: 15, marginBottom: 10, height: 15, borderWidth: 1, backgroundColor: '#ffdab9', borderBottomLeftRadius: 10, borderBottomRightRadius: 0,borderTopLeftRadius: 10, borderTopRightRadius: 0}} /> : null}
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  _onPress() {
    // Actions.category({id: this.props.id, title: this.props.title});
  }
}

const styles = {
  text: {
    //position: 'absolute',
    margin: 10,
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  title: {
    margin: 5,
    textAlign: 'center',
    color: '#fdfdfd',
    // fontSize: 15
  },
  subtitle: {
    textAlign: 'center',
    color: '#fdfdfd',
    // fontSize: 11,
    fontWeight: '100',
    fontStyle: 'italic'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(30, 42, 54, 0.4)'
  },
  border: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(253, 253, 253, 0.2)'
  }/*,
  image: {
    height: 200,
    width: null,
    flex: 1
  }*/
};
