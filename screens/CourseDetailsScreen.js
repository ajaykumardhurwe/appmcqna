import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const courseDetails = [
  { id: '1', title: 'Module 1', description: 'Description for Module 1' },
  { id: '2', title: 'Module 2', description: 'Description for Module 2' },
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
