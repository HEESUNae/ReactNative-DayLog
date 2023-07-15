import React from 'react';

// lib
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

// components
import FeedsScreen from './FeedsScreen';
import CalenderScreen from './CalenderScreen';
import SearchScreen from './SearchScreen';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{showLabel: false, activeTintColor: '#009688'}}>
      <Tab.Screen
        name="Feeds"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="view-stream" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Calender"
        component={CalenderScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="event" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="search" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
