// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const MCQTestScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>📝 MCQ Test Section</Text>
//     </View>
//   );
// };

// export default MCQTestScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#fff",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });







import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const MCQTestScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/"); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="document" size={60} color="#28A745" />
      <Text style={styles.header}>📚 MCQ टेस्ट</Text>
      <Text style={styles.text}>✅ SSC, UPSC, Banking, Railway, State Exams के लिए MCQ टेस्ट।</Text>
      <Text style={styles.text}>✅ Timed practice tests, subject-wise tests और full-length mock tests।</Text>
      <Text style={styles.text}>✅ Performance analysis और detailed solutions।</Text>
      <Text style={styles.text}>✅ कठिन प्रश्नों के लिए explanatory videos और concept clearing notes।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#28A745",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#28A745",
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MCQTestScreen;
