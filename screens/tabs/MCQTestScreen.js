// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function MCQTestScreen() {
//   return (
//     <View style={styles.container}>
//       <Text>MCQ Test Content</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });







// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// const MCQTestScreen = ({ navigation }) => {
//   // Test questions data (example, replace with real data)
//   const questions = [
//       {
//         question: "Which of the following is a noun?",
//         options: ["Run", "Happiness", "Quickly", "Beautiful"],
//         answer: "Happiness",
//         explanation: "Happiness is a noun, which is a person, place, thing, or idea."
//       },
//       {
//         question: "What part of speech is the word 'quickly'?",
//         options: ["Adjective", "Adverb", "Verb", "Noun"],
//         answer: "Adverb",
//         explanation: "'Quickly' is an adverb because it describes how an action is performed."
//       },
//       {
//         question: "Which of the following is a preposition?",
//         options: ["Before", "Is", "Beautiful", "Run"],
//         answer: "Before",
//         explanation: "'Before' is a preposition because it shows the relationship between two elements."
//       },
//       {
//         question: "Which sentence is in the Present Continuous Tense?",
//         options: ["She runs every morning.", "She is running right now.", "She will run tomorrow.", "She ran yesterday."],
//         answer: "She is running right now.",
//         explanation: "The Present Continuous tense describes an action happening at the moment of speaking."
//       },
//       {
//         question: "What is the correct form of the verb for Past Perfect tense?",
//         options: ["Has run", "Had run", "Will run", "Running"],
//         answer: "Had run",
//         explanation: "The Past Perfect tense indicates an action completed before another past action."
//       },
//       {
//         question: "Which sentence is in the Future Perfect Tense?",
//         options: ["I will have finished the homework by 7 PM.", "I am going to finish the homework.", "I finished the homework.", "I will finish the homework."],
//         answer: "I will have finished the homework by 7 PM.",
//         explanation: "The Future Perfect tense indicates an action that will be completed before a certain time in the future."
//       },
//       {
//         question: "Which sentence is a compound sentence?",
//         options: ["I like to read books.", "I like to read books, and I also enjoy writing.", "While I read books, I listen to music.", "If I read books, I learn."],
//         answer: "I like to read books, and I also enjoy writing.",
//         explanation: "A compound sentence consists of two independent clauses joined by a conjunction."
//       },
//       {
//         question: "What is the subject in the sentence 'She writes letters'?",
//         options: ["She", "Writes", "Letters", "None of these"],
//         answer: "She",
//         explanation: "The subject of a sentence tells who or what the sentence is about."
//       },
//       {
//         question: "Which sentence is in the imperative form?",
//         options: ["Do your homework.", "What is your name?", "I am doing my homework.", "I did my homework."],
//         answer: "Do your homework.",
//         explanation: "Imperative sentences give commands or requests."
//       },
//       {
//         question: "Which of the following is a definite article?",
//         options: ["A", "An", "The", "None of these"],
//         answer: "The",
//         explanation: "'The' is a definite article used to refer to specific nouns."
//       },
//       {
//         question: "Which sentence correctly uses the article 'an'?",
//         options: ["She ate an apple.", "She ate a apple.", "He ate an banana.", "He ate a banana."],
//         answer: "She ate an apple.",
//         explanation: "'An' is used before words that begin with a vowel sound."
//       },
//       {
//         question: "What is the possessive determiner in the sentence 'This is my book'?",
//         options: ["This", "Is", "My", "Book"],
//         answer: "My",
//         explanation: "'My' is a possessive determiner showing ownership."
//       },
//       {
//         question: "Convert this sentence to passive voice: 'The teacher explains the lesson.'",
//         options: ["The lesson is explained by the teacher.", "The teacher is explained the lesson.", "The lesson explained by the teacher.", "The lesson will explain the teacher."],
//         answer: "The lesson is explained by the teacher.",
//         explanation: "In passive voice, the object becomes the subject, and the action is performed by the subject."
//       },
//       {
//         question: "Which of the following sentences is in passive voice?",
//         options: ["The dog chased the ball.", "The ball was chased by the dog.", "The dog is chasing the ball.", "The dog has chased the ball."],
//         answer: "The ball was chased by the dog.",
//         explanation: "In passive voice, the subject of the sentence receives the action rather than performing it."
//       },
//       {
//         question: "Which sentence is in active voice?",
//         options: ["The homework was completed by John.", "John completed the homework.", "The homework is completed by John.", "The homework will be completed by John."],
//         answer: "John completed the homework.",
//         explanation: "In active voice, the subject performs the action."
//       },
//       {
//         question: "Convert this sentence to indirect speech: 'She said, 'I am going to the store.''",
//         options: ["She said that she was going to the store.", "She said that she is going to the store.", "She says that she was going to the store.", "She said she going to the store."],
//         answer: "She said that she was going to the store.",
//         explanation: "In indirect speech, the reporting verb changes to the past tense and the quotation marks are removed."
//       },
//       {
//         question: "Which of the following is the correct indirect speech for: 'He asked, 'Where is the station?''",
//         options: ["He asked where the station is.", "He asked where the station was.", "He asked where was the station.", "He asked where the station."],
//         answer: "He asked where the station was.",
//         explanation: "In indirect speech, the question form is replaced with a statement form and the tense is changed."
//       },
//       {
//         question: "What is the correct transformation of: 'I will do my homework tomorrow' in indirect speech?",
//         options: ["He said he will do his homework tomorrow.", "He said he would do his homework tomorrow.", "He says he will do his homework tomorrow.", "He said he does his homework tomorrow."],
//         answer: "He said he would do his homework tomorrow.",
//         explanation: "In indirect speech, 'will' changes to 'would.'"
//       }
    
    

