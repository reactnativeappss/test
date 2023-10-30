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

console.disableYellowBox = true;

const { height, width } = Dimensions.get('window');

class DataItemList extends Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    const { navigation } = this.props;
    return (
      <ListItem thumbnail>
        <Left>
          <Thumbnail square source={{ uri: this.data.image.original }} />
        </Left>
        <Body>
          <Text>{this.data.title}</Text>
          <Text note numberOfLines={1}>
            {this.data.created_at}
          </Text>
        </Body>
        <Right>
          <Button transparent onPress={() => navigation.navigate('Bhajanai')}>
            <Image
              style={{ height: 22, width: 22 }}
              source={require('../../assets/icons/music/play-button.png')}
            />
          </Button>
        </Right>
      </ListItem>
    );
  }
}

export default DataItemList;
