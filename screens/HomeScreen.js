// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// const courses = [
//   {
//     id: '1',
//     title: 'English Course',
//     images: [
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/0.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/1.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/2.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/3.jpeg',
//     ],
//     description: ''
  
//   },
  

//   // {
//   //   id: '2',
//   //   title: 'Course 2',
//   //   images: [
//   //     'https://via.placeholder.com/150',
//   //     'https://via.placeholder.com/150',
//   //   ],
//   //   description: 'Description of Course 2',
//   // },
// ];

// // Separate Card Component
// const CourseCard = ({ course, navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < course.images.length - 1) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <View style={styles.card}>
//       <View style={styles.imageContainer}>
//         <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
//           <Text style={styles.arrowText}>‹</Text>
//         </TouchableOpacity>
//         <Image
//           source={{ uri: course.images[currentIndex] }}
//           style={styles.thumbnail}
//         />
//         <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
//           <Text style={styles.arrowText}>›</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.title}>{course.title}</Text>
//       <Text style={styles.description}>{course.description}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
//       >
//         <Text style={styles.buttonText}>Course Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Main Screen
// export default function HomeScreen({ navigation }) {
//   return (
//     <FlatList
//       data={courses}
//       renderItem={({ item }) => <CourseCard course={item} navigation={navigation} />}
//       keyExtractor={(item) => item.id}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     backgroundColor: '#fff',
//     borderRadius: 1,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//     padding: 10,
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   thumbnail: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//   },
//   arrowButton: {
//     width: 30,
//     height: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ddd',
//     borderRadius: 15,
//     marginHorizontal: 5,
//   },
//   arrowText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 5,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
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














// import React, { useState } from 'react';
// import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

// const courses = [
//   {
//     id: '1',
//     title: '📚 English Course',
//     images: [
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/0.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/1.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/2.jpeg',
//       'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/3.jpeg',
//     ],
//     description: '📖 Learn essential grammar and communication skills!'
//   },
// ];

// const CourseCard = ({ course, navigation }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => {
//     if (currentIndex < course.images.length - 1) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   return (
//     <View style={styles.card}>
//       <View style={styles.imageContainer}>
//         <TouchableOpacity onPress={handlePrevious} style={styles.arrowButton}>
//           <Text style={styles.arrowText}>◀️</Text>
//         </TouchableOpacity>
//         <Image
//           source={{ uri: course.images[currentIndex] }}
//           style={styles.thumbnail}
//         />
//         <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
//           <Text style={styles.arrowText}>▶️</Text>
//         </TouchableOpacity>
//       </View>
//       <Text style={styles.title}>{course.title}</Text>
//       <Text style={styles.description}>{course.description}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
//       >
//         <Text style={styles.buttonText}>ℹ️ Course Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default function HomeScreen({ navigation }) {
//   return (
//     <FlatList
//       data={courses}
//       renderItem={({ item }) => <CourseCard course={item} navigation={navigation} />}
//       keyExtractor={(item) => item.id}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   card: {
//     margin: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 5,
//     elevation: 5,
//     padding: 15,
//     alignItems: 'center',
//   },
//   imageContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   thumbnail: {
//     width: 300,
//     height: 200,
//     borderRadius: 10,
//   },
//   arrowButton: {
//     width: 40,
//     height: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#ddd',
//     borderRadius: 20,
//     marginHorizontal: 5,
//   },
//   arrowText: {
//     fontSize: 20,
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginVertical: 5,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//     textAlign: 'center',
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















import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const courses = [
  {
    id: '1',
    title: '📚 English Course',
    images: [
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/0.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/1.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/2.jpeg',
      'https://raw.githubusercontent.com/ajaykumardhurwe/pyqbook/refs/heads/main/pyqbook/3.jpeg',
    ],
    description: '📖 Learn essential grammar and communication skills!'
  },
];

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
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Image
          source={{ uri: course.images[currentIndex] }}
          style={styles.thumbnail}
        />
        <TouchableOpacity onPress={handleNext} style={styles.arrowButton}>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CourseDetails', { courseId: course.id })}
      >
        <Text style={styles.buttonText}>ℹ️ Course Details</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    padding: 15,
    alignItems: 'center',
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
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ddd',
    borderRadius: 20,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 20,
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






















