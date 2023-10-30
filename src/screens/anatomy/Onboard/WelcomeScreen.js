import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
console.disableYellowBox = true;
class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.mainboady}>
        <Image
          style={styles.logo}
          source={require('./../../../../assets/icons/Welcome/bhajanai-icon-256.png')}
        />
        <Text style={styles.titleHeader}>வழிபாட்டுப் பாடல்கள்{'\n'}செயலி</Text>
        <Text style={styles.titleInfo}>
          Here to start listening spritual musical playbacks {'\n'} & get your
          favourite singers through{'\n'} Bhajanai Mobile Application
        </Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Bhajanai')}
        >
          <Text style={styles.btnText}>Get Started Now!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  mainboady: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 18,
  },
  logo: {
    width: 160,
    height: 160,
    marginTop: 20,
    marginBottom: 30,
    resizeMode: 'cover',
  },
  buttonContainer: {
    width: 280,
    backgroundColor: '#93230B',
    padding: 12,
    borderRadius: 18,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleHeader: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 40,
    marginTop: 20,
    color: '#333333',
  },
  titleInfo: {
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 24,
    marginTop: 20,
    color: '#999999',
  },
});
