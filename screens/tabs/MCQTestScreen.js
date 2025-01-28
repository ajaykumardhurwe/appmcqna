import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MCQTestScreen() {
  return (
    <View style={styles.container}>
      <Text>MCQ Test Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
