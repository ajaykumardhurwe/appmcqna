import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TheoryScreen from './tabs/TheoryScreen';
import ImportantPointsScreen from './tabs/ImportantPointsScreen';
import MCQTestScreen from './tabs/MCQTestScreen';

const Tab = createMaterialTopTabNavigator();

export default function ClassroomScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Theory" component={TheoryScreen} />
      <Tab.Screen name="Important Points" component={ImportantPointsScreen} />
      <Tab.Screen name="MCQ Test" component={MCQTestScreen} />
    </Tab.Navigator>
  );
}
