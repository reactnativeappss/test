/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Text,
  Container,
  Content,
  Card,
  List,
  Body,
  Footer,
  FooterTab,
} from 'native-base';
import {
  ScrollView,
  View,
  Image,
  TouchableNativeFeedback,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import TouchableNativeFeed from '../../../component/TouchableNativeFeedback';
import styles from './styles';
import MusicPlayerWrapper from '../../musicPlayerWrapper/index';

import albumData from './albums.js';
import Data from '../../../constants/constantData.js';
const { height, width } = Dimensions.get('window');

console.disableYellowBox = true;

import ImageCarousel from '../../Util/ImageCarousel';

// function copy(o) {
//   var output, v, key;
//   output = Array.isArray(o) ? [] : {};
//   for (key in o) {
//     v = o[key];
//     output[key] = typeof v === 'object' ? copy(v) : v;
//   }
//   return output;
// }

// const shuffle = array => {
//   let currentIndex = array.length,
//     temp,
//     randomIndex;
//   while (currentIndex !== 0) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;
//     temp = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temp;
//   }
//   let arr = copy(array);
//   return arr;
// };

const albums = albumData.albums;
const player = Data.player;
const footerPlayer = Data.footerPlayer;

const images = [
  'http://bhajanai.com/wp-content/uploads/2019/11/god-murugan-latest-hd-photos-wallpapers-1080p-xxh.jpg',
  'http://bhajanai.com/wp-content/uploads/2019/11/god-murugan-latest-hd-photos-wallpapers-1080p-afm.jpg',
];

class Bhajanai extends Component {
  render() {
    const { navigation } = this.props;
    //navigation.setParams({ headerTitle: "value" })

    return (
      <Container style={styles.container}>
        <Content>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 4,
              marginTop: 5,
            }}
          >
            <Image
              style={{ height: 220, width: width - 6, borderRadius: 10 }}
              source={require('./../../../../assets/icons/Courosel/Banner.jpg')}
            />
          </View>
          <View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 16,
              }}
            >
              <Text style={styles.title}>MP3 Songs</Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Godnamelist')}
              >
                <View
                  style={{
                    width: width,
                    height: 60,
                    flexDirection: 'row',
                  }}
                >
                  <View
                    style={{ width: width - 150, marginLeft: 10, marginTop: 5 }}
                  >
                    <Text style={styles.titleH2}>God</Text>
                  </View>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={{ height: 42, width: 42 }}
                      source={require('./../../../../assets/icons/nav-icons/pray.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('Artistlist')}
              >
                <View
                  style={{
                    width: width,
                    height: 60,
                    flexDirection: 'row',
                  }}
                >
                  <View
                    style={{ width: width - 150, marginLeft: 10, marginTop: 5 }}
                  >
                    <Text style={styles.titleH2}>Singer</Text>
                  </View>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={{ height: 42, width: 42 }}
                      source={require('./../../../../assets/icons/nav-icons/singer.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginBottom: 10 }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 16,
              }}
            >
              <Text style={styles.title}>Lyrics</Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('LyricsByGod')}
              >
                <View
                  style={{
                    width: width,
                    height: 60,
                    flexDirection: 'row',
                  }}
                >
                  <View
                    style={{ width: width - 150, marginLeft: 10, marginTop: 5 }}
                  >
                    <Text style={styles.titleH2}>God</Text>
                  </View>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={{ height: 42, width: 42 }}
                      source={require('./../../../../assets/icons/nav-icons/pray.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('LyricsByArtist')}
              >
                <View
                  style={{
                    width: width,
                    height: 60,
                    flexDirection: 'row',
                  }}
                >
                  <View
                    style={{ width: width - 150, marginLeft: 10, marginTop: 5 }}
                  >
                    <Text style={styles.titleH2}>Artist</Text>
                  </View>
                  <View
                    style={{
                      width: 42,
                      height: 42,
                      marginLeft: 10,
                      marginTop: 5,
                    }}
                  >
                    <Image
                      style={{ height: 42, width: 42 }}
                      source={require('./../../../../assets/icons/nav-icons/lyric.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default Bhajanai;
