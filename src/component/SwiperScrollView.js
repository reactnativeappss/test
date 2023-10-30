import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, TouchableWithoutFeedback, View } from 'react-native';

class SwiperScrollView extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  componentDidMount() {
    this._scrollView.scrollResponderHandleStartShouldSetResponder = () => true;
  }

  render() {
    return (
      <ScrollView ref={x => this._scrollView = x} {...this.props}>
        <TouchableWithoutFeedback>
          <View style={{ flex: 1 }}>
            {this.props.children}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    );
  }
}

export default SwiperScrollView;
