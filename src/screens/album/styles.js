const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FED6D3',
  },
  containerLoading: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#93230b',
    elevation: 0,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  albumImg: {
    width: deviceHeight / 3.5,
    height: deviceHeight / 3.5,
    top: 20,
  },
  albumName: {
    color: 'black',
    fontWeight: '800',
    textAlign: 'center',
    fontSize: 30,
  },
  albumNameView: {
    marginTop: 30,
  },

  playListTitle: {
    width: Dimensions.get('window').width / 1.5,
    color: 'black',
  },
  playListSubTitle: {
    width: Dimensions.get('window').width / 1.5,
    color: 'black',
  },
  icon: {
    color: 'black',
  },
  shuffle: {
    fontSize: 15,
    letterSpacing: 1.2,
    fontWeight: 'bold',
  },
  shuffleBtn: {
    backgroundColor: '#1DB954',
    height: 50,
  },
  songName: {
    color: 'black',
    fontWeight: '500',
    fontSize: 15,
  },
  songArtist: {
    color: 'grey',
    fontWeight: 'normal',
    fontSize: 13,
  },
  listItemContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    width: deviceWidth,

    paddingRight: 0,
    marginRight: 0,
    backgroundColor: 'grey',
  },
  followBtn: {
    borderColor: 'white',
    backgroundColor: 'black',
  },
  followBtnTitle: {
    color: 'white',
    fontWeight: '200',
  },
  unFollowBtn: {
    borderColor: 'white',
    backgroundColor: 'black',
  },
  unFollowBtnTitle: {
    color: 'white',
    fontWeight: '200',
  },
  footer: {
    backgroundColor: '#222325',
    paddingTop: 1,
  },
  titleH3: {
    fontSize: 16,
    lineHeight: 24,
    color: '#fff',
    marginTop: 11,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    width: 260,
  },
};
