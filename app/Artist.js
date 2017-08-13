import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import ItemBox from './common/ItemBox';
import SectionHeader from './common/SectionHeader';

const Artist = ({ artist, albums }) => {
  return (
    <View>
      <View style={styles.header}>
        <SectionHeader
          title={artist.name}
          thumbnail={artist.images ? artist.images[1] : null}
          subtitle={artist.genres.length ? artist.genres[0] : null} />
      </View>

      <FlatList
        data={albums}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link to={`/album/${item.id}`}>
            <View style={styles.itembox}>
              <ItemBox
                title={item.name}
                image={item.images.length ? item.images[1].url : null} />
            </View>
          </Link>
        )} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 150
  },
  itembox: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
})

export default Artist;
