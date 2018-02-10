/**
This Component is to show the interactivity with color list
*/
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight
} from 'react-native';
import ColorButton from './components/ColorButton';

export default class TouchableHighLightComponent extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'black',
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <ScrollView style={[styles.container, { backgroundColor }]}>

        <ColorButton backgroundColor = 'red'

        //onSelect={(color) => this.changeColor(color)} //same as line below
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'green'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'blue'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'salmon'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = '#00FF00'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'rgb(255,0,255)'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'green'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'blue'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'salmon'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = '#00FF00'
          onSelect={this.changeColor}
        />
        <ColorButton backgroundColor = 'rgb(255,0,255)'
          onSelect={this.changeColor}
        />

      </ScrollView>
    );
  }
}

/**
This is without ColorButton
export default class TouchableHighLightComponent extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: 'blue',
    };

    this.changeColor = this.changeColor.bind(this);
  }

  changeColor(backgroundColor) {
    this.setState({ backgroundColor });
  }

  render() {
    const { backgroundColor } = this.state;
    return (
      <View style={[styles.container, { backgroundColor }]}>

        <TouchableHighlight style={ styles.button}
          onPress = {() => this.changeColor('yellow')}
          underlayColor = "orange"
          >
          <View style={styles.row}>
            <View style={[styles.sample,
              { backgroundColor: 'yellow' },
            ]} />
            <Text style={styles.text}> yellow </Text>
          </View>
      </TouchableHighlight>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, .8)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 30,
    margin: 5,
  },
});*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
});
