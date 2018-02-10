import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
import SignupForm from '../components/SignupForm';

export default class Signup extends Component {

  login() {
    Actions.pop();
  }

  render() {
    return (
      <View style={styles.LoginContainer}>
        <Logo />

        <SignupForm type="Register" />

        <View style={styles.SignupTextView}>
          <Text style={styles.SignupText}>Already have an account?</Text>
          <TouchableOpacity onPress={this.login}>
            <Text style={styles.SignupLink}> Sign In </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',

  },
  SignupTextView: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 34,
    flexDirection: 'row',
  },
  SignupText: {
    color: '#ffbcaf',
    fontSize: 16,
  },
  SignupLink: {
    color: '#c85a54',
    fontSize: 17,
    fontWeight: '500',
  },

});
