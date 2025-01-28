// import React from 'react';
// import { View, Text, Button } from 'react-native';

// const topics = [
//   { title: 'भाग I: संघ और उसका क्षेत्र', description: 'संघ और उसका क्षेत्र का विवरण...' },
//   { title: 'भाग II: नागरिकता', description: 'नागरिकता का विवरण...' },
//   // Add more topics here
// ];

// export default function TestTopics({ route, navigation }) {
//   const { subject } = route.params;

//   return (
//     <View className="p-4">
//       <Text className="text-lg font-bold">{subject.title}</Text>
//       {topics.map((topic, index) => (
//         <View key={index} className="my-4">
//           <Text className="font-bold">{topic.title}</Text>
//           <Text>{topic.description}</Text>
//           <Button title="Start MCQ Test" onPress={() => navigation.navigate('MCQTest', { topic })} />
//         </View>
//       ))}
//     </View>
//   );
// }







// import React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

// const TestTopics = () => {
//   const route = useRoute();
//   const { subjectTitle } = route.params;

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Test Topics for {subjectTitle}</Text>
//       {/* You can display the list of test topics here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f4f4f4",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
// });

// export default TestTopics;















// import React, { useState } from "react";
// import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import Collapsible from "react-native-collapsible"; // Import collapsible for dropdown
// import { useNavigation } from "@react-navigation/native"; // To navigate to MCQTest screen

// const TestTopics = ({ route }) => {
//   const { subjectTitle } = route.params; // Get the subject title passed from the previous screen
//   const navigation = useNavigation();
//   const [collapsed, setCollapsed] = useState({});

//   // Example test topics data for Indian Constitution and other subjects
//   const subjects = {
//     "Indian Constitution": [
//       { title: "भाग II: नागरिकता", description: "(अनुच्छेद 5 से 11) संविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।" },
//       { title: "भाग III: मौलिक अधिकार", description: "(अनुच्छेद 12 से 35) नागरिकों को प्रदान किए गए मौलिक अधिकार जैसे समानता, स्वतंत्रता और शोषण के विरुद्ध अधिकार।" },
//       { title: "भाग IV: राज्य के नीति निदेशक तत्व", description: "(अनुच्छेद 36 से 51) सामाजिक और आर्थिक न्याय सुनिश्चित करने के लिए राज्य को दिए गए दिशा-निर्देश।" },
//       { title: "भाग IV(A): मौलिक कर्तव्य", description: "(अनुच्छेद 51A) नागरिकों के लिए राष्ट्र के प्रति मौलिक कर्तव्य।" },
//       { title: "भाग V: संघ", description: "(अनुच्छेद 52 से 151) राष्ट्रपति, उपराष्ट्रपति, मंत्री परिषद, संसद, और संघीय न्यायपालिका।" },
//       { title: "भाग VI: राज्य", description: "(अनुच्छेद 152 से 237) राज्यों की सरकार, राज्यपाल, राज्य विधानमंडल और उच्च न्यायालय।" },
//       { title: "भाग VII: प्रथम अनुसूची के भाग B के राज्य", description: "यह भाग 1956 के 7वें संविधान संशोधन द्वारा हटा दिया गया।" },
//       { title: "भाग VIII: संघ राज्य क्षेत्र", description: "(अनुच्छेद 239 से 242) संघ राज्य क्षेत्रों का प्रशासन।" },
//       { title: "भाग IX: पंचायतें", description: "(अनुच्छेद 243 से 243O) पंचायतों और स्थानीय शासन के प्रावधान।" },
//       // Add more topics here...
//     ],
//     "Other Subject": [
//       { title: "Topic 1", description: "Description for topic 1." },
//       { title: "Topic 2", description: "Description for topic 2." },
//       // Add more topics for another subject
//     ],
//   };

//   // Dynamically load topics for the selected subject
//   const topics = subjects[subjectTitle] || [];

//   const toggleCollapse = (index) => {
//     setCollapsed(prevState => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   const handleTakeTest = () => {
//     navigation.navigate("MCQTest", { subjectTitle }); // Navigate to MCQTest screen
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Test Topics for {subjectTitle}</Text>
      
//       {topics.map((topic, index) => (
//         <View key={index} style={styles.topicContainer}>
//           <TouchableOpacity onPress={() => toggleCollapse(index)} style={styles.topicButton}>
//             <Text style={styles.topicTitle}>{topic.title}</Text>
//           </TouchableOpacity>

//           <Collapsible collapsed={collapsed[index]}>
//             <View style={styles.dropdownContent}>
//               <Text style={styles.description}>{topic.description}</Text>
//               <Button title="Take Test" onPress={handleTakeTest} />
//             </View>
//           </Collapsible>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   topicContainer: {
//     marginBottom: 15,
//   },
//   topicButton: {
//     backgroundColor: "#007BFF",
//     padding: 10,
//     borderRadius: 5,
//   },
//   topicTitle: {
//     color: "white",
//     fontSize: 18,
//   },
//   dropdownContent: {
//     marginTop: 10,
//     paddingLeft: 10,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
// });

// export default TestTopics;

















// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import Collapsible from "react-native-collapsible";
// import { useNavigation } from "@react-navigation/native";

// const TestTopics = ({ route }) => {
//   const { subjectTitle } = route.params;
//   const navigation = useNavigation();
//   const [collapsed, setCollapsed] = useState({});

