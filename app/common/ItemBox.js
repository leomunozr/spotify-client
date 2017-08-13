import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ItemBox = (props) => {
  return (
    <View style={styles.itembox}>
      <Image
        style={styles.thumbnail}
        source={{ uri: props.image }} />
      <View style={styles.info}>
        <Text>{props.title}</Text>
        <Text>{props.subtitle}</Text>
      </View>
    </View>
  )
};


const styles = StyleSheet.create({
  itembox: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    flexDirection: 'row',
    height: 100
  },
  thumbnail: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    marginLeft: 5,
    marginRight: 5
  },
  info: {
    alignItems: 'center',
    alignSelf: 'stretch',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
    paddingBottom: 10,
    paddingTop: 10
  }
})

export default ItemBox;
