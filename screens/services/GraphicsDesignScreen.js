// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// const GraphicsDesignScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>🎨 Graphics Design Services</Text>
//     </View>
//   );
// };

// export default GraphicsDesignScreen;

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

const GraphicsDesignScreen = () => {
  const openWebsite = () => {
    Linking.openURL("https://ajaydhurwe.tech/"); 
  };

  return (
    <View style={styles.container}>
      <Ionicons name="color-palette" size={60} color="#33A1FF" />
      <Text style={styles.header}>🎨 ग्राफिक डिज़ाइन सेवाएँ</Text>
      <Text style={styles.text}>✅ Logo, banner, social media posts, flyers, brochures डिज़ाइन करना।</Text>
      <Text style={styles.text}>✅ Custom graphics, जो ब्रांड की पहचान को मजबूत करें।</Text>
      <Text style={styles.text}>✅ Social media marketing के लिए आकर्षक ग्राफिक्स।</Text>
      <Text style={styles.text}>✅ Latest AI tools और software से बेहतरीन डिज़ाइन।</Text>

      <TouchableOpacity style={styles.button} onPress={openWebsite}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D6E6FF",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#33A1FF",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#33A1FF",
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

export default GraphicsDesignScreen;
