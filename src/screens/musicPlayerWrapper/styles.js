const React = require('react-native');
const { Dimensions } = React;
const deviceWidth = Dimensions.get('window').width;

export default {
  footerItem: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#ececec',
  },
  footerImg: {
    flex: 0.2,
    height: 50,
    width: 50,
  },
  footerTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
  footerSubTitle: {
    color: 'grey',
    fontWeight: '200',
  },
  viewFlex: {
    flex: 0.5,
  },
  footerMusicView: {
    flex: 0.2,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
  },
};
