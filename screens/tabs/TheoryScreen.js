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
// import { Card, Title, Paragraph } from 'react-native-paper';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const TheoryScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.header}>📚 Parts of Speech (शब्द भेद)</Text>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Noun (संज्ञा)</Title>
//           <Paragraph>
//             व्यक्ति, स्थान, वस्तु या विचार के नाम को **Noun** कहते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>Ram, India, Book, Honesty</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Pronoun (सर्वनाम)</Title>
//           <Paragraph>
//             जो शब्द **Noun** के स्थान पर उपयोग किए जाते हैं, उन्हें **Pronoun** कहते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>he, she, it, they, we, you</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Adjective (विशेषण)</Title>
//           <Paragraph>
//             जो शब्द किसी **Noun** या **Pronoun** की विशेषता बताते हैं, वे **Adjective** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>beautiful, tall, intelligent, happy</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Verb (क्रिया)</Title>
//           <Paragraph>
//             जो शब्द किसी कार्य या अवस्था को प्रकट करते हैं, वे **Verb** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>run, eat, sleep, study</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Adverb (क्रियाविशेषण)</Title>
//           <Paragraph>
//             जो शब्द किसी **Verb, Adjective** या किसी अन्य **Adverb** की विशेषता बताते हैं, वे **Adverb** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>slowly, very, well, quickly</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Preposition (संबंधसूचक अव्यय)</Title>
//           <Paragraph>
//             जो शब्द किसी **Noun** या **Pronoun** का अन्य शब्दों से संबंध दर्शाते हैं, वे **Preposition** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>in, on, under, between, beside</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Conjunction (संयोजक अव्यय)</Title>
//           <Paragraph>
//             जो शब्द दो शब्दों, वाक्यांशों या वाक्यों को जोड़ते हैं, वे **Conjunction** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>and, but, or, because</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <Card style={styles.card}>
//         <Card.Content>
//           <Title>🔹 Interjection (विस्मयादिबोधक अव्यय)</Title>
//           <Paragraph>
//             जो शब्द अचानक होने वाली भावनाओं या भावनात्मक प्रतिक्रिया को व्यक्त करते हैं, वे **Interjection** कहलाते हैं। {'\n'}
//             🔹 Examples: <Text style={styles.highlight}>Wow!, Oh!, Oops!, Bravo!</Text>
//           </Paragraph>
//         </Card.Content>
//       </Card>

