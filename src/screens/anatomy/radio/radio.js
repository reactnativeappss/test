
import React, { Component } from "react";
import { Container, Text, Card, Body, Content, List, Footer, FooterTab, Button, Icon } from "native-base";
import { View, ScrollView, Image, TouchableNativeFeedback, FlatList } from "react-native";
import TouchableNativeFeed from "../../../component/TouchableNativeFeedback";
import MusicPlayerWrapper from "../../musicPlayerWrapper/index";
import styles from "./styles";
import Data from "../../../constants/constantData.js";
import radioData from "./data.js";
import { TouchableOpacity } from "react-native-gesture-handler";

const datas = radioData.data;
const player = Data.player;
const footerPlayer = Data.footerPlayer;

function copy(o) {
  var output, v, key;
  output = Array.isArray(o) ? [] : {};
  for (key in o) {
    v = o[key];
    output[key] = (typeof v === "object") ? copy(v) : v;
  }
  return output;
}

const shuffle = (array) => {
  let currentIndex = array.length, temp, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
  let arr = copy(array);
  return arr;
};




class Radio extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <View>
            <View>
              <Text style={styles.title}>Recently Played</Text>
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <FlatList horizontal={true}
                  data={shuffle(datas)}
                  keyExtractor={data => data.name}
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
                      background={TouchableNativeFeedback.Ripple("white")} delayPressIn={0} useForeground >
                      <Card style={styles.card}>
                        <Image source={data.item.img} style={styles.cardImg} />
                        <Body style={styles.cardItem}>
                          <View style={styles.radioCardName}>
                            <View style={styles.cardViewFlex}>
                              <Text style={styles.text}>
                                {data.item.name}
                              </Text>
                            </View>
                            <View style={{ flex: 0.5 }}>
                              <Text uppercase style={styles.cardSub}>
                                {data.item.followers}
                              </Text>
                            </View>
                          </View>
                        </Body>
                      </Card>
                    </TouchableNativeFeed>
                  }
                />
              </ScrollView>
            </View>

            <View>
              <Text style={styles.title}>Recommended Stations</Text>
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <FlatList horizontal={true}
                  data={shuffle(datas)}
                  keyExtractor={data => data.name}
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
                      background={TouchableNativeFeedback.Ripple("white")} delayPressIn={0} useForeground >
                      <Card style={styles.card}>
                        <Image source={data.item.img} style={styles.cardImg} />
                        <Body style={styles.cardItem}>
                          <View style={styles.radioCardName}>
                            <View style={styles.cardViewFlex}>
                              <Text style={styles.text}>
                                {data.item.name}
                              </Text>
                            </View>
                            <View style={styles.cardViewFlex}>
                              <Text uppercase style={styles.cardSub}>
                                {data.item.followers}
                              </Text>
                            </View>
                          </View>
                        </Body>
                      </Card>
                    </TouchableNativeFeed>
                  }
                />
              </ScrollView>
            </View>
            <View>
              <Text style={styles.title}>Genre Stations</Text>
            </View>
            <View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
                <FlatList horizontal={true}
                  data={shuffle(datas)}
                  keyExtractor={data => data.name}
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
                      background={TouchableNativeFeedback.Ripple("white")} delayPressIn={0} useForeground >
                      <Card style={styles.card}>
                        <Image source={data.item.img} style={styles.cardImg} />
                        <Body style={styles.cardItem}>
                          <View style={styles.radioCardName}>
                            <View style={styles.cardViewFlex}>
                              <Text style={styles.text}>
                                {data.item.name}
                              </Text>
                            </View>
                            <View style={styles.cardViewFlex}>
                              <Text uppercase style={styles.cardSub}>
                                {data.item.followers}
                              </Text>
                            </View>
                          </View>
                        </Body>
                      </Card>
                    </TouchableNativeFeed>
                  }
                />
              </ScrollView>
            </View>
          </View>
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

export default Radio;
