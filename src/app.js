import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './screens/home';
import Posts from './screens/posts';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Posts: {
    screen: Posts
  },
});

export default createAppContainer(AppNavigator);
