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
} from 'react-native';

const { height, width } = Dimensions.get('window');

class Otherlist extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    return fetch(
      'http://bhajanai.com/wp-json/api/v1/artists/wp-json/api/v1/artists/'
    )
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
        console.error(error);
      });
  }

  renderItem = ({ item }) => {
    return (
      <View
        style={{
          width: width - 20,
          height: 100,
          backgroundColor: '#f7f7f7',
          borderRadius: 5,
          flexDirection: 'row',
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            backgroundColor: '#9e9e9e',
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
              borderColor: '#dddddd',
            }}
            source={{ uri: item.image.original }}
          />
        </View>
        <View>
          <Text style={styles.titleH2}>{item.title}</Text>
          <Text style={styles.titleH3}>{item.created_at}</Text>
        </View>
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

export default Otherlist;

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
    fontSize: 14,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 24,
  },
  titleH3: {
    fontSize: 11,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
});
