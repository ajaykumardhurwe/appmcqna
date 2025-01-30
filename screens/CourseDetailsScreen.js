// import React from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// const courseDetails = [
//   { 
//     id: '1', 
//     title: 'Module 1: व्याकरण (Grammar)', 
//     description: 'सही इंग्लिश बोलने और लिखने की नींव मजबूत करने के लिए संज्ञा, सर्वनाम, विशेषण, काल, वाक्य संरचना, सक्रिय/निष्क्रिय वाच्य, और कर्ता-क्रिया संगति जैसे महत्वपूर्ण व्याकरण नियमों को सीखें। (Build a strong foundation in English by learning essential grammar rules like nouns, pronouns, adjectives, tenses, sentence structure, active/passive voice, and subject-verb agreement.)' 
//   },
//   { 
//     id: '2', 
//     title: 'Module 2: शब्दावली (Vocabulary)', 
//     description: 'अपनी शब्दावली को सुधारें और पर्यायवाची-विलोम, मुहावरे, कोलोकेशन, शब्द निर्माण और अक्सर भ्रमित करने वाले शब्दों का अभ्यास करें ताकि संचार अधिक प्रभावी हो सके। (Enhance your vocabulary with synonyms, antonyms, idioms, collocations, word formation, and commonly confused words to make communication more effective.)' 
//   },
//   { 
//     id: '3', 
//     title: 'Module 3: लेखन कौशल (Writing Skills)', 
//     description: 'निबंध लेखन, औपचारिक और अनौपचारिक पत्र लेखन, रचनात्मक लेखन, रिपोर्ट लेखन और अनुच्छेद लेखन जैसी लेखन विधियों को सीखकर अपनी लेखन क्षमता को निखारें। (Improve your writing skills by learning essay writing, formal & informal letter writing, creative writing, report writing, and paragraph writing.)' 
//   },
//   { 
//     id: '4', 
//     title: 'Module 4: बोलने और सुनने का अभ्यास (Speaking & Listening)', 
//     description: 'संवाद अभ्यास, सार्वजनिक भाषण, वाद-विवाद और श्रवण समझ जैसे कौशलों के माध्यम से आत्मविश्वास के साथ इंग्लिश बोलना और समझना सीखें। (Boost your confidence in English speaking and comprehension through conversation practice, public speaking, debates, and listening exercises.)' 
//   },
//   { 
//     id: '5', 
//     title: 'Module 5: पठन समझ (Reading Comprehension)', 
//     description: 'स्किमिंग, स्कैनिंग, मुख्य विचारों को समझना, और आलोचनात्मक सोच जैसे कौशल विकसित करें ताकि किसी भी पाठ को बेहतर ढंग से समझा जा सके। (Develop reading skills such as skimming, scanning, understanding main ideas, and critical thinking for better text comprehension.)' 
//   },
//   { 
//     id: '6', 
//     title: 'Module 6: साहित्य (Literature)', 
//     description: 'कविता और गद्य की गहरी व्याख्या करें और रूपक, उपमा, और व्यक्तित्व जैसी साहित्यिक विधियों को समझकर इंग्लिश साहित्य का आनंद लें। (Analyze poetry and prose, and explore literary devices like metaphors, similes, and personification to appreciate English literature.)' 
//   },
//   { 
//     id: '7', 
//     title: 'Module 7: परीक्षा तैयारी (Exam Preparation)', 
//     description: 'प्रतियोगी परीक्षाओं के लिए त्रुटि पहचान, क्लोज़ टेस्ट, वाक्य पुनर्व्यवस्था, रिक्त स्थान भरें और पठन प्रश्नों पर विशेष ध्यान दें। (Prepare for competitive exams with focused topics like error spotting, cloze tests, sentence rearrangement, fill-in-the-blanks, and reading comprehension questions.)' 
//   }
// ]

// export default function CourseDetailsScreen({ navigation }) {
//   const renderDropdown = ({ item }) => (
//     <View style={styles.dropdown}>
//       <Text style={styles.dropdownTitle}>{item.title}</Text>
//       <Text style={styles.dropdownDescription}>{item.description}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Classroom')}
//       >
//         <Text style={styles.buttonText}>Classroom</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return <FlatList data={courseDetails} renderItem={renderDropdown} keyExtractor={(item) => item.id} />;
// }

// const styles = StyleSheet.create({
//   dropdown: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   dropdownTitle: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   dropdownDescription: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
// });
































