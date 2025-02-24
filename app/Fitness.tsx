import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Fitness() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fitness</Text>
      <Text>This is the Fitness tab. Content goes here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9F9F9',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
