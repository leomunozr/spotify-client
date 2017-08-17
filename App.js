import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter as Router, Route, Redirect } from 'react-router-native';
import AlbumContainer from './app/AlbumContainer';
import ArtistContainer from './app/ArtistContainer';
import ArtistsListContainer from './app/ArtistsListContainer';
import Footer from './app/common/Footer';
import Header from './app/common/Header';
import Main from './app/Main';

import ArtistList from './app/ArtistsList';

class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <Route exact path="/" component={Main} />
            <Route path="/search/:search" component={ArtistsListContainer} />
            <Route path="/artist/:id" component={ArtistContainer} />
            <Route path="/album/:id" component={AlbumContainer} />
            <Redirect to="/" />
          </View>
        </View>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    alignSelf: 'stretch',
    flex: 4
  }
});

export default App;
