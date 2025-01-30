import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WebDevelopmentScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🌐 Web Development Services</Text>
    </View>
  );
};

export default WebDevelopmentScreen;

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
