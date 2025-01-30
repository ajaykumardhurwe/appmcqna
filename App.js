// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });













// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// // import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { NavigationContainer } from "@react-navigation/native";
// // import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Import icon sets

// import HomeScreen from './screens/HomeScreen';
// import MCQScreen from './screens/MCQScreen';
// import JobScreen from './screens/JobScreen';
// import AboutUsScreen from './screens/AboutUsScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import {  MaterialIcons } from "@expo/vector-icons"; // Import icon sets

// // import HomeScreen from "./screens/HomeScreen";
// // import MCQScreen from "./screens/MCQScreen";
// // import JobScreen from "./screens/JobScreen";
// // import AboutUsScreen from "./screens/AboutUsScreen";
// // import ProfileScreen from "./screens/ProfileScreen";
// // import TestTopics from "./screens/TestTopics";
// import TestTopics from './screens/TestTopics';
// import MCQTest from "./screens/MCQTest";
// import JobDetails from "./screens/JobDetails";
// // const Tab = createBottomTabNavigator();
// // c

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Tab = createBottomTabNavigator();

// // const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MCQStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MCQScreen" component={MCQScreen} options={{ title: "MCQs" }} />
//       <Stack.Screen name="TestTopics" component={TestTopics} options={{ title: "Test Topics" }} />
//       <Stack.Screen name="MCQTest" component={MCQTest} options={{ title: "MCQ Test" }} />
//       <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: 'Job Details' }} />
//     </Stack.Navigator>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//         screenOptions={({ route }) => ({
//           tabBarIcon: ({ focused, color, size }) => {
//             let iconName;
//             if (route.name === 'Home') iconName = focused ? 'home' : 'home-outline';
//             else if (route.name === 'MCQ') iconName = focused ? 'list' : 'list-outline';
//             else if (route.name === 'Job') iconName = focused ? 'briefcase' : 'briefcase-outline';
//             else if (route.name === 'About Us') iconName = focused ? 'information' : 'information-outline';
//             else if (route.name === 'Profile') iconName = focused ? 'person' : 'person-outline';
//             return <Ionicons name={iconName} size={size} color={color} />;
//           },
//         })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="MCQ" component={MCQScreen} />
//         <Tab.Screen name="Job" component={JobScreen} />
//         <Tab.Screen name="About Us" component={AboutUsScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
































 

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import MCQScreen from "./screens/MCQScreen";
import JobScreen from "./screens/JobScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import TestTopics from "./screens/TestTopics";
import MCQTest from "./screens/MCQTest";
import JobDetails from "./screens/JobDetails";
import CourseDetailsScreen from "./screens/CourseDetailsScreen";
import ClassroomScreen from "./screens/ClassroomScreen";
import TestNumbers from "./screens/TestNumbers";
import ServicesScreen from "./screens/ServicesScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// function MCQStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MCQScreen" component={MCQScreen} options={{ title: "MCQs" }} />
//       <Stack.Screen name="TestTopics" component={TestTopics} options={{ title: "Test Topics" }} />
//       <Stack.Screen name="MCQTest" component={MCQTest} options={{ title: "MCQ Test" }} />
//       <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: "Job Details" }} />
//       {/* <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} /> */}
//       {/* <Stack.Screen name="Classroom" component={ClassroomScreen} /> */}

      
//     </Stack.Navigator>
//   );
// }


function MCQStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MCQScreen" component={MCQScreen} />
      <Stack.Screen name="TestTopics" component={TestTopics} />
      <Stack.Screen name="TestNumbers" component={TestNumbers} />

      <Stack.Screen name="MCQTest" component={MCQTest} />
      <Stack.Screen name="JobDetails" component={JobDetails} />
      {/* <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} /> */}
      {/* <Stack.Screen name="Classroom" component={ClassroomScreen} /> */}
    </Stack.Navigator>
  );
}


// function HomeStackNavigator() {
//   return (
//     <Stack.Navigator  >
//       {/* <Stack.Screen name="MCQScreen" component={MCQScreen} options={{ title: "MCQs" }} />
//       <Stack.Screen name="TestTopics" component={TestTopics} options={{ title: "Test Topics" }} />
//       <Stack.Screen name="MCQTest" component={MCQTest} options={{ title: "MCQ Test" }} />
//       <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: "Job Details" }} /> */}
//       <Stack.Screen name="H" component={HomeScreen} />
     
//       <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
//       <Stack.Screen name="Classroom" component={ClassroomScreen} />

      
//     </Stack.Navigator>
//   );
// }













function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="MCQScreen" component={MCQScreen} options={{ title: "MCQs" }} />
      <Stack.Screen name="TestTopics" component={TestTopics} options={{ title: "Test Topics" }} />
      <Stack.Screen name="MCQTest" component={MCQTest} options={{ title: "MCQ Test" }} />
      <Stack.Screen name="JobDetails" component={JobDetails} options={{ title: "Job Details" }} /> */}
      <Stack.Screen name="H" component={HomeScreen} />
      <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
      <Stack.Screen name="Classroom" component={ClassroomScreen} />
    </Stack.Navigator>
  );
}





export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") iconName = focused ? "home" : "home-outline";
            else if (route.name === "MCQ") iconName = focused ? "list" : "list-outline";
            else if (route.name === "Job") iconName = focused ? "briefcase" : "briefcase-outline";
            else if (route.name === "Services") iconName = focused ? "information" : "information-outline";
            else if (route.name === "Profile") iconName = focused ? "person" : "person-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />

        <Tab.Screen name="MCQ" component={MCQStackNavigator} />
        <Tab.Screen name="Job" component={JobScreen} />
        <Tab.Screen name="Services" component={ServicesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}








// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";

// import HomeScreen from "./screens/HomeScreen";
// import MCQScreen from "./screens/MCQScreen";
// import JobScreen from "./screens/JobScreen";
// import AboutUsScreen from "./screens/AboutUsScreen";
// import ProfileScreen from "./screens/ProfileScreen";
// import TestTopics from "./screens/TestTopics";

// const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

// function MCQStackNavigator() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MCQScreen" component={MCQScreen} options={{ title: "MCQs" }} />
//       <Stack.Screen name="TestTopics" component={TestTopics} options={{ title: "Test Topics" }} />
//     </Stack.Navigator>
//   );
// }

// export default function AppNavigator() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="MCQ" component={MCQStackNavigator} />
//         <Tab.Screen name="Job" component={JobScreen} />
//         <Tab.Screen name="AboutUs" component={AboutUsScreen} />
//         <Tab.Screen name="Profile" component={ProfileScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }
