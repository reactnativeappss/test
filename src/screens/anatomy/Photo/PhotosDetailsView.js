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
} from 'react-native';

const { height, width } = Dimensions.get('window');

class PhotosDetailsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    console.log(itemId);

    return fetch('http://bhajanai.com/wp-json/api/v1/album/' + itemId)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data.images,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    console.log(item.large);

    return (
      <View style={{ width: width - 20, height: 220, marginTop: 10 }}>
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
          source={{ uri: item.large }}
        ></ImageBackground>
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
            keyExtractor={(x, i) => i}
          />
        </View>
      );
    }
  }
}

export default PhotosDetailsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
