import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const GOOGLE_SHEET_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv";

export default function MCQTest() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [attempts, setAttempts] = useState(0);
  const timerRef = useRef();

  // Fetch questions and initialize timer
  useEffect(() => {
    fetch(GOOGLE_SHEET_URL)
      .then((response) => response.text())
      .then((csvData) => {
        const parsedData = parseCSV(csvData);
        const formattedQuestions = parsedData.map((item) => ({
          question: item[0],
          options: [item[1], item[2], item[3], item[4]],
          answer: item[5].trim(),
          explanation: item[6],
        }));
        setQuestions(formattedQuestions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Google Sheet data:", error);
        Alert.alert("Error", "Failed to load questions. Please try again later.");
        setLoading(false);
      });

    // Retrieve attempt count from AsyncStorage
    AsyncStorage.getItem("mcq_attempts").then((value) => {
      if (value) {
        setAttempts(parseInt(value, 10));
      }
    });

    // Start the timer
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timerRef.current);
          handleSubmit(); // Auto-submit when time runs out
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current); // Cleanup timer
  }, []);

  // Parse CSV data
  const parseCSV = (csvData) => {
    const rows = csvData.split("\n");
    return rows.slice(1).map((row) => row.split(","));
  };

  // Handle option selection
  const handleOptionPress = (index) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
  };

  // Handle navigation
  const handleNavigation = (direction) => {
    if (direction === "next" && currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (direction === "prev" && currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Handle submission
  const handleSubmit = () => {
    clearInterval(timerRef.current);
    setShowResult(true);
    setAttempts((prev) => {
      const newAttempts = prev + 1;
      AsyncStorage.setItem("mcq_attempts", newAttempts.toString());
      return newAttempts;
    });
  };

  // Format time for display
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Show loading state
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
        <Text style={styles.loadingText}>Loading questions...</Text>
      </View>
    );
  }

  // Show result screen
  if (showResult) {
    const score = Object.keys(selectedAnswers).reduce((acc, key) => {
      const selectedOption = selectedAnswers[key];
      const correctAnswer = questions[key]?.answer;
      const selectedAnswer = questions[key]?.options[selectedOption];
      return selectedAnswer === correctAnswer ? acc + 1 : acc;
    }, 0);

    return (
      <ScrollView contentContainerStyle={styles.resultContainer}>
        <Text style={styles.resultText}>
          Your Score: {score} / {questions.length}
        </Text>
        <Text style={styles.attemptsText}>Attempts: {attempts}</Text>
        {questions.map((q, index) => (
          <View key={index} style={styles.explanationCard}>
            <Text style={styles.question}>{q.question}</Text>
            <Text
              style={{
                color: q.options[selectedAnswers[index]] === q.answer ? "green" : "red",
              }}
            >
              Your Answer: {q.options[selectedAnswers[index]] || "Skipped"}
            </Text>
            <Text style={styles.explanation}>Explanation: {q.explanation}</Text>
          </View>
        ))}
      </ScrollView>
    );
  }

  // Show question screen
  const currentQ = questions[currentQuestion];

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>Time Left: {formatTime(timeLeft)}</Text>
      <Text style={styles.questionCounter}>
        Question {currentQuestion + 1} / {questions.length}
      </Text>
      <Text style={styles.question}>{currentQ.question}</Text>
      {currentQ.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.option,
            selectedAnswers[currentQuestion] === index &&
              (option === currentQ.answer ? styles.correct : styles.incorrect),
          ]}
          onPress={() => handleOptionPress(index)}
        >
          <Text style={styles.optionText}>{option}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.navContainer}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => handleNavigation("prev")}
          disabled={currentQuestion === 0}
        >
          <Text style={styles.navText}>Prev</Text>
        </TouchableOpacity>

        {currentQuestion === questions.length - 1 ? (
          <TouchableOpacity style={styles.navButton} onPress={handleSubmit}>
            <Text style={styles.navText}>Submit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation("next")}>
            <Text style={styles.navText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f9f9f9",
  },
  timer: {
    fontSize: 16,
    fontWeight: "bold",
    color: "red",
    marginBottom: 8,
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  option: {
    padding: 12,
    marginVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  optionText: {
    fontSize: 16,
  },
  correct: {
    backgroundColor: "#d4edda",
    borderColor: "#28a745",
  },
  incorrect: {
    backgroundColor: "#f8d7da",
    borderColor: "#dc3545",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navButton: {
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#007bff",
  },
  navText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 16,
    color: "#555",
  },
  resultContainer: {
    padding: 16,
    alignItems: "center",
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  attemptsText: {
    fontSize: 16,
    marginBottom: 8,
  },
  explanationCard: {
    marginVertical: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: "#f1f1f1",
  },
  explanation: {
    fontStyle: "italic",
    marginTop: 8,
  },
});











// import React, { useState, useEffect, useRef } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from "react-native";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv";

// export default function MCQTest() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(true);
//   const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
//   const [attempts, setAttempts] = useState(0);
//   const timerRef = useRef();

//   useEffect(() => {
//     fetch(GOOGLE_SHEET_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData);
//         const formattedQuestions = parsedData.map((item) => ({
//           question: item[0],
//           options: [item[1], item[2], item[3], item[4]],
//           answer: item[5].trim(),
//           explanation: item[6],
//         }));
//         setQuestions(formattedQuestions);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching Google Sheet data:", error);
//         Alert.alert("Error", "Failed to load questions. Please try again later.");
//         setLoading(false);
//       });

//     // Retrieve attempt count from AsyncStorage
//     AsyncStorage.getItem("mcq_attempts").then((value) => {
//       if (value) {
//         setAttempts(parseInt(value, 10));
//       }
//     });

//     // Start the timer
//     timerRef.current = setInterval(() => {
//       setTimeLeft((prev) => {
//         if (prev === 1) {
//           clearInterval(timerRef.current);
//           handleSubmit(); // Auto-submit when time runs out
//         }
//         return prev - 1;
//       });
//     }, 1000);

//     return () => clearInterval(timerRef.current); // Cleanup timer
//   }, []);

//   const parseCSV = (csvData) => {
//     const rows = csvData.split("\n");
//     return rows.slice(1).map((row) => row.split(","));
//   };

//   const handleOptionPress = (index) => {
//     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "next" && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else if (direction === "prev" && currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     clearInterval(timerRef.current);
//     setShowResult(true);
//     setAttempts((prev) => {
//       const newAttempts = prev + 1;
//       AsyncStorage.setItem("mcq_attempts", newAttempts.toString());
//       return newAttempts;
//     });
//   };

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text style={styles.loadingText}>Loading questions...</Text>
//       </View>
//     );
//   }

//   if (showResult) {
//     const score = Object.keys(selectedAnswers).reduce((acc, key) => {
//       const selectedOption = selectedAnswers[key];
//       const correctOption = questions[key]?.answer;
//       return questions[key]?.options[selectedOption] === correctOption ? acc + 1 : acc;
//     }, 0);

//     return (
//       <ScrollView contentContainerStyle={styles.resultContainer}>
//         <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
//         <Text style={styles.attemptsText}>Attempts: {attempts}</Text>
//         {questions.map((q, index) => (
//           <View key={index} style={styles.explanationCard}>
//             <Text style={styles.question}>{q.question}</Text>
//             <Text
//               style={{
//                 color: q.options[selectedAnswers[index]] === q.answer ? "green" : "red",
//               }}
//             >
//               Your Answer: {q.options[selectedAnswers[index]] || "Skipped"}
//             </Text>
//             <Text style={styles.explanation}>Explanation: {q.explanation}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.timer}>Time Left: {formatTime(timeLeft)}</Text>
//       <Text style={styles.questionCounter}>
//         Question {currentQuestion + 1} / {questions.length}
//       </Text>
//       <Text style={styles.question}>{currentQ.question}</Text>
//       {currentQ.options.map((option, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.option,
//             selectedAnswers[currentQuestion] === index &&
//               (option === currentQ.answer ? styles.correct : styles.incorrect),
//           ]}
//           onPress={() => handleOptionPress(index)}
//         >
//           <Text style={styles.optionText}>{option}</Text>
//         </TouchableOpacity>
//       ))}

//       <View style={styles.navContainer}>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => handleNavigation("prev")}
//           disabled={currentQuestion === 0}
//         >
//           <Text style={styles.navText}>Prev</Text>
//         </TouchableOpacity>

//         {currentQuestion === questions.length - 1 ? (
//           <TouchableOpacity style={styles.navButton} onPress={handleSubmit}>
//             <Text style={styles.navText}>Submit</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation("next")}>
//             <Text style={styles.navText}>Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   timer: {
//     fontSize: 16,
//     fontWeight: "bold",
//     color: "red",
//     marginBottom: 8,
//   },
//   questionCounter: {
//     fontSize: 16,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   question: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   option: {
//     padding: 12,
//     marginVertical: 6,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: "#fff",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correct: {
//     backgroundColor: "#d4edda",
//     borderColor: "#28a745",
//   },
//   incorrect: {
//     backgroundColor: "#f8d7da",
//     borderColor: "#dc3545",
//   },
//   navContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#007bff",
//   },
//   navText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     marginTop: 8,
//     fontSize: 16,
//     color: "#555",
//   },
//   resultContainer: {
//     padding: 16,
//     alignItems: "center",
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   attemptsText: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   explanationCard: {
//     marginVertical: 8,
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#f1f1f1",
//   },
//   explanation: {
//     fontStyle: "italic",
//     marginTop: 8,
//   },
// });

















// import React, { useState, useEffect } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator, Alert } from "react-native";

// const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSzHWRjBpxk21IxacYqBlHTtryT61R8QC6dDkb8qgYTEBN-LQWCZnuVs-DogFEtNSLZXazPf57xDke4/pub?gid=0&single=true&output=csv";

// export default function MCQTest() {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(GOOGLE_SHEET_URL)
//       .then((response) => response.text())
//       .then((csvData) => {
//         const parsedData = parseCSV(csvData);
//         const formattedQuestions = parsedData.map((item) => ({
//           question: item[0], // Column 1: प्रश्न
//           options: [item[1], item[2], item[3], item[4]], // Column 2-5: विकल्प A-D
//           answer: item[5].trim(), // Column 6: सही उत्तर
//           explanation: item[6], // Column 7: व्याख्या
//         }));
//         setQuestions(formattedQuestions);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching Google Sheet data:", error);
//         Alert.alert("Error", "Failed to load questions. Please try again later.");
//         setLoading(false);
//       });
//   }, []);

//   const parseCSV = (csvData) => {
//     const rows = csvData.split("\n"); // Split into rows
//     return rows.slice(1).map((row) => row.split(",")); // Split each row by commas and skip the header
//   };

//   const handleOptionPress = (index) => {
//     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "next" && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else if (direction === "prev" && currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//   };

//   if (loading) {
//     return (
//       <View style={styles.loadingContainer}>
//         <ActivityIndicator size="large" color="#007bff" />
//         <Text style={styles.loadingText}>Loading questions...</Text>
//       </View>
//     );
//   }

//   if (showResult) {
//     const score = Object.keys(selectedAnswers).reduce((acc, key) => {
//       const selectedOption = selectedAnswers[key];
//       const correctOption = questions[key]?.answer;
//       return questions[key]?.options[selectedOption] === correctOption ? acc + 1 : acc;
//     }, 0);

//     return (
//       <ScrollView contentContainerStyle={styles.resultContainer}>
//         <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
//         {questions.map((q, index) => (
//           <View key={index} style={styles.explanationCard}>
//             <Text style={styles.question}>{q.question}</Text>
//             <Text
//               style={{
//                 color: q.options[selectedAnswers[index]] === q.answer ? "green" : "red",
//               }}
//             >
//               Your Answer: {q.options[selectedAnswers[index]] || "Skipped"}
//             </Text>
//             <Text style={styles.explanation}>Explanation: {q.explanation}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.question}>{currentQ.question}</Text>
//       {currentQ.options.map((option, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.option,
//             selectedAnswers[currentQuestion] === index &&
//               (option === currentQ.answer ? styles.correct : styles.incorrect),
//           ]}
//           onPress={() => handleOptionPress(index)}
//         >
//           <Text style={styles.optionText}>{option}</Text>
//         </TouchableOpacity>
//       ))}

//       <View style={styles.navContainer}>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => handleNavigation("prev")}
//           disabled={currentQuestion === 0}
//         >
//           <Text style={styles.navText}>Prev</Text>
//         </TouchableOpacity>

//         {currentQuestion === questions.length - 1 ? (
//           <TouchableOpacity style={styles.navButton} onPress={handleSubmit}>
//             <Text style={styles.navText}>Submit</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation("next")}>
//             <Text style={styles.navText}>Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   question: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   option: {
//     padding: 12,
//     marginVertical: 6,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     backgroundColor: "#fff",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correct: {
//     backgroundColor: "#d4edda",
//     borderColor: "#28a745",
//   },
//   incorrect: {
//     backgroundColor: "#f8d7da",
//     borderColor: "#dc3545",
//   },
//   navContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#007bff",
//   },
//   navText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     marginTop: 8,
//     fontSize: 16,
//     color: "#555",
//   },
//   resultContainer: {
//     padding: 16,
//     alignItems: "center",
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   explanationCard: {
//     marginVertical: 8,
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#f1f1f1",
//   },
//   explanation: {
//     fontStyle: "italic",
//     marginTop: 8,
//   },
// });










// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';

// const questions = [
//   {
//     id: 1,
//     question: "What is the capital of India?",
//     options: ["Mumbai", "Delhi", "Chennai", "Kolkata"],
//     answer: 1, // Index of correct option
//     explanation: "Delhi is the capital of India."
//   },
//   {
//     id: 2,
//     question: "What is the national animal of India?",
//     options: ["Tiger", "Elephant", "Peacock", "Lion"],
//     answer: 0,
//     explanation: "Tiger is the national animal of India."
//   },
//   {
//     id: 3,
//     question: "What is the currency of India?",
//     options: ["Rupee", "Dollar", "Euro", "Yen"],
//     answer: 0,
//     explanation: "The currency of India is the Indian Rupee."
//   },
// ];

// export default function MCQTest() {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [showResult, setShowResult] = useState(false);

//   const handleOptionPress = (index) => {
//     setSelectedAnswers({ ...selectedAnswers, [currentQuestion]: index });
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "next" && currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else if (direction === "prev" && currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     }
//   };

//   const handleSubmit = () => {
//     setShowResult(true);
//   };

//   if (showResult) {
//     const score = Object.keys(selectedAnswers).reduce((acc, key) => {
//       return questions[key].answer === selectedAnswers[key] ? acc + 1 : acc;
//     }, 0);

//     return (
//       <ScrollView contentContainerStyle={styles.resultContainer}>
//         <Text style={styles.resultText}>Your Score: {score} / {questions.length}</Text>
//         {questions.map((q, index) => (
//           <View key={q.id} style={styles.explanationCard}>
//             <Text style={styles.question}>{q.question}</Text>
//             <Text style={{ color: q.answer === selectedAnswers[index] ? "green" : "red" }}>
//               Your Answer: {q.options[selectedAnswers[index]] || "Skipped"}
//             </Text>
//             <Text style={styles.explanation}>Explanation: {q.explanation}</Text>
//           </View>
//         ))}
//       </ScrollView>
//     );
//   }

//   const currentQ = questions[currentQuestion];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.question}>{currentQ.question}</Text>
//       {currentQ.options.map((option, index) => (
//         <TouchableOpacity
//           key={index}
//           style={[
//             styles.option,
//             selectedAnswers[currentQuestion] === index &&
//               (index === currentQ.answer ? styles.correct : styles.incorrect),
//           ]}
//           onPress={() => handleOptionPress(index)}
//         >
//           <Text style={styles.optionText}>{option}</Text>
//         </TouchableOpacity>
//       ))}

//       <View style={styles.navContainer}>
//         <TouchableOpacity
//           style={styles.navButton}
//           onPress={() => handleNavigation("prev")}
//           disabled={currentQuestion === 0}
//         >
//           <Text style={styles.navText}>Prev</Text>
//         </TouchableOpacity>

//         {currentQuestion === questions.length - 1 ? (
//           <TouchableOpacity style={styles.navButton} onPress={handleSubmit}>
//             <Text style={styles.navText}>Submit</Text>
//           </TouchableOpacity>
//         ) : (
//           <TouchableOpacity style={styles.navButton} onPress={() => handleNavigation("next")}>
//             <Text style={styles.navText}>Next</Text>
//           </TouchableOpacity>
//         )}
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//   },
//   question: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 12,
//   },
//   option: {
//     padding: 12,
//     marginVertical: 6,
//     borderRadius: 8,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     backgroundColor: '#fff',
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correct: {
//     backgroundColor: '#d4edda',
//     borderColor: '#28a745',
//   },
//   incorrect: {
//     backgroundColor: '#f8d7da',
//     borderColor: '#dc3545',
//   },
//   navContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: '#007bff',
//   },
//   navText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   resultContainer: {
//     padding: 16,
//     alignItems: 'center',
//   },
//   resultText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//   },
//   explanationCard: {
//     marginVertical: 8,
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: '#f1f1f1',
//   },
//   explanation: {
//     fontStyle: 'italic',
//     marginTop: 8,
//   },
// });















// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse";

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert(
//             "Error",
//             "Failed to parse questions. Please check the CSV file format."
//           );
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         "Failed to load questions. Please check the URL or your internet connection."
//       );
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     if (isTestCompleted || selectedAnswers[currentQuestionIndex]) return;

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "prev" && currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     } else if (direction === "next" && currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   const submitTest = () => {
//     setIsTestCompleted(true);
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const answer = selectedAnswers[currentQuestionIndex];

//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               answer?.selected === option
//                 ? answer.isCorrect
//                   ? styles.correctOption
//                   : styles.wrongOption
//                 : null,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>
//               {index + 1}. {q.question}
//             </Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>
//         Your Score: {score} / {questions.length}
//       </Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? (
//         renderResults()
//       ) : (
//         <>
//           {renderQuestion()}
//           <View style={styles.navigationButtons}>
//             <TouchableOpacity
//               style={[styles.navButton, styles.prevButton]}
//               onPress={() => handleNavigation("prev")}
//               disabled={currentQuestionIndex === 0}
//             >
//               <Text style={styles.navButtonText}>Previous</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.navButton, styles.skipButton]}
//               onPress={() => handleNavigation("next")}
//             >
//               <Text style={styles.navButtonText}>Skip</Text>
//             </TouchableOpacity>
//             {currentQuestionIndex === questions.length - 1 ? (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.submitButton]}
//                 onPress={submitTest}
//               >
//                 <Text style={styles.navButtonText}>Submit</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.nextButton]}
//                 onPress={() => handleNavigation("next")}
//               >
//                 <Text style={styles.navButtonText}>Next</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
 
//   // ... (same styles as provided earlier)

//     container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     minWidth: 100,
//   },
//   prevButton: {
//     backgroundColor: "#2196f3",
//   },
//   skipButton: {
//     backgroundColor: "#ff9800",
//   },
//   nextButton: {
//     backgroundColor: "#4caf50",
//   },
//   submitButton: {
//     backgroundColor: "#f44336",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   navButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   correctOption: {
//     backgroundColor: "green",
//   },
//   wrongOption: {
//     backgroundColor: "red",
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },

// });























// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse";

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert(
//             "Error",
//             "Failed to parse questions. Please check the CSV file format."
//           );
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         "Failed to load questions. Please check the URL or your internet connection."
//       );
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     if (isTestCompleted || selectedAnswers[currentQuestionIndex]) return;

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "prev" && currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     } else if (direction === "next" && currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   const submitTest = () => {
//     setIsTestCompleted(true);
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const answer = selectedAnswers[currentQuestionIndex];

//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               answer?.selected === option
//                 ? answer.isCorrect
//                   ? styles.correctOption
//                   : styles.wrongOption
//                 : null,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//         {answer && (
//           <Text style={styles.explanationText}>
//             Explanation: {currentQuestion.explanation}
//           </Text>
//         )}
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>
//               {index + 1}. {q.question}
//             </Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>
//         Your Score: {score} / {questions.length}
//       </Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? (
//         renderResults()
//       ) : (
//         <>
//           {renderQuestion()}
//           <View style={styles.navigationButtons}>
//             <TouchableOpacity
//               style={[styles.navButton, styles.prevButton]}
//               onPress={() => handleNavigation("prev")}
//               disabled={currentQuestionIndex === 0}
//             >
//               <Text style={styles.navButtonText}>Previous</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.navButton, styles.skipButton]}
//               onPress={() => handleNavigation("next")}
//             >
//               <Text style={styles.navButtonText}>Skip</Text>
//             </TouchableOpacity>
//             {currentQuestionIndex === questions.length - 1 ? (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.submitButton]}
//                 onPress={submitTest}
//               >
//                 <Text style={styles.navButtonText}>Submit</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.nextButton]}
//                 onPress={() => handleNavigation("next")}
//               >
//                 <Text style={styles.navButtonText}>Next</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     minWidth: 100,
//   },
//   prevButton: {
//     backgroundColor: "#2196f3",
//   },
//   skipButton: {
//     backgroundColor: "#ff9800",
//   },
//   nextButton: {
//     backgroundColor: "#4caf50",
//   },
//   submitButton: {
//     backgroundColor: "#f44336",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   navButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   correctOption: {
//     backgroundColor: "green",
//   },
//   wrongOption: {
//     backgroundColor: "red",
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });



































// import React, { useState } from 'react';
// import { View, Text, Button } from 'react-native';

// const mockQuestions = [
//   {
//     question: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम क्या है?',
//     options: ['हिंदुस्तान', 'भारत गणराज्य', 'भारतीय संघ', 'भारतीय लोकतंत्र'],
//     answer: 1,
//     explanation: 'अनुच्छेद 1 के अनुसार, भारत का आधिकारिक नाम "भारत गणराज्य" है।',
//   },
//   // Add more questions here
// ];

// export default function MCQTest({ route }) {
//   const { topic } = route.params;
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNext = () => setCurrentIndex((prev) => Math.min(prev + 1, mockQuestions.length - 1));
//   const handlePrev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

//   const currentQuestion = mockQuestions[currentIndex];

//   return (
//     <View className="p-4">
//       <Text className="font-bold">{currentQuestion.question}</Text>
//       {currentQuestion.options.map((option, index) => (
//         <Button key={index} title={option} onPress={() => {}} />
//       ))}
//       <View className="flex-row justify-between mt-4">
//         <Button title="Previous" onPress={handlePrev} />
//         <Button title="Next" onPress={handleNext} />
//       </View>
//     </View>
//   );
// }










// import React, { useEffect, useState } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";
// import { useRoute } from "@react-navigation/native";

// const MCQTest = () => {
//   const route = useRoute();
//   const { subjectTitle } = route.params; // Get the subject title passed from the previous screen
//   const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     // Example logic to fetch questions for the selected subject
//     if (subjectTitle === "Indian Constitution") {
//       setQuestions([
//         { question: "What is Part II of the Indian Constitution?", options: ["Answer 1", "Answer 2", "Answer 3"] },
//         { question: "What is Part III of the Indian Constitution?", options: ["Answer 1", "Answer 2", "Answer 3"] },
//         // Add more questions...
//       ]);
//     } else {
//       setQuestions([
//         { question: "Question for another subject?", options: ["Answer A", "Answer B", "Answer C"] },
//         // Add more questions for other subjects...
//       ]);
//     }
//   }, [subjectTitle]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.heading}>MCQ Test for {subjectTitle}</Text>

//       {questions.map((q, index) => (
//         <View key={index} style={styles.questionContainer}>
//           <Text style={styles.question}>{q.question}</Text>
//           {q.options.map((option, idx) => (
//             <Button key={idx} title={option} onPress={() => alert(`Selected: ${option}`)} />
//           ))}
//         </View>
//       ))}
//     </View>
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
//   questionContainer: {
//     marginBottom: 15,
//   },
//   question: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
// });

// export default MCQTest;









// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const sheetUrl = "https://docs.google.com/spreadsheets/d/<SHEET_ID>/gviz/tq?tqx=out:json";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(sheetUrl);
//       const text = await response.text();
//       const json = JSON.parse(text.substring(47).slice(0, -2)); // Parse Google Sheets JSON
//       const rows = json.table.rows.map((row) => ({
//         question: row.c[0].v,
//         options: [row.c[1].v, row.c[2].v, row.c[3].v, row.c[4].v],
//         correctAnswer: row.c[5].v,
//         explanation: row.c[6].v,
//       }));
//       setQuestions(rows);
//     } catch (error) {
//       Alert.alert("Error", "Failed to load questions. Please try again.");
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     if (isTestCompleted) return;

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);

//     // Navigate to the next question or complete the test
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               selectedAnswers[currentQuestionIndex]?.selected === option &&
//                 styles.selectedOption,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];
//         const isCorrect = answer?.isCorrect;

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>{index + 1}. {q.question}</Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? renderResults() : renderQuestion()}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });















// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse"; // To parse CSV data

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert("Error", "Failed to parse questions. Please check the CSV file format.");
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert("Error", "Failed to load questions. Please check the URL or your internet connection.");
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     if (isTestCompleted) return;

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);

//     // Navigate to the next question or complete the test
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               selectedAnswers[currentQuestionIndex]?.selected === option &&
//                 styles.selectedOption,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];
//         const isCorrect = answer?.isCorrect;

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>{index + 1}. {q.question}</Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? renderResults() : renderQuestion()}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });












// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse"; // To parse CSV data

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert("Error", "Failed to parse questions. Please check the CSV file format.");
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert("Error", "Failed to load questions. Please check the URL or your internet connection.");
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     }
//   };

//   const handleSkip = () => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: null, isCorrect: false },
//     }));
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               selectedAnswers[currentQuestionIndex]?.selected === option &&
//                 styles.selectedOption,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//         <View style={styles.navigationButtons}>
//           <TouchableOpacity
//             style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
//             onPress={handlePrev}
//             disabled={currentQuestionIndex === 0}
//           >
//             <Text style={styles.navButtonText}>Prev</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navButton} onPress={handleSkip}>
//             <Text style={styles.navButtonText}>Skip</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.navButton, currentQuestionIndex >= questions.length - 1 && styles.disabledButton]}
//             onPress={handleNext}
//             disabled={currentQuestionIndex >= questions.length - 1}
//           >
//             <Text style={styles.navButtonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];
//         const isCorrect = answer?.isCorrect;

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>{index + 1}. {q.question}</Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? renderResults() : renderQuestion()}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//   },
//   navButton: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     flex: 1,
//     marginHorizontal: 4,
//   },
//   disabledButton: {
//     backgroundColor: "#c0c0c0",
//   },
//   navButtonText: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });
























// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse"; // To parse CSV data

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert("Error", "Failed to parse questions. Please check the CSV file format.");
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert("Error", "Failed to load questions. Please check the URL or your internet connection.");
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   const handleNext = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     }
//   };

//   const handleSkip = () => {
//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: null, isCorrect: false },
//     }));
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     } else {
//       setIsTestCompleted(true);
//     }
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               selectedAnswers[currentQuestionIndex]?.selected === option &&
//                 styles.selectedOption,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//         <View style={styles.navigationButtons}>
//           <TouchableOpacity
//             style={[styles.navButton, currentQuestionIndex === 0 && styles.disabledButton]}
//             onPress={handlePrev}
//             disabled={currentQuestionIndex === 0}
//           >
//             <Text style={styles.navButtonText}>Prev</Text>
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.navButton} onPress={handleSkip}>
//             <Text style={styles.navButtonText}>Skip</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[styles.navButton, currentQuestionIndex >= questions.length - 1 && styles.disabledButton]}
//             onPress={handleNext}
//             disabled={currentQuestionIndex >= questions.length - 1}
//           >
//             <Text style={styles.navButtonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];
//         const isCorrect = answer?.isCorrect;

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>{index + 1}. {q.question}</Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? renderResults() : renderQuestion()}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginTop: 16,
//   },
//   navButton: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 8,
//     alignItems: "center",
//     flex: 1,
//     marginHorizontal: 4,
//   },
//   disabledButton: {
//     backgroundColor: "#c0c0c0",
//   },
//   navButtonText: {
//     color: "#fff",
//     fontSize: 14,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });

















