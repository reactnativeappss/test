/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';

import Tab1 from './ArtistPlay';
import Tab2 from './Godnamelist';

console.disableYellowBox = true;

class Tabscreen extends Component {
  render() {
    return (
      <Container>
        <Tabs
          tabBarUnderlineStyle={{
            backgroundColor: '#0D0D0D',
            height: 1.8,
          }}
          style={{ backgroundColor: '#fff' }}
        >
          <Tab
            tabStyle={{ backgroundColor: '#fff' }}
            activeTabStyle={{ backgroundColor: '#fff' }}
            textStyle={{ color: '#252525' }}
            activeTextStyle={{ color: '#252525' }}
            heading="Artist"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: '#fff' }}
            activeTabStyle={{ backgroundColor: '#fff' }}
            textStyle={{ color: '#252525' }}
            activeTextStyle={{ color: '#252525' }}
            heading="Gods"
          >
            <Tab2 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default Tabscreen;
