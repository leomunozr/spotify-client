import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Album = ({ album }) => {
  return (
    <View>
      <View style={styles.title}>
        <Text>{album.name}</Text>
      </View>
       <FlatList
        data={album.tracks.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    alignItems: 'center'
  }
});

export default Album;
