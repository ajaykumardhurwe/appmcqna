// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// export default function TheoryScreen() {
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





// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// export default function TheoryScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>English Grammar Topics</Text>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>1. Parts of Speech</Text>
//         <Text style={styles.description}>
//           - Nouns, Pronouns, Adjectives{'\n'}
//           - Verbs, Adverbs, Prepositions{'\n'}
//           - Conjunctions, Interjections
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>2. Tenses and Their Usage</Text>
//         <Text style={styles.description}>
//           - Present Tense (Simple, Continuous, Perfect, Perfect Continuous){'\n'}
//           - Past Tense (Simple, Continuous, Perfect, Perfect Continuous){'\n'}
//           - Future Tense (Simple, Continuous, Perfect, Perfect Continuous)
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>3. Sentence Structure & Formation</Text>
//         <Text style={styles.description}>
//           - Simple, Compound, and Complex Sentences{'\n'}
//           - Subject-Verb Agreement{'\n'}
//           - Sentence Types (Declarative, Interrogative, Imperative, Exclamatory)
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>4. Articles & Determiners</Text>
//         <Text style={styles.description}>
//           - Definite & Indefinite Articles (a, an, the){'\n'}
//           - Demonstratives, Quantifiers, Possessives
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>5. Active & Passive Voice</Text>
//         <Text style={styles.description}>
//           - Rules for Conversion{'\n'}
//           - Usage in Different Tenses
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>6. Direct & Indirect Speech</Text>
//         <Text style={styles.description}>
//           - Changing from Direct to Indirect Speech{'\n'}
//           - Reporting Verbs & Sentence Transformation
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>7. Modals & Auxiliary Verbs</Text>
//         <Text style={styles.description}>
//           - Can, Could, May, Might, Must, Shall, Should, Will, Would{'\n'}
//           - Uses and Differences
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>8. Phrases & Clauses</Text>
//         <Text style={styles.description}>
//           - Noun, Adjective, and Adverb Phrases{'\n'}
//           - Main & Subordinate Clauses
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>9. Conditionals & Hypothetical Situations</Text>
//         <Text style={styles.description}>
//           - Zero, First, Second, Third Conditionals{'\n'}
//           - Mixed Conditionals
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>10. Punctuation Rules</Text>
//         <Text style={styles.description}>
//           - Commas, Apostrophes, Colons, Semicolons{'\n'}
//           - Quotation Marks & Parentheses
//         </Text>
//       </View>

//       <View style={styles.topicContainer}>
//         <Text style={styles.topicTitle}>11. Common Grammatical Errors & Confusing Words</Text>
//         <Text style={styles.description}>
//           - Affect vs. Effect, Your vs. You’re, Their vs. There vs. They’re{'\n'}
//           - Run-on Sentences & Fragment Errors
//         </Text>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     padding: 10,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 10,
//     color: '#333',
//   },
//   topicContainer: {
//     backgroundColor: '#ffffff',
//     padding: 15,
//     borderRadius: 10,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   topicTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#007bff',
//     marginBottom: 5,
//   },
//   description: {
//     fontSize: 14,
//     color: '#555',
//   },
// });
















// import React from 'react';
// import { View, Text, ScrollView, StyleSheet } from 'react-native';

// export default function TheoryScreen() {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>English Grammar Topics</Text>

//       {topics.map((topic, index) => (
//         <View key={index} style={styles.topicContainer}>
//           <Text style={styles.topicTitle}>{topic.title}</Text>
//           <Text style={styles.description}>{topic.description}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// }

