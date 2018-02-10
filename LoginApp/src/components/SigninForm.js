import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';


export default class SigninForm extends Component {
  render() {
    return (
      <View style={styles.contentForm}>
        <TextInput style={styles.inputBox}
          placeholder='Email'
          placeholderTextColor='#ffffff'
          selectionColor="#ffffff"
          keyboardType="email-address"
          onSubmitEditing={()=> this.password.focus()}
        />
        <TextInput style={styles.inputBox}
          placeholder='Password'
          placeholderTextColor='#ffffff'
          secureTextEntry = {true}
          selectionColor="#ffffff"
        />
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {this.props.type}
            </Text>
          </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contentForm: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputBox: {
    width: 300,
    height: 50,
    backgroundColor: '#ffbcaf',
    borderRadius: 25,
    paddingHorizontal: 16,
    marginVertical: 10,

    fontSize: 16,


  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#ff8a80',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,

  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },

});
