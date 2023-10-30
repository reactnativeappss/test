import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { View, YellowBox, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './anatomy/home/Bhajanai';
import EbookScreen from './anatomy/ebook/EbookScreen';
import MoreScreen from './anatomy/More/MoreScreen';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

const TabHome = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./../../assets/icons/Tab/temple.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
        headerTitle: 'Bhajanai',
      },
    },
    EbookScreen: {
      screen: EbookScreen,
      navigationOptions: {
        tabBarLabel: 'ebook',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./../../assets/icons/Tab/newspaper.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
        headerTitle: 'E-Book',
      },
    },
    MoreScreen: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarLabel: 'More',
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('./../../assets/icons/Tab/more.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
      title: 'More',
    },
  },
  {
    swipeEnabled: true,
    lazy: false,
    navigatorStyle: {
      statusBarTextColorScheme: 'light',
      statusBarColor: '#222325',
    },
    tabBarOptions: {
      style: {
        backgroundColor: 'white',
      },
      // activeTintColor: '#0511F2',
      headerMode: 'screen',
      headerVisible: true,
      navigationOptions: {
        headerMode: 'screen',
        headerVisible: true,
      },
    },
  },
  {
    defaultNavigationOptions: () => {
      return {
        headerBackImage: (
          <Image
            source={require('./../../assets/icons/nav-icons/left-arrow.png')}
            style={{ height: 24, width: 24, marginLeft: 18 }}
          />
        ),
        headerBackTitle: null,
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
        headerStyle: {
          elevation: 0,
        },
      };
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      };
    },
  }
);

export default createAppContainer(TabHome);
