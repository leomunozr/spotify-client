import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from './common/SearchBar';

const Main = (props) => {
  return (
    <View style={styles.content}>
      <View style={styles.greeting}>
        <Text>Welcome to</Text>
        <Text style={styles.emphasys}>Spotisearch</Text>
        <Text>Search your favorite songs over Spotify. Just enter an artist's name in the following searchbox and enjoy!</Text>
      </View>
      <View style={styles.searchbar}>
        <SearchBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 8,
    paddingLeft: '5%',
    paddingRight: '5%'
  },
  greeting: {
    justifyContent: 'space-around',
    flex: 2
  },
  emphasys: {
    fontSize: 30
  },
  searchbar: {
    flex: 4
  }
});

export default Main;
