import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Breadcrum from './Breadcrum';

const SectionHeader = (props) => (
  <View style={styles.sectionHeader}>
    <View style={styles.title}>
      <Image
        style={styles.image}
        source={{ uri: props.image }} />
      <Text style={styles.titleSize}>
        {props.title}
      </Text>
    </View>
    <View style={styles.subtitle}>
      <Text style={styles.subtitle.text}>
        {props.subtitle}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  sectionHeader: {
    borderColor: 'black',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  title: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titleSize: {
    fontSize: 30
  },
  subtitle: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default SectionHeader;
