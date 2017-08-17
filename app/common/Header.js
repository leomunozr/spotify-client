import React from 'react';
import { Image, StyleSheet,TouchableHighlight, View } from 'react-native';
import { Link } from 'react-router-native';
import SearchBar from './SearchBar';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showSearchbar: false }
    this.toggleSearchbar = this.toggleSearchbar.bind(this);
  }

  toggleSearchbar() {
    this.setState({ showSearchbar: !this.state.showSearchbar });
  }

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Link to="/">
            <Image
              style={styles.item}
              source={require('../../images/home.png')} />
          </Link>
          <TouchableHighlight onPress={this.toggleSearchbar}>
            <Image
              style={styles.item}
                source={require('../../images/search.png')} />
          </TouchableHighlight>
        </View>
        {this.state.showSearchbar &&
          <View style={styles.searchbar}>
            <SearchBar onSearchSubmit={this.toggleSearchbar} />
          </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
    position: 'absolute',
    top: 55,
    width: '100%',
    zIndex: 1
  }
});

export default Header;