//       <View style={styles.footer}>
//         <Icon name="lightbulb-on" size={24} color="#FFD700" />
//         <Text style={styles.footerText}>अंग्रेजी में निपुणता पाने के लिए Parts of Speech का सही उपयोग करें!</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//     paddingHorizontal: 10,
//     paddingTop: 10,
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     color: '#2a9d8f',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   card: {
//     backgroundColor: '#ffffff',
//     marginBottom: 10,
//     borderRadius: 10,
//     elevation: 4,
//   },
//   highlight: {
//     color: '#d62828',
//     fontWeight: 'bold',
//   },
//   footer: {
//     backgroundColor: '#2a9d8f',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   footerText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginLeft: 5,
//     textAlign: 'center',
//   },
// });

// export default TheoryScreen;








// import React from 'react';
// import { ScrollView, Text, View, StyleSheet } from 'react-native';

// const TheoryScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Parts of Speech (शब्द भेद)</Text>
//       <Text style={styles.description}>
//         Parts of Speech वे शब्द होते हैं जो किसी वाक्य में अपने कार्य के आधार पर विभाजित किए जाते हैं। मुख्यतः 8 प्रकार के Parts of Speech होते हैं:
//       </Text>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>1️⃣ Noun (संज्ञा) – Naming Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): किसी व्यक्ति, स्थान, वस्तु या विचार के नाम को Noun कहते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Noun (संज्ञा के प्रकार):</Text>
//         <Text style={styles.list}>1. Proper Noun (व्यक्तिवाचक संज्ञा) – किसी विशेष व्यक्ति, स्थान, या चीज़ का नाम। Example: Ram, India, Taj Mahal</Text>
//         <Text style={styles.list}>2. Common Noun (जातिवाचक संज्ञा) – किसी वर्ग के सभी व्यक्तियों, स्थानों, या चीज़ों का नाम। Example: Boy, Country, Book</Text>
//         <Text style={styles.list}>3. Collective Noun (समूहवाचक संज्ञा) – व्यक्तियों या वस्तुओं के समूह का नाम। Example: Team, Army, Family</Text>
//         <Text style={styles.list}>4. Abstract Noun (भाववाचक संज्ञा) – किसी भावना, गुण, या विचार का नाम। Example: Honesty, Love, Happiness</Text>
//         <Text style={styles.list}>5. Material Noun (द्रव्यवाचक संज्ञा) – किसी पदार्थ या सामग्री का नाम। Example: Gold, Water, Iron</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>2️⃣ Pronoun (सर्वनाम) – Replacing Nouns</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द Noun के स्थान पर उपयोग किए जाते हैं, उन्हें Pronoun कहते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Pronoun (सर्वनाम के प्रकार):</Text>
//         <Text style={styles.list}>1. Personal Pronoun (व्यक्तिगत सर्वनाम) – व्यक्तियों के लिए उपयोग किए जाने वाले शब्द। Example: I, You, He, She, They</Text>
//         <Text style={styles.list}>2. Possessive Pronoun (अधिकारवाचक सर्वनाम) – किसी चीज़ पर स्वामित्व दर्शाने वाले शब्द। Example: Mine, Yours, His, Hers</Text>
//         <Text style={styles.list}>3. Reflexive Pronoun (निजवाचक सर्वनाम) – जब क्रिया का प्रभाव उसी व्यक्ति पर पड़े। Example: Myself, Yourself, Himself</Text>
//         <Text style={styles.list}>4. Demonstrative Pronoun (संकेतवाचक सर्वनाम) – किसी चीज़ को इंगित करने वाले शब्द। Example: This, That, These, Those</Text>
//         <Text style={styles.list}>5. Interrogative Pronoun (प्रश्नवाचक सर्वनाम) – प्रश्न पूछने के लिए उपयोग किए जाने वाले शब्द। Example: Who, What, Which</Text>
//         <Text style={styles.list}>6. Relative Pronoun (सम्बन्धवाचक सर्वनाम) – दो वाक्यों को जोड़ने वाले शब्द। Example: Who, Whose, That, Which</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>3️⃣ Adjective (विशेषण) – Describing Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun की विशेषता बताते हैं, वे Adjective कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Adjective (विशेषण के प्रकार):</Text>
//         <Text style={styles.list}>1. Descriptive Adjective (वर्णनात्मक विशेषण) – किसी वस्तु या व्यक्ति की विशेषता बताने वाले शब्द। Example: Beautiful, Tall, Intelligent</Text>
//         <Text style={styles.list}>2. Quantitative Adjective (परिमाणवाचक विशेषण) – मात्रा बताने वाले शब्द। Example: Some, Few, Many</Text>
//         <Text style={styles.list}>3. Demonstrative Adjective (संकेतवाचक विशेषण) – किसी चीज़ को इंगित करने वाले शब्द। Example: This, That, These, Those</Text>
//         <Text style={styles.list}>4. Possessive Adjective (अधिकारवाचक विशेषण) – स्वामित्व दर्शाने वाले शब्द। Example: My, Your, His, Her</Text>
//         <Text style={styles.list}>5. Interrogative Adjective (प्रश्नवाचक विशेषण) – प्रश्न पूछने के लिए उपयोग किए जाने वाले शब्द। Example: Which, What, Whose</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>4️⃣ Verb (क्रिया) – Action Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी कार्य या अवस्था को प्रकट करते हैं, वे Verb कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Verb (क्रिया के प्रकार):</Text>
//         <Text style={styles.list}>1. Action Verb (क्रियापद) – जो किसी कार्य को दर्शाते हैं। Example: Run, Eat, Write</Text>
//         <Text style={styles.list}>2. Linking Verb (संयोजक क्रिया) – जो किसी अवस्था को दर्शाते हैं। Example: Is, Am, Are, Was</Text>
//         <Text style={styles.list}>3. Helping Verb (सहायक क्रिया) – जो मुख्य क्रिया की सहायता करते हैं। Example: Can, Will, Should</Text>
//         <Text style={styles.list}>4. Transitive Verb (सकर्मक क्रिया) – जिनका प्रभाव किसी Object पर पड़ता है। Example: She bought a car.</Text>
//         <Text style={styles.list}>5. Intransitive Verb (अकर्मक क्रिया) – जिनका कोई Object नहीं होता। Example: She sleeps well.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>5️⃣ Adverb (क्रियाविशेषण) – Modifying Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Verb, Adjective, या किसी अन्य Adverb की विशेषता बताते हैं, वे Adverb कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Adverb (क्रियाविशेषण के प्रकार):</Text>
//         <Text style={styles.list}>1. Manner (तरीका) – कार्य कैसे हुआ। Example: Slowly, Quickly, Well</Text>
//         <Text style={styles.list}>2. Place (स्थान) – कार्य कहाँ हुआ। Example: Here, There, Everywhere</Text>
//         <Text style={styles.list}>3. Time (समय) – कार्य कब हुआ। Example: Now, Yesterday, Soon</Text>
//         <Text style={styles.list}>4. Frequency (आवृत्ति) – कार्य कितनी बार हुआ। Example: Always, Never, Often</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>6️⃣ Preposition (संबंधसूचक अव्यय) – Relationship Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun का अन्य शब्दों से संबंध दर्शाते हैं, वे Preposition कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
//         <Text style={styles.list}>Place (स्थान): In, On, Under</Text>
//         <Text style={styles.list}>Time (समय): Before, After, During</Text>
//         <Text style={styles.list}>Direction (दिशा): To, From, Toward</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>7️⃣ Conjunction (संयोजक अव्यय) – Joining Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द दो शब्दों, वाक्यांशों या वाक्यों को जोड़ते हैं, वे Conjunction कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Conjunction (संयोजक के प्रकार):</Text>
//         <Text style={styles.list}>1. Coordinating Conjunction (समन्वय संयोजक) – समान वाक्यांशों को जोड़ते हैं। Example: And, But, Or</Text>
//         <Text style={styles.list}>2. Subordinating Conjunction (आधीन संयोजक) – मुख्य और सहायक वाक्य जोड़ते हैं। Example: Because, Although, Since</Text>
//         <Text style={styles.list}>3. Correlative Conjunction (सह-संयोजक) – जोड़े में आते हैं। Example: Either...or, Neither...nor</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>8️⃣ Interjection (विस्मयादिबोधक अव्यय) – Exclamatory Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द अचानक होने वाली भावनाओं को व्यक्त करते हैं, वे Interjection कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
//         <Text style={styles.list}>Joy (खुशी): Wow! Hurrah!</Text>
//         <Text style={styles.list}>Surprise (आश्चर्य): Oh! Ah!</Text>
//         <Text style={styles.list}>Pain (दर्द): Ouch! Alas!</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 16,
//   },
//   section: {
//     marginBottom: 20,
//   },
//   subTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   subDescription: {
//     fontSize: 16,
//     marginBottom: 8,
//   },
//   list: {
//     fontSize: 16,
//     marginLeft: 20,
//   },
// });

// export default TheoryScreen;
















// import React from 'react';
// import { ScrollView, Text, View, StyleSheet } from 'react-native';

// const TheoryScreen = () => {
//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>Parts of Speech (शब्द भेद) 📝</Text>
//       <Text style={styles.description}>
//         Parts of Speech वे शब्द होते हैं जो किसी वाक्य में अपने कार्य के आधार पर विभाजित किए जाते हैं। मुख्यतः 8 प्रकार के Parts of Speech होते हैं:
//       </Text>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>1️⃣ Noun (संज्ञा) – Naming Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): किसी व्यक्ति, स्थान, वस्तु या विचार के नाम को Noun कहते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Noun (संज्ञा के प्रकार):</Text>
//         <Text style={styles.list}>🔹 Proper Noun (व्यक्तिवाचक संज्ञा) – Ram, India, Taj Mahal</Text>
//         <Text style={styles.list}>🔹 Common Noun (जातिवाचक संज्ञा) – Boy, Country, Book</Text>
//         <Text style={styles.list}>🔹 Collective Noun (समूहवाचक संज्ञा) – Team, Army, Family</Text>
//         <Text style={styles.list}>🔹 Abstract Noun (भाववाचक संज्ञा) – Honesty, Love, Happiness</Text>
//         <Text style={styles.list}>🔹 Material Noun (द्रव्यवाचक संज्ञा) – Gold, Water, Iron</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>2️⃣ Pronoun (सर्वनाम) – Replacing Nouns</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द Noun के स्थान पर उपयोग किए जाते हैं, उन्हें Pronoun कहते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Pronoun (सर्वनाम के प्रकार):</Text>
//         <Text style={styles.list}>🔸 Personal Pronoun (व्यक्तिगत सर्वनाम) – I, You, He, She</Text>
//         <Text style={styles.list}>🔸 Possessive Pronoun (अधिकारवाचक सर्वनाम) – Mine, Yours, His, Hers</Text>
//         <Text style={styles.list}>🔸 Reflexive Pronoun (निजवाचक सर्वनाम) – Myself, Yourself, Himself</Text>
//         <Text style={styles.list}>🔸 Demonstrative Pronoun (संकेतवाचक सर्वनाम) – This, That, These, Those</Text>
//         <Text style={styles.list}>🔸 Interrogative Pronoun (प्रश्नवाचक सर्वनाम) – Who, What, Which</Text>
//         <Text style={styles.list}>🔸 Relative Pronoun (सम्बन्धवाचक सर्वनाम) – Who, Whose, That</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>3️⃣ Adjective (विशेषण) – Describing Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun की विशेषता बताते हैं, वे Adjective कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Adjective (विशेषण के प्रकार):</Text>
//         <Text style={styles.list}>🔹 Descriptive Adjective (वर्णनात्मक विशेषण) – Beautiful, Tall, Intelligent</Text>
//         <Text style={styles.list}>🔹 Quantitative Adjective (परिमाणवाचक विशेषण) – Some, Few, Many</Text>
//         <Text style={styles.list}>🔹 Demonstrative Adjective (संकेतवाचक विशेषण) – This, That, These</Text>
//         <Text style={styles.list}>🔹 Possessive Adjective (अधिकारवाचक विशेषण) – My, Your, His</Text>
//         <Text style={styles.list}>🔹 Interrogative Adjective (प्रश्नवाचक विशेषण) – Which, What, Whose</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>4️⃣ Verb (क्रिया) – Action Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी कार्य या अवस्था को प्रकट करते हैं, वे Verb कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Verb (क्रिया के प्रकार):</Text>
//         <Text style={styles.list}>🔸 Action Verb (क्रियापद) – Run, Eat, Write</Text>
//         <Text style={styles.list}>🔸 Linking Verb (संयोजक क्रिया) – Is, Am, Are</Text>
//         <Text style={styles.list}>🔸 Helping Verb (सहायक क्रिया) – Can, Will, Should</Text>
//         <Text style={styles.list}>🔸 Transitive Verb (सकर्मक क्रिया) – She bought a car.</Text>
//         <Text style={styles.list}>🔸 Intransitive Verb (अकर्मक क्रिया) – She sleeps well.</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>5️⃣ Adverb (क्रियाविशेषण) – Modifying Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Verb, Adjective, या किसी अन्य Adverb की विशेषता बताते हैं, वे Adverb कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Adverb (क्रियाविशेषण के प्रकार):</Text>
//         <Text style={styles.list}>🔹 Manner (तरीका) – Slowly, Quickly, Well</Text>
//         <Text style={styles.list}>🔹 Place (स्थान) – Here, There, Everywhere</Text>
//         <Text style={styles.list}>🔹 Time (समय) – Now, Yesterday, Soon</Text>
//         <Text style={styles.list}>🔹 Frequency (आवृत्ति) – Always, Never, Often</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>6️⃣ Preposition (संबंधसूचक अव्यय) – Relationship Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun का अन्य शब्दों से संबंध दर्शाते हैं, वे Preposition कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
//         <Text style={styles.list}>🔹 Place (स्थान): In, On, Under</Text>
//         <Text style={styles.list}>🔹 Time (समय): Before, After, During</Text>
//         <Text style={styles.list}>🔹 Direction (दिशा): To, From, Toward</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>7️⃣ Conjunction (संयोजक अव्यय) – Joining Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द दो शब्दों, वाक्यांशों या वाक्यों को जोड़ते हैं, वे Conjunction कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Types of Conjunction (संयोजक के प्रकार):</Text>
//         <Text style={styles.list}>🔸 Coordinating Conjunction (समन्वय संयोजक) – And, But, Or</Text>
//         <Text style={styles.list}>🔸 Subordinating Conjunction (आधीन संयोजक) – Because, Although, Since</Text>
//         <Text style={styles.list}>🔸 Correlative Conjunction (सह-संयोजक) – Either...or, Neither...nor</Text>
//       </View>

//       <View style={styles.section}>
//         <Text style={styles.subTitle}>8️⃣ Interjection (विस्मयादिबोधक अव्यय) – Exclamatory Words</Text>
//         <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द अचानक होने वाली भावनाओं को व्यक्त करते हैं, वे Interjection कहलाते हैं।</Text>
//         <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
//         <Text style={styles.list}>🔹 Joy (खुशी): Wow! Hurrah!</Text>
//         <Text style={styles.list}>🔹 Surprise (आश्चर्य): Oh! Ah!</Text>
//         <Text style={styles.list}>🔹 Pain (दर्द): Ouch! Alas!</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     padding: 16,
//     backgroundColor: '#f7f7f7',
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: 'bold',
//     color: '#4A90E2',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: '#333',
//     marginBottom: 16,
//     lineHeight: 22,
//   },
//   section: {
//     marginBottom: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//     paddingBottom: 10,
//   },
//   subTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//     marginVertical: 10,
//   },
//   subDescription: {
//     fontSize: 16,
//     color: '#555',
//     marginBottom: 10,
//   },
//   list: {
//     fontSize: 16,
//     color: '#666',
//     marginLeft: 20,
//     marginBottom: 5,
//   },
// });

// export default TheoryScreen;












import React from 'react'; 
import { ScrollView, Text, View, StyleSheet } from 'react-native';

const TheoryScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Parts of Speech (शब्द भेद) 📝</Text>
      <Text style={styles.description}>
        Parts of Speech वे शब्द होते हैं जो किसी वाक्य में अपने कार्य के आधार पर विभाजित किए जाते हैं। मुख्यतः 8 प्रकार के Parts of Speech होते हैं:
      </Text>

      {/* Existing sections for Parts of Speech */}


    <View style={styles.section}>
      <Text style={styles.subTitle}>1️⃣ Noun (संज्ञा) – Naming Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): किसी व्यक्ति, स्थान, वस्तु या विचार के नाम को Noun कहते हैं।</Text>
      <Text style={styles.subTitle}>Types of Noun (संज्ञा के प्रकार):</Text>
      <Text style={styles.list}>🔹 Proper Noun (व्यक्तिवाचक संज्ञा) – Ram, India, Taj Mahal</Text>
      <Text style={styles.list}>🔹 Common Noun (जातिवाचक संज्ञा) – Boy, Country, Book</Text>
      <Text style={styles.list}>🔹 Collective Noun (समूहवाचक संज्ञा) – Team, Army, Family</Text>
      <Text style={styles.list}>🔹 Abstract Noun (भाववाचक संज्ञा) – Honesty, Love, Happiness</Text>
      <Text style={styles.list}>🔹 Material Noun (द्रव्यवाचक संज्ञा) – Gold, Water, Iron</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>2️⃣ Pronoun (सर्वनाम) – Replacing Nouns</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द Noun के स्थान पर उपयोग किए जाते हैं, उन्हें Pronoun कहते हैं।</Text>
      <Text style={styles.subTitle}>Types of Pronoun (सर्वनाम के प्रकार):</Text>
      <Text style={styles.list}>🔸 Personal Pronoun (व्यक्तिगत सर्वनाम) – I, You, He, She</Text>
      <Text style={styles.list}>🔸 Possessive Pronoun (अधिकारवाचक सर्वनाम) – Mine, Yours, His, Hers</Text>
      <Text style={styles.list}>🔸 Reflexive Pronoun (निजवाचक सर्वनाम) – Myself, Yourself, Himself</Text>
      <Text style={styles.list}>🔸 Demonstrative Pronoun (संकेतवाचक सर्वनाम) – This, That, These, Those</Text>
      <Text style={styles.list}>🔸 Interrogative Pronoun (प्रश्नवाचक सर्वनाम) – Who, What, Which</Text>
      <Text style={styles.list}>🔸 Relative Pronoun (सम्बन्धवाचक सर्वनाम) – Who, Whose, That</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>3️⃣ Adjective (विशेषण) – Describing Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun की विशेषता बताते हैं, वे Adjective कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Types of Adjective (विशेषण के प्रकार):</Text>
      <Text style={styles.list}>🔹 Descriptive Adjective (वर्णनात्मक विशेषण) – Beautiful, Tall, Intelligent</Text>
      <Text style={styles.list}>🔹 Quantitative Adjective (परिमाणवाचक विशेषण) – Some, Few, Many</Text>
      <Text style={styles.list}>🔹 Demonstrative Adjective (संकेतवाचक विशेषण) – This, That, These</Text>
      <Text style={styles.list}>🔹 Possessive Adjective (अधिकारवाचक विशेषण) – My, Your, His</Text>
      <Text style={styles.list}>🔹 Interrogative Adjective (प्रश्नवाचक विशेषण) – Which, What, Whose</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>4️⃣ Verb (क्रिया) – Action Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी कार्य या अवस्था को प्रकट करते हैं, वे Verb कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Types of Verb (क्रिया के प्रकार):</Text>
      <Text style={styles.list}>🔸 Action Verb (क्रियापद) – Run, Eat, Write</Text>
      <Text style={styles.list}>🔸 Linking Verb (संयोजक क्रिया) – Is, Am, Are</Text>
      <Text style={styles.list}>🔸 Helping Verb (सहायक क्रिया) – Can, Will, Should</Text>
      <Text style={styles.list}>🔸 Transitive Verb (सकर्मक क्रिया) – She bought a car.</Text>
      <Text style={styles.list}>🔸 Intransitive Verb (अकर्मक क्रिया) – She sleeps well.</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>5️⃣ Adverb (क्रियाविशेषण) – Modifying Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Verb, Adjective, या किसी अन्य Adverb की विशेषता बताते हैं, वे Adverb कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Types of Adverb (क्रियाविशेषण के प्रकार):</Text>
      <Text style={styles.list}>🔹 Manner (तरीका) – Slowly, Quickly, Well</Text>
      <Text style={styles.list}>🔹 Place (स्थान) – Here, There, Everywhere</Text>
      <Text style={styles.list}>🔹 Time (समय) – Now, Yesterday, Soon</Text>
      <Text style={styles.list}>🔹 Frequency (आवृत्ति) – Always, Never, Often</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>6️⃣ Preposition (संबंधसूचक अव्यय) – Relationship Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द किसी Noun या Pronoun का अन्य शब्दों से संबंध दर्शाते हैं, वे Preposition कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
      <Text style={styles.list}>🔹 Place (स्थान): In, On, Under</Text>
      <Text style={styles.list}>🔹 Time (समय): Before, After, During</Text>
      <Text style={styles.list}>🔹 Direction (दिशा): To, From, Toward</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>7️⃣ Conjunction (संयोजक अव्यय) – Joining Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द दो शब्दों, वाक्यांशों या वाक्यों को जोड़ते हैं, वे Conjunction कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Types of Conjunction (संयोजक के प्रकार):</Text>
      <Text style={styles.list}>🔸 Coordinating Conjunction (समन्वय संयोजक) – And, But, Or</Text>
      <Text style={styles.list}>🔸 Subordinating Conjunction (आधीन संयोजक) – Because, Although, Since</Text>
      <Text style={styles.list}>🔸 Correlative Conjunction (सह-संयोजक) – Either...or, Neither...nor</Text>
    </View>

    <View style={styles.section}>
      <Text style={styles.subTitle}>8️⃣ Interjection (विस्मयादिबोधक अव्यय) – Exclamatory Words</Text>
      <Text style={styles.subDescription}>👉 Definition (परिभाषा): जो शब्द अचानक होने वाली भावनाओं को व्यक्त करते हैं, वे Interjection कहलाते हैं।</Text>
      <Text style={styles.subTitle}>Examples (उदाहरण):</Text>
      <Text style={styles.list}>🔹 Joy (खुशी): Wow! Hurrah!</Text>
      <Text style={styles.list}>🔹 Surprise (आश्चर्य): Oh! Ah!</Text>
      <Text style={styles.list}>🔹 Pain (दर्द): Ouch! Alas!</Text>
    </View>



      {/* Tenses Section */}

      <Text style={styles.title}>Tenses (काल) ⏳</Text>
