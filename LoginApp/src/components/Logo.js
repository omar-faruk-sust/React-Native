import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


export default class Logo extends Component {
  render() {
    return (
      <View style={styles.containerLogo}>
        <Image
          style= {{ width: 120, height: 110 }}
          source={require('../assets/img/logo.png')}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerLogo: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },

});
