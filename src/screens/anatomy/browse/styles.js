/**
 * Audrix (https://www.enappd.com/audrix)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

const React = require("react-native");
const { Dimensions } = React;
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;


export default {
  container: {
    backgroundColor: "#121212",
    flex: 1
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
  listView:{
     padding: 0,
     margin: 0
  },
  card: {
    padding: 0,
    margin: 0,
    borderColor: "black",
    backgroundColor: "grey"
  },
  footer: {
    backgroundColor: "#222325",
    height: 50
  }
};
