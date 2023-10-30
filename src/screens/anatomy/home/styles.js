const React = require('react-native');
const { Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default {
  container: {
    backgroundColor: '#FED6D3',
    flex: 1,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: '#f7f7f7',
    opacity: 0.4,
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    color: '#0D0D0D',
    fontWeight: '700',
  },
  listText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cardView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
  },
  card: {
    height: deviceHeight / 4,
    width: deviceWidth / 1.5,
    borderRadius: 6,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardViewFlex: {
    flex: 1,
  },
  cardImg: {
    height: deviceHeight / 4,
    width: deviceWidth / 1.5,
    padding: 0,
    backgroundColor: '#f7f7f7',
    resizeMode: 'cover',
    borderRadius: 6,
  },
  cardName: {
    color: 'white',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  radioCardName: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#121212',
    flexDirection: 'column',
  },
  title: {
    color: '#0D0D0D',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
    letterSpacing: 1,
    width: 200,
    padding: 6,
    overflow: 'hidden',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderBottomWidth: 2,
    borderBottomColor: '#1c1b1b',
    zIndex: 100,
  },
  titleH2: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'left',
    marginVertical: 9,
    marginLeft: 10,
    letterSpacing: 1,
    overflow: 'hidden',
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#0D0D0D',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1.1,
  },
  button:{
     width: 'auto',
     height: 60,
     backgroundColor: '#93230b',
     flexDirection: 'row',
     marginLeft: 40,
     marginRight: 40,
     marginTop:10,
     borderRadius: 10,
  },
  scrollView: {
    alignItems: 'center',
    paddingStart: 5,
    paddingEnd: 5,
  },
  cardItem: {
    backgroundColor: '#f7f7f7',
    width: deviceWidth / 2.3,
  },
  cardSub: {
    color: '#A9A9A9',
    fontSize: 10,
    textAlign: 'center',
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#222325',
    height: 50,
  },
};
