import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const TestNumbers = () => {
  const navigation = useNavigation();

  const handleNavigateToTest = (testNumber) => {
    navigation.navigate("MCQTest", { testNumber });
  };

  const testButtons = [
    { title: "Test 1", color: "#007BFF" },
    { title: "Test 2", color: "#28a745" },
    { title: "Test 3", color: "#ffc107" },
    { title: "Test 4", color: "#dc3545" },
    { title: "Test 5", color: "#17a2b8" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Select a Test</Text>
      {testButtons.map((test, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.testButton, { backgroundColor: test.color }]}
          onPress={() => handleNavigateToTest(test.title)}
        >
          <Text style={styles.buttonText}>{test.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
  },
  testButton: {
    width: "80%",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default TestNumbers;
