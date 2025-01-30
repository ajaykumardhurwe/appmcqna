import React from "react";
import { View, Text, StyleSheet } from "react-native";

const GraphicsDesignScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🎨 Graphics Design Services</Text>
    </View>
  );
};

export default GraphicsDesignScreen;

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
