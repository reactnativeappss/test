/**
 * Audrix (https://www.enappd.com/audrix)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import React, { Component } from "react";
import { Container, Text, Card, List, View, Footer, FooterTab, Content } from "native-base";
import styles from "./styles";
import { ImageBackground, FlatList, TouchableOpacity } from "react-native";
import TouchableNativeFeed from "../../../component/TouchableNativeFeedback";
import MusicPlayerWrapper from "../../musicPlayerWrapper/index";
import browserData from "./data.js";
import Data from "../../../constants/constantData.js";


const datas = browserData.data;
const player = Data.player;

class Browse extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <FlatList
            listBorderColor="black"
            style={styles.listView}
            data={datas}
            keyExtractor={data => data.name}
            removeClippedSubviews={false}
            renderItem={data =>
              <TouchableNativeFeed
                onPress={() => this.props.navigation.navigate(
                  {
                    key: "Album",
                    routeName: "Album",
                    params: {
                      playlistImg: data.item.img,
                      playlistName: data.item.name,
                    }
                  }
                )}
                delayPressIn={0} useForeground>
                <Card noShadow={true} pageSize={2} style={styles.card} >
                  <ImageBackground source={data.item.img} style={styles.browseBg} imageStyle={{ resizeMode: "cover" }}>
                    <View style={styles.overlay} />
                    <View style={styles.browseCard}>
                      <Text style={styles.browseText}>
                        {data.item.name}
                      </Text>
                    </View>
                  </ImageBackground>
                </Card>
              </TouchableNativeFeed>
            }
          />
        </Content>

        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate(
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
            )
          }
          }
        >
          <Footer style={styles.footer}>
            <MusicPlayerWrapper minimal={true}/>
          </Footer>
        </TouchableOpacity>

      </Container>
    );
  }
}

export default Browse;
