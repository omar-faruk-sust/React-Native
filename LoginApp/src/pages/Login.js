import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Logo from '../components/Logo';
import SigninForm from '../components/SigninForm';
import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.LoginContainer}>
  				<Logo/>
  				<SigninForm type="Login"/>

  				<View style={styles.SignupTextView}>
  					<Text style={styles.SignupText}>Don't have an account yet?</Text>
  					<TouchableOpacity onPress={this.signup}>
              <Text style={styles.SignupLink}> Signup</Text>
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