//     // Add more questions for each topic...
//   ];

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [score, setScore] = useState(0);
//   const [showResults, setShowResults] = useState(false);
//   const [timeRemaining, setTimeRemaining] = useState(300); // 5 minutes in seconds

//   // Timer function
//   useEffect(() => {
//     if (timeRemaining === 0) {
//       handleEndTest();
//     }
//     const timer = setInterval(() => {
//       setTimeRemaining((prevTime) => prevTime - 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [timeRemaining]);

//   const handleNext = () => {
//     if (selectedOption === null) {
//       Alert.alert('Please select an answer before proceeding.');
//       return;
//     }

//     // Check if the selected option is correct
//     if (selectedOption === questions[currentQuestionIndex].answer) {
//       setScore(score + 1);
//     }

//     // Move to the next question
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       handleEndTest();
//     }

//     setSelectedOption(null);
//   };

//   const handlePrev = () => {
//     if (currentQuestionIndex > 0) {
//       setCurrentQuestionIndex(currentQuestionIndex - 1);
//     }
//   };

//   const handleSkip = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       handleEndTest();
//     }
//     setSelectedOption(null);
//   };

//   const handleEndTest = () => {
//     setShowResults(true);
//   };

//   const renderResults = () => {
//     return (
//       <View style={styles.resultsContainer}>
//         <Text style={styles.heading}>Test Completed 🎉</Text>
//         <Text style={styles.text}>Your Score: {score}/{questions.length}</Text>
//         <Text style={styles.text}>Time Taken: {300 - timeRemaining} seconds</Text>
//         {questions.map((question, index) => (
//           <View key={index} style={styles.resultItem}>
//             <Text style={styles.text}>
//               {index + 1}. {question.question}
//             </Text>
//             <Text style={styles.text}>
//               <MaterialCommunityIcons name={question.answer === selectedOption ? "check-circle" : "cancel"} size={20} color={question.answer === selectedOption ? "green" : "red"} /> 
//               {selectedOption ? `Your Answer: ${selectedOption}` : ""}
//             </Text>
//             <Text style={styles.text}>Explanation: {question.explanation}</Text>
//           </View>
//         ))}
//         <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
//           <Text style={styles.buttonText}>Go Back</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {!showResults ? (
//         <View>
//           <Text style={styles.heading}>{questions[currentQuestionIndex].question}</Text>
//           <View style={styles.optionsContainer}>
//             {questions[currentQuestionIndex].options.map((option, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[
//                   styles.optionButton,
//                   { backgroundColor: selectedOption === option ? (option === questions[currentQuestionIndex].answer ? 'green' : 'red') : '#f0f0f0' },
//                 ]}
//                 onPress={() => setSelectedOption(option)}
//               >
//                 <Text style={styles.optionText}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>

