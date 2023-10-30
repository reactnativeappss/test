import React, { Component } from 'react';
import {
  StyleSheet,
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
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
} from 'native-base';

import { getPlayList } from '../../../../service/PlayList';
import DataItemList from '../../../../service/DataItemList';

class ArtistPlay extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, data: null };
  }

  componentDidMount() {
    getPlayList().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
      },
      error => {
        Alert.alert('Error', 'Something went wrong!');
      }
    );
  }
  render() {
    // console.log(this.state.data);
    let view = this.state.isLoading ? (
      <View>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{ marginTop: 10, color: 'red' }}> Please Wait.. </Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={item => {
          return <DataItemList data={item} />;
        }}
      />
    );
    return (
      <Container>
        <Content>{view}</Content>
      </Container>
    );
  }
}

export default ArtistPlay;
