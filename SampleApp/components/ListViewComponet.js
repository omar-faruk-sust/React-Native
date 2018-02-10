/**
This Component is to show listview
*/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight
} from 'react-native';
import ColorButton from './ColorButton';

export default class ListViewComponet extends Component {
  constructor() {
    super();
    // Create datasource object, providing row update strategy
    this.ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const availableColors = ['red', 'green', 'yellow', 'salmon', 'blue'];

    // initialize the state, initialize a datasource and a data property, listview need to use.
    this.state = {
      backgroundColor: 'white',
      availableColors,
      DataSource: this.ds.cloneWithRows(availableColors),
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor, dataSource } = this.state
    return (
      <ListView style={[styles.container,{backgroundColor}]}
        dataSource={dataSource}
        renderRow={(color) => (
          <ColorButton backgroundColor={color}
            onSelect={this.changeColor}/>
        )}
        renderHeader={() => (
          <Text style={styles.header}>Color List</Text>
        )}>

      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
});
