
const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
  container: {
    backgroundColor: "#121212",
    flex: 1
  },
  center: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between"
  },
  browseCard: {
    height: deviceHeight / 6,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: null,
    borderColor: "black",
  },
  overlay: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: "#1DB954",
    opacity: 0.4
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    color: "white",
    fontWeight: "700",
  },
  browseText: {
    textAlign: "center",
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1.1,
    textShadowColor: "black",
    textShadowRadius: 3,
    textShadowOffset: {
      width: 1,
      height: 1
    }
  },
  browseBg: {
    width: null,
    height: deviceHeight / 6,
    borderColor: "black",
    opacity: 50
  },
  listText: {
    color: "white",
    fontWeight: "bold"
  },
  cardView: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  card: {
    height: deviceHeight / 3.7,
    width: deviceWidth / 2.3,
    backgroundColor: "black",
    borderColor: "black",
  },
  cardViewFlex: {
    flex: 0.5
  },
  cardImg: {
    height: deviceHeight / 5,
    width: deviceWidth / 2.3,
    padding: 0,
    backgroundColor: "grey"
  },
  cardDesc: {
    backgroundColor: "black",
  },
  desc: {
    color: "white",
    fontSize: 12
  },
  cardName: {
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 18
  },
  radioScrollView: {
    alignItems: "center",
    paddingStart: 5,
    paddingEnd: 5,
    backgroundColor: "black"
  },
  radioCardName: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 5,
    backgroundColor: "#121212",
    flexDirection: "column"
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 15,
    letterSpacing: 1.3
  },
  subtitle: {
    color: "#A9A9A9",
    fontWeight: "bold",
    fontSize: 12,
    textAlign: "center",
    letterSpacing: 1.1
  },
  scrollView: {
    alignItems: "center",
    paddingStart: 5,
    paddingEnd: 5,
  },
  cardItem: {
    backgroundColor: "#121212",
    width: deviceWidth / 2.3
  },
  cardSub: {
    color: "#A9A9A9",
    fontSize: 10,
    textAlign: "center",
    fontWeight: "500"
  },
  searchIcon: {
    color: "white",
    fontSize: deviceHeight / 5,
    marginTop: deviceHeight / 4,
    marginBottom: deviceHeight / 20
  },
  serachBgText: {
    color: "white",
    paddingBottom: 10
  },
  serachFindText: {
    color: "white",
    width: deviceWidth / 1.5,
    textAlign: "center",
    fontSize: 12
  },
  footer: {
    backgroundColor: "#222325",
    height: 50
  }
};
