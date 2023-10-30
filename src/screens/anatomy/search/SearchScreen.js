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

const { height, width } = Dimensions.get('window');

console.disableYellowBox = true;

const player = Data.player;
const footerPlayer = Data.footerPlayer;

const images = [
  'http://bhajanai.com/wp-content/uploads/2019/11/god-murugan-latest-hd-photos-wallpapers-1080p-xxh.jpg',
  'http://bhajanai.com/wp-content/uploads/2019/11/god-murugan-latest-hd-photos-wallpapers-1080p-afm.jpg',
];

class SearchScreen extends Component {
  render() {
    const { navigation } = this.props;
    //navigation.setParams({ headerTitle: "value" })

    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 10,
                borderRadius: 16,
              }}
            >
              <Text style={styles.title}>Search</Text>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('SearchItem')}
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
                    <Text style={styles.titleH2}>Songs</Text>
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
                      source={require('./../../../../assets/icons/nav-icons/music.png')}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate('SearchByLyricsItem')}
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
                    <Text style={styles.titleH2}>Lyrics</Text>
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
export default SearchScreen;
