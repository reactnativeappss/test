/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import {
  View,
  Text,
  Slider,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { Button, Icon } from 'native-base';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import styles from './styles';

console.disableYellowBox = true;

class MusicPlayer extends Component {
  static propTypes = {
    source: PropTypes.any,
    tunes: PropTypes.any,
    playlistName: PropTypes.any,
    currentTrackIndex: PropTypes.number,
    swipeRight: PropTypes.func,
    swipeLeft: PropTypes.func,
    minimal: PropTypes.bool,
  };


  constructor(props) {
    super(props);
    this.state = {
      tunes: this.props.tunes,
      currentTrackIndex: this.props.currentTrackIndex,
      rate: 1,
      duration: 1,
      currentTime: 0,
      paused: true,
      loading: true,
    };
  }

  onLoad = data => {
    this.setState({
      duration: Math.floor(data.duration),
      loading: false,
      paused: false,
    });
  };

  onProgress = data => {
    this.setState({ currentTime: Math.floor(data.currentTime) });
  };

  onEnd = () => {
    this.setState({ paused: true });
  };

  changeValue = value => {
    value = Math.round(value);
    this.player.seek(this.state.currentTime);
    this.setState({ currentTime: value });
  };

  seek(time) {
    time = Math.round(time);
    this.player && this.player.seek(time);
    this.setState({
      currentTime: time,
      paused: false,
    });
  }

  onSlidingComplete = value => {
    value = Math.round(value);
    this.player.seek(this.state.currentTime);
    this.setState({ currentTime: value });
  };

  back = () => {
    if (this.state.currentTrackIndex > 0) {
      if (this.state.currentTime < 10) {
        this.player && this.player.seek(0);
        this.props.swipeRight();
        this.setState({
          currentTime: 0,
          paused: false,
          duration: 1,
          currentTrackIndex: this.state.currentTrackIndex - 1,
          loading: true,
        });
      } else {
        this.player.seek(0);
        this.setState({
          currentTime: 0,
        });
      }
      this.forceUpdate();
    } else if (this.state.currentTrackIndex === 0) {
      if (this.state.currentTime < 10) {
        this.player && this.player.seek(0);
        this.props.swipeRight();
        this.setState({
          currentTime: 0,
          paused: false,
          duration: 1,
          currentTrackIndex: this.state.tunes.length - 1,
          loading: true,
        });
      } else {
        this.player.seek(0);
        this.setState({
          currentTime: 0,
        });
      }
      this.forceUpdate();
    }
  };

  forward = () => {
    if (this.state.currentTrackIndex < this.state.tunes.length - 1) {
      this.props.swipeLeft();
      this.setState({
        currentTime: 0,
        paused: false,
        duration: 1,
        currentTrackIndex: this.state.currentTrackIndex + 1,
        loading: true,
      });
    } else if (this.state.currentTrackIndex === this.state.tunes.length - 1) {
      this.props.swipeLeft();
      this.setState({
        currentTime: 0,
        paused: false,
        duration: 1,
        currentTrackIndex: 0,
        loading: true,
      });
    }

    this.player.seek(1);
    this.forceUpdate();
  };

  minutesAndSeconds = time => {
    return (time - (time %= 60)) / 60 + (9 < time ? ':' : ':0') + time;
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.props.minimal ? (
          <View>
            <Video
              ref={ref => {
                this.player = ref;
              }}
              source={{
                uri: this.state.tunes[this.state.currentTrackIndex].url,
              }}
              paused={this.state.paused}
              playInBackground={false}
              playWhenInactive={true}
              onLoad={this.onLoad.bind(this)}
              onProgress={this.onProgress.bind(this)}
              onEnd={this.onEnd}
              controls={false}
            />
            <View style={styles.time}>
              <View style={styles.timeChildView}>
                <Text style={styles.timeChildViewText}>
                  {this.minutesAndSeconds(this.state.currentTime)}
                </Text>
              </View>
              <View style={{ flex: 0.7 }} />
              <View style={styles.timeChildView}>
                <Text style={styles.timeChildViewText}>
                  {this.minutesAndSeconds(this.state.duration)}
                </Text>
              </View>
            </View>

            <View style={styles.slider}>
              <Slider
                thumbTintColor="#ffffff"
                maximumTrackTintColor="#ffffff"
                minimumTrackTintColor="#ffffff"
                style={styles.seekBar}
                step={1}
                minimumValue={0}
                maximumValue={this.state.duration}
                value={this.state.currentTime}
                onValueChange={this.changeValue}
                onSlidingComplete={this.onSlidingComplete}
              />
            </View>

            <View style={styles.controls}>
              <Button disabled transparent style={styles.btnTransparent}>
                <Icon name="md-shuffle" />
              </Button>

              <View style={styles.width30} />

              {this.state.loading ? (
                <ActivityIndicator size="large" color="#383838" />
              ) : (
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                  }}
                >
                  <TouchableOpacity
                    onPress={this.back}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                    }}
                  >
                    <Icon name="md-skip-backward" style={styles.iconWhite} />
                  </TouchableOpacity>

                  <View style={styles.width10} />

                  <View>
                    {!this.state.paused ? (
                      <Button
                        transparent
                        style={styles.btnSection}
                        color="#383838"
                        onPress={() =>
                          this.setState({ paused: !this.state.paused })
                        }
                      >
                        <Icon name="md-pause" style={styles.iconWhite} />
                      </Button>
                    ) : (
                      <Button
                        transparent
                        style={styles.btnSection}
                        color="white"
                        onPress={() =>
                          this.setState({ paused: !this.state.paused })
                        }
                      >
                        <Icon name="md-play" style={styles.iconWhite} />
                      </Button>
                    )}
                  </View>

                  <View style={styles.width10} />

                  <TouchableOpacity
                    onPress={this.forward}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 50,
                    }}
                  >
                    <Icon name="md-skip-forward" style={styles.iconWhite} />
                  </TouchableOpacity>
                </View>
              )}

              <View style={{ width: 30 }} />

              <Button disabled transparent style={styles.btnTransparent}>
                <Icon name="md-repeat" />
              </Button>
            </View>
          </View>
        ) : (
          <View>
            <Video
              ref={ref => {
                this.player = ref;
              }}
              source={{
                uri: this.state.tunes[this.state.currentTrackIndex].url,
              }}
              paused={this.state.paused}
              playInBackground={true}
              playWhenInactive={true}
              onLoad={this.onLoad.bind(this)}
              onProgress={this.onProgress.bind(this)}
              onEnd={this.onEnd}
              controls={false}
            />
            {this.state.loading ? (
              <ActivityIndicator size="large" color="#3f51b5" />
            ) : (
              <View style={{ height: 40 }}>
                {!this.state.paused ? (
                  <Button
                    transparent
                    large
                    style={styles.btnSection}
                    color="#383838"
                    onPress={() =>
                      this.setState({ paused: !this.state.paused })
                    }
                  >
                    <Icon name="md-pause" style={styles.iconWhite} />
                  </Button>
                ) : (
                  <Button
                    transparent
                    large
                    style={styles.btnSection}
                    color="#383838"
                    onPress={() =>
                      this.setState({ paused: !this.state.paused })
                    }
                  >
                    <Icon name="md-play" style={styles.iconWhite} />
                  </Button>
                )}
              </View>
            )}
          </View>
        )}
      </View>
    );
  }
}

export default MusicPlayer;
