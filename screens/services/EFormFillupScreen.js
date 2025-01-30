import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EFormFillupScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>📄 E-Form Fillup Services</Text>
    </View>
  );
};

export default EFormFillupScreen;

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
