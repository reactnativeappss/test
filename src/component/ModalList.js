import React from 'react';
import {
  Left,
  Body,
  Right,
  List,
  ListItem,
  Text,
  Thumbnail,
} from 'native-base';
import { View, Dimensions, FlatList } from 'react-native';
import styles from './styles';
import Data from '../constants/constantData.js';

const songs = Data.songs;

export default () => (
  <View
    style={{
      backgroundColor: 'black',
      flex: 1,
      height: Dimensions.get('window').height,
    }}
  >
    <FlatList
      data={songs}
      keyExtractor={song => song.name}
      removeClippedSubviews={false}
      renderItem={song => (
        <ListItem thumbnail noBorder>
          <Left>
            <Thumbnail square size={55} source={song.item.img} />
          </Left>
          <Body>
            <Text style={styles.listText}>{song.item.name}</Text>
            <Text uppercase numberOfLines={1} note>
              {song.item.artists}
            </Text>
          </Body>
          <Right></Right>
        </ListItem>
      )}
    />
  </View>
);
