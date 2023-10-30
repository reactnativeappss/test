/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
console.disableYellowBox = true;
const { height, width } = Dimensions.get('window');

class EbookScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }
  async componentDidMount() {
    try {
      const response = await fetch('http://bhajanai.com/wp-json/api/v1/ebooks');
      const responseJson = await response.json();
      this.setState(
        {
          isLoading: false,
          dataSource: responseJson.data,
        },
        function () { }
      );
      console.log(responseJson.data);
      console.log('responseJson.data');
    } catch (error) {
      console.error(error);
    }
  }
  renderItem = ({ item }) => {
    const { navigation } = this.props;

    console.log(this.state.dataSource);
    console.log(item.url);
    return (
      <View
        style={{
          width: width - 20,
          height: 100,
          backgroundColor: '#f7f7f7',
          borderRadius: 5,
          flexDirection: 'row',
          marginTop: 7,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() =>
            navigation.navigate({
              key: 'Ereader',
              routeName: 'Ereader',
              params: {
                item: item,
              },
            })
          }
        >
          <View
            style={{
              width: width,
              height: 60,
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
            <View style={{ width: width - 190 }}>
              <Text style={styles.titleH2}>{item.title}</Text>
              <Text style={styles.titleH3}>{item.created_at}</Text>
            </View>

            <View
              style={{ width: 38, height: 22, marginLeft: 36, marginTop: 36 }}
            >
              <Image
                style={{ height: 22, width: 22 }}
                source={require('./../../../../assets/icons/nav-icons/right.png')}
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

export default EbookScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 16,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 24,
  },
  titleH3: {
    fontSize: 12,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
  infop1: {
    fontSize: 12,
    lineHeight: 24,
    color: '#3c3c3c',
    marginLeft: 12,
    marginTop: 4,
  },
});
