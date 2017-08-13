import React from 'react';
import { Image, StyleSheet, TextInput, TouchableHighlight, View } from 'react-native';
import { withRouter } from 'react-router-native';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.sendSearch = this.sendSearch.bind(this);
    this.state = { search: '' };
  }

  sendSearch() {
    let search = this.state.search;
    if (search) {
      this.props.history.push(`/search/${search}`)
    }
  }

  render() {
    return (
      <View style={styles.searchBar}>
        <TouchableHighlight
          onPress={this.sendSearch}
          style={styles.touchArea} >
          <Image
            style={styles.glass}
            source={require('../../images/search.png')} />
        </TouchableHighlight>
        <TextInput
          autoCorrect={false}
          onChangeText={search => this.setState({ search })}
          onSubmitEditing={this.sendSearch}
          placeholder="Type the name of your favorite artist"
          style={styles.input}
          underlineColorAndroid="transparent"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  searchBar: {
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  touchArea: {
    marginRight: 5,
    marginLeft: 5,
    maxHeight: 20,
    maxWidth: 20,
  },
  glass: {
    resizeMode: 'contain',
    maxHeight: 20,
    maxWidth: 20,
  },
  input: {
    flex: 1,
    marginRight: 5
  }
})

export default withRouter(SearchBar);
