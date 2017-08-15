import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Breadcrum from './Breadcrum';

const SectionHeader = (props) => {
  return (
    <View style={styles.sectionHeader}>
      <Image
        style={styles.thumbnail}
        source={{ uri: props.thumbnail }} />
      <View style={styles.title}>
        <Text style={styles.titleSize}>
          {props.title}
        </Text>
        <View style={styles.subtitle}>
          <Text style={styles.subtitle.text}>
            {props.subtitle}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionHeader: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 10
  },
  thumbnail: {
    flex: 1,
    resizeMode: 'contain'
  },
  title: {
    alignItems: 'center',
    flex: 3,
    justifyContent: 'center',
  },
  titleSize: {
    fontSize: 30
  },
  subtitle: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default SectionHeader;
