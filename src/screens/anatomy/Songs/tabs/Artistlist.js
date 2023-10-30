/* eslint-disable react-native/no-inline-styles */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NavigationFocusInjectedProps, withNavigation } from 'react-navigation';

console.disableYellowBox = true;

const { height, width } = Dimensions.get('window');

class Artistlist extends Component {
  constructor(props) {
    super(props);
    console.log('hi buddy');
    this.state = { isLoading: true };
  }

  fetchArtList() {}
  componentDidMount() {
    console.log('hi buddy');
    return fetch('http://bhajanai.com/wp-json/api/v1/artists')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data,
          },
          function() {}
        );
      })
      .catch(error => {
        Alert.alert('Something went wrong', error.message, [
          {
            text: 'Please Try again!',
            onPress: this.fetch,
          },
        ]);
      });
  }

  renderItem = ({ item }) => {
    // console.log(item);
    console.log('hi buddy');
    const { param } = this.props.navigation.state;
    const { navigation } = this.props;
    return (
      <View
        style={{
          width: width - 20,
          height: 100,
          backgroundColor: '#93230b',
          borderRadius: 10,
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate('ArtistGodList', { itemId: item.id })
          }
        >
          <View
            style={{
              width: width - 20,
              height: 100,

              flexDirection: 'row',
            }}
          >
            <View
              style={{
                width: 80,
                height: 80,
                backgroundColor: '#fff',
                borderRadius: 5,
                marginLeft: 8,
                marginTop: 10,
              }}
            >
              <Image
                style={{
                  flex: 1,
                  height: null,
                  width: null,
                  resizeMode: 'cover',
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#f9f9f9',
                }}
                source={{ uri: item.image.original }}
              />
            </View>
            <View style={{ width: width - 180 }}>
              <Text style={styles.titleH2}>{item.title}</Text>
            </View>
            <View
              style={{
                width: 32,
                height: 32,
                marginLeft: 10,
                marginTop: 38,

                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ height: 22, width: 22 }}
                source={require('../../../../../assets/icons/nav-icons/right.png')}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator color="#455FE9" size="large" />
        </View>
      );
    } else {
      return (
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this.renderItem}
            keyExtractor={({ id }, index) => id.toString()}
          />
        </View>
      );
    }
  }
}

export default withNavigation(Artistlist);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED6D3',
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
    fontSize: 20,
    lineHeight: 26,
    color: '#ffffff',
    marginLeft: 12,
    marginTop: 38,
  },
  titleH3: {
    fontSize: 11,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
});
