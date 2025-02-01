import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

// Sample subjects data
const subjects = [
  {
    id: "1",
    title: "Indian Constitution",
    thumbnail: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500",
    description: "Detailed study of the Indian Constitution including all its parts and provisions.",
  },

  {
    id: "2",
    title: "Indian Economy",
    thumbnail: "https://example.com/indian-economy-thumbnail.jpg",
    description: "Overview of India's economy, economic planning, and policy development.",
  },
  {
    id: "3",
    title: "Indian Polity",
    thumbnail: "https://example.com/indian-polity-thumbnail.jpg",
    description: "Understanding the political structure of India, its governance and processes.",
  },
  // Add more subjects here...
];

const MCQScreen = () => {
  const navigation = useNavigation();

  // Navigate to TestTopics screen
  const navigateToTestTopics = (subjectTitle: string) => {
    navigation.navigate("TestTopics", { subjectTitle });
  };

  // Render each subject card
  const renderSubjectCard = ({ item }: { item: typeof subjects[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigateToTestTopics(item.title)}
      >
        <Text style={styles.buttonText}>Test Topics</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={subjects}
        keyExtractor={(item) => item.id}
        renderItem={renderSubjectCard}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f4f4f4",
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    padding: 16,
  },
  thumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007BFF",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginRight: 8,
  },
});

export default MCQScreen;







// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// // import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// // Sample subjects data
// const subjects = [
//   //   { id: "1", title: "Indian Constitution 🇮🇳", icon: "gavel", description: "Study of the Indian Constitution, its parts, and provisions." },
// //   { id: "2", title: "Indian Economy 📊", icon: "trending-up", description: "Overview of India's economy, planning, and policies." },
// //   { id: "3", title: "Indian Polity 🏛️", icon: "account-balance", description: "Understanding India's political structure and governance." },
//   {
//     id: "1",
//     title: "Indian Constitution",
//     icon: "book-outline",
//     // icon: "trending-up",
//     description: "Detailed study of the Indian Constitution including all its parts and provisions.",
//   },
//   {
//     id: "2",
//     title: "Indian Economy",
//     icon: "cash-outline",
//     description: "Overview of India's economy, economic planning, and policy development.",
//   },
//   {
//     id: "3",
//     title: "Indian Polity",
//     icon: "people-outline",
//     description: "Understanding the political structure of India, its governance and processes.",
//   },
//   // Add more subjects here...
// ];

// const MCQScreen = () => {
//   const navigation = useNavigation();

//   // Navigate to TestTopics screen
//   const navigateToTestTopics = (subjectTitle) => {
//     navigation.navigate("TestTopics", { subjectTitle });
//   };

//   // Render each subject card
//   const renderSubjectCard = ({ item }) => (
//     <View style={styles.card}>
//       <Ionicons name={item.icon} size={50} color="#007BFF" style={styles.icon} />
//       <Text style={styles.title}>{item.title} </Text>
//       <Text style={styles.description}>{item.description}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigateToTestTopics(item.title)}
//       >
//         <Text style={styles.buttonText}>Test Topics</Text>
//         <Ionicons name="chevron-forward" size={18} color="#fff" />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={subjects}
//         keyExtractor={(item) => item.id}
//         renderItem={renderSubjectCard}
//         contentContainerStyle={styles.listContainer}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f4f4f4",
//   },
//   listContainer: {
//     paddingBottom: 20,
//   },
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     marginBottom: 16,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 8,
//     elevation: 3,
//     padding: 16,
//     alignItems: "center",
//   },
//   icon: {
//     marginBottom: 12,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 8,
//     textAlign: "center",
//   },
//   description: {
//     fontSize: 14,
//     color: "#555",
//     marginBottom: 12,
//     textAlign: "center",
//   },
//   button: {
//     flexDirection: "row",
//     alignItems: "center",
//     backgroundColor: "#007BFF",
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 8,
//     justifyContent: "center",
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//     marginRight: 8,
//   },
// });

// export default MCQScreen;











