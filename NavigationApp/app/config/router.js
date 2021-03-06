import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements'; //this is named import

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me'; // this is default import

export const FeedStack = StackNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
    },
  },
  UserDetail: {
    screen: UserDetail,

    //state is passed when you navigate between screen
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    }),
  },
});

//TabNavigator will take object as it's first param
export const Tabs = TabNavigator({
  Feed: {
    //screen: Feed, //replace this screen with FeedStack navigator
    screen: FeedStack, //StackNavigator inside a Tab navigator

    //navigationOptions can also define as static in corresponding class
    navigationOptions: {
      tabBarLabel: 'Feed',
      tabBarIcon: ({ tintColor }) => <Icon name='list' size={35} color={tintColor}/>,
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name='account-circle' size={35} color={tintColor}/>,
    },
  },
});


export const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Settings',
    },
  },
});

export const Root = StackNavigator({
  Tabs: {
    screen: Tabs,
  },
  Settings: {
    screen: SettingsStack,
  },
},
{
  mode: 'modal',
  headerMode: 'none', // this means for StackNavigator no navigation bar will show on the top
});
