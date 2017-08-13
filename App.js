import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter as Router, Route, Redirect } from 'react-router-native';
import AlbumContainer from './app/AlbumContainer';
import ArtistContainer from './app/ArtistContainer';
import ArtistsListContainer from './app/ArtistsListContainer';
import Main from './app/Main';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text>Logo</Text>
          </View>
          <View style={styles.content}>
            <Route exact path="/" component={Main} />
            <Route path="/search/:search" component={ArtistsListContainer} />
            <Route path="/artist/:id" component={ArtistContainer} />
            <Route path="/album/:id" component={AlbumContainer} />
            <Redirect to="/" />
          </View>
          <View style={styles.footer}>
            <Text>Footer</Text>
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
  header: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    flex: 1,
    justifyContent: 'center'
  }
});