// const topics = [
//   {
//     title: '1. Parts of Speech',
//     description: '- Nouns (Proper, Common, Abstract, Concrete)\n- Pronouns (Personal, Possessive, Reflexive)\n- Adjectives (Descriptive, Quantitative, Comparative)\n- Verbs (Action, Linking, Helping)\n- Adverbs (How, When, Where, To What Extent)\n- Prepositions (Place, Time, Direction, Cause)\n- Conjunctions (Coordinating, Subordinating)\n- Interjections (Wow!, Ouch!)',
//   },
//   {
//     title: '2. Tenses and Their Usage',
//     description: '- Present Tense (Simple, Continuous, Perfect, Perfect Continuous)\n- Past Tense (Simple, Continuous, Perfect, Perfect Continuous)\n- Future Tense (Simple, Continuous, Perfect, Perfect Continuous)\n- Usage of Tenses in Daily Life',
//   },
//   {
//     title: '3. Sentence Structure & Formation',
//     description: '- Simple, Compound, and Complex Sentences\n- Subject-Verb Agreement\n- Sentence Types (Declarative, Interrogative, Imperative, Exclamatory)',
//   },
//   {
//     title: '4. Articles & Determiners',
//     description: '- Definite & Indefinite Articles (a, an, the)\n- Demonstratives, Quantifiers, Possessives\n- Rules for Article Usage',
//   },
//   {
//     title: '5. Active & Passive Voice',
//     description: '- Rules for Conversion\n- Usage in Different Tenses\n- When to Use Passive Voice',
//   },
//   {
//     title: '6. Direct & Indirect Speech',
//     description: '- Changing from Direct to Indirect Speech\n- Reporting Verbs & Sentence Transformation\n- Common Changes in Tenses and Pronouns',
//   },
//   {
//     title: '7. Modals & Auxiliary Verbs',
//     description: '- Can, Could, May, Might, Must, Shall, Should, Will, Would\n- Uses and Differences\n- Modals in Formal and Informal Speech',
//   },
//   {
//     title: '8. Phrases & Clauses',
//     description: '- Noun, Adjective, and Adverb Phrases\n- Main & Subordinate Clauses\n- Difference Between Phrases and Clauses',
//   },
//   {
//     title: '9. Conditionals & Hypothetical Situations',
//     description: '- Zero, First, Second, Third Conditionals\n- Mixed Conditionals\n- Real vs. Unreal Conditionals',
//   },
//   {
//     title: '10. Punctuation Rules',
//     description: '- Commas, Apostrophes, Colons, Semicolons\n- Quotation Marks & Parentheses\n- Importance of Proper Punctuation in Writing',
//   },
//   {
//     title: '11. Common Grammatical Errors & Confusing Words',
//     description: '- Affect vs. Effect, Your vs. You’re, Their vs. There vs. They’re\n- Run-on Sentences & Fragment Errors\n- Subject-Verb Agreement Mistakes',
//   },
// ];

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0f4f8',
//     padding: 15,
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 15,
//     color: '#333',
//   },
//   topicContainer: {
//     backgroundColor: '#ffffff',
//     padding: 20,
//     borderRadius: 12,
//     marginBottom: 12,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     elevation: 4,
//   },
//   topicTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#1e88e5',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 14,
//     color: '#444',
//     lineHeight: 20,
//   },
// });









