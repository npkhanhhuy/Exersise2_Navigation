import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator()
const MyBottomTab = () => {
  return (
    <Tab.Navigator
    activeColor="#f0edf6"
    inactiveColor="#3e2465"
    >
        <Tab.Screen name="Home" component={HomeScreen}
                    options={{
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                      }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
                        options={{
                            tabBarIcon: ({ color }) => (
                              <MaterialCommunityIcons name="account" color={color} size={26} />
                            ),
                          }}
        />
    </Tab.Navigator>
  )
}

export default MyBottomTab

const styles = StyleSheet.create({})