import React from 'react';
import { Root, Button, Icon } from 'native-base';
import { StatusBar, View, Image } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
console.disableYellowBox = true;

import Bhajanai from './screens/anatomy/home/Bhajanai';
import WelcomeScreen from './screens/anatomy/Onboard/WelcomeScreen';
import Album from './screens/album/index.js';
import GodAlbum from './screens/album/GodAlbum';
import Player from './screens/player/index.js';

import Photos from './screens/anatomy/Photo/Photos';
import PhotosDetailsView from './screens/anatomy/Photo/PhotosDetailsView';
import About from './screens/anatomy/About/About';
//import MyWeb from './screens/anatomy/Webview/MyWeb';
import Songs from './screens/anatomy/Songs/Songs';
import VideoList from './screens/anatomy/Video/VideoList';
import YouTubeList from './screens/anatomy/Video/YouTubeList';
import SearchItem from './screens/anatomy/search/SearchItem';
import SearchListItem from './screens/anatomy/search/SearchListItem';

import SearchByLyricsItem from './screens/anatomy/search/SearchByLyricsItem';
import SearchByLyricsList from './screens/anatomy/search/SearchByLyricsList';
import SearchByLyricsView from './screens/anatomy/search/SearchByLyricsView';

// Tab screen

//import EbookScreen from './screens/anatomy/ebook/EbookScreen';
import SearchScreen from './screens/anatomy/search/SearchScreen';
import MoreScreen from './screens/anatomy/More/MoreScreen';

import Tabscreen from './screens/anatomy/Songs/tabs/Tabscreen';

// import ArtistPlay from './screens/anatomy/Songs/tabs/ArtistPlay';
import Artistlist from './screens/anatomy/Songs/tabs/Artistlist';
import ArtistGodList from './screens/anatomy/Songs/tabs/ArtistGodList';
import Godnamelist from './screens/anatomy/Songs/tabs/Godnamelist';
import GodArtistList from './screens/anatomy/Songs/tabs/GodArtistList';

import LyricsByGod from './screens/anatomy/Lyrics/LyricsByGod';
import LyricsByGodDetails from './screens/anatomy/Lyrics/LyricsByGodDetails';
import LyricsByGodView from './screens/anatomy/Lyrics/LyricsByGodView';

import LyricsByArtist from './screens/anatomy/Lyrics/LyricsByArtist';
import LyricsByArtistDetails from './screens/anatomy/Lyrics/LyricsByArtistDetails';
import LyricsByArtistView from './screens/anatomy/Lyrics/LyricsByArtistView';

// import Ereader from './screens/anatomy/ebook/Ereader';

// import WKView from './screens/anatomy/Webview/WKView';

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Bhajanai: {
      screen: Bhajanai,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/icons/Tab/temple.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/icons/Tab/search.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../assets/icons/Tab/more.png')}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        ),
      },
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName == 'Bhajanai' ? 'ஓம் முருகா சரணம்' : routeName,
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
        },
      };
    },
  }
);

const AppNavigator = createStackNavigator(
  {
    DashboardTabNavigator: {
      screen: DashboardTabNavigator,
      navigationOptions: {
        title: 'Artist Albums',
      },
    },
    Tabscreen: Tabscreen,
    // ArtistPlay: ArtistPlay,
    Artistlist: {
      screen: Artistlist,
      navigationOptions: {
        title: 'Artist Albums',
      },
    },
    Godnamelist: {
      screen: Godnamelist,
      navigationOptions: {
        title: 'God Albums',
      },
    },
    GodArtistList: GodArtistList,
    ArtistGodList: ArtistGodList,
    // Ereader: Ereader,
    Album: Album,
    GodAlbum: GodAlbum,
    Player: Player,
    LyricsByGod: LyricsByGod,
    LyricsByGodDetails: LyricsByGodDetails,
    LyricsByGodView: LyricsByGodView,
    LyricsByArtist: LyricsByArtist,
    LyricsByArtistDetails: LyricsByArtistDetails,
    LyricsByArtistView: LyricsByArtistView,
    YouTubeList: YouTubeList,
    SearchListItem: SearchListItem,
    SearchByLyricsItem: SearchByLyricsItem,
    SearchByLyricsList: SearchByLyricsList,
    SearchByLyricsView: SearchByLyricsView,
    Bhajanai: {
      screen: Bhajanai,
      navigationOptions: {
        title: 'Bhajanai',
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search',
      },
    },
    SearchItem: {
      screen: SearchItem,
      navigationOptions: {
        title: 'Search',
      },
    },
    Songs: Songs,
    // WKView: WKView,
    VideoList: VideoList,
    Photos: {
      screen: Photos,
      navigationOptions: {
        title: 'Photos',
      },
    },
    PhotosDetailsView: PhotosDetailsView,
    About: {
      screen: About,
      navigationOptions: {
        title: 'About',
      },
    },
    // MyWeb: {
    //   screen: MyWeb,
    //   navigationOptions: {
    //     title: 'Ebook Details',
    //   },
    // },
  },
  {
    defaultNavigationOptions: () => {
      return {
        headerBackImage: (
          <Image
            source={require('./../assets/icons/nav-icons/left-arrow.png')}
            style={{ height: 24, width: 24, marginLeft: 18 }}
          />
        ),
        headerBackTitle: null,
        headerTintColor: 'white',
        headerTitleStyle: {
          textAlign: 'center',
          flex: 1,
          marginRight: 80,
        },
        headerStyle: {
          elevation: 0,
          backgroundColor: '#93230B',
        },
      };
    },
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerMode: 'screen',
      };
    },
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen: { screen: WelcomeScreen },
  Dashboard: { screen: AppNavigator },
  Tabscreen: Tabscreen,
});

const WrappedDrawer = createAppContainer(AppSwitchNavigator);

export default () => (
  <Root>
    <WrappedDrawer />
  </Root>
);
