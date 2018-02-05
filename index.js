import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  NavigatorIOS
} from 'react-native';
import Main from './App/Components/Main';

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component<{}> {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: Main,
          title: 'Start',
        }}
      />
    );
  }
}


AppRegistry.registerComponent('game', () => App);