// import React, { useState, useEffect } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
//   Alert,
// } from "react-native";
// import * as Papa from "papaparse"; // To parse CSV data

// const MCQTest = () => {
//   const [questions, setQuestions] = useState([]);
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedAnswers, setSelectedAnswers] = useState({});
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);

//   const csvUrl =
//     "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

//   useEffect(() => {
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () => {
//     try {
//       const response = await fetch(csvUrl);
//       const csvText = await response.text();
//       Papa.parse(csvText, {
//         header: true,
//         skipEmptyLines: true,
//         complete: (result) => {
//           const formattedQuestions = result.data.map((row) => ({
//             question: row["प्रश्न"],
//             options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
//             correctAnswer: row["सही उत्तर"],
//             explanation: row["व्याख्या"],
//           }));
//           setQuestions(formattedQuestions);
//         },
//         error: (error) => {
//           Alert.alert(
//             "Error",
//             "Failed to parse questions. Please check the CSV file format."
//           );
//           console.error(error);
//         },
//       });
//     } catch (error) {
//       Alert.alert(
//         "Error",
//         "Failed to load questions. Please check the URL or your internet connection."
//       );
//     }
//   };

//   const handleAnswerSelection = (option) => {
//     if (isTestCompleted) return;

//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = option === currentQuestion.correctAnswer;

//     setSelectedAnswers((prev) => ({
//       ...prev,
//       [currentQuestionIndex]: { selected: option, isCorrect },
//     }));

//     if (isCorrect) setScore((prev) => prev + 1);
//   };

//   const handleNavigation = (direction) => {
//     if (direction === "prev" && currentQuestionIndex > 0) {
//       setCurrentQuestionIndex((prev) => prev - 1);
//     } else if (direction === "next" && currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex((prev) => prev + 1);
//     }
//   };

//   const submitTest = () => {
//     setIsTestCompleted(true);
//   };

//   const restartTest = () => {
//     setSelectedAnswers({});
//     setCurrentQuestionIndex(0);
//     setIsTestCompleted(false);
//     setScore(0);
//   };

//   const renderQuestion = () => {
//     const currentQuestion = questions[currentQuestionIndex];
//     return (
//       <View>
//         <Text style={styles.questionText}>
//           {currentQuestionIndex + 1}. {currentQuestion.question}
//         </Text>
//         {currentQuestion.options.map((option, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.optionButton,
//               selectedAnswers[currentQuestionIndex]?.selected === option &&
//                 styles.selectedOption,
//             ]}
//             onPress={() => handleAnswerSelection(option)}
//           >
//             <Text style={styles.optionText}>{option}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     );
//   };

//   const renderResults = () => (
//     <ScrollView>
//       {questions.map((q, index) => {
//         const answer = selectedAnswers[index];
//         const isCorrect = answer?.isCorrect;

//         return (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.questionText}>{index + 1}. {q.question}</Text>
//             {q.options.map((option, i) => (
//               <Text
//                 key={i}
//                 style={[
//                   styles.optionText,
//                   option === q.correctAnswer
//                     ? styles.correctAnswer
//                     : answer?.selected === option
//                     ? styles.wrongAnswer
//                     : null,
//                 ]}
//               >
//                 {option}
//               </Text>
//             ))}
//             <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
//           </View>
//         );
//       })}
//       <Text style={styles.scoreText}>Your Score: {score} / {questions.length}</Text>
//       <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
//         <Text style={styles.restartButtonText}>Restart Test</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );

//   if (questions.length === 0) {
//     return <Text style={styles.loadingText}>Loading questions...</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       {isTestCompleted ? (
//         renderResults()
//       ) : (
//         <>
//           {renderQuestion()}
//           <View style={styles.navigationButtons}>
//             <TouchableOpacity
//               style={[styles.navButton, styles.prevButton]}
//               onPress={() => handleNavigation("prev")}
//               disabled={currentQuestionIndex === 0}
//             >
//               <Text style={styles.navButtonText}>Previous</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={[styles.navButton, styles.skipButton]}
//               onPress={() => handleNavigation("next")}
//             >
//               <Text style={styles.navButtonText}>Skip</Text>
//             </TouchableOpacity>
//             {currentQuestionIndex === questions.length - 1 ? (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.submitButton]}
//                 onPress={submitTest}
//               >
//                 <Text style={styles.navButtonText}>Submit</Text>
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity
//                 style={[styles.navButton, styles.nextButton]}
//                 onPress={() => handleNavigation("next")}
//               >
//                 <Text style={styles.navButtonText}>Next</Text>
//               </TouchableOpacity>
//             )}
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// export default MCQTest;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#f5f5f5",
//   },
//   questionText: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 12,
//   },
//   optionButton: {
//     padding: 12,
//     marginVertical: 8,
//     backgroundColor: "#e0e0e0",
//     borderRadius: 8,
//   },
//   selectedOption: {
//     backgroundColor: "#d1c4e9",
//   },
//   optionText: {
//     fontSize: 16,
//   },
//   navigationButtons: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     marginTop: 20,
//   },
//   navButton: {
//     padding: 12,
//     borderRadius: 8,
//     alignItems: "center",
//     minWidth: 100,
//   },
//   prevButton: {
//     backgroundColor: "#2196f3",
//   },
//   skipButton: {
//     backgroundColor: "#ff9800",
//   },
//   nextButton: {
//     backgroundColor: "#4caf50",
//   },
//   submitButton: {
//     backgroundColor: "#f44336",
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 5,
//     elevation: 5,
//   },
//   navButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   correctAnswer: {
//     color: "green",
//     fontWeight: "bold",
//   },
//   wrongAnswer: {
//     color: "red",
//     fontWeight: "bold",
//   },
//   explanationText: {
//     marginTop: 8,
//     fontStyle: "italic",
//   },
//   scoreText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginVertical: 16,
//   },
//   restartButton: {
//     backgroundColor: "#2196f3",
//     padding: 16,
//     borderRadius: 8,
//     alignItems: "center",
//   },
//   restartButtonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   resultItem: {
//     marginBottom: 16,
//     padding: 16,
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 1 },
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   loadingText: {
//     fontSize: 18,
//     textAlign: "center",
//     marginTop: 20,
//   },
// });











