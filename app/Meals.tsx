import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Meals() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Meals</Text>
      <Text>This is the Food Meals tab. Content goes here.</Text>
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
