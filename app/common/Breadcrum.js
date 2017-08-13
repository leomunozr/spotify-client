import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import { Link, withRouter } from 'react-router-native';

const Breadcrum = (props) => (
  <ScrollView style={styles.breadcrum}>
    <Text>{JSON.stringify(props.history, null, 3)}</Text>
  </ScrollView>
);

const styles = StyleSheet.create({
  breadcrum: {

  }
});

export default withRouter(Breadcrum);
