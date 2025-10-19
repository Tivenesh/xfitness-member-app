// App.tsx (Temporary Test)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={{ color: 'white' }}>Minimal App Test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525', // Use your background color
    alignItems: 'center',
    justifyContent: 'center',
  },
});