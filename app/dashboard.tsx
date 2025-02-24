import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Fitness from './Fitness';
import Meals from './Meals';
import Profile from './UserProfile';
const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#4CAF50',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Fitness" component={Fitness} />
      <Tab.Screen name="Meals" component={Meals} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
