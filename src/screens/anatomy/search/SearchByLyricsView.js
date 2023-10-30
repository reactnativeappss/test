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
import SwiperScrollView from '../../../component/SwiperScrollView';

console.disableYellowBox = true;

const { height, width } = Dimensions.get('window');

class SearchByLyricsView extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: {} };
  }

  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');

    return fetch(
      'http://bhajanai.com/wp-json/api/v1/search/?filter=lyrics&q=' + itemId
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
        Alert.alert('Something went wrong', error.message, [
          {
            text: 'Please Try again!',
            onPress: this.fetch,
          },
        ]);
      });
  }

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
          <View style={styles.songTitleWrapper}>
            <View style={{ width: 50 }}>
              <Image
                style={styles.albumArt}
                source={{ uri: this.state.dataSource.image.original }}
                backgroundColor="#f7f7f7"
              />
            </View>
            <View style={styles.detailsWrapper}>
              <Text style={styles.title}>{this.state.dataSource.title}</Text>
            </View>
          </View>
          <View
            style={{
              width: width - 20,
              height: 230,
              backgroundColor: 'white',
              flex: 1,
              padding: 2,
              borderRadius: 10,
            }}
          >
            <SwiperScrollView>
              <View style={{ flex: 1, paddingBottom: 12 }}>
                <Text style={styles.titleH2}>
                  {this.state.dataSource.lyrics}
                </Text>
              </View>
            </SwiperScrollView>
          </View>
        </View>
      );
    }
  }
}

export default SearchByLyricsView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FED6D3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    lineHeight: 28,
    textAlign: 'center',
  },
  titleH2: {
    fontSize: 18,
    lineHeight: 26,
    color: '#3c3c3c',
    padding: 10,
    margin: 18,
  },
  titleH3: {
    fontSize: 11,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
  songTitleWrapper: {
    width: width - 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  albumArt: {
    width: 64,
    height: 64,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: height - 90,
    marginLeft: 4,
    backgroundColor: 'red',
  },
  artist: {
    color: 'black',
    fontSize: 16,
    lineHeight: 18,
    marginTop: 4,
    paddingBottom: 20,
  },
});
