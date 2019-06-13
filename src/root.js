/**
 *
 * @format
 * @flow
 */

import React from 'react';
import {View,  Text} from 'react-native';
import { Provider } from 'react-redux';
import { createReduxStore } from './store';
import App from './app';

const store = createReduxStore();

const Root = props => (
  <Provider store={store} key="provider">
    <App />
  </Provider>
);


export default Root;
