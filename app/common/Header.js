import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import SearchBar from './SearchBar';

const Header = (props) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Link to="/">
        <Image
          style={styles.item}
          source={require('../../images/home.png')} />
      </Link>
      <Image
        style={styles.item}
        source={require('../../images/search.png')} />
    </View>
    <View style={styles.searchbar}>
      <SearchBar />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    borderColor: 'red',
    borderWidth: 1,
    flex: 1
  },
  header: {
    backgroundColor: 'cornflowerblue',
    height: 55,
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
    paddingTop: 5,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  item: {
    height: 30,
    width: 30,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: 'contain'
  },
  searchbar: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    display: 'none',
    paddingTop: 15,
    paddingBottom: 15,
    position: 'absolute',
    top: 55,
    width: '100%'
  }
});

export default Header;
