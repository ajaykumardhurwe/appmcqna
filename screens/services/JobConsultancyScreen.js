import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobConsultancyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>👔 Job Consultancy Services</Text>
    </View>
  );
};

export default JobConsultancyScreen;

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
