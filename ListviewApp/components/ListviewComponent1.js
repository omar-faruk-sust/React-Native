// This listview is with static data source
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

const users = [
  { name: 'Omar' },
  { name: 'Faruk' },
  { name: 'Miah' },
  { name: 'Rishat' },
];

export default class ListviewComponent extends Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds.cloneWithRows(users),
    };
  }

  renderRow(item, sectionId, rowId, highlightRow) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>
          {item.name}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={ this.state.userDataSource }
          renderRow = { this.renderRow.bind(this)}
          >

        </ListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'green',
    marginBottom: 5,
  },
  rowText: {
    flex: 1,
  },
});