//           <View style={styles.buttonsContainer}>
//             <TouchableOpacity style={styles.navButton} onPress={handlePrev}>
//               <MaterialCommunityIcons name="arrow-left" size={30} color="white" />
//               <Text style={styles.navButtonText}>Prev</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navButton} onPress={handleSkip}>
//               <MaterialCommunityIcons name="skip-next" size={30} color="white" />
//               <Text style={styles.navButtonText}>Skip</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.navButton} onPress={handleNext}>
//               <MaterialCommunityIcons name="arrow-right" size={30} color="white" />
//               <Text style={styles.navButtonText}>Next</Text>
//             </TouchableOpacity>
//           </View>

//           <Text style={styles.timerText}>Time Remaining: {Math.floor(timeRemaining / 60)}:{timeRemaining % 60}</Text>
//         </View>
//       ) : (
//         renderResults()
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     flex: 1,
//     justifyContent: 'center',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   optionButton: {
//     padding: 10,
//     marginVertical: 5,
//     borderRadius: 5,
//   },
//   optionText: {
//     fontSize: 18,
//     textAlign: 'center',
//   },
//   optionsContainer: {
//     marginTop: 20,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   navButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//   },
//   navButtonText: {
//     color: 'white',
//     fontSize: 16,
//     marginLeft: 5,
//   },
//   timerText: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginTop: 20,
//     color: '#FF6347',
//   },
//   resultsContainer: {
//     padding: 20,
//   },
//   resultItem: {
//     marginBottom: 20,
//   },
//   text: {
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     textAlign: 'center',
//   },
// });

// export default MCQTestScreen;


































// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

// const MCQTestScreen = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(300); // 5 minutes timer
//   const [isTimerActive, setIsTimerActive] = useState(true);
  
//   const questions = [
//     {
//       question: "Which of the following is a noun?",
//       options: ["Run", "Happiness", "Quickly", "Beautiful"],
//       answer: "Happiness",
//       explanation: "Happiness is a noun, which is a person, place, thing, or idea."
//     },
//     {
//       question: "What part of speech is the word 'quickly'?",
//       options: ["Adjective", "Adverb", "Verb", "Noun"],
//       answer: "Adverb",
//       explanation: "'Quickly' is an adverb because it describes how an action is performed."
//     },
//     {
//       question: "Which of the following is a preposition?",
//       options: ["Before", "Is", "Beautiful", "Run"],
//       answer: "Before",
//       explanation: "'Before' is a preposition because it shows the relationship between two elements."
//     },
//     {
//       question: "Which sentence is in the Present Continuous Tense?",
//       options: ["She runs every morning.", "She is running right now.", "She will run tomorrow.", "She ran yesterday."],
//       answer: "She is running right now.",
//       explanation: "The Present Continuous tense describes an action happening at the moment of speaking."
//     },
//     {
//       question: "What is the correct form of the verb for Past Perfect tense?",
//       options: ["Has run", "Had run", "Will run", "Running"],
//       answer: "Had run",
//       explanation: "The Past Perfect tense indicates an action completed before another past action."
//     },
//     {
//       question: "Which sentence is in the Future Perfect Tense?",
//       options: ["I will have finished the homework by 7 PM.", "I am going to finish the homework.", "I finished the homework.", "I will finish the homework."],
//       answer: "I will have finished the homework by 7 PM.",
//       explanation: "The Future Perfect tense indicates an action that will be completed before a certain time in the future."
//     },
//     {
//       question: "Which sentence is a compound sentence?",
//       options: ["I like to read books.", "I like to read books, and I also enjoy writing.", "While I read books, I listen to music.", "If I read books, I learn."],
//       answer: "I like to read books, and I also enjoy writing.",
//       explanation: "A compound sentence consists of two independent clauses joined by a conjunction."
//     },
//     {
//       question: "What is the subject in the sentence 'She writes letters'?",
//       options: ["She", "Writes", "Letters", "None of these"],
//       answer: "She",
//       explanation: "The subject of a sentence tells who or what the sentence is about."
//     },
//     {
//       question: "Which sentence is in the imperative form?",
//       options: ["Do your homework.", "What is your name?", "I am doing my homework.", "I did my homework."],
//       answer: "Do your homework.",
//       explanation: "Imperative sentences give commands or requests."
//     },
//     {
//       question: "Which of the following is a definite article?",
//       options: ["A", "An", "The", "None of these"],
//       answer: "The",
//       explanation: "'The' is a definite article used to refer to specific nouns."
//     },
//     {
//       question: "Which sentence correctly uses the article 'an'?",
//       options: ["She ate an apple.", "She ate a apple.", "He ate an banana.", "He ate a banana."],
//       answer: "She ate an apple.",
//       explanation: "'An' is used before words that begin with a vowel sound."
//     },
//     {
//       question: "What is the possessive determiner in the sentence 'This is my book'?",
//       options: ["This", "Is", "My", "Book"],
//       answer: "My",
//       explanation: "'My' is a possessive determiner showing ownership."
//     },
//     {
//       question: "Convert this sentence to passive voice: 'The teacher explains the lesson.'",
//       options: ["The lesson is explained by the teacher.", "The teacher is explained the lesson.", "The lesson explained by the teacher.", "The lesson will explain the teacher."],
//       answer: "The lesson is explained by the teacher.",
//       explanation: "In passive voice, the object becomes the subject, and the action is performed by the subject."
//     },
//     {
//       question: "Which of the following sentences is in passive voice?",
//       options: ["The dog chased the ball.", "The ball was chased by the dog.", "The dog is chasing the ball.", "The dog has chased the ball."],
//       answer: "The ball was chased by the dog.",
//       explanation: "In passive voice, the subject of the sentence receives the action rather than performing it."
//     },
//     {
//       question: "Which sentence is in active voice?",
//       options: ["The homework was completed by John.", "John completed the homework.", "The homework is completed by John.", "The homework will be completed by John."],
//       answer: "John completed the homework.",
//       explanation: "In active voice, the subject performs the action."
//     },
//     {
//       question: "Convert this sentence to indirect speech: 'She said, 'I am going to the store.''",
//       options: ["She said that she was going to the store.", "She said that she is going to the store.", "She says that she was going to the store.", "She said she going to the store."],
//       answer: "She said that she was going to the store.",
//       explanation: "In indirect speech, the reporting verb changes to the past tense and the quotation marks are removed."
//     },
//     {
//       question: "Which of the following is the correct indirect speech for: 'He asked, 'Where is the station?''",
//       options: ["He asked where the station is.", "He asked where the station was.", "He asked where was the station.", "He asked where the station."],
//       answer: "He asked where the station was.",
//       explanation: "In indirect speech, the question form is replaced with a statement form and the tense is changed."
//     },
//     {
//       question: "What is the correct transformation of: 'I will do my homework tomorrow' in indirect speech?",
//       options: ["He said he will do his homework tomorrow.", "He said he would do his homework tomorrow.", "He says he will do his homework tomorrow.", "He said he does his homework tomorrow."],
//       answer: "He said he would do his homework tomorrow.",
//       explanation: "In indirect speech, 'will' changes to 'would.'"
//     }
//   ];
  

//   useEffect(() => {
//     if (isTimerActive && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer(prevTime => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       finishTest();
//     }
//   }, [timer, isTimerActive]);

//   const handleAnswer = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = selectedAnswer === currentQuestion.answer;

//     // Record the answer and whether it was correct
//     setAnsweredQuestions(prev => [
//       ...prev,
//       { question: currentQuestion.question, isCorrect, selectedAnswer }
//     ]);

//     if (isCorrect) {
//       setScore(prevScore => prevScore + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     } else {
//       finishTest();
//     }
//   };

//   const finishTest = () => {
//     setIsTestCompleted(true);
//     setIsTimerActive(false);
//   };

//   const restartTest = () => {
//     setCurrentQuestionIndex(0);
//     setAnsweredQuestions([]);
//     setIsTestCompleted(false);
//     setScore(0);
//     setTimer(300); // Reset timer to 5 minutes
//     setIsTimerActive(true);
//   };

