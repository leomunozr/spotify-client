import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.header}>
    <Text>Header</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    flex: 1,
    justifyContent: 'center'
  }
});

export default Header;
