/* eslint-disable react/no-string-refs */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Modal,
  StatusBar,
} from 'react-native';
import { Epub, Streamer } from '@epubjs-react-native/core';
import RNFS from 'react-native-fs';

// import ScrollView from 'react-native-visible-scrollview';
// import RNFS from 'react-native-fs';
import EbookTopBar from './EbookTopBar';
import EbookBottomBar from './EbookBottomBar';
import EbookNav from './EbookNav';

class Ereader extends Component {
  constructor(props) {
    super(props);
    const item = this.props.navigation.getParam('item', {});
    this.state = {
      //url: 'https://s3.amazonaws.com/epubjs/books/moby-dick.epub',
      //filename: 'sivan-songs.epub',
      filename: item.file_name,
      downloadUrl: item.download_url,
      url: '',
      src: '',
      flow: 'paginated', // paginated || scrolled-continuous
      location: 0,
      origin: '',
      title: '',
      toc: [],
      showBars: true,
      showNav: false,
      sliderDisabled: true,
    };
    this.streamer = new Streamer({
      port: '8000',
      keepAlive: true,
      root: 'ebooks',
    });
    // this.epubRef = React.createRef();

    //this.streamer = new Streamer({keepAlive: true });
  }

  async componentDidMount() {
    let root = 'ebooks';
    let filename = this.state.filename;
    this.file = filename;
    let path = RNFS.DocumentDirectoryPath + '/' + root;
    let dest = path + '/' + this.file;
    RNFS.mkdir(path, { NSURLIsExcludedFromBackupKey: true });

    let added = await RNFS.exists(dest);
    // await RNFS.unlink(path+"/sivan-songs");
    if (!added) {
      let download = RNFS.downloadFile({
        fromUrl: this.state.downloadUrl,
        toFile: dest,
      });
      console.log('download');
      added = download.promise;

      added.then(async () => {
        console.log('await RNFS.exists(dest)');
        console.log(await RNFS.exists(dest));
        this.startStreamer();
      });
    } else {
      this.startStreamer();
    }

    /*
    this.streamer
      .start()
      .then((origin) => {
        console.log("Served from:", origin);
        var filePath = RNFS.DocumentDirectoryPath+"/sivansongs.epub";
        console.log(filePath);
       // const src = await this.streamer.get(book.getSource());
        this.streamer.add(filePath).then((t) => console.log(t));
        this.streamer.check(this.state.url).then((t) => console.log(t));
        //return this.streamer.get(this.state.url);
        //this.setState({ origin });
        console.log(origin)
        return this.streamer.get(filePath);

      })
      .then((src) => {
        console.log("Loading from:", src);
        return this.setState({src});
      });

      */
    /*
      .then(origin => {
        this.setState({ origin });
        return this.streamer.get(this.state.url);
      })
      .then(src => {
        return this.setState({ src });
      });*/

    setTimeout(() => this.toggleBars(), 1000);
  }

  startStreamer() {
    this.streamer
      .start()
      .then(origin => {
        this.setState({ origin });
        this.streamer
          .check(this.state.origin + '/' + this.state.filename)
          .then(e => {
            console.log('check');
            console.log(e);
          });
        console.log(this.state.origin + '/' + this.state.filename);
        //return this.streamer.get(this.state.origin+"/sivan-songs.epub");
        return this.streamer.get(this.state.origin + '/' + this.state.filename);
      })
      .then(src => {
        return this.setState({ src });
      });
  }

  componentWillUnmount() {
    this.streamer.kill();
  }

  toggleBars() {
    this.setState({ showBars: !this.state.showBars });
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={!this.state.showBars}
          translucent={true}
          animated={false}
        />
        <Epub
          style={styles.reader}
          ref="epub"
          //ref={this.epubRef}
          //src={"https://s3.amazonaws.com/epubjs/books/moby-dick.epub"}
          src={this.state.src}
          flow={this.state.flow}
          location={this.state.location}
          onLocationChange={visibleLocation => {
            console.log('locationChanged', visibleLocation);
            this.setState({ visibleLocation });
          }}
          onLocationsReady={locations => {
            // console.log("location total", locations.total);
            this.setState({ sliderDisabled: false });
          }}
          onReady={book => {
            // console.log("Metadata", book.package.metadata)
            // console.log("Table of Contents", book.toc)
            this.setState({
              title: book.package.metadata.title,
              toc: book.navigation.toc,
            });
          }}
          onPress={(cfi, position, rendition) => {
            this.toggleBars();
            console.log('press', cfi);
          }}
          onLongPress={(cfi, rendition) => {
            console.log('longpress', cfi);
          }}
          onViewAdded={index => {
            console.log('added', index);
          }}
          beforeViewRemoved={index => {
            console.log('removed', index);
          }}
          onSelected={(cfiRange, rendition) => {
            console.log('selected', cfiRange);
            // Add marker
            rendition.highlight(cfiRange, {});
          }}
          onMarkClicked={(cfiRange, data, rendition) => {
            console.log('mark clicked', cfiRange);
            rendition.unhighlight(cfiRange);
          }}
          // themes={{
          //   tan: {
          //     body: {
          //       "-webkit-user-select": "none",
          //       "user-select": "none",
          //       "background-color": "tan"
          //     }
          //   }
          // }}
          // theme="tan"
          // regenerateLocations={true}
          // generateLocations={true}
          origin={this.state.origin}
          onError={message => {
            console.log('EPUBJS-Webview', message);
          }}
        />
        <View style={[styles.bar, { top: 0 }]}>
          <EbookTopBar
            title={this.state.title}
            shown={this.state.showBars}
            onLeftButtonPressed={() => this._nav.show()}
            onRightButtonPressed={value => {
              if (this.state.flow === 'paginated') {
                this.setState({ flow: 'scrolled-continuous' });
              } else {
                this.setState({ flow: 'paginated' });
              }
            }}
          />
        </View>
        <View style={[styles.bar, { bottom: 0 }]}>
          <EbookBottomBar
            disabled={this.state.sliderDisabled}
            value={
              this.state.visibleLocation
                ? this.state.visibleLocation.start.percentage
                : 0
            }
            shown={this.state.showBars}
            onSlidingComplete={value => {
              this.setState({ location: value.toFixed(6) });
            }}
          />
        </View>
        <View>
          <EbookNav
            ref={nav => (this._nav = nav)}
            display={loc => {
              this.setState({ location: loc });
            }}
            toc={this.state.toc}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reader: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'red',
  },
  bar: {
    position: 'absolute',

    left: 0,
    right: 0,
    height: 70,
  },
});

export default Ereader;
