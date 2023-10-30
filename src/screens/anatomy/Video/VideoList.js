/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class VideoList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 64, height: 64 }}>
          <Image
            style={{
              flex: 1,
              height: null,
              width: null,
              resizeMode: 'cover',
            }}
            source={require('./../../../../assets/icons/nav-icons/compass.png')}
          />
        </View>
        <View>
          <Text style={styles.titleH3}>Coming Soon</Text>
        </View>
      </View>
    );
  }
}

export default VideoList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 20,
    color: '#333333',
  },
  titleH2: {
    fontSize: 22,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 24,
    color: '#3c3c3c',
    marginTop: 4,
    marginBottom: 6,
    justifyContent: 'center',
  },
  titleH3: {
    fontSize: 14,
    lineHeight: 24,
    color: '#3c3c3c',
    marginTop: 4,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
