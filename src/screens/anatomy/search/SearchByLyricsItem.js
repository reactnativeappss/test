/* eslint-disable react-native/no-inline-styles */
import React, { Component, useState } from 'react';
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
  TextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';

import TouchableNativeFeed from '../../../component/TouchableNativeFeedback';

const { height, width } = Dimensions.get('window');

console.disableYellowBox = true;

class SearchByLyricsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTxt: '',
    };
  }
  componentDidMount() {
    // const { searchTxt } = this.state;
    // const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    // itemId = searchTxt;
    // fetch('http://bhajanai.com/wp-json/api/v1/search?filter=songs&q=' + itemId)
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     alert(responseJson);
    //     console.log(responseJson);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
  // searchSongs = () => {
  //   const { searchTxt } = this.state;

  //   fetch(
  //     'http://bhajanai.com/wp-json/api/v1/search?filter=songs&q=' + searchTxt
  //   )
  //     .then(response => response.json())
  //     .then(responseJson => {
  //       alert(responseJson);
  //       console.log(responseJson);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  //   Keyboard.dismiss();
  // };
  submitForm() {}

  render() {
    //navigation.setParams({ headerTitle: "value" })
    const { navigation } = this.props;
    return (
      <View>
        <View
          style={{
            flex: 1,
            width: width - 10,
            alignItems: 'center',
            marginTop: 28,
          }}
        >
          <TextInput
            style={{
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
              borderRadius: 4,
              width: 280,
            }}
            value={this.state.searchTxt}
            onChangeText={searchTxt => this.setState({ searchTxt })}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonContainer}
            onPress={() =>
              navigation.navigate('SearchByLyricsList', {
                itemId: this.state.searchTxt,
              })
            }
          >
            <Text style={styles.btnText}>Search Now</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}></View>
      </View>
    );
  }
}
export default SearchByLyricsItem;

const styles = StyleSheet.create({
  mainboady: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    width: 160,
    height: 160,
    marginTop: 20,
    marginBottom: 30,
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: 220,
    height: 48,
    backgroundColor: '#93230B',
    padding: 12,
    borderRadius: 18,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 20,
    color: '#333333',
  },
  titleInfo: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 20,
    color: '#999999',
  },
});
