import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Button, Icon} from 'native-base';
import Video from 'react-native-video';
import PropTypes from 'prop-types';
import styles from './styles';
import MusicPlayer from '../musicPlayer/index';

console.disableYellowBox = true;


class MusicPlayerWrapper extends Component {
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
      paused: true,
    });
  };

  onProgress = data => {
    this.setState({currentTime: Math.floor(data.currentTime)});
  };

  onEnd = () => {
    this.setState({paused: true});
  };

  changeValue = value => {
    value = Math.round(value);
    this.player.seek(this.state.currentTime);
    this.setState({currentTime: value});
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
    this.setState({currentTime: value});
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

    this.player.seek(0);
    this.forceUpdate();
  };

  minutesAndSeconds = time => {
    return (time - (time %= 60)) / 60 + (9 < time ? ':' : ':0') + time;
  };

  render() {
    return (
      <View style={styles.footerItem}>
        <Image style={styles.footerImg} source={footerPlayer.img} />
        <View style={styles.viewFlex}>
          <View>
            <Text
              style={styles.footerTitle}
              lineBreakMode="tail"
              ellipsizeMode="tail"
              numberOfLines={1}>
              {footerPlayer.songTitle}
            </Text>
          </View>
          <View>
            <Text
              style={styles.footerSubTitle}
              lineBreakMode="tail"
              ellipsizeMode="tail"
              numberOfLines={1}>
              {footerPlayer.artist}
            </Text>
          </View>
        </View>
        <View style={styles.footerMusicView}>
          <MusicPlayer minimal={true} />
        </View>
      </View>
    );
  }
}

export default MusicPlayerWrapper;