//   const subjects = {
//     "Indian Constitution": [
//       { title: "भाग II: नागरिकता", description: "(अनुच्छेद 5 से 11) संविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।" },
//       { title: "भाग III: मौलिक अधिकार", description: "(अनुच्छेद 12 से 35) नागरिकों को प्रदान किए गए मौलिक अधिकार जैसे समानता, स्वतंत्रता और शोषण के विरुद्ध अधिकार।" },
//       { title: "भाग IV: राज्य के नीति निदेशक तत्व", description: "(अनुच्छेद 36 से 51) सामाजिक और आर्थिक न्याय सुनिश्चित करने के लिए राज्य को दिए गए दिशा-निर्देश।" },
//       { title: "भाग IV(A): मौलिक कर्तव्य", description: "(अनुच्छेद 51A) नागरिकों के लिए राष्ट्र के प्रति मौलिक कर्तव्य।" },
//       { title: "भाग V: संघ", description: "(अनुच्छेद 52 से 151) राष्ट्रपति, उपराष्ट्रपति, मंत्री परिषद, संसद, और संघीय न्यायपालिका।" },
//       // Add more topics here...
//     ],
//   };

//   const topics = subjects[subjectTitle] || [];

//   const toggleCollapse = (index) => {
//     setCollapsed((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };

//   const handleTakeTest = () => {
//     navigation.navigate("MCQTest", { subjectTitle });
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Test Topics for {subjectTitle}</Text>
//       {topics.map((topic, index) => (
//         <View key={index} style={styles.topicContainer}>
//           <TouchableOpacity onPress={() => toggleCollapse(index)} style={styles.topicButton}>
//             <Text style={styles.topicTitle}>{topic.title}</Text>
//           </TouchableOpacity>

//           <Collapsible collapsed={collapsed[index]}>
//             <View style={styles.dropdownContent}>
//               <Text style={styles.description}>{topic.description}</Text>
//               <TouchableOpacity style={styles.takeTestButton} onPress={handleTakeTest}>
//                 <Text style={styles.takeTestButtonText}>Take Test</Text>
//               </TouchableOpacity>
//             </View>
//           </Collapsible>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#f9f9f9",
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: "bold",
//     color: "#333",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   topicContainer: {
//     marginBottom: 15,
//     borderRadius: 8,
//     backgroundColor: "#fff",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 2 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   topicButton: {
//     backgroundColor: "#007BFF",
//     paddingVertical: 12,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
//   topicTitle: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "600",
//   },
//   dropdownContent: {
//     padding: 15,
//     backgroundColor: "#f0f0f0",
//     borderBottomLeftRadius: 8,
//     borderBottomRightRadius: 8,
//   },
//   description: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 10,
//   },
//   takeTestButton: {
//     backgroundColor: "#28a745",
//     paddingVertical: 10,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   takeTestButtonText: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "600",
//   },
// });

// export default TestTopics;












import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; // For dropdown arrow icons

const TestTopics = ({ route }) => {
  const { subjectTitle } = route.params;
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = useState({});

  const subjects = {
    "Indian Constitution": [
      { title: "भाग II: नागरिकता", description: "(अनुच्छेद 5 से 11) संविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।" },
      { title: "भाग III: मौलिक अधिकार", description: "(अनुच्छेद 12 से 35) नागरिकों को प्रदान किए गए मौलिक अधिकार जैसे समानता, स्वतंत्रता और शोषण के विरुद्ध अधिकार।" },
      { title: "भाग IV: राज्य के नीति निदेशक तत्व", description: "(अनुच्छेद 36 से 51) सामाजिक और आर्थिक न्याय सुनिश्चित करने के लिए राज्य को दिए गए दिशा-निर्देश।" },
      { title: "भाग IV(A): मौलिक कर्तव्य", description: "(अनुच्छेद 51A) नागरिकों के लिए राष्ट्र के प्रति मौलिक कर्तव्य।" },
      { title: "भाग V: संघ", description: "(अनुच्छेद 52 से 151) राष्ट्रपति, उपराष्ट्रपति, मंत्री परिषद, संसद, और संघीय न्यायपालिका।" },
      // Add more topics here...
    ],
  };

  const topics = subjects[subjectTitle] || [];

  const toggleCollapse = (index) => {
    setCollapsed((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleTakeTest = () => {
    navigation.navigate("TestNumbers", { subjectTitle });
  };

  const buttonColors = ["#007BFF", "#28a745", "#ffc107", "#dc3545", "#17a2b8"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Test Topics for {subjectTitle}</Text>
      {topics.map((topic, index) => (
        <View key={index} style={styles.topicContainer}>
          <TouchableOpacity
            onPress={() => toggleCollapse(index)}
            style={[styles.topicButton, { backgroundColor: buttonColors[index % buttonColors.length] }]}
          >
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <MaterialIcons
              name={collapsed[index] ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <Collapsible collapsed={collapsed[index]}>
            <View style={styles.dropdownContent}>
              <Text style={styles.description}>{topic.description}</Text>
              <TouchableOpacity style={styles.takeTestButton} onPress={handleTakeTest}>
                <Text style={styles.takeTestButtonText}>Take Test</Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  topicContainer: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  topicButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  topicTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  dropdownContent: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  takeTestButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  takeTestButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TestTopics;
