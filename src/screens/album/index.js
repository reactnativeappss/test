/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Container,
  Content,
  View,
  Button,
  Text,
  ListItem,
  Body,
  Title,
  Icon,
  Header,
  Left,
  Right,
  Footer,
} from 'native-base';
import {
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  Alert,
} from 'react-native';
import TouchableNativeFeed from '../../component/TouchableNativeFeedback';
import styles from './styles';
import MusicPlayerWrapper from '../musicPlayerWrapper/index';

const { width } = Dimensions.get('window');

class Album extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = { isLoading: true, dataSource: [] };
  }

  componentDidMount() {
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    const artistID = this.props.navigation.getParam(
      'otherParam',
      'default value'
    );
    // console.log(itemId);
    // console.log('itemId');
    console.log(
      'http://bhajanai.com/wp-json/api/v1/artist/' + artistID + '/' + itemId
    );
    return fetch(
      'http://bhajanai.com/wp-json/api/v1/artist/' + artistID + '/' + itemId
    )
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
      <View style={styles.containerLoading}>
        <Text style={{ textAlign: 'center' }}>No Data Found</Text>
      </View>
    );
  };

  renderItem = ({ item, index }) => {
    // console.log('--- item ---');
    // console.log(item);

    return (
      <ListItem
        noBorder
        style={{
          width: width - 20,
          height: 60,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          margin: 4,
        }}
      >
        <TouchableNativeFeed
          onPress={() => {
            this.props.navigation.navigate({
              key: 'Player',
              routeName: 'Player',
              params: {
                dataSource: this.state.dataSource,
                currentTrackIndex: index,
              },
            });
          }}
        >
          <View
            style={{
              width: 'auto',
              height: 50,
              flex: 1,
              flexDirection: 'row',
              borderRadius: 10,
              padding:5,
              backgroundColor: '#93230b',
            }}
          >
            <View style={{ width: 260, marginLeft: 10 }}>
              <Text style={styles.titleH3}>{item.title}</Text>
            </View>
            <View
              style={{
                width: 24,
                height: 24,
                marginLeft: 60,  
                marginTop: 8,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require('../../../assets/icons/music/play-button.png')}
              />
            </View>
          </View>
        </TouchableNativeFeed>
      </ListItem>
    );
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.containerLoading}>
          <ActivityIndicator color="#455FE9" size="large" />
        </View>
      );
    } else {
      return (
        <Container style={styles.container}>
          <Header
            style={styles.header}
            androidStatusBarColor="#222325"
            iosBarStyle="light-content"
          >
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
              <Image
            source={require('./../../../assets/icons/nav-icons/left-arrow.png')}
            style={{ height: 24, width: 24, marginLeft: 18 }}
            />
              </Button>
            </Left>
            <Body>
              <Title style={styles.playListTitle}>
                {this.props.navigation.state.params.playlistName}
              </Title>
            </Body>
            <Right></Right>
          </Header>

          <Content>
            <View>
              <FlatList
                data={this.state.dataSource}
                keyExtractor={(x, i) => i}
                removeClippedSubviews={false}
                renderItem={this.renderItem}
                ListEmptyComponent={this.ListEmpty}
              />
            </View>
          </Content>
        </Container>
      );
    }
  }
}

export default Album;
