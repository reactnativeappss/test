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
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { NavigationFocusInjectedProps, withNavigation } from 'react-navigation';

const { height, width } = Dimensions.get('window');

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    return fetch('http://bhajanai.com/wp-json/api/v1/albums')
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
          { text: 'Try again', onPress: this.fetch },
        ]);
      });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('PhotosDetailsView', { itemId: item.id })
          }
        >
          <View style={{ width: width - 20, height: 200 }}>
            <ImageBackground
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
            >
              <Text
                style={{
                  color: 'white',
                  left: 16,
                  top: 120,
                  position: 'absolute',
                  fontSize: 30,
                }}
              >
                {item.title}
              </Text>
            </ImageBackground>
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

export default withNavigation(Photos);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED6D3',
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    height: 240,
  },
});
