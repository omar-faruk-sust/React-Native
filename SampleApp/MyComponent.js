import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Text, StatusBar } from 'react-native';

type Props = {};
export default class MyComponent extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}> My App </Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Simple App</Text>
        <Text style={styles.defaultText}>React Native App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    backgroundColor: '#DDD',
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  defaultText : {
    fontSize : 18,
    color : 'black',
    padding : 10,
    margin : 5,
    borderWidth: StyleSheet.hairlineWidth
  },
  selectedText: {
    backgroundColor: 'yellow',
    color : 'blue',
    fontWeight : 'bold'
  }
});
