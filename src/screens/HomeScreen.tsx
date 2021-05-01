import * as React from 'react'
import { Text, View } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ip12promax from './ip12promax'
import ip6splus from './ip6splus'

const Tab = createBottomTabNavigator()
const HomeScreen: React.FC = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="12ProMax" 
        options={{ tabBarIcon: () => <Text>👻</Text> }}
        component={ip12promax} 
        />
        <Tab.Screen name="6sPlus" 
        options={{ tabBarIcon: () => <Text>💩</Text> }}
        component={ip6splus} 
        />
      </Tab.Navigator>
    )
  }

export default HomeScreen
