// import React from 'react';
// import { View, Text } from 'react-native';

// export default function ServicesScreen() {
//   return (
//     <View className="flex-1 justify-center items-center">
//       <Text>Services Screen</Text>
//     </View>
//   );
// }








import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const services = [
  { id: "1", title: "Web Development", image: require("../assets/web.png"), screen: "WebDevelopment" },
  { id: "2", title: "Graphics Design", image: require("../assets/graphics.png"), screen: "GraphicsDesign" },
  { id: "3", title: "SEO Optimization", image: require("../assets/seo.png"), screen: "SEOOptimization" },
  { id: "4", title: "MCQ Test", image: require("../assets/mcq.png"), screen: "MCQTest" },
  { id: "5", title: "Job Consultancy", image: require("../assets/job.png"), screen: "JobConsultancy" },
  { id: "6", title: "E-Form Fillup", image: require("../assets/eform.png"), screen: "EFormFillup" },
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
          <TouchableOpacity style={styles.box} onPress={() => navigation.navigate(item.screen)}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
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
    backgroundColor: "#ffffff",
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
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
});



