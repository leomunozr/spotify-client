import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const Artist = ({artist, albums}) => (
  <View>
    <View style={styles.title}>
      <Text>{artist.name}</Text>
    </View>

    <FlatList
      data={albums}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Link to={`/album/${item.id}`}><Text>{item.name}</Text></Link>} />

  </View>
);

const styles = StyleSheet.create({
  title: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Artist;
