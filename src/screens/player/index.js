/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  Container,
  Content,
  Button,
  Icon,
  Header,
  Left,
  Body,
  Right,
  Title,
} from 'native-base';
import {
  Image,
  View,
  Text,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import MusicPlayer from '../musicPlayer/index';
import styles from './styles';
import ModalList from '../../component/ModalList';
import SwiperScrollView from '../../component/SwiperScrollView';

import { NavigationFocusInjectedProps, withNavigation } from 'react-navigation';

console.disableYellowBox = true;

let times = 0;

class Player extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    const { params } = this.props.navigation.state;

    let newArr = [];
    for (
      var i = parseInt(params.currentTrackIndex, 10);
      i < params.dataSource.length;
      i++
    ) {
      newArr.push(params.dataSource[i]);
    }
    for (var i = 0; i < parseInt(params.currentTrackIndex, 10); i++) {
      newArr.push(params.dataSource[i]);
    }

    this.state = {
      tunes: params.dataSource,
      currentTrackIndex: params.currentTrackIndex,
      queueModal: false,
    };

    this.upCurrentTrackIndex = this.upCurrentTrackIndex.bind(this);
  }

  upCurrentTrackIndex = () => {
    let currentTrackIndex = this.state.currentTrackIndex + 1;
    if (this.state.currentTrackIndex === this.state.tunes.length - 1) {
      currentTrackIndex = 0;
    }

    this.setState({
      currentTrackIndex: currentTrackIndex,
    });
    this.forceUpdate();
  };

  downCurrentTrackIndex = () => {
    let currentTrackIndex = this.state.currentTrackIndex - 1;
    if (this.state.currentTrackIndex === 0) {
      currentTrackIndex = this.state.tunes.length - 1;
    }

    this.setState({
      currentTrackIndex: currentTrackIndex,
    });
    this.forceUpdate();
  };

  leftSwipe = () => {
    this._swiper.decrementCardIndex();
    this.forceUpdate();
  };

  rightSwipe = () => {
    this._swiper.incrementCardIndex();
    this.forceUpdate();
  };

  setQueueModal = () => {
    this.setState({
      queueModal: true,
    });
  };
  closeQueueModal = () => {
    this.setState({
      queueModal: !this.state.queueModal,
    });
  };

  render() {
    times += 1;
    return (
      <Container style={styles.container} nestedScrollEnabled>
        <Header
          style={styles.header}
          androidStatusBarColor="#222325"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Image
            source={require('./../../../assets/icons/nav-icons/left-arrow.png')}
            style={{ height: 24, width: 24, marginLeft: 18 }}
            />
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}></Title>
          </Body>
          <Right />
        </Header>

        <Content nestedScrollEnabled>
          <View>
            <View style={styles.bottomMargin}>
              <Swiper
                verticalSwipe={false}
                horizontalSwipe={false}
                cards={this.state.tunes}
                ref={swiper => {
                  this._swiper = swiper;
                }}
                cardIndex={this.state.currentTrackIndex}
                backgroundColor={'#FED6D3'}
                showSecondCard={false}
                goBackToPreviousCardOnSwipeLeft={true}
                infinite={true}
                cardVerticalMargin={20}
                marginBottom={40}
                cardStyle={styles.swiperStyle}
                //    onSwipedLeft={this.upCurrentTrackIndex}
                //   onSwipedRight={this.downCurrentTrackIndex}
                renderCard={tune => {
                  return (

                    <View style={styles.center}>
                      <View style= { styles.songTitleWrapper}>
                      <View style= {{ width: 50 }}>
                      <Image
                        style={styles.albumArt}
                        source={{ uri: tune.cover_full }}
                        backgroundColor="#f7f7f7"
                      />
                      </View>
                        <View style={styles.detailsWrapper}>
                          <Text style={styles.title}>{tune.title}</Text>
                          <Text style={styles.artist}>{tune.artists}</Text>
                        </View>
                      </View>
                      <View
                        style={styles.lyricsWrapper}
                      >
                        <SwiperScrollView>
                            <View style={{ flex: 1, paddingBottom: 10 }}>
                              <Text style={styles.artist}>{tune.lyrics}</Text>
                            </View>
                        </SwiperScrollView>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
            <MusicPlayer
              source={this.state.tunes[0].url}
              tunes={this.state.tunes}
              currentTrackIndex={this.state.currentTrackIndex}
              swipeLeft={this.rightSwipe}
              swipeRight={this.leftSwipe}
              playInBackground={false}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default Player;
