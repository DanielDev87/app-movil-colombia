import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import InfoCol from '../screens/InfoCol';
import Tourism from '../screens/Tourism';
import Constitution from '../screens/Constitution';
import Credits from '../screens/Credits';

const screens = [
 {
    name: "Colombia",
    screen: InfoCol,
    icon: 'information-outline',
 },
 {
    name: "Turismo",
    screen: Tourism,
    icon: 'earth',
 },
 {
    name: "Constitución",
    screen: Constitution,
    icon: 'book',
 },
 {
    name: "Creditos",
    screen: Credits,
    icon: 'brain',
 },
];

const BottomNavigation = () => {
 const Tab = createBottomTabNavigator();

 return (
    <Tab.Navigator>
      {screens.map(({ name, screen, icon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={screen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
 );
};

export default BottomNavigation;