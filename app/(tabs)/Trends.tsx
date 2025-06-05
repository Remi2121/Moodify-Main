import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Trends() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Trends Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});