//   const getAnswerStyle = (questionIndex) => {
//     const answeredQuestion = answeredQuestions.find(
//       (q) => q.question === questions[questionIndex].question
//     );
//     if (answeredQuestion) {
//       return answeredQuestion.isCorrect
//         ? { backgroundColor: 'green', color: 'white' }
//         : { backgroundColor: 'red', color: 'white' };
//     }
//     return {};
//   };

//   const currentQuestion = questions[currentQuestionIndex];
//   return (
//     <View style={styles.container}>
//       {!isTestCompleted ? (
//         <>
//           <Text style={styles.timer}>Time Left: {Math.floor(timer / 60)}:{timer % 60}</Text>
//           <Text style={styles.question}>{currentQuestion.question}</Text>
//           <View style={styles.options}>
//             {currentQuestion.options.map((option, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[styles.option, getAnswerStyle(currentQuestionIndex)]}
//                 onPress={() => handleAnswer(option)}
//               >
//                 <Text style={styles.optionText}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </>
//       ) : (
//         <>
//           <Text style={styles.score}>Your Score: {score}/{questions.length}</Text>
//           <View style={styles.explanation}>
//             {answeredQuestions.map((answeredQuestion, index) => (
//               <View key={index} style={styles.explanationItem}>
//                 <Text style={styles.explanationText}>
//                   {answeredQuestion.question}
//                 </Text>
//                 <Text style={answeredQuestion.isCorrect ? styles.correct : styles.incorrect}>
//                   Correct Answer: {questions[index].answer}
//                 </Text>
//                 <Text style={styles.explanationText}>
//                   {questions[index].explanation}
//                 </Text>
//               </View>
//             ))}
//           </View>
//           <Button title="Restart Test" onPress={restartTest} />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   timer: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   options: {
//     marginBottom: 20,
//   },
//   option: {
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     alignItems: 'center',
//   },
//   optionText: {
//     fontSize: 18,
//   },
//   correct: {
//     color: 'green',
//   },
//   incorrect: {
//     color: 'red',
//   },
//   score: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   explanation: {
//     marginTop: 20,
//   },
//   explanationItem: {
//     marginBottom: 20,
//   },
//   explanationText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   restartButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
// });

// export default MCQTestScreen;













// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome for icons

// const MCQTestScreen = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [answeredQuestions, setAnsweredQuestions] = useState([]);
//   const [isTestCompleted, setIsTestCompleted] = useState(false);
//   const [score, setScore] = useState(0);
//   const [timer, setTimer] = useState(300); // 5 minutes timer
//   const [isTimerActive, setIsTimerActive] = useState(true);

//   const questions = [
//     {
//       question: "Which of the following is a noun? 🤔",
//       options: ["Run", "Happiness", "Quickly", "Beautiful"],
//       answer: "Happiness",
//       explanation: "Happiness is a noun, which is a person, place, thing, or idea. 🧠"
//     },
//     {
//       question: "What part of speech is the word 'quickly'? ⏩",
//       options: ["Adjective", "Adverb", "Verb", "Noun"],
//       answer: "Adverb",
//       explanation: "'Quickly' is an adverb because it describes how an action is performed. 💨"
//     },
//     {
//       question: "Which of the following is a preposition? 🔄",
//       options: ["Before", "Is", "Beautiful", "Run"],
//       answer: "Before",
//       explanation: "'Before' is a preposition because it shows the relationship between two elements. 🔗"
//     },
//     {
//       question: "Which sentence is in the Present Continuous Tense? 🕒",
//       options: ["She runs every morning.", "She is running right now.", "She will run tomorrow.", "She ran yesterday."],
//       answer: "She is running right now.",
//       explanation: "The Present Continuous tense describes an action happening at the moment of speaking. ⏳"
//     },
//     // (Other questions remain the same)
//   ];

//   useEffect(() => {
//     if (isTimerActive && timer > 0) {
//       const interval = setInterval(() => {
//         setTimer(prevTime => prevTime - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     } else if (timer === 0) {
//       finishTest();
//     }
//   }, [timer, isTimerActive]);

//   const handleAnswer = (selectedAnswer) => {
//     const currentQuestion = questions[currentQuestionIndex];
//     const isCorrect = selectedAnswer === currentQuestion.answer;

