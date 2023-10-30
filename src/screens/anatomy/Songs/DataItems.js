import React, { Component } from 'react';
import { View, Text } from 'react-native';

class DataItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    let songsList = this.props.data.map(function(songsData, index) {
        return (
            <View>
              <Text> {songsData.title} </Text>
            </View>
          );
    })

    return (

    )
    
  }
}

export default DataItems;