import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const courseDetails = [
  { 
    id: '1', 
    title: '📖 Module 1: व्याकरण (Grammar)', 
    description: '✍️ सही इंग्लिश बोलने और लिखने की नींव मजबूत करने के लिए संज्ञा, सर्वनाम, विशेषण, काल, वाक्य संरचना, सक्रिय/निष्क्रिय वाच्य, और कर्ता-क्रिया संगति जैसे महत्वपूर्ण व्याकरण नियमों को सीखें। (Build a strong foundation in English by learning essential grammar rules like nouns, pronouns, adjectives, tenses, sentence structure, active/passive voice, and subject-verb agreement.)' 
  },


  { 
    id: '2', 
    title: 'Coming Soon', 
    description: '.................' 
  },

  // { 
  //   id: '2', 
  //   title: '📝 Module 2: शब्दावली (Vocabulary)', 
  //   description: '📚 अपनी शब्दावली को सुधारें और पर्यायवाची-विलोम, मुहावरे, कोलोकेशन, शब्द निर्माण और अक्सर भ्रमित करने वाले शब्दों का अभ्यास करें ताकि संचार अधिक प्रभावी हो सके। (Enhance your vocabulary with synonyms, antonyms, idioms, collocations, word formation, and commonly confused words to make communication more effective.)' 
  // },


  // { 
  //   id: '3', 
  //   title: '🖊️ Module 3: लेखन कौशल (Writing Skills)', 
  //   description: '📝 निबंध लेखन, औपचारिक और अनौपचारिक पत्र लेखन, रचनात्मक लेखन, रिपोर्ट लेखन और अनुच्छेद लेखन जैसी लेखन विधियों को सीखकर अपनी लेखन क्षमता को निखारें। (Improve your writing skills by learning essay writing, formal & informal letter writing, creative writing, report writing, and paragraph writing.)' 
  // },
  // { 
  //   id: '4', 
  //   title: '🎤 Module 4: बोलने और सुनने का अभ्यास (Speaking & Listening)', 
  //   description: '🗣️ संवाद अभ्यास, सार्वजनिक भाषण, वाद-विवाद और श्रवण समझ जैसे कौशलों के माध्यम से आत्मविश्वास के साथ इंग्लिश बोलना और समझना सीखें। (Boost your confidence in English speaking and comprehension through conversation practice, public speaking, debates, and listening exercises.)' 
  // },
  // { 
  //   id: '5', 
  //   title: '📖 Module 5: पठन समझ (Reading Comprehension)', 
  //   description: '👀 स्किमिंग, स्कैनिंग, मुख्य विचारों को समझना, और आलोचनात्मक सोच जैसे कौशल विकसित करें ताकि किसी भी पाठ को बेहतर ढंग से समझा जा सके। (Develop reading skills such as skimming, scanning, understanding main ideas, and critical thinking for better text comprehension.)' 
  // },
  // { 
  //   id: '6', 
  //   title: '📜 Module 6: साहित्य (Literature)', 
  //   description: '📖 कविता और गद्य की गहरी व्याख्या करें और रूपक, उपमा, और व्यक्तित्व जैसी साहित्यिक विधियों को समझकर इंग्लिश साहित्य का आनंद लें। (Analyze poetry and prose, and explore literary devices like metaphors, similes, and personification to appreciate English literature.)' 
  // },
  // { 
  //   id: '7', 
  //   title: '📝 Module 7: परीक्षा तैयारी (Exam Preparation)', 
  //   description: '📑 प्रतियोगी परीक्षाओं के लिए त्रुटि पहचान, क्लोज़ टेस्ट, वाक्य पुनर्व्यवस्था, रिक्त स्थान भरें और पठन प्रश्नों पर विशेष ध्यान दें। (Prepare for competitive exams with focused topics like error spotting, cloze tests, sentence rearrangement, fill-in-the-blanks, and reading comprehension questions.)' 
  // }
]

export default function CourseDetailsScreen({ navigation }) {
  const renderDropdown = ({ item }) => (
    <View style={styles.dropdown}>
      <Text style={styles.dropdownTitle}>{item.title}</Text>
      <Text style={styles.dropdownDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Classroom')}
      >
        <MaterialIcons name="class" size={20} color="#fff" />
        <Text style={styles.buttonText}> Classroom</Text>
      </TouchableOpacity>
    </View>
  );

  return <FlatList data={courseDetails} renderItem={renderDropdown} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({
  dropdown: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    marginVertical: 5,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  dropdownDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 5,
  },
});
