import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SEOOptimizationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🔍 SEO Optimization Services</Text>
    </View>
  );
};

export default SEOOptimizationScreen;

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