<Text style={styles.description}>
  Tenses वह रूप होते हैं जिनका उपयोग क्रिया के समय (वर्तमान, भूतकाल, भविष्यत काल) को व्यक्त करने के लिए किया जाता है। तेंस मुख्यतः 3 प्रकार के होते हैं: 
  Present Tense (वर्तमान काल), Past Tense (भूतकाल), और Future Tense (भविष्यत काल)। इन तीनों में विभिन्न प्रकार होते हैं जो समय के संदर्भ में कार्यों को व्यक्त करते हैं।
</Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>1️⃣ Present Tense (वर्तमान काल)</Text>
        <Text style={styles.subDescription}>👉 Present Tense का उपयोग वर्तमान में हो रहे कार्यों को व्यक्त करने के लिए किया जाता है।</Text>

        <Text style={styles.subTitle}>a. Present Simple (साधारण वर्तमान काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + Verb (base form) + Object</Text>
        <Text style={styles.list}>🔹 Example: वह हर दिन पढ़ाई करता है। (He studies every day.)</Text>
        <Text style={styles.list}>🔹 Example: वे जल्दी उठते हैं। (They wake up early.)</Text>

        <Text style={styles.subTitle}>b. Present Continuous (वर्तमान काल जारी)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + am/is/are + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं किताब पढ़ रहा हूँ। (I am reading a book.)</Text>
        <Text style={styles.list}>🔹 Example: वे बाहर खेल रहे हैं। (They are playing outside.)</Text>

        <Text style={styles.subTitle}>c. Present Perfect (पूर्ण वर्तमान काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + has/have + Verb (past participle) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैंने अपना काम कर लिया है। (I have finished my work.)</Text>
        <Text style={styles.list}>🔹 Example: वे कॉलेज जा चुके हैं। (They have gone to college.)</Text>

        <Text style={styles.subTitle}>d. Present Perfect Continuous (पूर्ण जारी वर्तमान काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + has/have + been + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं दो घंटे से किताब पढ़ रहा हूँ। (I have been reading the book for two hours.)</Text>
        <Text style={styles.list}>🔹 Example: वे पूरे दिन काम कर रहे हैं। (They have been working all day.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>2️⃣ Past Tense (भूतकाल)</Text>
        <Text style={styles.subDescription}>👉 Past Tense का उपयोग अतीत में हुए कार्यों को व्यक्त करने के लिए किया जाता है।</Text>

        <Text style={styles.subTitle}>a. Past Simple (साधारण भूतकाल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + Verb (second form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैंने वह काम किया। (I did that work.)</Text>
        <Text style={styles.list}>🔹 Example: उसने मुझे मदद दी। (He helped me.)</Text>

        <Text style={styles.subTitle}>b. Past Continuous (भूतकाल जारी)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + was/were + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं टीवी देख रहा था। (I was watching TV.)</Text>
        <Text style={styles.list}>🔹 Example: वे पार्क में खेल रहे थे। (They were playing in the park.)</Text>

        <Text style={styles.subTitle}>c. Past Perfect (पूर्ण भूतकाल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + had + Verb (past participle) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैंने पहले ही खाना खा लिया था। (I had already eaten the food.)</Text>
        <Text style={styles.list}>🔹 Example: वे स्कूल जाने से पहले स्नान कर चुके थे। (They had taken a bath before going to school.)</Text>

        <Text style={styles.subTitle}>d. Past Perfect Continuous (पूर्ण जारी भूतकाल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + had + been + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: वह दो घंटे से पढ़ाई कर रहा था। (He had been studying for two hours.)</Text>
        <Text style={styles.list}>🔹 Example: मैं जब तक वहाँ था, वे काम कर रहे थे। (They had been working when I was there.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>3️⃣ Future Tense (भविष्यत काल)</Text>
        <Text style={styles.subDescription}>👉 Future Tense का उपयोग भविष्य में होने वाले कार्यों को व्यक्त करने के लिए किया जाता है।</Text>

        <Text style={styles.subTitle}>a. Future Simple (साधारण भविष्य काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + will/shall + Verb (base form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं कल स्कूल जाऊँगा। (I will go to school tomorrow.)</Text>
        <Text style={styles.list}>🔹 Example: वे अगले महीने भारत यात्रा करेंगे। (They will travel to India next month.)</Text>

        <Text style={styles.subTitle}>b. Future Continuous (भविष्यत काल जारी)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + will be + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं कल सुबह 10 बजे काम कर रहा होऊँगा। (I will be working at 10 AM tomorrow.)</Text>
        <Text style={styles.list}>🔹 Example: वह अगले सप्ताह छुट्टियों में यात्रा कर रहा होगा। (He will be traveling during the holidays next week.)</Text>

        <Text style={styles.subTitle}>c. Future Perfect (पूर्ण भविष्य काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + will have + Verb (past participle) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं कल तक यह काम खत्म कर लूँगा। (I will have finished this task by tomorrow.)</Text>
        <Text style={styles.list}>🔹 Example: वे एक घंटे में घर पहुँच चुके होंगे। (They will have reached home in an hour.)</Text>

        <Text style={styles.subTitle}>d. Future Perfect Continuous (पूर्ण जारी भविष्य काल)</Text>
        <Text style={styles.subDescription}>👉 Formula: Subject + will have been + Verb (ing form) + Object</Text>
        <Text style={styles.list}>🔹 Example: मैं एक घंटे से काम कर रहा होऊँगा। (I will have been working for an hour.)</Text>
        <Text style={styles.list}>🔹 Example: वे अगले महीने से चार साल तक इस स्कूल में पढ़ाई कर रहे होंगे। (They will have been studying in this school for four years by next month.)</Text>
      </View>


      {/* article and determination sectin */}

      <Text style={styles.title}>Articles & Determiners (लेख और निर्धारण) 📝</Text>
      <Text style={styles.description}>
        Articles और Determiners (निर्धारण) वाक्य में संज्ञा (Nouns) के पहले आते हैं और उनके बारे में जानकारी प्रदान करते हैं। Articles मुख्य रूप से दो प्रकार के होते हैं: 'a' और 'an' (Indefinite Articles), और 'the' (Definite Article)। Determiners अन्य शब्द होते हैं जो संज्ञा से पहले आते हैं और संज्ञा की विशेषताओं को दर्शाते हैं।
      </Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>1️⃣ Articles (लेख)</Text>
        <Text style={styles.subTitle}>a. Indefinite Articles (अपरिभाषित लेख) - 'a' और 'an'</Text>
        <Text style={styles.subDescription}>👉 'a' और 'an' का उपयोग किसी व्यक्ति, स्थान या वस्तु का सामान्य रूप से उल्लेख करने के लिए किया जाता है, जिसका विशेष रूप से उल्लेख नहीं किया गया है।</Text>
        <Text style={styles.subDescription}>👉 'a' का उपयोग तब किया जाता है जब शब्द की शुरुआत व्यंजन ध्वनि (consonant sound) से होती है, और 'an' का उपयोग तब किया जाता है जब शब्द की शुरुआत स्वर ध्वनि (vowel sound) से होती है।</Text>
        <Text style={styles.list}>🔹 I saw a dog in the park. (मैंने पार्क में एक कुत्ता देखा।)</Text>
        <Text style={styles.list}>🔹 She is an engineer. (वह एक इंजीनियर है।)</Text>
        <Text style={styles.list}>🔹 He is eating an apple. (वह एक सेब खा रहा है।)</Text>
        <Text style={styles.list}>🔹 I want to buy a car. (मैं एक कार खरीदना चाहता हूँ।)</Text>

        <Text style={styles.subTitle}>b. Definite Article (परिभाषित लेख) - 'the'</Text>
        <Text style={styles.subDescription}>👉 'the' का उपयोग तब किया जाता है जब हम किसी विशेष व्यक्ति, स्थान या वस्तु के बारे में बात करते हैं, जिसका पहले ही उल्लेख हो चुका होता है या जो ज्ञात होता है।</Text>
        <Text style={styles.list}>🔹 The book on the table is mine. (टेबल पर रखी किताब मेरी है।)</Text>
        <Text style={styles.list}>🔹 The sun rises in the east. (सूरज पूर्व में उगता है।)</Text>
        <Text style={styles.list}>🔹 She went to the store. (वह दुकान पर गई।)</Text>
        <Text style={styles.list}>🔹 The teacher is explaining the lesson. (शिक्षक पाठ समझा रहे हैं।)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>2️⃣ Determiners (निर्धारण)</Text>
        <Text style={styles.subTitle}>a. Demonstrative Determiners (प्रदर्शक निर्धारण)</Text>
        <Text style={styles.subDescription}>👉 Demonstrative determiners का उपयोग किसी चीज़ की स्थिति (near or far) को बताने के लिए किया जाता है। ये determiners 'this,' 'that,' 'these,' और 'those' होते हैं।</Text>
        <Text style={styles.list}>🔹 This book is interesting. (यह किताब दिलचस्प है।)</Text>
        <Text style={styles.list}>🔹 That dog looks cute. (वह कुत्ता प्यारा लग रहा है।)</Text>
        <Text style={styles.list}>🔹 These apples are fresh. (ये सेब ताजे हैं।)</Text>
        <Text style={styles.list}>🔹 Those flowers are beautiful. (वह फूल सुंदर हैं।)</Text>

        <Text style={styles.subTitle}>b. Quantifiers (परिमाण निर्धारण)</Text>
        <Text style={styles.subDescription}>👉 Quantifiers का उपयोग किसी चीज़ के मात्रा को दर्शाने के लिए किया जाता है। उदाहरण: 'some,' 'many,' 'few,' 'all,' 'several' आदि।</Text>
        <Text style={styles.list}>🔹 I have some friends. (मेरे पास कुछ दोस्त हैं।)</Text>
        <Text style={styles.list}>🔹 There are many books on the shelf. (शेल्फ पर बहुत सारी किताबें हैं।)</Text>
        <Text style={styles.list}>🔹 She has few ideas. (उसके पास कुछ विचार हैं।)</Text>
        <Text style={styles.list}>🔹 All the students passed the exam. (सभी छात्रों ने परीक्षा पास की।)</Text>

        <Text style={styles.subTitle}>c. Possessive Determiners (स्वत्व निर्धारण)</Text>
        <Text style={styles.subDescription}>👉 Possessive determiners का उपयोग किसी के स्वामित्व या अधिकार को दर्शाने के लिए किया जाता है। उदाहरण: 'my,' 'your,' 'his,' 'her,' 'our,' 'their' आदि।</Text>
        <Text style={styles.list}>🔹 This is my book. (यह मेरी किताब है।)</Text>
        <Text style={styles.list}>🔹 His car is new. (उसकी कार नई है।)</Text>
        <Text style={styles.list}>🔹 Our house is big. (हमारा घर बड़ा है।)</Text>
        <Text style={styles.list}>🔹 Their dog is playful. (उनका कुत्ता खेलनहार है।)</Text>

        <Text style={styles.subTitle}>d. Interrogative Determiners (प्रश्नवाचक निर्धारण)</Text>
        <Text style={styles.subDescription}>👉 Interrogative determiners का उपयोग प्रश्न पूछने के लिए किया जाता है। उदाहरण: 'which,' 'what,' 'whose' आदि।</Text>
        <Text style={styles.list}>🔹 Which book do you want to read? (आप कौन सी किताब पढ़ना चाहते हैं?)</Text>
        <Text style={styles.list}>🔹 What time is it? (समय क्या है?)</Text>
        <Text style={styles.list}>🔹 Whose bag is this? (यह बैग किसका है?)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>3️⃣ Articles and Determiners: Key Differences</Text>
        <Text style={styles.subDescription}>👉 Articles (a, an, the) विशिष्टता और परिभाषा को दर्शाते हैं, जबकि determiners (this, that, some, many, etc.) किसी संज्ञा के बारे में अधिक जानकारी प्रदान करते हैं।</Text>
        <Text style={styles.list}>🔹 Articles का उपयोग आमतौर पर बिना किसी विशेषता के किया जाता है, जैसे: 'a dog' (एक कुत्ता), 'the dog' (वह कुत्ता), 'an apple' (एक सेब).</Text>
        <Text style={styles.list}>🔹 Determiners विशेष रूप से संज्ञा की मात्रा, स्वामित्व, या स्थिति को दर्शाते हैं, जैसे: 'many dogs' (बहुत से कुत्ते), 'my apple' (मेरे सेब), 'this dog' (यह कुत्ता).</Text>
      </View>

      {/* active and passive voice  */}


      <Text style={styles.title}>Active & Passive Voice (सक्रिय और निष्क्रिय वॉयस) 🗣️</Text>
      <Text style={styles.description}>
        Active और Passive voice वाक्य की संरचना को दर्शाते हैं। Active voice में कर्ता (subject) क्रिया (verb) करता है, जबकि Passive voice में क्रिया का शिकार (object) मुख्य होता है और कर्ता को अक्सर अप्रकट रखा जाता है। 
        दोनों voice का उपयोग वाक्य में विविधता लाने के लिए किया जाता है और यह स्थिति पर निर्भर करता है कि कौन सा बेहतर उपयुक्त है।
      </Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>1️⃣ Active Voice (सक्रिय वॉयस)</Text>
        <Text style={styles.subDescription}>
          👉 Active voice में कर्ता (subject) वह होता है जो क्रिया (verb) करता है, और क्रिया का शिकार (object) परोक्ष होता है।
        </Text>
        <Text style={styles.subDescription}>👉 Active voice के वाक्य में, कर्ता (subject) के द्वारा किए गए कार्य का प्रधान ध्यान होता है।</Text>
        
        <Text style={styles.list}>🔹 She reads a book. (वह एक किताब पढ़ती है।)</Text>
        <Text style={styles.list}>🔹 The teacher explains the lesson. (शिक्षक पाठ समझाते हैं।)</Text>
        <Text style={styles.list}>🔹 They play football every Sunday. (वे हर रविवार फुटबॉल खेलते हैं।)</Text>
        <Text style={styles.list}>🔹 He fixed the car. (उसने कार ठीक की।)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>2️⃣ Passive Voice (निष्क्रिय वॉयस)</Text>
        <Text style={styles.subDescription}>
          👉 Passive voice में क्रिया का शिकार (object) वाक्य का मुख्य विषय (subject) बन जाता है और कर्ता (subject) को अप्रकट किया जा सकता है। 
          Passive voice का उपयोग तब किया जाता है जब क्रिया का शिकार अधिक महत्वपूर्ण हो या जब कर्ता का उल्लेख करना आवश्यक न हो।
        </Text>
        <Text style={styles.subDescription}>👉 Passive voice में वाक्य का ध्यान उस व्यक्ति या चीज़ पर होता है जिस पर क्रिया हो रही है।</Text>

        <Text style={styles.list}>🔹 A book is read by her. (एक किताब उसके द्वारा पढ़ी जाती है।)</Text>
        <Text style={styles.list}>🔹 The lesson is explained by the teacher. (पाठ शिक्षक द्वारा समझाया जाता है।)</Text>
        <Text style={styles.list}>🔹 Football is played by them every Sunday. (फुटबॉल हर रविवार उनके द्वारा खेली जाती है।)</Text>
        <Text style={styles.list}>🔹 The car was fixed by him. (कार को उसने ठीक किया था।)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>3️⃣ Active to Passive: How to Change?</Text>
        <Text style={styles.subDescription}>👉 Active voice से passive voice में बदलने के लिए निम्नलिखित प्रक्रिया का पालन करें:</Text>
        <Text style={styles.subDescription}>
          1. वाक्य का object को subject बना लें। 
        </Text>
        <Text style={styles.subDescription}>
          2. मुख्य क्रिया (verb) को appropriate tense में बदलें।
        </Text>
        <Text style={styles.subDescription}>
          3. 'by' के साथ original subject को जोड़ें (यह चरण अक्सर optional होता है)। 
        </Text>

        <Text style={styles.subTitle}>Examples:</Text>
        <Text style={styles.list}>🔹 Active: She makes a cake. (वह एक केक बनाती है.)</Text>
        <Text style={styles.list}>🔹 Passive: A cake is made by her. (एक केक उसके द्वारा बनाया जाता है.)</Text>

        <Text style={styles.list}>🔹 Active: They are painting the house. (वे घर को रंग रहे हैं.)</Text>
        <Text style={styles.list}>🔹 Passive: The house is being painted by them. (घर को उनके द्वारा रंगा जा रहा है.)</Text>

        <Text style={styles.list}>🔹 Active: He will complete the task. (वह कार्य पूरा करेगा.)</Text>
        <Text style={styles.list}>🔹 Passive: The task will be completed by him. (कार्य उसके द्वारा पूरा किया जाएगा.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>4️⃣ Key Differences Between Active and Passive Voice</Text>
        <Text style={styles.subDescription}>👉 Active और Passive voice के बीच निम्नलिखित अंतर हैं:</Text>
        <Text style={styles.list}>🔹 Active voice में कर्ता (subject) प्रमुख होता है, जबकि Passive voice में क्रिया का शिकार (object) प्रमुख होता है।</Text>
        <Text style={styles.list}>🔹 Active voice में वाक्य सरल और सीधा होता है, जबकि Passive voice में अधिक जटिलता हो सकती है।</Text>
        <Text style={styles.list}>🔹 Passive voice का उपयोग अधिकतर तब किया जाता है जब क्रिया का शिकार महत्वपूर्ण हो, न कि कर्ता।</Text>
        <Text style={styles.list}>🔹 Passive voice का प्रयोग कभी-कभी 'by' के साथ कर्ता को शामिल करता है, और कभी-कभी कर्ता को हटाया जा सकता है।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>5️⃣ Tense Changes in Active & Passive Voice</Text>
        <Text style={styles.subDescription}>
          👉 Active और Passive voice में tense के अनुसार परिवर्तन होते हैं, जैसे:
        </Text>

        <Text style={styles.subTitle}>a. Present Simple Tense</Text>
        <Text style={styles.list}>🔹 Active: She writes a letter. (वह एक पत्र लिखती है.)</Text>
        <Text style={styles.list}>🔹 Passive: A letter is written by her. (एक पत्र उसके द्वारा लिखा जाता है.)</Text>

        <Text style={styles.subTitle}>b. Past Simple Tense</Text>
        <Text style={styles.list}>🔹 Active: He ate the cake. (उसने केक खाया.)</Text>
        <Text style={styles.list}>🔹 Passive: The cake was eaten by him. (केक को उसके द्वारा खाया गया था.)</Text>

        <Text style={styles.subTitle}>c. Future Simple Tense</Text>
        <Text style={styles.list}>🔹 Active: They will write the report. (वे रिपोर्ट लिखेंगे.)</Text>
        <Text style={styles.list}>🔹 Passive: The report will be written by them. (रिपोर्ट उनके द्वारा लिखी जाएगी.)</Text>
      </View>


{/* direct and indirect speech */}

<Text style={styles.title}>Direct & Indirect Speech (प्रत्यक्ष और अप्रत्यक्ष संवाद) 💬</Text>
      <Text style={styles.description}>
        Direct और Indirect speech दोनों ही संवाद को व्यक्त करने के तरीके हैं। Direct speech में किसी की बात को जस का तस उद्धृत किया जाता है, जबकि Indirect speech में उसी बात को कुछ हद तक परिवर्तित करके बताया जाता है। दोनों प्रकार के संवादों में समय, स्थान और अन्य शब्दों का चयन भी अहम होता है।
      </Text>

      <View style={styles.section}>
        <Text style={styles.subTitle}>1️⃣ Direct Speech (प्रत्यक्ष संवाद)</Text>
        <Text style={styles.subDescription}>
          👉 Direct speech में किसी व्यक्ति की बात को उसी के शब्दों में बिना किसी परिवर्तन के उद्धृत किया जाता है।
        </Text>
        <Text style={styles.subDescription}>
          👉 इसमें उद्धृत वाक्य के बीच में शब्दों के लिए उद्धरण चिह्न (" ") का उपयोग किया जाता है।
        </Text>
        
        <Text style={styles.list}>🔹 He said, "I am going to the market." (उसने कहा, "मैं बाजार जा रहा हूँ।")</Text>
        <Text style={styles.list}>🔹 She said, "I will come tomorrow." (उसने कहा, "मैं कल आऊँगी।")</Text>
        <Text style={styles.list}>🔹 "It's raining today," he said. ("आज बारिश हो रही है," उसने कहा.)</Text>
        <Text style={styles.list}>🔹 "I am reading a book," she said. ("मैं एक किताब पढ़ रही हूँ," उसने कहा.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>2️⃣ Indirect Speech (अप्रत्यक्ष संवाद)</Text>
        <Text style={styles.subDescription}>
          👉 Indirect speech में किसी की बात को उनके शब्दों का अर्थ बदलकर या संक्षेप में व्यक्त किया जाता है।
        </Text>
        <Text style={styles.subDescription}>
          👉 इसमें उद्धरण चिह्न का प्रयोग नहीं किया जाता और वाक्य में कुछ बदलाव किए जाते हैं जैसे काल (tense) और व्यक्तिगत सर्वनाम (pronouns) को बदलना।
        </Text>

        <Text style={styles.list}>🔹 He said that he was going to the market. (उसने कहा कि वह बाजार जा रहा था.)</Text>
        <Text style={styles.list}>🔹 She said that she would come tomorrow. (उसने कहा कि वह कल आएगी.)</Text>
        <Text style={styles.list}>🔹 He said that it was raining that day. (उसने कहा कि उस दिन बारिश हो रही थी.)</Text>
        <Text style={styles.list}>🔹 She said that she was reading a book. (उसने कहा कि वह एक किताब पढ़ रही थी.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>3️⃣ How to Change Direct Speech to Indirect Speech?</Text>
        <Text style={styles.subDescription}>👉 Direct speech को Indirect speech में बदलते समय निम्नलिखित नियमों का पालन किया जाता है:</Text>
        
        <Text style={styles.subDescription}>1. **Tense Change**: Direct speech के tense को Indirect speech में बदलना पड़ता है।</Text>
        <Text style={styles.subDescription}>2. **Remove Quotation Marks**: उद्धरण चिह्न (" ") हटा दिए जाते हैं।</Text>
        <Text style={styles.subDescription}>3. **Change of Pronouns**: Personal pronouns को बदलते समय नए विषय के अनुसार उनका रूप बदलना पड़ता है।</Text>

        <Text style={styles.subTitle}>Examples:</Text>
        <Text style={styles.list}>🔹 Direct: She said, "I am happy." (उसने कहा, "मैं खुश हूँ.")</Text>
        <Text style={styles.list}>🔹 Indirect: She said that she was happy. (उसने कहा कि वह खुश थी.)</Text>

        <Text style={styles.list}>🔹 Direct: He said, "I will help you." (उसने कहा, "मैं आपकी मदद करूंगा.")</Text>
        <Text style={styles.list}>🔹 Indirect: He said that he would help me. (उसने कहा कि वह मेरी मदद करेगा.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>4️⃣ Key Changes When Converting Direct to Indirect Speech</Text>
        <Text style={styles.subDescription}>👉 जब Direct को Indirect में बदलते हैं, तो निम्नलिखित परिवर्तनों का ध्यान रखा जाता है:</Text>
        <Text style={styles.list}>🔹 **Tense Change**: Present simple tense → Past simple tense, Present continuous tense → Past continuous tense, आदि।</Text>
        <Text style={styles.list}>🔹 **Pronoun Change**: "I" becomes "he/she", "you" becomes "I" (depending on context).</Text>
        <Text style={styles.list}>🔹 **Reporting Verb**: "said" को "told" या "asked" में बदल सकते हैं, यदि वाक्य में सवाल पूछा गया हो।</Text>
        <Text style={styles.list}>🔹 **Remove Quotation Marks**: शब्दों के उद्धरण चिह्न को हटाकर वाक्य में बदलाव किया जाता है।</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>5️⃣ Questions in Direct and Indirect Speech</Text>
        <Text style={styles.subDescription}>👉 जब सवाल पूछा जाता है, तो Direct और Indirect speech के रूप में निम्नलिखित परिवर्तन होते हैं:</Text>

        <Text style={styles.subTitle}>a. Yes/No Questions</Text>
        <Text style={styles.list}>🔹 Direct: She asked, "Are you coming?" (उसने पूछा, "क्या तुम आ रहे हो?")</Text>
        <Text style={styles.list}>🔹 Indirect: She asked if I was coming. (उसने पूछा कि क्या मैं आ रहा था.)</Text>

        <Text style={styles.subTitle}>b. Wh- Questions</Text>
        <Text style={styles.list}>🔹 Direct: He asked, "Where are you going?" (उसने पूछा, "तुम कहाँ जा रहे हो?")</Text>
        <Text style={styles.list}>🔹 Indirect: He asked where I was going. (उसने पूछा कि मैं कहाँ जा रहा था.)</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subTitle}>6️⃣ Imperative Sentences in Direct and Indirect Speech</Text>
        <Text style={styles.subDescription}>👉 Direct और Indirect speech में आदेशात्मक वाक्य को बदलने के लिए एक विशेष तरीका अपनाया जाता है:</Text>

        <Text style={styles.list}>🔹 Direct: She said, "Close the door." (उसने कहा, "दरवाजा बंद करो.")</Text>
        <Text style={styles.list}>🔹 Indirect: She told me to close the door. (उसने मुझे दरवाजा बंद करने को कहा.)</Text>

        <Text style={styles.list}>🔹 Direct: He said, "Please help me." (उसने कहा, "कृपया मेरी मदद करो.")</Text>
        <Text style={styles.list}>🔹 Indirect: He asked me to help him. (उसने मुझसे उसकी मदद करने को कहा.)</Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
    lineHeight: 22,
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  subDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  list: {
    fontSize: 16,
    color: '#666',
    marginLeft: 20,
    marginBottom: 5,
  },
});

export default TheoryScreen;
