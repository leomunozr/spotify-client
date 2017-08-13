import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ItemBox from './common/ItemBox';
import SectionHeader from './common/SectionHeader';

const getArtists = (artists) => {
  if(artists)
    return artists.map(artist => artist.name).join(' & ');
};

const Album = ({ album }) => {
  return (
    <View>
      <View style={styles.header}>
        <SectionHeader
          title={album.name}
          thumbnail={album.images ? album.images[1] : null}
          subtitle={getArtists(album.artists)} />
      </View>
       <FlatList
        data={album.tracks.items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itembox}>
            <ItemBox title={item.name} />
          </View>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150
  }
});

export default Album;
