/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class MoreScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                Linking.openURL('http://bhajanai.com/download-pdf')
              }
            >
              <View
                style={{
                  width: width,
                  height: 60,

                  flexDirection: 'row',
                }}
              >
                <View style={{ width: width - 110 }}>
                  <Text style={styles.titleH2}>Download Lyrics</Text>
                </View>
                <View
                  style={{
                    width: 38,
                    height: 22,
                    marginLeft: 10,
                    marginTop: 18,
                  }}
                >
                  <Image
                    style={{ height: 22, width: 22 }}
                    source={require('./../../../../assets/icons/nav-icons/right.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('Photos')}
            >
              <View
                style={{
                  width: width,
                  height: 60,

                  flexDirection: 'row',
                }}
              >
                <View style={{ width: width - 110 }}>
                  <Text style={styles.titleH2}>Photos</Text>
                </View>
                <View
                  style={{
                    width: 38,
                    height: 22,
                    marginLeft: 10,
                    marginTop: 18,
                  }}
                >
                  <Image
                    style={{ height: 22, width: 22 }}
                    source={require('./../../../../assets/icons/nav-icons/right.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('VideoList')}
            >
              <View
                style={{
                  width: width,
                  height: 60,

                  flexDirection: 'row',
                }}
              >
                <View style={{ width: width - 110 }}>
                  <Text style={styles.titleH2}>Videos</Text>
                </View>
                <View
                  style={{
                    width: 38,
                    height: 22,
                    marginLeft: 10,
                    marginTop: 18,
                  }}
                >
                  <Image
                    style={{ height: 22, width: 22 }}
                    source={require('./../../../../assets/icons/nav-icons/right.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate('About')}
            >
              <View
                style={{
                  width: width,
                  height: 60,

                  flexDirection: 'row',
                }}
              >
                <View style={{ width: width - 110 }}>
                  <Text style={styles.titleH2}>About</Text>
                </View>
                <View
                  style={{
                    width: 38,
                    height: 22,
                    marginLeft: 10,
                    marginTop: 18,
                  }}
                >
                  <Image
                    style={{ height: 22, width: 22 }}
                    source={require('./../../../../assets/icons/nav-icons/right.png')}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: width,
              height: 60,
              backgroundColor: '#93230b',
              flexDirection: 'row',
              marginTop: 40,
            }}
          >
            <View style={{ width: width }}>
              <Text style={styles.titleH3}>Version 1.0</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default MoreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED6D3',
    width: width,
    height: height,
    justifyContent: 'space-around',
  },
  listBg: {
    flex: 1,
    backgroundColor: '#3c3c3c',
    alignItems: 'center',
    justifyContent: 'center',
    height: 60,
    width: 320,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 20,
    color: '#333333',
  },
  titleH2: {
    fontSize: 18,
    lineHeight: 24,
    color: '#fff',
    marginLeft: 26,
    marginTop: 18,
  },
  titleH3: {
    fontSize: 14,
    lineHeight: 24,
    color: '#fff',
    marginLeft: 26,
    marginTop: 18,
  },
  titleH4: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: '#fff',
    marginLeft: 26,
    marginTop: 8,
  },
  infop1: {
    fontSize: 12,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
  button: {
    width: 'auto',
    height: 60,
    backgroundColor: '#93230b',
    flexDirection: 'row',
    marginTop: 37,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 10,
  },
});
