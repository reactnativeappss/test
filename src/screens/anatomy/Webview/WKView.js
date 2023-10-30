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
  WebView,
} from 'react-native';

const { height, width } = Dimensions.get('window');

class WKView extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'http://bhajanai.com/download-pdf' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default WKView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
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
