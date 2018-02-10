// This listview is with dynamic data source
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class DynamicListviewComponent extends Component {
  constructor() {
    super();
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      userDataSource: ds, //set the dataSource object into userDataSource state
    };
  }

  //hook into life cycle method
  componentDidMount() {
    this.fetchUsers();
  }

  //fetch the data from api end point
  fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          userDataSource: this.state.userDataSource.cloneWithRows(response),
        });
      });
  }

  renderRow(item, sectionId, rowId, highlightRow) {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>
          {item.name}: {item.email}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View >
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
    paddingTop: 30,
    //backgroundColor: 'red',
    marginBottom: 5,
  },
  rowText: {
    flex: 1,
  },
});

AppRegistry.registerComponent('ListviewApp', () => DynamicListviewComponent);
