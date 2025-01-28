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





















// import React from 'react';
// import { View, ScrollView } from 'react-native';
// import SubjectCard from '../components/SubjectCard';

// const subjects = [
//   {
//     title: 'Indian Constitution',
//     description: 'Details about the Indian Constitution...',
//     thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=500',
//   },
//   {
//     title: 'Indian Polity',
//     description: 'Details about Indian Polity...',
//     thumbnail: 'https://via.placeholder.com/150',
//   },
//   // Add other subjects here
// ];

// export default function MCQScreen({ navigation }) {
//   return (
//     <ScrollView>
//       <View className="p-4">
//         {subjects.map((subject, index) => (
//           <SubjectCard
//             key={index}
//             title={subject.title}
//             description={subject.description}
//             thumbnail={subject.thumbnail}
//             onPress={() => navigation.navigate('TestTopics', { subject })}
//           />
//         ))}
//       </View>
//     </ScrollView>
//   );
// }






















// import React from "react";
// import { ScrollView, StyleSheet } from "react-native";
// import SubjectCard from "../components/SubjectCard";

// const MCQTab: React.FC = () => {
//   const handleTestDetailsPress = (subjectTitle: string) => {
//     console.log(`Navigate to test details for ${subjectTitle}`);
//     // Implement navigation logic here
//   };

//   const subjects = [
//     {
//       title: "Indian Constitution",
//       thumbnail: "https://example.com/constitution.jpg",
//       description: "Learn about the Indian Constitution and its key aspects.",
//     },
//     {
//       title: "Indian Polity",
//       thumbnail: "https://example.com/polity.jpg",
//       description: "Understand the structure and function of the Indian government.",
//     },
//     // Add more subjects here...
//   ];

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {subjects.map((subject, index) => (
//         <SubjectCard
//           key={index}
//           title={subject.title}
//           thumbnail={subject.thumbnail}
//           description={subject.description}
//           onPressDetails={() => handleTestDetailsPress(subject.title)}
//         />
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//   },
// });

// export default MCQTab;
