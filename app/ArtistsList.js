import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Link } from 'react-router-native';
import ItemBox from './common/ItemBox';
import SectionHeader from './common/SectionHeader';

const ArtistsList = (props) => (
  <View style={styles.artistsList}>
    <View style={styles.header}>
      <SectionHeader
        title="Artists"
        subtitle={`You are currently searching: "${props.search}"`}
      />
    </View>
      <FlatList
        style={styles.list}
        data={props.artists}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Link to={`/artist/${item.id}`}>
            <View style={styles.itembox}>
              <ItemBox
                title={item.name}
                subtitle={item.id}
                image={item.images.length ? item.images[1].url : null} />
            </View>
          </Link>
        )} />

  </View>
);

const styles = StyleSheet.create({
  artistsList: {
    flex: 1
  },
  header: {
    height: 150
  },
  list: {
  },
  itembox: {
    marginTop: 10,
    paddingLeft: 5,
    paddingRight: 5
  }
});

export default ArtistsList;
