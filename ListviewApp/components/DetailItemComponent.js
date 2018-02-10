// This listview is with dynamic data source
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class DetailItemComponent extends Component {
  constructor() {

    super();
  }



  render() {
    return (
      <View >
        <Text> details</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 30,
    marginBottom: 5,
  },
  rowText: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ListviewApp', () => DetailItemComponent);
