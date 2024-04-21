import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeScreen from '../screens/HomeScreen'
import ProfileScreen from '../screens/ProfileScreen'
import CustomDrawNavigation from '../compoments/CustomDrawNavigation'

const Drawer = createDrawerNavigator()
const MyDrawer = () => {
    return (
        <Drawer.Navigator
          drawerContent={(props)=> <CustomDrawNavigation {...props}/>}
        >
            <Drawer.Screen name="Home" component={HomeScreen}
            />
            <Drawer.Screen name="Profile" component={ProfileScreen}/>
        </Drawer.Navigator>
      )
}

export default MyDrawer

const styles = StyleSheet.create({})