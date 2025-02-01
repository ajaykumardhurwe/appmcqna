// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const JobConsultancyScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>👔 Job Consultancy Services</Text>
//     </View>
//   );
// };

// export default JobConsultancyScreen;

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

const JobConsultancyScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/"); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="briefcase" size={60} color="#007BFF" />
      <Text style={styles.header}>🏢 जॉब कंसल्टेंसी सेवाएँ</Text>
      <Text style={styles.text}>✅ नौकरी खोजने और करियर मार्गदर्शन में सहायता।</Text>
      <Text style={styles.text}>✅ Resume writing और CV optimization।</Text>
      <Text style={styles.text}>✅ विभिन्न क्षेत्रों में job openings की जानकारी।</Text>
      <Text style={styles.text}>✅ Interview preparation और mock interviews।</Text>
      <Text style={styles.text}>✅ Freelancing & remote jobs के लिए मार्गदर्शन।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E3F2FD",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#007BFF",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#007BFF",
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

export default JobConsultancyScreen;



