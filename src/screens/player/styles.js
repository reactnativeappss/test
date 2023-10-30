const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FED6D3',
    flex: 1,
  },
  header: {
    backgroundColor: '#93230b',
  },
  headerTitle: {
    width: deviceWidth / 1.5,
    color: 'white',
    fontSize: 14,
  },
  colorWhite: {
    color: 'black',
  },
  swiperStyle: {
    height: deviceHeight / 1.45,
    elevation: 200,
  },
  albumArt: {
    width: 50,
    height: 50,
    backgroundColor: '#f7f7f7',
    borderRadius: 12,
  },
  center: {
    flex: 1,
    alignItems: 'center',
  },
  songTitleWrapper: {
      width: 'auto', 
      flexDirection: 'row',
  },
  trackView: {
    paddingTop: 24,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: deviceWidth - 70,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    lineHeight:18,
    textAlign: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  artist: {
    color: 'black',
    fontSize: 16,
    lineHeight:18,
    marginTop: 4,
    paddingBottom: 20,
  },
  seekView: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  seekBar: {
    width: deviceWidth - 20,
    marginTop: 5,
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginRight: 50,
    marginLeft: 50,
  },
  play: {
    height: 55,
    width: 55,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 55 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  time: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -20,
    marginTop: deviceHeight / 1.7,
  },
  bottomMargin: {
    height: deviceHeight - 175,
  },
  lyricsWrapper:{
    width: 340,
    height: deviceHeight,
    backgroundColor: 'white',
    flex: 1,
    padding: 10,
    marginTop: 0,
    borderRadius: 10,
  }
};
