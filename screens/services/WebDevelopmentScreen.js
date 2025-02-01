// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const WebDevelopmentScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>🌐 Web Development Services</Text>
//     </View>
//   );
// };

// export default WebDevelopmentScreen;

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

const WebDevelopmentScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/");
  };

  return (
    <View style={styles.container}>
      <Ionicons name="code-slash" size={60} color="#E83E8C" />
      <Text style={styles.header}>🌐 वेब डेवलपमेंट सेवाएँ</Text>
      <Text style={styles.text}>✅ Custom websites – व्यवसायों, स्टार्टअप्स और व्यक्तिगत उपयोग के लिए।</Text>
      <Text style={styles.text}>✅ E-commerce websites – सुरक्षित और user-friendly।</Text>
      <Text style={styles.text}>✅ WordPress development – CMS आधारित वेबसाइट।</Text>
      <Text style={styles.text}>✅ Website redesign और maintenance services।</Text>
      <Text style={styles.text}>✅ SEO-friendly, responsive, और high-performance websites।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCE4EC",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#E83E8C",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#E83E8C",
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

export default WebDevelopmentScreen;
