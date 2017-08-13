import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => (
  <View style={styles.footer}>
    <Text>Footer</Text>
  </View>
);

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    backgroundColor: 'cornflowerblue',
    flex: 1,
    justifyContent: 'center'
  }
});

export default Footer;
