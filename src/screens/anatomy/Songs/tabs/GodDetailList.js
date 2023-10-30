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
import {
  Container,
  Content,
  List,
  ListItem,
  Body,
  Title,
  Subtitle,
  Icon,
  Header,
  Left,
  Right,
  ActionSheet,
  Toast,
  Footer,
  FooterTab,
} from 'native-base';
import TouchableNativeFeed from '../../../../component/TouchableNativeFeedback';

import { NavigationScreenOptions, NavigationParams } from 'react-navigation';
import { number } from 'prop-types';

console.disableYellowBox = true;

const { height, width } = Dimensions.get('window');

class GodDetailList extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    console.log(itemId);
    console.log('itemId');
    return fetch('http://bhajanai.com/wp-json/api/v1/god/' + itemId)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        console.log('responseJson');
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.data.tracks,
          },
          function() {}
        );
      })
      .catch(error => {
        console.error(error);
      });
  }
  renderItem = ({ item }) => {
    console.log(item);
    return (
      <ListItem noBorder style={{ width: 300, height: 50, flex: 1 }}>
        <TouchableNativeFeed
          activeOpacity={1}
          onPress={() => {
            this.props.navigation.navigate({
              key: player.key,
              routeName: player.routeName,
              params: {
                tunes: item,
                currentTrackIndex: item.index,
              },
            });
          }}
        >
          <Text>{item.title}</Text>
        </TouchableNativeFeed>
      </ListItem>
    );
  };
  // renderItem = ({ item }) => {
  //   const { navigation } = this.props;
  //   return (
  //     <View
  //       style={{
  //         width: width - 20,
  //         height: 100,
  //         backgroundColor: '#f7f7f7',
  //         borderRadius: 5,
  //         flexDirection: 'row',
  //         marginTop: 10,
  //       }}
  //     >
  //       <View
  //         style={{
  //           width: 80,
  //           height: 80,
  //           backgroundColor: '#fff',
  //           borderRadius: 5,
  //           marginLeft: 8,
  //           marginTop: 10,
  //         }}
  //       >
  //         <Image
  //           style={{
  //             flex: 1,
  //             height: null,
  //             width: null,
  //             resizeMode: 'cover',
  //             borderRadius: 5,
  //             borderWidth: 1,
  //             borderColor: '#f9f9f9',
  //           }}
  //           source={{ uri: item.image.original }}
  //         />
  //       </View>
  //       <View style={{ width: width - 180 }}>
  //         <Text style={styles.titleH2}>{item.title}</Text>
  //         <Text style={styles.titleH3}>{item.created_at}</Text>
  //       </View>
  //       <View
  //         style={{
  //           width: 32,
  //           height: 32,
  //           marginLeft: 10,
  //           marginTop: 38,

  //           alignItems: 'center',
  //           justifyContent: 'center',
  //         }}
  //       >
  //         <TouchableOpacity onPress={() => navigation.navigate('Photos')}>
  //           <Image
  //             style={{ height: 22, width: 22 }}
  //             source={require('../../../../../assets/icons/music/play-button.png')}
  //           />
  //         </TouchableOpacity>
  //       </View>
  //     </View>
  //   );
  // };

  render() {
    const songs = this.state.dataSource;
    console.log(songs);
    // if (this.state.isLoading) {
    //   return (
    //     <View style={styles.container}>
    //       <ActivityIndicator color="#455FE9" size="large" />
    //     </View>
    //   );
    // } else {

    // }
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, backgroundColor: 'grey', width: width - 10 }}
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor={(x, i) => i}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}

export default GodDetailList;

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
