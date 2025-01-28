
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import * as Papa from "papaparse";

const MCQTest = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vTcG1IAyoPYuUcuy9d0Jdd7ygfngInyr70tBWn1HQ8_3MPm5UCdFG62K47ZU1fZwbWbVr9I9_tCTsl4/pub?gid=0&single=true&output=csv";

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(csvUrl);
      const csvText = await response.text();
      Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const formattedQuestions = result.data.map((row) => ({
            question: row["प्रश्न"],
            options: [row["विकल्प A"], row["विकल्प B"], row["विकल्प C"], row["विकल्प D"]],
            correctAnswer: row["सही उत्तर"],
            explanation: row["व्याख्या"],
          }));
          setQuestions(formattedQuestions);
        },
        error: (error) => {
          Alert.alert(
            "Error",
            "Failed to parse questions. Please check the CSV file format."
          );
          console.error(error);
        },
      });
    } catch (error) {
      Alert.alert(
        "Error",
        "Failed to load questions. Please check the URL or your internet connection."
      );
    }
  };

  const handleAnswerSelection = (option) => {
    if (isTestCompleted || selectedAnswers[currentQuestionIndex]) return;

    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = option === currentQuestion.correctAnswer;

    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestionIndex]: { selected: option, isCorrect },
    }));

    if (isCorrect) setScore((prev) => prev + 1);
  };

  const handleNavigation = (direction) => {
    if (direction === "prev" && currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    } else if (direction === "next" && currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const submitTest = () => {
    setIsTestCompleted(true);
  };

  const restartTest = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setIsTestCompleted(false);
    setScore(0);
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const answer = selectedAnswers[currentQuestionIndex];

    return (
      <View>
        <Text style={styles.questionText}>
          {currentQuestionIndex + 1}. {currentQuestion.question}
        </Text>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              answer?.selected === option
                ? answer.isCorrect
                  ? styles.correctOption
                  : styles.wrongOption
                : null,
            ]}
            onPress={() => handleAnswerSelection(option)}
          >
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderResults = () => (
    <ScrollView>
      {questions.map((q, index) => {
        const answer = selectedAnswers[index];

        return (
          <View key={index} style={styles.resultItem}>
            <Text style={styles.questionText}>
              {index + 1}. {q.question}
            </Text>
            {q.options.map((option, i) => (
              <Text
                key={i}
                style={[
                  styles.optionText,
                  option === q.correctAnswer
                    ? styles.correctAnswer
                    : answer?.selected === option
                    ? styles.wrongAnswer
                    : null,
                ]}
              >
                {option}
              </Text>
            ))}
            <Text style={styles.explanationText}>Explanation: {q.explanation}</Text>
          </View>
        );
      })}
      <Text style={styles.scoreText}>
        Your Score: {score} / {questions.length}
      </Text>
      <TouchableOpacity style={styles.restartButton} onPress={restartTest}>
        <Text style={styles.restartButtonText}>Restart Test</Text>
      </TouchableOpacity>
    </ScrollView>
  );

  if (questions.length === 0) {
    return <Text style={styles.loadingText}>Loading questions...</Text>;
  }

  return (
    <View style={styles.container}>
      {isTestCompleted ? (
        renderResults()
      ) : (
        <>
          {renderQuestion()}
          <View style={styles.navigationButtons}>
            <TouchableOpacity
              style={[styles.navButton, styles.prevButton]}
              onPress={() => handleNavigation("prev")}
              disabled={currentQuestionIndex === 0}
            >
              <Text style={styles.navButtonText}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navButton, styles.skipButton]}
              onPress={() => handleNavigation("next")}
            >
              <Text style={styles.navButtonText}>Skip</Text>
            </TouchableOpacity>
            {currentQuestionIndex === questions.length - 1 ? (
              <TouchableOpacity
                style={[styles.navButton, styles.submitButton]}
                onPress={submitTest}
              >
                <Text style={styles.navButtonText}>Submit</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.navButton, styles.nextButton]}
                onPress={() => handleNavigation("next")}
              >
                <Text style={styles.navButtonText}>Next</Text>
              </TouchableOpacity>
            )}
          </View>
        </>
      )}
    </View>
  );
};

export default MCQTest;

const styles = StyleSheet.create({
 
  // ... (same styles as provided earlier)

    container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  optionButton: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
  },
  selectedOption: {
    backgroundColor: "#d1c4e9",
  },
  optionText: {
    fontSize: 16,
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  navButton: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    minWidth: 100,
  },
  prevButton: {
    backgroundColor: "#2196f3",
  },
  skipButton: {
    backgroundColor: "#ff9800",
  },
  nextButton: {
    backgroundColor: "#4caf50",
  },
  submitButton: {
    backgroundColor: "#f44336",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  navButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongOption: {
    backgroundColor: "red",
  },
  correctAnswer: {
    color: "green",
    fontWeight: "bold",
  },
  wrongAnswer: {
    color: "red",
    fontWeight: "bold",
  },
  explanationText: {
    marginTop: 8,
    fontStyle: "italic",
  },
  scoreText: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  restartButton: {
    backgroundColor: "#2196f3",
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  restartButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  resultItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 4,
    elevation: 3,
  },
  loadingText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
  },

});























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











