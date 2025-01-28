import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const courses = [
  {
    id: '1',
    title: 'Comprehensive English Learning Topics for All Levels',
    images: [
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/0.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/1.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/2.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/3.jpeg',
    ],
    description: 'Unlock your potential in English with topics designed to enhance your grammar, vocabulary, writing, speaking, and comprehension skills. Whether it’s mastering tenses, improving public speaking, or exploring creative writing, these categories cater to learners of all levels. Dive into literature analysis, practice exam-specific topics, and develop techniques for effective communication. Perfect for students, professionals, and exam aspirants, this guide ensures you gain confidence and expertise in every aspect of English.',
  },
  {
    id: '2',
    title: 'Course 2',
    images: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
    ],
    description: 'Description of Course 2',
  },
];

// Separate Card Component
const CourseCard = ({ course, navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < course.images.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
          <Text style={styles.arrowText}>‹</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: course.images[currentIndex] }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Text style={styles.arrowText}>›</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
      >
        <Text style={styles.buttonText}>Course Details</Text>
      </TouchableOpacity>
    </View>
  );
};

// Main Screen
export default function HomeScreen({ navigation }) {
  return (
    <FlatList
      data={courses}
      renderItem={({ item }) => <CourseCard course={item} navigation={navigation} />}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnail: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  arrowButton: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: 15,
    marginHorizontal: 5,
  },
  arrowText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
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
