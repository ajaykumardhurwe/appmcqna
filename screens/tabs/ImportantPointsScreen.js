import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ImportantPointsScreen() {
  return (
    <View style={styles.container}>
      <Text>Important Points Content</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});






// // screens/ImportantPointsScreen.js
// import React from "react";
// import { View, Text } from "react-native";

// const data = [
//   { id: "1", title: "Topic 1", content: "Details of Topic 1" },
//   { id: "2", title: "Topic 2", content: "Details of Topic 2" },
//   { id: "3", title: "Topic 3", content: "Details of Topic 3" },
// ];

// const ImportantPointsScreen = ({ route }) => {
//   return (
//     <View style={{ flex: 1, padding: 20 }}>
//       <Text style={{ fontSize: 18 }}>{route.params.item.content}</Text>
//     </View>
//   );
// };

// export default ImportantPointsScreen;