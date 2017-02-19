import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import AppContainer from './containers/AppContainer';
import Store from './Store';
import {Provider} from 'react-redux';


export default class ChartApp extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ChartApp', () => ChartApp);
