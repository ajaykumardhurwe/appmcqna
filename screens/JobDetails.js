// import React from "react";
// import { View, Text, TouchableOpacity, Linking, ScrollView } from "react-native";
// import { useRoute, useNavigation } from "@react-navigation/native";
// import tailwind from "tailwind-rn";
// import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// export default function JobDetails() {
//   const route = useRoute();
//   const navigation = useNavigation();
//   const { job } = route.params;

//   return (
//     <ScrollView style={tailwind("flex-1 bg-gray-100 p-4")}>
//       {/* Job Title */}
//       <Text style={tailwind("text-3xl font-bold text-gray-800 mb-4 flex items-center")}>
//         <FontAwesome name="info-circle" size={24} color="blue" style={tailwind("mr-2")} />
//         {job["Job Title"]}
//       </Text>

//       {/* Job Details */}
//       <View style={tailwind("space-y-4 text-gray-700")}>
//         <Text style={tailwind("text-base")}>
//           <Text style={tailwind("font-bold")}>📄 Description:</Text> {job["Description"]}
//         </Text>
//         <Text style={tailwind("text-base flex-row")}>
//           <MaterialIcons name="calendar-today" size={20} color="blue" style={tailwind("mr-2")} />
//           <Text style={tailwind("font-bold")}>Start Date:</Text> {job["Start Date"]}
//         </Text>
//         <Text style={tailwind("text-base flex-row")}>
//           <MaterialIcons name="calendar-today" size={20} color="blue" style={tailwind("mr-2")} />
//           <Text style={tailwind("font-bold")}>End Date:</Text> {job["End Date"]}
//         </Text>
//         <Text style={tailwind("text-base flex-row")}>
//           <FontAwesome name="external-link" size={20} color="blue" style={tailwind("mr-2")} />
//           <Text style={tailwind("font-bold")}>Official Link:</Text>{" "}
//           <Text
//             style={tailwind("text-blue-600 underline")}
//             onPress={() => Linking.openURL(job["Official Link"])}
//           >
//             Visit
//           </Text>
//         </Text>
//         <Text style={tailwind("text-base flex-row")}>
//           <FontAwesome name="file-text-o" size={20} color="blue" style={tailwind("mr-2")} />
//           <Text style={tailwind("font-bold")}>Notification Link:</Text>{" "}
//           <Text
//             style={tailwind("text-blue-600 underline")}
//             onPress={() => Linking.openURL(job["Notification Link"])}
//           >
//             View
//           </Text>
//         </Text>
//       </View>

//       {/* eForm Fillup and Job Consultancy */}
//       <View style={tailwind("mt-6 flex flex-row gap-4")}>
//         {/* Column 1 */}
//         <View style={tailwind("bg-blue-50 p-4 rounded-lg shadow-md flex-1")}>
//           <Text style={tailwind("text-lg font-semibold text-blue-800 mb-2")}>
//             📝 About eForm Fillup
//           </Text>
//           <Text style={tailwind("text-gray-700")}>
//             आप यह फॉर्म हमारे माध्यम से भी भर सकते हैं, और इसके लिए आपको कहीं जाने की आवश्यकता नहीं है। 
//             बस अपना समय चुनें, और CSC सेंटर के प्रतिनिधि आपको उसी समय पर कॉल करेंगे, 
//             जिससे आप आसानी से अपना फॉर्म भर सकें। 
//             इससे आपका कीमती समय भी बच सकेगा। अपना समय बुक करने के लिए नीचे eForm Fillup पर क्लिक करें।
//           </Text>
//         </View>

//         {/* Column 2 */}
//         <View style={tailwind("bg-blue-50 p-4 rounded-lg shadow-md flex-1")}>
//           <Text style={tailwind("text-lg font-semibold text-blue-800 mb-2")}>
//             🏢 About Job Consultancy
//           </Text>
//           <Text style={tailwind("text-gray-700")}>
//             जॉब लेने में आपको परेशानी हो रही है? अब चिंता करने की ज़रूरत नहीं है! 
//             हमारी जॉब कंसल्टेंसी सेवा आपके लिए सही नौकरी ढूंढने में मदद करेगी। 
//             Job Consultancy में अपना विवरण भरें ताकि हम आपके लिए सही नौकरी ढूंढ सकें।
//           </Text>
//         </View>
//       </View>

//       {/* Buttons */}
//       <View style={tailwind("mt-6 flex flex-row")}>
//         <TouchableOpacity
//           style={tailwind(
//             "bg-blue-600 text-white py-3 px-6 rounded-lg flex-1 mr-2 items-center"
//           )}
//           onPress={() => navigation.navigate("eFormFillup")}
//         >
//           🚀 eForm Fillup
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={tailwind(
//             "bg-green-600 text-white py-3 px-6 rounded-lg flex-1 ml-2 items-center"
//           )}
//           onPress={() => navigation.navigate("JobConsultancy")}
//         >
//           🏢 Job Consultancy
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }















import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function JobDetails({ route, navigation }) {
  const { job } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{job['Job Title']}</Text>
      <Text>{job['Description']}</Text>
      <Text>{job['Start Date']}</Text>
      <Text>{job['End Date']}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backButtonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold' },
  backButton: { marginTop: 20, backgroundColor: 'blue', padding: 10 },
  backButtonText: { color: 'white', textAlign: 'center' },
});
