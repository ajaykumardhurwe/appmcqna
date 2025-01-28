import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const courseDetails = [
  
    { 
      id: '1', 
      title: 'Module 1: Grammar', 
      description: 'Explore foundational grammar concepts like nouns, pronouns, adjectives, tenses, sentence structures, active/passive voice, and subject-verb agreement to build a solid base for English mastery.' 
    },
    { 
      id: '2', 
      title: 'Module 2: Vocabulary', 
      description: 'Enhance your vocabulary with topics like synonyms, antonyms, idioms, collocations, word formation, and commonly confused words for more effective communication.' 
    },
    { 
      id: '3', 
      title: 'Module 3: Writing Skills', 
      description: 'Develop your writing skills with modules on essay writing, formal and informal letters, creative writing, reports, and paragraph construction.' 
    },
    { 
      id: '4', 
      title: 'Module 4: Speaking and Listening', 
      description: 'Boost your confidence in speaking and listening with conversation practice, public speaking tips, debates, and listening comprehension exercises.' 
    },
    { 
      id: '5', 
      title: 'Module 5: Reading Comprehension', 
      description: 'Master reading strategies such as skimming, scanning, critical thinking, and inference to improve your understanding of written content.' 
    },
    { 
      id: '6', 
      title: 'Module 6: Literature', 
      description: 'Dive into literary analysis with poetry and prose, exploring literary devices like metaphors, similes, and personification for a deeper appreciation of English literature.' 
    },
    { 
      id: '7', 
      title: 'Module 7: Exam Preparation', 
      description: 'Prepare for competitive exams with focused modules on spotting errors, cloze tests, sentence rearrangement, and reading comprehension questions.' 
    }
  
  

];

export default function CourseDetailsScreen({ navigation }) {
  const renderDropdown = ({ item }) => (
    <View style={styles.dropdown}>
      <Text style={styles.dropdownTitle}>{item.title}</Text>
      <Text style={styles.dropdownDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Classroom')}
      >
        <Text style={styles.buttonText}>Classroom</Text>
      </TouchableOpacity>
    </View>
  );

  return <FlatList data={courseDetails} renderItem={renderDropdown} keyExtractor={(item) => item.id} />;
}

const styles = StyleSheet.create({
  dropdown: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  dropdownTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dropdownDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
