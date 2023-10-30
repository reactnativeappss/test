const React = require('react-native');
const { Dimensions } = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#93230b',
    flex: 1,
    zIndex: 50,
    borderRadius: 20,
    paddingTop:30
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  trackView: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
    marginTop: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: '#f44336',
    fontSize: 12,
    marginTop: 4,
  },
  slider: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 10,
    color: 'white'
  },
  seekView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  seekBar: {
    width: deviceWidth - 20,
    marginTop: 10,
    color:'white'
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    marginLeft: 50,
  },
  play: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: '#383838',
    borderRadius: 55 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -40,
  },
  timeChildView: {
    alignItems: 'center',
    flex: 0.15,
  },
  timeChildViewText: {
    color: 'white',
    fontSize: 12,
  },
  iconWhite: {
    color: '#ffffff',
  },
  btnSection: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    height: 40,
    alignSelf: 'center',
  },
  btnTransparent: {
    backgroundColor: 'transparent',
    display: 'none',
  },
  width10: {
    width: 10,
  },
  width30: {
    width: 30,
  },
};
