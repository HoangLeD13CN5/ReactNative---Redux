/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { changePlatform } from './actions';
import { Provider } from 'react-redux';
import AppExtends from './container/MainScreen';
import configureStore from './store';

const store = configureStore()
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <AppExtends />
      </Provider>
    );
  }
}