/* eslint-disable react-native/no-inline-styles */
import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
// create a component
class ImageCarousel extends Component {
  scrollRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }
  componentDidMount = () => {
    setInterval(() => {
      this.setState(
        prev => ({
          selectedIndex:
            prev.selectedIndex === this.props.images.length - 1
              ? 0
              : prev.selectedIndex + 1,
        }),
        () => {
          this.scrollRef.current.scrollTo({
            animated: true,
            y: 0,
            x: DEVICE_WIDTH * this.state.selectedIndex,
          });
        }
      );
    }, 3000);
  };

  setSelectedIndex = event => {
    // width of the viewsize
    const viewSize = event.nativeEvent.layoutMeasurement.width; // get ccurrent position of scroll view
    const contentOffset = event.nativeEvent.contentOffset.x;
    const selectedIndex = Math.floor(contentOffset / viewSize);
    this.setState({ selectedIndex });
  };

  render() {
    const { images } = this.props;
    const { selectedIndex } = this.state;
    return (
      <View style={{ height: 240, width: 380 }}>
        <ScrollView
          horizontal
          pagingEnabled
          onMomentumScrollEnd={this.setSelectedIndex}
          showsHorizontalScrollIndicator={false}
          ref={this.scrollRef}
        >
          {images.map(image => (
            <Image key={image} source={{ uri: image }} style={styles.bgImg} />
          ))}
        </ScrollView>

        <View style={styles.dots}>
          {images.map((image, i) => (
            <View
              key={image}
              style={[
                styles.WhitesDot,
                { opacity: i === selectedIndex ? 0.5 : 1 },
              ]}
            />
          ))}
        </View>
      </View>
    );
  }
}

//make this component available to the app
export default ImageCarousel;

const styles = StyleSheet.create({
  bgImg: {
    height: '100%',
    width: 380,
    flex: 1,
    resizeMode: 'cover',
    borderRadius: 8,
    borderWidth: 1,
  },
  dots: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    height: 10,
    display: 'flex',
    flexDirection: 'row',

    width: '100%',
  },
  WhitesDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#3f51b5',
  },
});
