
import React, { Component } from "react";
import { Container, Content, Text, Header, Input, Icon, Footer, FooterTab, List, ListItem, Left, Body, Right, Thumbnail } from "native-base";
import styles from "./styles";
import { View, Image, FlatList, TouchableOpacity } from "react-native";
import TouchableNativeFeed from "../../../component/TouchableNativeFeedback";
import MusicPlayerWrapper from "../../musicPlayerWrapper/index";
import Data from "../../../constants/constantData.js";
import searchData from "./data.js";

const player = Data.player;
const footerPlayer = Data.footerPlayer;

const songs = searchData.data;

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: ""
    };
  }

  search = (text) => {
    this.setState({
      searchText: text
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.searchHeader} >
            <Input
              onChangeText={(text) => this.search(text)}
              value={this.state.searchText}
              placeholder="Search"
              returnKeyType="search"
              placeholderTextColor="white"
              style={styles.searchInput} />
          </View>
          {(this.state.searchText && this.state.searchText.length === 0) ?
            <View style={styles.center}>
              <Icon name="search" type="EvilIcons" style={styles.searchIcon} />
              <Text style={styles.serachBgText}>
                Search Audrix
              </Text>
              <Text style={styles.serachFindText}>
                Find your favorite music, videos and podcasts
              </Text>
            </View>
            :
            <View style={styles.center}>
              <FlatList
                data={songs}
                keyExtractor={song => song.name}
                renderItem={(song) =>
                  <ListItem
                    thumbnail
                    noBorder
                    onPress={() => this.props.navigation.navigate(
                      {
                        key: player.key,
                        routeName: player.routeName,
                        params: {
                          tunes: songs,
                          currentTrackIndex: song.index,
                          playlistName: player.params.playlistName
                        }
                      }
                    )}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Left>
                        <Thumbnail square size={55} source={song.item.img} backgroundColor="grey" />
                      </Left>
                      <Body>
                        <Text style={styles.listText}>
                          {song.item.name}
                        </Text>
                        <Text numberOfLines={1} note>
                          {song.item.artists}
                        </Text>
                      </Body>
                      <Right />
                    </View>
                  </ListItem>
                }
              />
            </View>
          }
        </Content>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate(
            {
              key: player.key,
              routeName: player.routeName,
              params: {
                tunes: [{
                  name: player.params.tunes[0].name,
                  artists: player.params.tunes[0].artists,
                  img: player.params.tunes[0].img,
                  url: player.params.tunes[0].url
                }],
                currentTrackIndex: player.params.currentTrackIndex,
                playlistName: player.params.playlistName
              }
            }
          )}
        >
          <Footer style={styles.footer}>
            <MusicPlayerWrapper minimal={true} />
          </Footer>
        </TouchableOpacity>

      </Container>
    );
  }
}
export default Search;
