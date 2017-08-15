import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'react-router-native';

const NothingFound = (props) => {
  return (
    <View style={styles.nothingFound}>
      <Text style={styles.text}>Nothing Found :(</Text>
      <Link to="/"><Text style={styles.link}>Return</Text></Link>
    </View>
  );
}

const styles = StyleSheet.create({
  nothingFound: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    fontSize: 34
  },
  link: {
    fontSize: 18
  }
});

export default NothingFound;
