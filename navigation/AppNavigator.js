import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MCQScreen from "../screens/MCQScreen";
import HomeScreen from "../screens/HomeScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="MCQ" component={MCQScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
