import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Link, withRouter } from 'react-router-native';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }
  render() {
    return (
      <View style={styles.content}>
        <Text>Welcome to</Text>
        <Text>Spotisearch</Text>
        <Text>Search your favorite songs over Spotify. Just enter an artist's name in the following searchbox and enjoy!</Text>
        <TextInput
          placeholder='Type the name of your favorite artist'
          onChangeText={search => this.setState({ search })}
          onSubmitEditing={(search) => {
             this.props.history.push(`/search/${this.state.search}`)
          }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 8,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default withRouter(Main);