import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function TheoryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>English Grammar Topics</Text>

      {topics.map((topic, index) => (
        <View key={index} style={styles.topicContainer}>
          <Text style={styles.topicTitle}>{topic.title}</Text>
          <Text style={styles.description}>{topic.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const topics = [
  {
    title: '1. Parts of Speech (शब्द भेद)',
    description: 'शब्द भेद वाक्य में उनके कार्य के आधार पर शब्दों की श्रेणियाँ होती हैं।\n\n' +
      'Noun (संज्ञा): व्यक्ति, स्थान, वस्तु या विचार का नाम।\n- Proper Noun (व्यक्तिवाचक संज्ञा) – पेरिस, आइंस्टाइन\n' +
      '- Common Noun (जातिवाचक संज्ञा) – शहर, शिक्षक\n- Abstract Noun (भाववाचक संज्ञा) – प्रेम, साहस\n' +
      '- Concrete Noun (दृश्य संज्ञा) – मेज़, कुत्ता\n\n' +
      'Pronoun (सर्वनाम): संज्ञा के स्थान पर प्रयुक्त शब्द (वह, तुम, हम)\n' +
      '- Personal, Possessive, Reflexive\n\n' +
      'Adjective (विशेषण): संज्ञा का वर्णन (सुंदर, लंबा, खुश)\n' +
      '- Descriptive, Quantitative, Comparative\n\n' +
      'Verb (क्रिया): कार्य या अवस्था को दर्शाने वाले शब्द (दौड़ना, लिखना)\n' +
      '- Action, Linking, Helping\n\n' +
      'Adverb (क्रिया विशेषण): क्रिया का वर्णन (जल्दी, बहुत)\n' +
      'Preposition (सम्बंध सूचक अव्यय): शब्दों के बीच संबंध (में, पर)\n' +
      'Conjunction (समुच्चयबोधक अव्यय): शब्दों को जोड़ने वाले शब्द (और, लेकिन)\n' +
      'Interjection (विस्मयादिबोधक अव्यय): भावना व्यक्त करने वाले शब्द (वाह!, आह!)',
  },
  {
    title: '2. Tenses and Their Usage (काल और उनका उपयोग)',
    description: 'काल क्रिया की समयावधि को दर्शाते हैं।\n\n' +
      'Present Tense (वर्तमान काल)\n- Simple Present – वह पत्र लिखता है।\n- Present Continuous – वह पत्र लिख रहा है।\n- Present Perfect – उसने पत्र लिखा है।\n- Present Perfect Continuous – वह पत्र लिख रहा था।\n\n' +
      'Past Tense (भूतकाल)\n- Simple Past – उसने पत्र लिखा।\n- Past Continuous – वह पत्र लिख रहा था।\n- Past Perfect – उसने पत्र लिख लिया था।\n- Past Perfect Continuous – वह पत्र लिख रहा था।\n\n' +
      'Future Tense (भविष्य काल)\n- Simple Future – वह पत्र लिखेगा।\n- Future Continuous – वह पत्र लिख रहा होगा।\n- Future Perfect – वह पत्र लिख चुका होगा।\n- Future Perfect Continuous – वह पत्र लिख रहा होगा।',
  },
  {
   title: '3. Sentence Structure & Formation (वाक्य संरचना और निर्माण)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Simple Sentence (साधारण वाक्य) – One independent clause. (e.g., She runs fast. | उदाहरण: वह तेज दौड़ती है।)\n' +
     'Compound Sentence (संयुक्त वाक्य) – Two independent clauses joined by a conjunction. (e.g., She runs fast, and she wins races. | उदाहरण: वह तेज दौड़ती है, और वह दौड़ जीतती है।)\n' +
     'Complex Sentence (जटिल वाक्य) – One independent clause + one or more dependent clauses. (e.g., She runs fast because she trains daily. | उदाहरण: वह तेज दौड़ती है क्योंकि वह रोज़ अभ्यास करती है।)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Subject-Verb Agreement (विषय-क्रिया का मिलान) ensures the verb matches the subject. (She sings vs. They sing. | यह सुनिश्चित करता है कि क्रिया विषय से मेल खाती है। (वह गाती है बनाम वे गाते हैं।))\n' +
     'Sentence Types | वाक्य प्रकार: \n' +
     '- Declarative (घोषणात्मक) (I love pizza. | मुझे पिज़्ज़ा बहुत पसंद है.)\n' +
     '- Interrogative (प्रश्नवाचक) (Do you love pizza? | क्या तुम्हें पिज़्ज़ा पसंद है?)\n' +
     '- Imperative (आज्ञात्मक) (Eat your pizza! | अपना पिज़्ज़ा खाओ!)\n' +
     '- Exclamatory (उद्गारात्मक) (Wow, this pizza is amazing! | वाह, यह पिज़्ज़ा शानदार है!)\n'
 },
 
 {
   title: '4. Articles & Determiners (लेख (आर्टिकल) और निर्धारक)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Articles (लेख): "A" and "An" (indefinite | अनिर्दिष्ट); "The" (definite | निर्दिष्ट).\n' +
     'Determiners (निर्धारक): Include possessives (my, his | मेरा, उसका), demonstratives (this, that | यह, वह), and quantifiers (some, many | कुछ, कई).\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Use "A" before consonant sounds (a university | एक विश्वविद्यालय).\n' +
     'Use "An" before vowel sounds (an hour | एक घंटा).\n' +
     'Use "The" for specific nouns (the sun | सूर्य).'
 },
 
 {
   title: '5. Active & Passive Voice (सक्रिय और निष्क्रिय वाक्य)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Active Voice (सक्रिय वाक्य): Subject performs the action. (She wrote a letter. | वह पत्र लिखती है.)\n' +
     'Passive Voice (निष्क्रिय वाक्य): Object becomes the focus. (A letter was written by her. | एक पत्र उसके द्वारा लिखा गया था.)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Passive is used in formal writing (निष्क्रिय का उपयोग औपचारिक लेखन में किया जाता है).\n' +
     'Some tenses are harder to convert to passive (कुछ काल निष्क्रिय में बदलने में कठिन होते हैं).'
 }
 ,
 
  {
   title: '6. Direct & Indirect Speech (प्रत्यक्ष और अप्रत्यक्ष वाक्य)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Direct Speech (प्रत्यक्ष वाक्य) – Exact words spoken. (She said, "I am happy." | उसने कहा, "मैं खुश हूँ।")\n\n' +
     'Indirect Speech (अप्रत्यक्ष वाक्य) – Reported words. (She said that she was happy. | उसने कहा कि वह खुश थी।)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Change pronouns and tenses accordingly. (सर्वनाम और काल को उचित रूप से बदलें।)',
 },
 {
   title: '7. Modals & Auxiliary Verbs (मोडल्स और सहायक क्रियाएँ)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Modals (मोडल क्रियाएँ): Express ability, permission, necessity. (Can, Could, Must, Should | सकता है, सकता था, चाहिए, आवश्यक)\n\n' +
     'Auxiliary Verbs (सहायक क्रियाएँ): Help main verbs. (is, are, was, have | है, हैं, था, रखा है)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     '"Can" (ability | क्षमता) vs. "May" (permission | अनुमति)\n\n' +
     '"Shall" (formal | औपचारिक) vs. "Will" (informal | अनौपचारिक)',
 },
 {
   title: '8. Phrases & Clauses (वाक्यांश और उपवाक्य)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Phrase (वाक्यांश): Group of words without a subject-verb pair. (in the park | पार्क में)\n\n' +
     'Clause (उपवाक्य): Group of words with a subject and verb. (She runs because she trains. | वह दौड़ती है क्योंकि वह अभ्यास करती है।)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'A dependent clause (आश्रित उपवाक्य) cannot stand alone.\n\n' +
     'A noun phrase (संज्ञा वाक्यांश) acts as a noun.',
 },
 {
   title: '9. Conditionals & Hypothetical Situations (शर्तें और काल्पनिक परिस्थितियाँ)',
   description: 'Definition & Theory | परिभाषा और सिद्धांत\n\n' +
     'Zero Conditional (शून्य शर्तीय वाक्य): General truths (If you heat ice, it melts. | यदि आप बर्फ को गर्म करें, तो यह पिघल जाती है।)\n\n' +
     'First Conditional (पहला शर्तीय वाक्य): Real future situations (If it rains, we will cancel the trip. | यदि बारिश होगी, तो हम यात्रा रद्द कर देंगे।)\n\n' +
     'Second Conditional (दूसरा शर्तीय वाक्य): Hypothetical present (If I were you, I would study. | यदि मैं तुम्हारी जगह होता, तो मैं पढ़ाई करता।)\n\n' +
     'Third Conditional (तीसरा शर्तीय वाक्य): Hypothetical past (If he had studied, he would have passed. | यदि उसने पढ़ाई की होती, तो वह पास हो गया होता।)\n\n' +
     'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Use "were" instead of "was" in the second conditional. (दूसरे शर्तीय वाक्य में "was" के बजाय "were" का प्रयोग करें।)',
 },
 {
   title: '10. Punctuation Rules (विराम चिह्न के नियम)',
   description: 'Important Points | महत्वपूर्ण बिंदु\n\n' +
     'Use commas (अल्पविराम) to separate ideas. (I bought apples, oranges, and bananas. | मैंने सेब, संतरे और केले खरीदे।)\n\n' +
     'Use apostrophes (उल्टा कोमा) for possession (John’s book | जॉन की किताब) and contractions (can’t | नहीं सकता।)',
 },
 {
   title: '11. Common Grammatical Errors & Confusing Words (सामान्य व्याकरण संबंधी गलतियाँ और भ्रमित करने वाले शब्द)',
   description: 'Affect (verb) vs. Effect (noun) | प्रभाव डालना (क्रिया) बनाम परिणाम (संज्ञा)\n\n' +
     'Your (possessive) vs. You’re (you are) | तुम्हारा बनाम तुम हो\n\n' +
     'Their (possessive), There (place), They’re (they are) | उनका, वहाँ, वे हैं',
 }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    padding: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  topicContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e88e5',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 20,
  },
});
