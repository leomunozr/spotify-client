import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const ArtistsList = (props) => (
  <View style={styles.artistsList}>
    <Text>Artists</Text>
    <Text>You are currently searching: "{props.search}"</Text>
    <Text>Home > Artists</Text>

    <FlatList
      data={props.artists}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Link to={`/artist/${item.id}`}><Text>{item.name}</Text></Link>} />

  </View>
);

const styles = StyleSheet.create({
  artistsList: {},
  list: {}
});

export default ArtistsList;
