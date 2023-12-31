import React, { Component } from 'react';

import {
  Platform,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Animated,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/EvilIcons';

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '400',
    flex: 8,
    color: '#252525',
    ...Platform.select({
      ios: {
        fontFamily: 'Baskerville',
      },
      android: {
        fontFamily: 'serif',
      },
    }),
  },
  header: {
    backgroundColor: '#f7f7f7',
    ...Platform.select({
      ios: {
        paddingTop: 40,
      },
      android: {
        paddingTop: 4,
      },
    }),
    top: 0,
    ...Platform.select({
      ios: {
        height: 84,
      },
      android: {
        height: 50,
      },
    }),
    right: 0,
    left: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#f9f9f9',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 14,
  },
  backButton: {
    width: 28,
    height: 28,
    margin: 20,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  backButtonImage: {
    width: 28,
    height: 28,
  },
});

class EbookTopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(1),
    };

    this.barsShown = true;
  }

  componentDidMount() {
    setTimeout(() => {
      if (this.props.shown) {
        this.show();
      } else {
        this.hide();
      }
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.shown !== this.props.shown) {
      if (this.props.shown) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  show() {
    const timing = Animated.timing;

    timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 20,
    }).start();

    this.barsShown = true;
  }

  hide() {
    const timing = Animated.timing;

    timing(this.state.fadeAnim, {
      toValue: 0,
      duration: 20,
    }).start();

    this.barsShown = false;
  }

  render() {
    return (
      <Animated.View style={[styles.header, { opacity: this.state.fadeAnim }]}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={this.props.onLeftButtonPressed}
        >
          <Icon name="navicon" size={34} />
        </TouchableOpacity>
        <Text style={styles.title}>{this.props.title}</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={this.props.onRightButtonPressed}
        >
          <Icon name="gear" size={34} />
        </TouchableOpacity>
      </Animated.View>
    );
  }
}

export default EbookTopBar;
