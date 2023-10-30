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
  WebView,
} from 'react-native';
import Video from 'react-native-video';

console.disableYellowBox = true;
import { NavigationFocusInjectedProps, withNavigation } from 'react-navigation';

const { height, width } = Dimensions.get('window');

class YouTubeList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    console.log('this.state.dataSource.videos.url');
    return fetch('http://bhajanai.com/wp-json/api/v1/videos')
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
        // console.error(error);
        Alert.alert('Something went wrong', error.message, [
          {
            text: 'Please Try again!',
            onPress: this.fetch,
          },
        ]);
      });
  }
  ListEmpty = () => {
    return (
      //View to show when list is empty
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
      </View>
    );
  };

  renderItem = ({ item }) => {
    console.log(this.state.dataSource);

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
      ></View>
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
            // ListEmptyComponent={this.ListEmpty}
            //Message to show for the Empty list
          />
        </View>
      );
    }
  }
}

export default withNavigation(YouTubeList);

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