//     // Record the answer and whether it was correct
//     setAnsweredQuestions(prev => [
//       ...prev,
//       { question: currentQuestion.question, isCorrect, selectedAnswer }
//     ]);

//     if (isCorrect) {
//       setScore(prevScore => prevScore + 1);
//     }

//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(prevIndex => prevIndex + 1);
//     } else {
//       finishTest();
//     }
//   };

//   const finishTest = () => {
//     setIsTestCompleted(true);
//     setIsTimerActive(false);
//   };

//   const restartTest = () => {
//     setCurrentQuestionIndex(0);
//     setAnsweredQuestions([]);
//     setIsTestCompleted(false);
//     setScore(0);
//     setTimer(300); // Reset timer to 5 minutes
//     setIsTimerActive(true);
//   };

//   const getAnswerStyle = (questionIndex) => {
//     const answeredQuestion = answeredQuestions.find(
//       (q) => q.question === questions[questionIndex].question
//     );
//     if (answeredQuestion) {
//       return answeredQuestion.isCorrect
//         ? { backgroundColor: 'green', color: 'white' }
//         : { backgroundColor: 'red', color: 'white' };
//     }
//     return {};
//   };

//   const currentQuestion = questions[currentQuestionIndex];
//   return (
//     <View style={styles.container}>
//       {!isTestCompleted ? (
//         <>
//           <Text style={styles.timer}>⏰ Time Left: {Math.floor(timer / 60)}:{timer % 60}</Text>
//           <Text style={styles.question}>{currentQuestion.question}</Text>
//           <View style={styles.options}>
//             {currentQuestion.options.map((option, index) => (
//               <TouchableOpacity
//                 key={index}
//                 style={[styles.option, getAnswerStyle(currentQuestionIndex)]}
//                 onPress={() => handleAnswer(option)}
//               >
//                 <Text style={styles.optionText}>{option}</Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </>
//       ) : (
//         <>
//           <Text style={styles.score}>🏆 Your Score: {score}/{questions.length}</Text>
//           <View style={styles.explanation}>
//             {answeredQuestions.map((answeredQuestion, index) => (
//               <View key={index} style={styles.explanationItem}>
//                 <Text style={styles.explanationText}>
//                   {answeredQuestion.question}
//                 </Text>
//                 <Text style={answeredQuestion.isCorrect ? styles.correct : styles.incorrect}>
//                   Correct Answer: {questions[index].answer} {answeredQuestion.isCorrect ? '✅' : '❌'}
//                 </Text>
//                 <Text style={styles.explanationText}>
//                   {questions[index].explanation}
//                 </Text>
//               </View>
//             ))}
//           </View>
//           <Button title="🔄 Restart Test" onPress={restartTest} />
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   timer: {
//     fontSize: 18,
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   options: {
//     marginBottom: 20,
//   },
//   option: {
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     alignItems: 'center',
//   },
//   optionText: {
//     fontSize: 18,
//   },
//   correct: {
//     color: 'green',
//   },
//   incorrect: {
//     color: 'red',
//   },
//   score: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   explanation: {
//     marginTop: 20,
//   },
//   explanationItem: {
//     marginBottom: 20,
//   },
//   explanationText: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   restartButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
// });

// export default MCQTestScreen;













import React, { useState, useEffect } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Importing FontAwesome for icons

const MCQTestScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(300); // 5 minutes timer
  const [isTimerActive, setIsTimerActive] = useState(true);

  const questions = [
    {
      question: "Which of the following is a noun? 🤔",
      options: ["Run", "Happiness", "Quickly", "Beautiful"],
      answer: "Happiness",
      explanation: "Happiness is a noun, which is a person, place, thing, or idea. 🧠"
    },
    {
      question: "What part of speech is the word 'quickly'? ⏩",
      options: ["Adjective", "Adverb", "Verb", "Noun"],
      answer: "Adverb",
      explanation: "'Quickly' is an adverb because it describes how an action is performed. 💨"
    },
    {
      question: "Which of the following is a preposition? 🔄",
      options: ["Before", "Is", "Beautiful", "Run"],
      answer: "Before",
      explanation: "'Before' is a preposition because it shows the relationship between two elements. 🔗"
    },
    {
      question: "Which sentence is in the Present Continuous Tense? 🕒",
      options: ["She runs every morning.", "She is running right now.", "She will run tomorrow.", "She ran yesterday."],
      answer: "She is running right now.",
      explanation: "The Present Continuous tense describes an action happening at the moment of speaking. ⏳"
    },

    {
            question: "Which of the following is a noun?",
            options: ["Run", "Happiness", "Quickly", "Beautiful"],
            answer: "Happiness",
            explanation: "Happiness is a noun, which is a person, place, thing, or idea."
          },
          {
            question: "What part of speech is the word 'quickly'?",
            options: ["Adjective", "Adverb", "Verb", "Noun"],
            answer: "Adverb",
            explanation: "'Quickly' is an adverb because it describes how an action is performed."
          },
          {
            question: "Which of the following is a preposition?",
            options: ["Before", "Is", "Beautiful", "Run"],
            answer: "Before",
            explanation: "'Before' is a preposition because it shows the relationship between two elements."
          },
          {
            question: "Which sentence is in the Present Continuous Tense?",
            options: ["She runs every morning.", "She is running right now.", "She will run tomorrow.", "She ran yesterday."],
            answer: "She is running right now.",
            explanation: "The Present Continuous tense describes an action happening at the moment of speaking."
          },
          {
            question: "What is the correct form of the verb for Past Perfect tense?",
            options: ["Has run", "Had run", "Will run", "Running"],
            answer: "Had run",
            explanation: "The Past Perfect tense indicates an action completed before another past action."
          },
          {
            question: "Which sentence is in the Future Perfect Tense?",
            options: ["I will have finished the homework by 7 PM.", "I am going to finish the homework.", "I finished the homework.", "I will finish the homework."],
            answer: "I will have finished the homework by 7 PM.",
            explanation: "The Future Perfect tense indicates an action that will be completed before a certain time in the future."
          },
          {
            question: "Which sentence is a compound sentence?",
            options: ["I like to read books.", "I like to read books, and I also enjoy writing.", "While I read books, I listen to music.", "If I read books, I learn."],
            answer: "I like to read books, and I also enjoy writing.",
            explanation: "A compound sentence consists of two independent clauses joined by a conjunction."
          },
          {
            question: "What is the subject in the sentence 'She writes letters'?",
            options: ["She", "Writes", "Letters", "None of these"],
            answer: "She",
            explanation: "The subject of a sentence tells who or what the sentence is about."
          },
          {
            question: "Which sentence is in the imperative form?",
            options: ["Do your homework.", "What is your name?", "I am doing my homework.", "I did my homework."],
            answer: "Do your homework.",
            explanation: "Imperative sentences give commands or requests."
          },
          {
            question: "Which of the following is a definite article?",
            options: ["A", "An", "The", "None of these"],
            answer: "The",
            explanation: "'The' is a definite article used to refer to specific nouns."
          },
          {
            question: "Which sentence correctly uses the article 'an'?",
            options: ["She ate an apple.", "She ate a apple.", "He ate an banana.", "He ate a banana."],
            answer: "She ate an apple.",
            explanation: "'An' is used before words that begin with a vowel sound."
          },
          {
            question: "What is the possessive determiner in the sentence 'This is my book'?",
            options: ["This", "Is", "My", "Book"],
            answer: "My",
            explanation: "'My' is a possessive determiner showing ownership."
          },
          {
            question: "Convert this sentence to passive voice: 'The teacher explains the lesson.'",
            options: ["The lesson is explained by the teacher.", "The teacher is explained the lesson.", "The lesson explained by the teacher.", "The lesson will explain the teacher."],
            answer: "The lesson is explained by the teacher.",
            explanation: "In passive voice, the object becomes the subject, and the action is performed by the subject."
          },
          {
            question: "Which of the following sentences is in passive voice?",
            options: ["The dog chased the ball.", "The ball was chased by the dog.", "The dog is chasing the ball.", "The dog has chased the ball."],
            answer: "The ball was chased by the dog.",
            explanation: "In passive voice, the subject of the sentence receives the action rather than performing it."
          },
          {
            question: "Which sentence is in active voice?",
            options: ["The homework was completed by John.", "John completed the homework.", "The homework is completed by John.", "The homework will be completed by John."],
            answer: "John completed the homework.",
            explanation: "In active voice, the subject performs the action."
          },
          {
            question: "Convert this sentence to indirect speech: 'She said, 'I am going to the store.''",
            options: ["She said that she was going to the store.", "She said that she is going to the store.", "She says that she was going to the store.", "She said she going to the store."],
            answer: "She said that she was going to the store.",
            explanation: "In indirect speech, the reporting verb changes to the past tense and the quotation marks are removed."
          },
          {
            question: "Which of the following is the correct indirect speech for: 'He asked, 'Where is the station?''",
            options: ["He asked where the station is.", "He asked where the station was.", "He asked where was the station.", "He asked where the station."],
            answer: "He asked where the station was.",
            explanation: "In indirect speech, the question form is replaced with a statement form and the tense is changed."
          },
          {
            question: "What is the correct transformation of: 'I will do my homework tomorrow' in indirect speech?",
            options: ["He said he will do his homework tomorrow.", "He said he would do his homework tomorrow.", "He says he will do his homework tomorrow.", "He said he does his homework tomorrow."],
            answer: "He said he would do his homework tomorrow.",
            explanation: "In indirect speech, 'will' changes to 'would.'"
          }
    // (Other questions remain the same)
  ];

  useEffect(() => {
    if (isTimerActive && timer > 0) {
      const interval = setInterval(() => {
        setTimer(prevTime => prevTime - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timer === 0) {
      finishTest();
    }
  }, [timer, isTimerActive]);

  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.answer;

    // Record the answer and whether it was correct
    setAnsweredQuestions(prev => [
      ...prev,
      { question: currentQuestion.question, isCorrect, selectedAnswer }
    ]);

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      finishTest();
    }
  };

  const finishTest = () => {
    setIsTestCompleted(true);
    setIsTimerActive(false);
  };

  const restartTest = () => {
    setCurrentQuestionIndex(0);
    setAnsweredQuestions([]);
    setIsTestCompleted(false);
    setScore(0);
    setTimer(300); // Reset timer to 5 minutes
    setIsTimerActive(true);
  };

  const getAnswerStyle = (questionIndex) => {
    const answeredQuestion = answeredQuestions.find(
      (q) => q.question === questions[questionIndex].question
    );
    if (answeredQuestion) {
      return answeredQuestion.isCorrect
        ? { backgroundColor: 'green', color: 'white' }
        : { backgroundColor: 'red', color: 'white' };
    }
    return {};
  };

  const currentQuestion = questions[currentQuestionIndex];
  return (
    <View style={styles.container}>
      {!isTestCompleted ? (
        <>
          <Text style={styles.timer}>⏰ Time Left: {Math.floor(timer / 60)}:{timer % 60}</Text>
          
          {/* Display the question number */}
          <Text style={styles.questionNumber}>Question {currentQuestionIndex + 1}</Text>
          
          <Text style={styles.question}>{currentQuestion.question}</Text>
          
          <View style={styles.options}>
            {currentQuestion.options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.option, getAnswerStyle(currentQuestionIndex)]}
                onPress={() => handleAnswer(option)}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        <>
          <Text style={styles.score}>🏆 Your Score: {score}/{questions.length}</Text>
          <View style={styles.explanation}>
            {answeredQuestions.map((answeredQuestion, index) => (
              <View key={index} style={styles.explanationItem}>
                <Text style={styles.explanationText}>
                  {answeredQuestion.question}
                </Text>
                <Text style={answeredQuestion.isCorrect ? styles.correct : styles.incorrect}>
                  Correct Answer: {questions[index].answer} {answeredQuestion.isCorrect ? '✅' : '❌'}
                </Text>
                <Text style={styles.explanationText}>
                  {questions[index].explanation}
                </Text>
              </View>
            ))}
          </View>
          <Button title="🔄 Restart Test" onPress={restartTest} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  timer: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  questionNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  question: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  options: {
    marginBottom: 20,
  },
  option: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 18,
  },
  correct: {
    color: 'green',
  },
  incorrect: {
    color: 'red',
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  explanation: {
    marginTop: 20,
  },
  explanationItem: {
    marginBottom: 20,
  },
  explanationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  restartButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
  },
});

export default MCQTestScreen;














