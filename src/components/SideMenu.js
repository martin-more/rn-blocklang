/**
* This is the SideMenu component used in the navbar
**/

// React native and others libraries imports
import React, { Component } from 'react';
import { ScrollView, LayoutAnimation, UIManager, Linking } from 'react-native';
import { View, List, ListItem, Body, Left, Right, Icon, Item, Input, Button, Grid, Col } from 'native-base';
import { Actions } from 'react-native-router-flux';

// Our custom files and classes import
import Text from './Text';

// Dump Data - Menu
import { menuItems } from '../data/menu.json';


export default class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      searchError: false,
      subMenu: false,
      subMenuItems: [],
      clickedItem: ''
    };
    UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  render() {
    return(
      <ScrollView style={styles.container}>
        {this.renderMenu()}
      </ScrollView>
    );
  }

  renderMenu() {
    return(
      <View>
        <View style={{paddingLeft: 15, paddingRight: 15}}>
          <Item error={this.state.searchError}>
            <Input
              placeholder='Search...'
              onChangeText={(text) => this.setState({search: text, searchError: false})}
              onSubmitEditing={() => this.search()}
            />
            <Icon active name='ios-search-outline' onPress={() => this.search()} />
          </Item>
        </View>
      {/* --- Main MENU start --- */}
        <View style={{paddingRight: 15}}>
          <List>
            {this.renderMenuItems()}
          </List>
        </View>
      {/* --- Main MENU end --- */}
        <View style={styles.line} />
      </View>
    );
  }

  renderMenuItems() {
    let items = [];
    menuItems.map((item, i) => {
      items.push(
        <ListItem
          last={menuItems.length === i+1}
          icon
          key={item.id}
          button={true}
          onPress={() => this.itemClicked(item)}>
          <Body>
            <Text>{item.title}</Text>
          </Body>
        </ListItem>
      );
    });
    return items;
  }

  itemClicked(item) {
    LayoutAnimation.configureNext(animationConfig);
    this.setState({subMenu: true, subMenuItems: item.subMenu, clickedItem: item.title});
  }
  
  search(text) {
    if(this.state.search.length <= 2)
      this.setState({searchError: true, search: ""});
    else
      Actions.search({searchText: this.state.search});
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fdfdfd'
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'rgba(189, 195, 199, 0.6)',
    marginTop: 10,
    marginBottom: 10
  }
};
