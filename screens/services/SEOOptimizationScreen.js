// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const SEOOptimizationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>🔍 SEO Optimization Services</Text>
//     </View>
//   );
// };

// export default SEOOptimizationScreen;

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

const SEOOptimizationScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={60} color="#FFC107" />
      <Text style={styles.header}>🔍 SEO ऑप्टिमाइज़ेशन सेवाएँ</Text>
      <Text style={styles.text}>✅ Google, Bing, Yahoo में वेबसाइट रैंकिंग सुधारने के लिए SEO strategies।</Text>
      <Text style={styles.text}>✅ On-page और Off-page SEO सेवाएँ।</Text>
      <Text style={styles.text}>✅ Keyword research, content optimization, और backlink building।</Text>
      <Text style={styles.text}>✅ Website speed optimization और mobile-friendliness सुधार।</Text>
      <Text style={styles.text}>✅ Local SEO और E-commerce SEO द्वारा बिजनेस ग्रोथ।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E1",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#FFC107",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#FFC107",
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

export default SEOOptimizationScreen;

