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

console.disableYellowBox = true;

const { height, width } = Dimensions.get('window');

class GodArtistList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    return fetch('http://bhajanai.com/wp-json/api/v1/god-artists/' + itemId)
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data.artists,
            godId: responseJson.data.id,
          },
          function() {}
        );
        console.log('responseJson.data => ');
        console.log(responseJson.data.id);
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
  ListEmpty = () => {
    return (
      //View to show when list is empty
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
      </View>
    );
  };

  renderItem = ({ item }) => {
    const { navigation } = this.props;
    console.log(item.id);
    console.log('item.id');
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
            navigation.navigate('GodAlbum', {
              itemId: item.id,
              otherParam: this.state.godId,
            })
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
                style={{ height: 32, width: 32 }}
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
            // ListEmptyComponent={this.ListEmpty}
            //Message to show for the Empty list
          />
        </View>
      );
    }
  }
}

export default GodArtistList;

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
