
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Collapsible from "react-native-collapsible";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons"; // For dropdown arrow icons

const TestTopics = ({ route }) => {
  const { subjectTitle } = route.params;
  const navigation = useNavigation();
  const [collapsed, setCollapsed] = useState({});

  const subjects = {
    "Indian Constitution": [
      // { title: "भाग II: नागरिकता", description: "(अनुच्छेद 5 से 11) संविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।" },
      // { title: "भाग III: मौलिक अधिकार", description: "(अनुच्छेद 12 से 35) नागरिकों को प्रदान किए गए मौलिक अधिकार जैसे समानता, स्वतंत्रता और शोषण के विरुद्ध अधिकार।" },
      // { title: "भाग IV: राज्य के नीति निदेशक तत्व", description: "(अनुच्छेद 36 से 51) सामाजिक और आर्थिक न्याय सुनिश्चित करने के लिए राज्य को दिए गए दिशा-निर्देश।" },
      // { title: "भाग IV(A): मौलिक कर्तव्य", description: "(अनुच्छेद 51A) नागरिकों के लिए राष्ट्र के प्रति मौलिक कर्तव्य।" },
      // { title: "भाग V: संघ", description: "(अनुच्छेद 52 से 151) राष्ट्रपति, उपराष्ट्रपति, मंत्री परिषद, संसद, और संघीय न्यायपालिका।" },

      // Add more topics here...

      { 
        title: "भाग I: संघ और उसका क्षेत्र", 
        description: "(अनुच्छेद 1 से 4) संघ के नाम, क्षेत्र और नए राज्यों के गठन से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग II: नागरिकता", 
        description: "(अनुच्छेद 5 से 11) संविधान के प्रारंभ पर नागरिकता और संबंधित प्रावधान।" 
      },
      { 
        title: "भाग III: मौलिक अधिकार", 
        description: "(अनुच्छेद 12 से 35) नागरिकों को प्रदान किए गए मौलिक अधिकार जैसे समानता, स्वतंत्रता और शोषण के विरुद्ध अधिकार।" 
      },
      { 
        title: "भाग IV: राज्य के नीति निदेशक तत्व", 
        description: "(अनुच्छेद 36 से 51) सामाजिक और आर्थिक न्याय सुनिश्चित करने के लिए राज्य को दिए गए दिशा-निर्देश।" 
      },
      { 
        title: "भाग IV(A): मौलिक कर्तव्य", 
        description: "(अनुच्छेद 51A) नागरिकों के लिए राष्ट्र के प्रति मौलिक कर्तव्य।" 
      },
      { 
        title: "भाग V: संघ", 
        description: "(अनुच्छेद 52 से 151) राष्ट्रपति, उपराष्ट्रपति, मंत्री परिषद, संसद, और संघीय न्यायपालिका।" 
      },
      { 
        title: "भाग VI: राज्य", 
        description: "(अनुच्छेद 152 से 237) राज्यों में शासन की संरचना और शक्तियों से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग VII: राज्य प्रांत (निरस्त)", 
        description: "7वां भाग संविधान (7वां संशोधन) अधिनियम, 1956 द्वारा निरस्त किया गया।" 
      },
      { 
        title: "भाग VIII: संघीय क्षेत्र", 
        description: "(अनुच्छेद 239 से 242) केंद्रशासित प्रदेशों के प्रशासन से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग IX: पंचायती राज", 
        description: "(अनुच्छेद 243 से 243O) ग्राम पंचायतों और स्थानीय शासन से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग IX(A): नगरपालिका", 
        description: "(अनुच्छेद 243P से 243ZG) नगरपालिकाओं के गठन और कार्य से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग IX(B): सहकारी समितियाँ", 
        description: "(अनुच्छेद 243ZH से 243ZT) सहकारी समितियों के गठन और प्रबंधन से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग X: अनुसूचित और जनजातीय क्षेत्र", 
        description: "(अनुच्छेद 244 से 244A) अनुसूचित क्षेत्रों और जनजातीय प्रशासन के प्रावधान।" 
      },
      { 
        title: "भाग XI: संघ और राज्यों के बीच संबंध", 
        description: "(अनुच्छेद 245 से 263) विधायी, कार्यकारी और वित्तीय शक्तियों का विभाजन।" 
      },
      { 
        title: "भाग XII: वित्त, संपत्ति, अनुबंध और वाद", 
        description: "(अनुच्छेद 264 से 300A) वित्तीय मामलों, संपत्ति और सरकारी अनुबंधों से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XIII: भारत के राज्यक्षेत्र के भीतर व्यापार, वाणिज्य और समागम", 
        description: "(अनुच्छेद 301 से 307) राज्यों के बीच व्यापार और वाणिज्य की स्वतंत्रता।" 
      },
      { 
        title: "भाग XIV: संघ और राज्यों के अधीन सेवाएँ", 
        description: "(अनुच्छेद 308 से 323) लोक सेवाओं और लोक सेवा आयोगों से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XIV(A): न्यायाधिकरण", 
        description: "(अनुच्छेद 323A और 323B) न्यायाधिकरणों की स्थापना से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XV: चुनाव", 
        description: "(अनुच्छेद 324 से 329A) चुनाव आयोग और चुनावों के संचालन से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XVI: कुछ वर्गों के लिए विशेष प्रावधान", 
        description: "(अनुच्छेद 330 से 342) अनुसूचित जातियों, अनुसूचित जनजातियों और अन्य पिछड़े वर्गों के लिए प्रावधान।" 
      },
      { 
        title: "भाग XVII: राजभाषा", 
        description: "(अनुच्छेद 343 से 351) भारत की राजभाषा और अन्य भाषाओं से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XVIII: आपात उपबंध", 
        description: "(अनुच्छेद 352 से 360) राष्ट्रीय, राज्य और वित्तीय आपातकाल से संबंधित प्रावधान।" 
      },
      { 
        title: "भाग XIX: विविध", 
        description: "(अनुच्छेद 361 से 367) विभिन्न प्रावधानों से संबंधित नियम।" 
      },
      { 
        title: "भाग XX: संविधान का संशोधन", 
        description: "(अनुच्छेद 368) संविधान संशोधन की प्रक्रिया।" 
      },
      { 
        title: "भाग XXI: अस्थायी, संक्रमणकालीन और विशेष प्रावधान", 
        description: "(अनुच्छेद 369 से 392) अस्थायी और विशेष प्रावधान।" 
      },
      { 
        title: "भाग XXII: संक्षिप्त नाम, प्रारंभ, हिंदी और अंग्रेजी में पाठ", 
        description: "(अनुच्छेद 393 से 395) संविधान का नाम और प्रारंभ।" 
      }
    ],

    // "Indian Economy":[

      
    // ]
  };

  const topics = subjects[subjectTitle] || [];

  const toggleCollapse = (index) => {
    setCollapsed((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleTakeTest = () => {
    navigation.navigate("TestNumbers", { subjectTitle });
  };

  const buttonColors = ["#007BFF", "#28a745", "#ffc107", "#dc3545", "#17a2b8"];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Test Topics for {subjectTitle}</Text>
      {topics.map((topic, index) => (
        <View key={index} style={styles.topicContainer}>
          <TouchableOpacity
            onPress={() => toggleCollapse(index)}
            style={[styles.topicButton, { backgroundColor: buttonColors[index % buttonColors.length] }]}
          >
            <Text style={styles.topicTitle}>{topic.title}</Text>
            <MaterialIcons
              name={collapsed[index] ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <Collapsible collapsed={collapsed[index]}>
            <View style={styles.dropdownContent}>
              <Text style={styles.description}>{topic.description}</Text>
              <TouchableOpacity style={styles.takeTestButton} onPress={handleTakeTest}>
                <Text style={styles.takeTestButtonText}>Take Test</Text>
              </TouchableOpacity>
            </View>
          </Collapsible>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  topicContainer: {
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  topicButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  topicTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
  },
  dropdownContent: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
  },
  takeTestButton: {
    backgroundColor: "#28a745",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  takeTestButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TestTopics;
