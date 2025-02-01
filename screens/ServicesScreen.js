// import React from 'react';
// import { View, Text } from 'react-native';

// export default function ServicesScreen() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text>Services Screen</Text>
//     </View>
//   );
// }








// import React from "react";
// import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// const services = [
//   { id: "1", title: "Web Development", image: require("../assets/web.png"), screen: "WebDevelopment" },
//   { id: "2", title: "Graphics Design", image: require("../assets/graphics.png"), screen: "GraphicsDesign" },
//   { id: "3", title: "SEO Optimization", image: require("../assets/seo.png"), screen: "SEOOptimization" },
//   { id: "4", title: "MCQ Test", image: require("../assets/mcq.png"), screen: "MCQTest" },
//   { id: "5", title: "Job Consultancy", image: require("../assets/job.png"), screen: "JobConsultancy" },
//   { id: "6", title: "E-Form Fillup", image: require("../assets/eform.png"), screen: "EFormFillup" },
// ];

// const ServicesScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🚀 Our Services</Text>
//       <FlatList
//         data={services}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(item.screen)}>
//             <Image source={item.image} style={styles.image} />
//             <Text style={styles.text}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default ServicesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   box: {
//     backgroundColor: "#ffffff",
//     flex: 1,
//     margin: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//     padding: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   image: {
//     width: 50,
//     height: 50,
//     marginBottom: 8,
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });









// import React from "react";
// import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";

// const services = [
//   { id: "1", title: "Web Development", icon: "globe-outline", screen: "WebDevelopment" },
//   { id: "2", title: "Graphics Design", icon: "color-palette-outline", screen: "GraphicsDesign" },
//   { id: "3", title: "SEO Optimization", icon: "trending-up-outline", screen: "SEOOptimization" },
//   { id: "4", title: "MCQ Test", icon: "help-circle-outline", screen: "MCQTest" },
//   { id: "5", title: "Job Consultancy", icon: "briefcase-outline", screen: "JobConsultancy" },
//   { id: "6", title: "E-Form Fillup", icon: "document-text-outline", screen: "EFormFillup" },
// ];

// const ServicesScreen = () => {
//   const navigation = useNavigation();

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>🚀 Our Services</Text>
//       <FlatList
//         data={services}
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(item.screen)}>
//             <Ionicons name={item.icon} size={50} color="#333" style={styles.icon} />
//             <Text style={styles.text}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// export default ServicesScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f5f5f5",
//     padding: 10,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     textAlign: "center",
//     marginVertical: 10,
//   },
//   box: {
//     backgroundColor: "#ffffff",
//     flex: 1,
//     margin: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//     padding: 15,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   icon: {
//     marginBottom: 8,
//   },
//   text: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });













import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const services = [
  { id: "1", title: "Web Development", icon: "code-slash", color: "#FF5733", screen: "WebDevelopment" },
  { id: "2", title: "Graphics Design", icon: "color-palette", color: "#33A1FF", screen: "GraphicsDesign" },
  { id: "3", title: "SEO Optimization", icon: "search", color: "#28A745", screen: "SEOOptimization" },
  { id: "4", title: "MCQ Test", icon: "clipboard", color: "#FFC107", screen: "MCQTest" },
  { id: "5", title: "Job Consultancy", icon: "briefcase", color: "#6610F2", screen: "JobConsultancy" },
  { id: "6", title: "E-Form Fillup", icon: "document-text", color: "#E83E8C", screen: "EFormFillup" },
];

const ServicesScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🚀 Our Services</Text>
      <FlatList
        data={services}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.box, { backgroundColor: item.color + "30" }]} // Light version of the color
            onPress={() => navigation.navigate(item.screen)}
          >
            <Ionicons name={item.icon} size={50} color={item.color} />
            <Text style={[styles.text, { color: item.color }]}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  box: {
    flex: 1,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
});
