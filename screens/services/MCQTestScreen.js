import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MCQTestScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📝 MCQ Test Section</Text>
    </View>
  );
};

export default MCQTestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
